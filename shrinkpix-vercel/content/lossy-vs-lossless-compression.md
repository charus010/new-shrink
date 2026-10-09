---
title: Lossy vs Lossless Image Compression: What's the Difference?
description: Understand how lossy and lossless compression work, when to use each and how to avoid quality loss.
category: Formats
author: ShrinkPix Editorial Team
date: 2026-10-06
---
Every time you shrink an image you make a trade between file size and fidelity. The two approaches to that trade are called lossy and lossless compression, and understanding them helps you pick the right settings instead of guessing. This guide explains how each one works, what you give up and how to choose for photos, logos, screenshots and archives.

## What compression actually does

An uncompressed image stores a colour value for every single pixel. A photo with twelve million pixels therefore needs tens of megabytes. Compression reduces that by finding patterns and redundancy. Large areas of similar colour, repeated shapes and predictable gradients can be described far more compactly than by listing each pixel. How aggressively an encoder simplifies those patterns is what separates lossless from lossy.

## How lossless compression works

Lossless methods rearrange and encode data so that the original can be rebuilt exactly, bit for bit. Think of writing the word aaaaaaaaaa as ten a's: shorter, yet nothing is lost. PNG uses this approach, as do lossless WebP and TIFF with compression. Because nothing is discarded, you can open and save a lossless file repeatedly without degradation.

The limit is that real photographs contain natural noise and countless tiny variations, so lossless files stay relatively large. Savings are good for flat graphics, often fifty percent or more, but modest for photos.

## How lossy compression works

Lossy methods permanently remove information that people are unlikely to notice. JPEG divides the picture into small blocks, converts them into frequencies and drops the faintest high-frequency detail. It also stores colour at lower resolution than brightness, because our eyes are more sensitive to brightness. The quality setting controls how much is removed.

At moderate settings the result looks the same to most viewers while being five to ten times smaller. At very low settings you see blocky patches, smeared edges and colour banding.

## Generation loss: the hidden risk

Lossy compression is not reversible. If you save a JPG, edit it and save again, each pass discards more detail and can add new artefacts. This is called generation loss. To avoid it, keep your original or a lossless master, make edits on that master and export a fresh compressed copy each time. Never recompress an already compressed file at a lower quality if you still have the source.

## When lossy is the right choice

Choose lossy for photographs, hero images, galleries, product shots and anything shown on screen where speed matters. A quality of 70 to 80 percent is a good starting point. Compare the original and compressed previews, then lower the setting until you just notice a difference and step back slightly. For websites, this is where most of your savings come from.

## When lossless is the right choice

Choose lossless for logos, icons, diagrams, interface screenshots, line art and anything with text or sharp edges, because lossy artefacts show clearly around them. Use it for working files and masters, for images you intend to edit again, and for archives you want to preserve. Lossless is also the safer pick when a client or printer requires exact reproduction.

## Near-lossless and smart options

Some tools sit between the two. PNG quantisation reduces the number of colours, shrinking graphics substantially with little visible change. Modern WebP and AVIF offer both modes and efficient lossy settings. Near-lossless modes make tiny adjustments that save space while keeping differences below the threshold of perception. These can be excellent for illustrations that are too detailed for plain lossless but too sharp for ordinary JPEG.

## How to judge quality properly

Do not rely on file size alone. View the compressed version at full size, look at edges, skies, faces and text, and compare it side by side with the original. Check it on a phone as well as a monitor. Numerical tools exist, but your eyes remain the best test for web use. If you notice nothing, the compression is working.

## A simple rule of thumb

Photograph for screen: lossy. Graphic, text or transparency: lossless. Master file or archive: lossless. Anything you will edit again: keep the lossless original and export lossy copies from it.

## Conclusion

Lossy and lossless are tools, not rivals. Lossy gives dramatic size cuts at the cost of permanent detail, while lossless guarantees perfect reproduction at a larger size. Use each where it fits, keep your originals safe, and test the result visually. With that habit you will publish lighter images without anyone noticing what was removed.

## Quick examples

A 5 MB holiday photo saved as a lossy JPG at 75 percent quality may become 600 KB and look the same on a phone. A company logo saved losslessly as PNG might be 18 KB and remain perfectly crisp, whereas a lossy version of the same logo could show fuzzy fringes around the letters. Use examples like these as a reminder to match the method to the content.
