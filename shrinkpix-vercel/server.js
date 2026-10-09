const express=require('express'),multer=require('multer'),sharp=require('sharp'),path=require('path'),nodemailer=require('nodemailer'),helmet=require('helmet'),compression=require('compression'),rateLimit=require('express-rate-limit');
const {render,articles,staticPages,SITE}=require('./views');
const app=express();
const MAX=4*1000*1000; // Vercel serverless request limit is ~4.5 MB
app.set('trust proxy',1);
app.use(helmet({contentSecurityPolicy:false}),compression(),express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public'),{maxAge:'7d'})); // on Vercel, /public is served by the CDN
const upload=multer({storage:multer.memoryStorage(),limits:{fileSize:MAX,files:1},
 fileFilter:(q,f,cb)=>/^image\/(jpeg|png|gif)$/.test(f.mimetype)?cb(null,true):cb(new Error('TYPE'))});
const EXT={'image/jpeg':'jpg','image/png':'png','image/gif':'gif'};

// Stateless: one image in, compressed image bytes out. Nothing is written to disk.
app.post('/api/compress',rateLimit({windowMs:60000,limit:60}),upload.single('image'),async(req,res)=>{
 const f=req.file;if(!f)return res.status(400).json({error:'No image received.'});
 const q=Math.min(90,Math.max(10,parseInt(req.body.quality)||70)),ext=EXT[f.mimetype];
 try{let p=sharp(f.buffer,{animated:ext==='gif'}).rotate();
  p=ext==='jpg'?p.jpeg({quality:q,mozjpeg:true}):ext==='png'?p.png({quality:q,palette:true,compressionLevel:9}):p.gif({effort:7});
  let buf=await p.toBuffer();if(buf.length>=f.size)buf=f.buffer; // never return a larger file
  res.set({'Content-Type':f.mimetype,'Cache-Control':'no-store','X-Original-Size':String(f.size),'X-Compressed-Size':String(buf.length)});
  res.send(buf);
 }catch(e){res.status(500).json({error:'Could not process this image. It may be corrupted.'});}});

app.get('/',(q,r)=>r.send(render('home',{})));
app.get('/blog',(q,r)=>r.send(render('blog',{})));
app.get('/blog/category/:c',(q,r)=>r.send(render('blog',{cat:q.params.c})));
app.get('/blog/:slug',(q,r,n)=>articles.find(a=>a.slug===q.params.slug)?r.send(render('article',{slug:q.params.slug})):n());
app.get('/contact',(q,r)=>r.send(render('contact',{sent:q.query.sent,err:q.query.err})));
app.post('/contact',rateLimit({windowMs:3600000,limit:5}),async(q,r)=>{
 const {name,email,message,website}=q.body;if(website)return r.redirect('/contact?sent=1'); // honeypot
 if(!name||!/^\S+@\S+\.\S+$/.test(email||'')||!message||message.length<10)return r.redirect('/contact?err=1');
 try{await nodemailer.createTransport({host:process.env.SMTP_HOST,port:+process.env.SMTP_PORT||587,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}})
  .sendMail({from:process.env.SMTP_USER,to:process.env.CONTACT_TO,replyTo:email,subject:'ShrinkPix contact: '+name,text:message});r.redirect('/contact?sent=1');}
 catch(e){console.error(e);r.redirect('/contact?err=1');}});
for(const k of Object.keys(staticPages))app.get('/'+k,(q,r)=>r.send(render(k,{})));
app.get('/sitemap.xml',(q,r)=>{const u=['','blog','contact',...Object.keys(staticPages),...articles.map(a=>'blog/'+a.slug)];
 r.type('xml').send(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${u.map(x=>`<url><loc>${SITE}/${x}</loc></url>`).join('')}</urlset>`);});
app.get('/robots.txt',(q,r)=>r.type('text').send(`User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml`));
app.use((e,q,r,n)=>{const m={TYPE:'Only JPG, JPEG, PNG and GIF files are supported.',LIMIT_FILE_SIZE:'This file is larger than 4 MB.',LIMIT_UNEXPECTED_FILE:'Upload one image per request.'}[e.code||e.message];
 r.status(m?400:500).json({error:m||'Something went wrong. Please try again.'});});
app.use((q,r)=>r.status(404).send(render('404',{})));

module.exports=app; // Vercel imports this
if(require.main===module)app.listen(process.env.PORT||3000,()=>console.log('ShrinkPix running on http://localhost:'+(process.env.PORT||3000)));
