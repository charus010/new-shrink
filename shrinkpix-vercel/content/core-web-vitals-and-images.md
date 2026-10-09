---
title: Core Web Vitals and Images: How to Fix LCP and Layout Shift
description: Learn how image size, format and loading strategy affect Core Web Vitals, and how to fix the most common problems.
category: Performance
author: ShrinkPix Editorial Team
date: 2026-10-05
---
Core Web Vitals are Google's measurements of how a page feels to real visitors: how quickly the main content appears, how stable the layout is and how fast the page responds. Images influence the first two directly. If your scores are poor, your pictures are the best place to look, and the fixes are usually straightforward.

## The three metrics in plain language

Largest Contentful Paint, or LCP, records how long it takes for the biggest visible element to render, often a hero photograph. A good score is 2.5 seconds or less. Cumulative Layout Shift, or CLS, measures unexpected movement as the page loads; a good score is 0.1 or less. Interaction to Next Paint, or INP, measures responsiveness to taps and clicks. Images rarely affect INP, but they affect LCP and CLS heavily.

## Why images hurt LCP

On most pages the largest element is an image. If that image is several megabytes, the browser needs time to download it before it can paint. Slow servers, missing compression, wrong formats and discovery delays all add to the wait. Because the hero image is at the top, visitors notice the delay immediately.

## Compress and resize the hero image

Start with the biggest win. Resize the hero to the width it displays at on large screens, rarely more than 1600 to 2000 pixels, then compress it. For a photograph, a quality of 70 to 80 percent typically cuts the file by more than half without visible loss. Aim for a hero under 200 KB. Check the before and after preview to confirm the result still looks crisp.

## Serve modern formats and responsive sizes

Lossy WebP is often a quarter to a third smaller than JPG at the same quality. Combine it with the srcset attribute so a phone receives a 600 pixel version instead of the 2000 pixel desktop file. This reduces bytes on exactly the devices with the slowest connections, which is where LCP problems usually appear.

## Do not lazy load the main image

Lazy loading is excellent for pictures lower on the page, but applied to the hero it delays the very element LCP measures. Leave the main image eager, and consider marking it as high priority with the fetchpriority attribute so the browser requests it early. Add a preload hint only if the image is referenced in a stylesheet or script and therefore discovered late.

## Why images cause layout shift

When an image has no declared dimensions, the browser does not know how much space to reserve. Text first appears, then jumps downward when the picture arrives. Visitors lose their place or tap the wrong button, and your CLS score suffers. Ads, embeds and late-loading fonts cause shifts too, but missing image dimensions are the most common and easiest to fix.

## Always declare width and height

Add width and height attributes that match the image's intrinsic size, then use CSS such as a maximum width of one hundred percent and automatic height. Modern browsers use these attributes to calculate the aspect ratio before the file loads, reserving the correct space. For background images or dynamic content, use the aspect-ratio property to reserve room.

## Use a content delivery network and caching

Even a perfectly optimised image is slow if it travels a long distance. A CDN stores copies near your visitors, and long cache lifetimes mean returning visitors do not download the file again. Set far-future cache headers for images and change the file name when you update them.

## Measure with real data

Lab tools such as Lighthouse give quick feedback, but Google ranks using field data collected from real users. Check the Core Web Vitals report in Search Console and the field section of PageSpeed Insights. Test on a mid-range phone with a throttled connection, because that is closer to what many visitors experience.

## A practical order of work

First, find the LCP element. Second, resize and compress it. Third, convert to a modern format and add responsive sizes. Fourth, make sure it is not lazy loaded. Fifth, add width and height to every image on the page. Finally, retest and compare.

## Conclusion

Healthy Core Web Vitals do not require advanced engineering. Smaller files, sensible formats, declared dimensions and thoughtful loading deliver most of the gain. Treat image optimisation as a routine part of publishing, and your pages will feel faster, rank better and keep visitors engaged.

## Common mistakes to watch for

Many sites unintentionally slow their own images. Typical examples include loading a slider with several full-size pictures at once, hiding images with CSS while the browser still downloads them, and using background images for the hero so the browser discovers them late. Another is placing a cookie banner or ad above the content without reserved space, which pushes everything down. Review these patterns when scores stay poor even after compressing.
