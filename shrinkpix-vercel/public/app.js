const $=s=>document.querySelector(s),kb=n=>n>1048576?(n/1048576).toFixed(2)+' MB':(n/1024).toFixed(1)+' KB';
const cc=$('#cc');try{if(!localStorage.getItem('consent'))cc.hidden=false;}catch(e){cc.hidden=false}
cc.onclick=e=>{const c=e.target.dataset.c;if(c==null)return;try{localStorage.setItem('consent',c)}catch(e){}cc.hidden=true;
 // Load the AdSense script here only when c==='1' (see README)
};
if($('#drop')){let files=[];const drop=$('#drop'),inp=$('#file'),msg=$('#msg'),go=$('#go');
 const OK=/\.(jpe?g|png|gif)$/i;
 function add(list){msg.textContent='';const good=[];for(const f of list){
  if(!OK.test(f.name)||!/^image\/(jpeg|png|gif)$/.test(f.type)){msg.textContent=`"${f.name}" is not supported. Use JPG, PNG or GIF.`;continue}
  if(f.size>4*1000*1000){msg.textContent=`"${f.name}" is larger than 4 MB.`;continue}good.push(f)}
  if(files.length+good.length>10){msg.textContent='Maximum 10 images per batch.';good.length=Math.max(0,10-files.length)}
  files=files.concat(good);go.disabled=!files.length;$('#res').innerHTML=files.map(f=>`<div class="item"><span>${f.name}</span><span>${kb(f.size)}</span></div>`).join('');$('#dl').hidden=true}
 $('#pick').onclick=()=>inp.click();inp.onchange=()=>{add([...inp.files]);inp.value=''};
 ['dragenter','dragover'].forEach(t=>drop.addEventListener(t,e=>{e.preventDefault();drop.classList.add('on')}));
 ['dragleave','drop'].forEach(t=>drop.addEventListener(t,e=>{e.preventDefault();drop.classList.remove('on')}));
 drop.addEventListener('drop',e=>add([...e.dataTransfer.files]));
 $('#q').oninput=e=>$('#qv').textContent=e.target.value+'%';
 const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
 let okList=[];
 go.onclick=async()=>{const bar=$('#bar'),q=$('#q').value,batch=files.slice();let done=0;
  bar.hidden=false;bar.firstChild.style.width='5%';go.disabled=true;msg.textContent='';
  const results=await Promise.all(batch.map(async f=>{try{
    const fd=new FormData();fd.append('image',f);fd.append('quality',q);
    const r=await fetch('/api/compress',{method:'POST',body:fd});
    if(!r.ok){let d={};try{d=await r.json()}catch(e){}throw new Error(d.error||'Upload failed (file may be too large).')}
    const blob=await r.blob();return {f,name:f.name,original:f.size,compressed:blob.size,blob,url:URL.createObjectURL(blob)};
   }catch(e){return {f,name:f.name,error:e.message||'Network error. Please try again.'}}
   finally{done++;bar.firstChild.style.width=(done/batch.length*100)+'%'}}));
  setTimeout(()=>bar.hidden=true,400);go.disabled=false;files=[];
  okList=results.filter(r=>!r.error);
  $('#res').innerHTML=results.map(r=>r.error
   ?`<div class="item"><div class="i"><span>${esc(r.name)}</span><span class="bad">${esc(r.error)}</span></div></div>`
   :`<div class="item"><div><small>Original</small><img src="${URL.createObjectURL(r.f)}" alt="Original"></div><div><small>Compressed</small><img src="${r.url}" alt="Compressed"></div><div class="i"><span>${esc(r.name)}</span><span>${kb(r.original)} → <b>${kb(r.compressed)}</b> <span class="save">−${Math.round((1-r.compressed/r.original)*100)}%</span></span><a class="btn" href="${r.url}" download="min-${esc(r.name)}">Download</a></div></div>`).join('');
  $('#dl').hidden=okList.length<2;};
 $('#zip').onclick=async e=>{e.preventDefault();const b=e.target;b.textContent='Preparing ZIP…';
  try{if(!window.JSZip)await new Promise((ok,no)=>{const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';s.onload=ok;s.onerror=no;document.head.appendChild(s)});
   const z=new JSZip(),seen={};okList.forEach(r=>{let n='min-'+r.name;if(seen[n]){const k=n.lastIndexOf('.');n=n.slice(0,k)+'-'+seen[n]+n.slice(k)}seen['min-'+r.name]=(seen['min-'+r.name]||0)+1;z.file(n,r.blob)});
   const blob=await z.generateAsync({type:'blob'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='shrinkpix-images.zip';a.click();
  }catch(err){msg.textContent='Could not create the ZIP. Please download images one by one.'}
  b.textContent='Download all (ZIP)';};
}
