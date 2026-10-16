# Vietnam 2026 · KLU PhD Field Manual

Mobile web app version of the field manual for the KLU PhD Workshop, Ho Chi Minh City, 25–30 October 2026.

- Cover → **Start the journey** → contents → tap a section to read it
- Red **SOS** button on every page: emergency numbers (113/114/115), contact the group supporter, share GPS location, and a "show to driver" address card in Vietnamese
- Reflection journal saved on the phone (localStorage), exportable
- Works offline after the first visit; can be added to the home screen

## Editing content

All text and settings live in [`content.js`](content.js); there is no build step.

- `CONFIG.supportPhone`: the phone number of the group supporter (international format, e.g. `+84901234567`). The call/WhatsApp/Zalo buttons stay hidden until it is set.
- `CONFIG.places`: addresses for the driver card (fill in the hotel once confirmed).
- `sections[].blocks`: the content of each section. For the daily programme, add items to `slots`:
  `{ time: "09:00–10:30", what: "Opening lecture", where: "HCMUT, Building A4" }`

Phones load the latest version whenever they are online (the service worker is network-first) and fall back to the cached copy offline.

## Local preview

```
npx serve .
```

## Deployment

Static files served by GitHub Pages from the `main` branch root.
