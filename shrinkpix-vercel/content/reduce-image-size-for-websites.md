---
title: How to Reduce Image Size for Websites
description: A practical workflow for shrinking images without hurting quality, so your pages load faster.
category: Performance
author: ShrinkPix Editorial Team
date: 2026-10-01
---
Images usually make up more than half of a typical web page's weight. Cutting them down is the fastest way to improve load time, and it takes less effort than most people expect.

## Start with the right dimensions

Before touching quality settings, resize the image to the largest size it will actually be displayed. A 4000-pixel-wide photo shown in an 800-pixel column forces every visitor to download pixels they never see. Check your layout's maximum width, double it for high-density screens, and resize to that.

## Choose the right format

Use JPEG for photographs, PNG for screenshots and graphics that need transparency, and GIF only for simple animation. Picking the wrong format can double a file's size before compression even begins.

## Compress with a sensible quality level

For most photos a quality setting between 70 and 80 percent is visually indistinguishable from the original. Compress, compare the result side by side, and lower the quality until you can just notice a difference, then step back one notch.

## Test and keep originals

Always keep your uncompressed originals, because lossy compression cannot be reversed. Then measure the result with a tool such as PageSpeed Insights to confirm the improvement.

## Use responsive images

Visitors arrive on phones, tablets, laptops and large monitors, yet many sites send the same giant file to all of them. The srcset attribute lets you list several versions of an image at different widths, and the browser picks the most suitable one. A phone with a 390 pixel wide screen then downloads a small file, while a desktop gets the larger one. This simple change often saves more bandwidth than any quality tweak, because the heaviest downloads happen on the slowest connections.

## Lazy load images below the fold

There is no reason to download a picture at the bottom of a long article before the visitor scrolls anywhere near it. Adding the loading attribute with the value lazy tells the browser to postpone those images until they are close to the screen. Keep the main image at the top of the page loading normally, since delaying it would hurt the very metric you are trying to improve, which is how quickly the main content appears.

## Remove unnecessary metadata

Photos from cameras and phones carry extra information such as the camera model, date, editing history and sometimes the location where the shot was taken. This hidden data can add tens of kilobytes to each file and may reveal details you would rather not publish. Most compressors strip it automatically, and it is good practice to confirm that your final files are clean before putting them online.

## Cache and deliver images efficiently

Once an image is optimised, make sure it is only downloaded once. Set long cache lifetimes so returning visitors reuse the file stored in their browser, and change the file name whenever you replace the image. A content delivery network can also serve files from a server near each visitor, reducing delay. Together with smaller files, these steps make repeat visits feel almost instant.

## Common mistakes to avoid

The most frequent error is uploading the original camera file and letting the browser shrink it with CSS. The picture looks small on the page, yet the visitor still downloads every byte. Another mistake is compressing an already compressed file over and over, which gradually damages quality. Others include using PNG for photographs, forgetting width and height attributes so the layout jumps, and using vague file names that give search engines no clues.

## A simple routine you can repeat

Make the process part of publishing. Decide on a maximum width for your layout, resize every new picture to it, compress it at around 75 percent quality, preview the result, give it a descriptive file name and upload it. After the page is live, test it with a speed tool and look at the image recommendations. Once this becomes habit it takes about a minute per image, and your site stays fast as it grows.

## Conclusion

Reducing image size is not a single trick but a short sequence of sensible steps: right dimensions, right format, sensible compression, responsive delivery and smart loading. Apply them consistently and your pages will load faster, cost less to host and give visitors a smoother experience on every device.
