# Vietnam 2026 · KLU PhD Field Manual

Mobile web app version of the field manual for the KLU PhD Workshop, Ho Chi Minh City, 25–30 October 2026.

- Cover → **Start the journey** → contents → tap a section to read it
- Red **SOS** button on every page: copy GPS location and open the group WhatsApp, emergency numbers (113/114/115), and a "show to driver" address card in Vietnamese
- Synthesised tap / page / SOS sounds (Web Audio, no audio files) with a mute toggle
- Reflection journal saved on the phone (localStorage), exportable
- Works offline after the first visit; can be added to the home screen

## Editing content

All text and settings live in [`content.js`](content.js); there is no build step.

- `CONFIG.whatsappGroupUrl`: the group chat the SOS button opens (participants copy their location, then paste it there).
- `CONFIG.places`: addresses for the driver card (fill in the hotel once confirmed).
- `sections[].blocks`: the content of each section. For the daily programme, add items to `slots`:
  `{ time: "09:00–10:30", what: "Opening lecture", where: "HCMUT, Building A4" }`

Phones load the latest version whenever they are online (the service worker is network-first) and fall back to the cached copy offline.

## Local preview

```
npx serve .
```

## Deployment

Static files served by GitHub Pages from the `main` branch root of [Chloevtran/klu-phd-manual](https://github.com/Chloevtran/klu-phd-manual): https://chloevtran.github.io/klu-phd-manual/
