---
title: How to Compress PNG Images While Keeping Transparency
description: Shrink PNG files safely with palette reduction, resizing and smart tools, without ruining transparent backgrounds.
category: Formats
author: ShrinkPix Editorial Team
date: 2026-10-08
---
PNG is the go-to format for logos, icons and cut-out graphics because it supports transparency and stays perfectly sharp. The downside is that PNG files can become surprisingly large. The good news is that you can usually shrink them dramatically without losing the see-through background. This article explains why PNGs are heavy and the safest ways to slim them down.

## Why PNG files are large

PNG uses lossless compression, so it stores every pixel faithfully. A detailed image with gradients, shadows and millions of colours produces a big file. Transparency adds an extra channel, called alpha, that records how see-through each pixel is, which increases the data further. A full-colour PNG with soft shadows can be several times larger than a similar JPG.

## Step one: reduce the dimensions

The easiest saving costs no quality at all. If a logo displays at 300 pixels wide, exporting it at 3000 pixels is pointless. Resize to roughly double the display width for sharp results on high-density screens. File size grows roughly with the number of pixels, so halving both width and height can cut it to about a quarter.

## Step two: use palette reduction

Many graphics do not need millions of colours. Palette reduction, also called quantisation, limits an image to a smaller set of colours, commonly 256, and stores each pixel as an index. This is still PNG and still supports transparency, yet the file can shrink by sixty to eighty percent. For flat illustrations, icons and screenshots the difference is usually invisible.

Photographs and images with delicate gradients are more sensitive. Look carefully for banding, which appears as visible steps in smooth areas, and raise the quality setting if you see it.

## Step three: run it through a compressor

A compressor applies palette reduction and better entropy coding in one pass. Upload your PNG to ShrinkPix, choose a quality, and compare the before and after previews. Transparent areas are kept, so you can check the edges against a coloured background. If the result looks rough, increase the quality and try again from the original file.

## Check soft edges and shadows

Transparency problems usually show up around anti-aliased edges and drop shadows, where pixels are partly transparent. Heavy colour reduction can cause a slight halo or jagged outline. Zoom in at full size on a dark and a light background before publishing. If the edge looks wrong, use a higher quality or keep that particular image in full colour.

## Remove what you do not need

Trim empty transparent margins around a graphic by cropping to the visible content, which reduces both pixels and file size. Also remove embedded metadata and unused colour profiles where your tool allows it. These are small savings individually but add up across many files.

## When PNG is the wrong choice

Photographs saved as PNG are almost always better as JPG, unless they need transparency. If you require a photo with a transparent background, consider WebP, which supports transparency with much smaller files, provided your audience's browsers can display it. For simple logos and icons, SVG is often the lightest and sharpest solution of all.

## Avoid repeated recompression

Quantising an already quantised PNG again can compound small errors. Always compress from your original, uncompressed export and save the result under a new name. Keep the master so that you can regenerate any size later.

## Test on real backgrounds

Place the compressed image on the actual page or on both light and dark test backgrounds. Check it on a phone and a desktop monitor. What looks perfect on white may reveal fringes on black.

## Quick summary

Resize first, reduce the palette second, compress third and inspect the edges last. With those steps most PNGs shrink by half or more and still keep a perfectly clean transparent background. Keep your originals, test on real backgrounds, and choose another format when PNG is not the best fit.

## Common questions

Will compression remove my transparent background? No. A proper PNG compressor keeps the alpha channel, so see-through areas stay see-through. Can I compress a PNG more than once? You can, but each pass from an already reduced file risks extra artefacts, so start from the original whenever possible. Why did my PNG get larger after saving? Some editors add metadata or use weak compression settings, which can bloat the file; running it through a compressor usually fixes that. How small can a PNG realistically get? Simple icons often fall below 10 KB, while detailed graphics with shadows might settle between 50 and 150 KB after careful optimisation.

## Practical example

Imagine a product cut-out exported at 2400 by 2400 pixels that weighs 3.2 MB. Your page displays it at 600 pixels. Resize it to 1200 by 1200 and the file drops to roughly 900 KB. Reducing the palette and compressing brings it near 250 KB, with the transparent edges still clean against any background colour. That is a saving of more than ninety percent without a visible difference at the size the visitor actually sees.
