## liamp.uk

My portfolio, [liamp.uk](http://liamp.uk)

## Running

This project is built using Astro, with interactive React islands. The initial load is very small, only downloading server rendered html, css and an optimised font. A tiny js script loads the heavier React code async, interactive elements are hydrated after load.

Run with `npm run dev`. Serve on your local network for mobile devices with `npm run serve`. Preview the production build with `npm run build | npm run preview`.

Window animation rendered with three.js and drei, and configured in development with Leva.

## TODO

- [ ] Add feed view
- [ ] Move call/email buttons to footer
- [ ] Add animation for call/email buttons
- [ ] Add footer visual element (l system plant?)
- [ ] Replace unicode characters with svgs
- [ ] Fix small layout issues
