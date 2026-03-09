## Portfolio

My portfolio, [liamp.uk](http://liamp.uk)

![Screenshot 2026-03-05 at 19 12 01](https://github.com/user-attachments/assets/3591aff6-20df-4882-98a2-b7a6598b24ec)

## Running

This project is built using Astro, with interactive React islands. The initial load is very small, only downloading server rendered html, css and an optimised font. A tiny js script loads the heavier React code async, interactive elements are hydrated after load.

Run with `npm run dev`. Serve on your local network for mobile devices with `npm run serve`. Preview the production build with `npm run build | npm run preview`.

Window animation rendered with three.js and drei, and configured in development with Leva.

## TODO

- [x] Add feed view
- [x] Add feed toggle
- [x] Animate between feed/about
- [x] Move call/email buttons to footer
- [x] Add animation for call/email buttons
- [ ] Add footer visual element (l system plant?)
- [x] Replace unicode characters with svgs
- [x] Fix small layout issues
- [x] Add falling leaves on scroll
