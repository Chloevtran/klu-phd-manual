(function () {
  "use strict";

  // Shown in the page footer, so testers can tell which version a phone runs.
  const VERSION = "v7";
  const NUM_WORDS = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];
  const M = window.MANUAL;
  const C = window.CONFIG;
  const app = document.getElementById("app");
  const sections = M.sections;

  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pad2 = (n) => String(n).padStart(2, "0");
  const telHref = (n) => "tel:" + String(n).replace(/[^\d+]/g, "");

  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } },
  };

  function toast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toast._t);
    toast._t = setTimeout(() => (t.hidden = true), 2200);
  }

  async function copy(text) {
    try { await navigator.clipboard.writeText(text); toast("Copied"); }
    catch (e) { window.prompt("Copy this text:", text); }
  }

  /* ---------------- Shared fragments ---------------- */
  // Escaped text for uppercase labels, keeping "PhD" with a lowercase h.
  const caps = (s) => esc(s).replace(/PhD/g, '<span class="nocaps">PhD</span>');

  const logos = () => `
    <div class="logos">
      <img class="logos__klu" src="assets/logo-klu.png" alt="Kühne Logistics University · Leading with an Operations Mindset" width="718" height="142">
      <span class="logos__ll"><img src="assets/logo-learn-logistics.png" alt="Learn Logistics by Kühne Foundation" width="175" height="65"></span>
    </div>`;

  const sosBtn = () => `
    <button class="sos-pill" type="button" data-sos aria-haspopup="dialog" aria-controls="sos">
      <span class="sos-pill__ring" aria-hidden="true"></span>SOS
    </button>`;

  const topbar = (left, right) => `
    <header class="topbar">
      ${left}
      <span class="topbar__label">${right}</span>
      ${soundBtn()}
      ${sosBtn()}
    </header>`;

  /* ---------------- Views ---------------- */
  function viewCover() {
    const c = M.cover;
    return `
      <section class="cover view">
        <div class="cover__top">${logos()}${sosBtn()}</div>
        <div class="cover__main">
          <p class="kicker kicker--blue">${caps(c.kicker)}</p>
          <h1 class="cover__title">${esc(c.title)}<br>${esc(c.year)}</h1>
          <p class="cover__sub">${esc(c.subtitle)}</p>
          <p class="kicker kicker--blue cover__tag">${esc(c.tagline)}</p>
          <button class="btn-primary cover__cta" type="button" data-go="#/contents" data-start>Start the journey <span class="arrow">→</span></button>
        </div>
        ${c.place && c.place.length ? `<div class="cover__place">${c.place.map(esc).join("<br>")}</div>` : ""}
        <hr class="cover__line">
        <div class="cover__foot">
          <div class="cover__host"><strong>${esc(c.host)}</strong>${[].concat(c.partner).map((l) => `<span>${esc(l)}</span>`).join("")}</div>
          <div class="cover__date">${esc(c.dates)}</div>
        </div>
      </section>`;
  }

  function viewContents() {
    const rows = sections
      .map(
        (s) => `
        <li><a href="#/s/${s.id}">
          <span class="toc__num">${s.num}.</span>
          <span><span class="toc__title">${esc(s.title)}</span><span class="toc__hint">${esc(s.hint)}</span></span>
          <span class="toc__chev" aria-hidden="true">›</span>
        </a></li>`
      )
      .join("");
    return `
      <div class="view">
        ${topbar(`<button class="topbar__btn" data-go="#/"><span class="chev">‹</span> Cover</button>`, caps("Vietnam 2026 · PhD Field Manual"))}
        <div class="page">
          <p class="kicker">Contents</p>
          <h1 class="page__title">In this manual.</h1>
          <hr class="rule-red">
          <ul class="toc">${rows}</ul>
          ${M.imprint ? `<details class="imprint">
            <summary><span class="kicker">Imprint</span></summary>
            ${renderBlocks(M.imprint)}
          </details>` : ""}
        </div>
      </div>`;
  }

  function viewSection(id) {
    const i = sections.findIndex((s) => s.id === id);
    if (i < 0) return viewContents();
    const s = sections[i];
    const prev = sections[i - 1];
    const next = sections[i + 1];
    return `
      <div class="view">
        ${topbar(`<button class="topbar__btn" data-go="#/contents"><span class="chev">‹</span> Contents</button>`, `${s.num} · ${esc(s.hint)}`)}
        <section class="hero">
          <p class="kicker">Section ${NUM_WORDS[i] || s.num}</p>
          <p class="hero__num">${s.num}</p>
          <h1 class="hero__title">${esc(s.title)}</h1>
          <hr class="rule-red">
          <p class="hero__intro">${esc(s.intro)}</p>
        </section>
        <article class="content">${renderBlocks(s.blocks)}</article>
        <nav class="pager" aria-label="Section navigation">
          ${prev ? `<a href="#/s/${prev.id}"><span class="lab">‹ Previous</span><span class="ttl">${esc(prev.title)}</span></a>` : `<a href="#/contents"><span class="lab">‹ Back</span><span class="ttl">Contents</span></a>`}
          ${next ? `<a class="next" href="#/s/${next.id}"><span class="lab">Next ›</span><span class="ttl">${esc(next.title)}</span></a>` : `<a class="next" href="#/contents"><span class="lab">Done ›</span><span class="ttl">Contents</span></a>`}
        </nav>
        <footer class="footer"><span>KLU <span class="nocaps">PhD</span> · Vietnam 2026 · ${VERSION}</span><span>— ${s.num} —</span></footer>
      </div>`;
  }

  /* ---------------- Blocks ---------------- */
  const list = (items) => `<ul class="bul">${items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;

  const B = {
    kicker: (b) => `<p class="kicker b-kicker">${caps(b.text)}</p>`,
    title: (b) => `<h2 class="b-title">${esc(b.text)}</h2>`,
    lead: (b) => `<p class="b-lead">${esc(b.text)}</p>`,
    p: (b) => `<p class="b-p">${esc(b.text)}</p>`,
    h: (b) => `<p class="h">${esc(b.text)}</p>`,
    note: (b) => `<p class="b-note">${esc(b.text)}</p>`,
    list: (b) => list(b.items),
    notice: (b) => `<div class="notice">${esc(b.text)}</div>`,
    rows: (b) =>
      `<div class="rows">${b.items.map((r) => `<div class="row"><p class="row__k">${esc(r.k)}</p><p class="row__v">${esc(r.v)}</p></div>`).join("")}</div>`,
    stats: (b) =>
      `<div class="stats">${b.items
        .map((x) => `<div class="stat"><div class="stat__n">${esc(x.n)}</div><div class="stat__l">${esc(x.l)}</div>${x.d ? `<div class="stat__d">${esc(x.d)}</div>` : ""}</div>`)
        .join("")}</div>`,
    cards: (b) =>
      `<div class="cards">${b.items
        .map(
          (c) => `<div class="card">
            ${c.kicker ? `<p class="kicker">${esc(c.kicker)}</p>` : ""}
            ${c.title ? `<h3 class="card__title">${esc(c.title)}</h3>` : ""}
            ${c.sub ? `<p class="card__sub">${esc(c.sub)}</p>` : ""}
            ${c.body ? `<p class="card__body">${esc(c.body)}</p>` : ""}
            ${c.facts ? c.facts.map(([k, v]) => `<p class="card__fact"><b>${esc(k)}.</b> ${esc(v)}</p>`).join("") : ""}
            ${c.list ? list(c.list) : ""}
          </div>`
        )
        .join("")}</div>`,
    callout: (b) => `<div class="callout"><p class="kicker">${esc(b.label)}</p><p>${esc(b.text)}</p></div>`,
    quote: (b) => `
      <div class="quote">
        <p class="kicker">${esc(b.label)}</p>
        ${b.text ? `<p class="quote__text">“${esc(b.text)}”</p>` : ""}
        <p class="quote__by"><strong>${esc(b.by)}</strong> <span>· ${esc(b.role)}</span></p>
      </div>`,
    table: (b) => `
      <div class="tbl-wrap"><table>
        <thead><tr>${b.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
        <tbody>${b.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table></div>
      ${b.note ? `<p class="b-note">${esc(b.note)}</p>` : ""}`,
    accordion: (b) =>
      `<div class="acc">${b.items
        .map(
          (x, i) => `<details${i === 0 ? " open" : ""}>
            <summary><span><span class="kicker">${esc(x.kicker)}</span><span class="ttl">${esc(x.title)}</span>${x.sub ? `<span class="sub">${esc(x.sub)}</span>` : ""}</span><span class="pm" aria-hidden="true">+</span></summary>
            <div class="acc__body">${renderBlocks(x.blocks)}</div>
          </details>`
        )
        .join("")}</div>`,
    days: (b) => {
      const slot = (s) => `
        <div class="slot${s.minor ? " slot--minor" : ""}${s.strong ? " slot--strong" : ""}">
          <div class="slot__time">${esc(s.time)}${s.optional ? ` <span class="slot__opt">Optional</span>` : ""}</div>
          <div class="slot__what">${esc(s.what)}${s.who ? ` <span class="slot__who">· ${esc(s.who)}</span>` : ""}</div>
          ${s.note ? `<div class="slot__note${s.noteStrong ? " slot__note--strong" : ""}">${esc(s.note)}</div>` : ""}
          ${s.where ? `<div class="slot__where">📍 ${esc(s.where)}</div>` : ""}
        </div>`;
      const items = b.items.map((d) => {
        const dress = d.dress
          ? `<div class="dress"><span class="dress__tag">Dress code · ${esc(d.dress)}</span>${d.dressNote ? `<span class="dress__note">${esc(d.dressNote)}</span>` : ""}</div>`
          : "";
        const slots = d.slots && d.slots.length
          ? `<div class="slots">${d.slots.map(slot).join("")}</div>`
          : `<p class="tbc">Detailed schedule to be confirmed.</p>`;
        const objective = d.objective
          ? `<div class="callout callout--soft"><p class="kicker">Learning objective</p><p class="callout__title">${esc(d.objective.title)}</p><p class="callout__text">${esc(d.objective.text)}</p></div>`
          : "";
        const observe = d.observe ? `<p class="h">What to observe</p>${list(d.observe)}` : "";
        const lens = d.lens ? `<p class="h">Research lens</p><p class="b-p">${esc(d.lens)}</p>` : "";
        const refl = d.reflection
          ? `<div class="callout callout--reflect"><p class="kicker">Reflection · end of ${esc(d.day.toLowerCase())}</p><p>“${esc(d.reflection)}”</p></div>`
          : "";
        return { kicker: `${d.day} · ${d.date}`, title: d.focus, html: dress + slots + objective + observe + lens + refl };
      });
      return `<div class="acc">${items
        .map(
          (x, i) => `<details${i === todayIndex(b.items) ? " open" : ""}>
            <summary><span><span class="kicker">${esc(x.kicker)}</span><span class="ttl">${esc(x.title)}</span>${x.sub ? `<span class="sub">${esc(x.sub)}</span>` : ""}</span><span class="pm" aria-hidden="true">+</span></summary>
            <div class="acc__body">${x.html}</div>
          </details>`
        )
        .join("")}</div>`;
    },
    journal: (b) => `<div class="journal" data-journal>${journalHTML(b, journalDay(b))}</div>`,
    contacts: (b) =>
      `<div class="contacts">${b.items
        .map(
          (c) => `<div class="contact">
            <div>
              <div class="contact__label">${esc(c.label)}</div>
              <div class="contact__name">${esc(c.name)}</div>
              <div class="contact__detail">${esc(c.detail)}${c.email ? ` · <a href="mailto:${esc(c.email)}">${esc(c.email)}</a>` : ""}</div>
            </div>
            ${c.tel ? `<a class="call" href="${telHref(c.tel)}">Call</a>` : ""}
          </div>`
        )
        .join("")}</div>`,
    sosbanner: () => `
      <button class="sosbanner" type="button" data-sos>
        <span class="sosbanner__dot">SOS</span>
        <span><strong>Lost or need help?</strong><span>Tap here, or the red SOS button on any page, to send your location to the group WhatsApp, call emergency services, or show an address to a driver.</span></span>
      </button>`,
    closing: (b) => `<div class="closing"><p>${esc(b.text)}</p><p>${esc(b.sub)}</p></div>`,
  };

  function renderBlocks(blocks) {
    return (blocks || []).map((b) => (B[b.t] ? B[b.t](b) : "")).join("");
  }

  // Open the accordion for today's programme day (1st day otherwise).
  function todayIndex(days) {
    const start = new Date(2026, 9, 25); // 25 Oct 2026
    const diff = Math.floor((new Date().setHours(0, 0, 0, 0) - start) / 864e5);
    return diff >= 0 && diff < days.length ? diff : 0;
  }

  /* ---------------- Journal ---------------- */
  const JKEY = "klu-phd-journal-2026";
  function journalDay(b) {
    const i = todayIndex(b.days);
    return store.get(JKEY + ":day", i);
  }
  function journalHTML(b, day) {
    const data = store.get(JKEY, {});
    const entry = data[day] || {};
    const tabs = b.days
      .map((d, i) => {
        const has = data[i] && Object.values(data[i]).some((v) => v && v.trim());
        return `<button type="button" role="tab" class="j-tab${has ? " has" : ""}" aria-selected="${i === day}" data-jday="${i}">${esc(d)}</button>`;
      })
      .join("");
    const qs = b.prompts
      .map(
        (p, i) => `<div class="j-q">
          <label for="jq${i}"><b>${pad2(i + 1)}</b>${esc(p)}</label>
          <textarea id="jq${i}" data-jq="${i}" placeholder="Write a few lines…">${esc(entry[i] || "")}</textarea>
        </div>`
      )
      .join("");
    return `
      <div class="j-tabs" role="tablist" aria-label="Day">${tabs}</div>
      ${qs}
      <div class="j-meta"><span data-jstatus>Saved automatically on this device.</span><button class="btn-ghost" type="button" data-jexport>Export all</button></div>`;
  }

  function journalBlock() {
    for (const s of sections) for (const b of s.blocks) if (b.t === "journal") return b;
  }

  function exportJournal() {
    const b = journalBlock();
    const data = store.get(JKEY, {});
    let out = "KLU PhD Workshop 2026 — Reflection Journal\n";
    b.days.forEach((d, i) => {
      const e = data[i];
      if (!e || !Object.values(e).some((v) => v && v.trim())) return;
      out += `\n=== ${d} October ===\n`;
      b.prompts.forEach((p, q) => { if (e[q] && e[q].trim()) out += `\n${q + 1}. ${p}\n${e[q].trim()}\n`; });
    });
    if (navigator.share) navigator.share({ title: "Reflection Journal", text: out }).catch(() => {});
    else copy(out);
  }

  /* ---------------- Sound ---------------- */
  // Every sound is synthesised with the Web Audio API (no audio files).
  // Browsers only allow audio after a user gesture, so the context is created
  // lazily on the first tap.
  const MUTE_KEY = "klu-manual:muted";
  let muted = store.get(MUTE_KEY, false);
  let audio = null;

  function ctx(create) {
    if (muted) return null;
    if (!audio) {
      if (!create) return null;
      const Ctor = window.AudioContext || window.webkitAudioContext;
      if (!Ctor) return null;
      audio = new Ctor();
    }
    if (audio.state === "suspended") audio.resume();
    return audio;
  }

  function tone({ frequency, at = 0, duration = 0.12, type = "sine", volume = 0.18, slideTo }) {
    const c = ctx(true);
    if (!c) return;
    const start = c.currentTime + at;
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, start);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, start + duration);
    // Short attack and exponential release avoid audible clicks.
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    osc.connect(gain).connect(c.destination);
    osc.start(start);
    osc.stop(start + duration + 0.02);
  }

  const sounds = {
    /** Soft tick for taps. */
    tap: () => tone({ frequency: 1250, duration: 0.05, type: "triangle", volume: 0.08 }),
    /** Page change — only once audio is unlocked, never on first load. */
    whoosh: () => ctx(false) && tone({ frequency: 520, slideTo: 260, duration: 0.18, volume: 0.06 }),
    /** Start the journey — a rising arpeggio. */
    start: () =>
      [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => tone({ frequency: f, at: i * 0.09, duration: 0.26, type: "triangle", volume: 0.14 })),
    /** SOS opened — two-tone alert. */
    alert: () => {
      [0, 0.32].forEach((at) => {
        tone({ frequency: 988, at, duration: 0.14, type: "square", volume: 0.07 });
        tone({ frequency: 740, at: at + 0.15, duration: 0.14, type: "square", volume: 0.07 });
      });
    },
    /** Location copied. */
    confirm: () => {
      tone({ frequency: 660, duration: 0.1, type: "square", volume: 0.07 });
      tone({ frequency: 990, at: 0.09, duration: 0.16, type: "square", volume: 0.07 });
    },
    /** Something went wrong. */
    error: () => tone({ frequency: 330, slideTo: 220, duration: 0.3, type: "sawtooth", volume: 0.06 }),
  };

  const soundBtn = () =>
    `<button class="sound-btn" type="button" data-mute aria-pressed="${muted}" aria-label="${muted ? "Turn sound on" : "Turn sound off"}">${muted ? "🔇" : "🔊"}</button>`;

  function toggleMute() {
    muted = !muted;
    store.set(MUTE_KEY, muted);
    document.querySelectorAll("[data-mute]").forEach((b) => (b.outerHTML = soundBtn()));
    if (!muted) sounds.tap();
  }

  /* ---------------- SOS ---------------- */
  // Lost or in trouble: copy your location, then open the group's WhatsApp
  // chat and paste it there, so the organisers can see where you are.
  const sos = document.getElementById("sos");
  const sosBody = document.getElementById("sos-body");
  const NAME_KEY = "klu-manual:name";

  function sosHTML() {
    const places = C.places.filter((p) => p.address);
    return `
      <p class="sos-copy">Lost, separated from the group, or anything else — message the group and the KLU team will help.</p>

      <ol class="sos-steps">
        <li>
          <label class="sos-name"><span>Your name</span>
            <input type="text" data-sosname autocomplete="name" placeholder="So the team knows who you are" value="${esc(store.get(NAME_KEY, ""))}">
          </label>
        </li>
        <li>
          <button class="act act--red full step" type="button" data-loc><b>1</b> Copy my location</button>
          <div data-locout></div>
        </li>
        <li>
          <a class="act act--wa full step" href="${esc(groupAppUrl())}" data-group><b>2</b> Open the WhatsApp group</a>
        </li>
      </ol>
      <p class="sos-note">Then paste your location into the chat.
        WhatsApp didn't open? <a href="${esc(C.whatsappGroupUrl)}" target="_blank" rel="noopener noreferrer">Open the group invite page</a>.</p>
      ${C.coordinator ? `<a class="act full sos-call" href="${telHref(C.coordinator.phone)}">📞 Call ${esc(C.coordinator.role)} · ${esc(C.coordinator.name)}</a>` : ""}

      <div>
        <p class="kicker">Emergency · call directly</p>
        <div class="sos-grid">
          <a class="sos-num" href="tel:115"><b>115</b><span>Ambulance</span></a>
          <a class="sos-num sos-num--alt" href="tel:113"><b>113</b><span>Police</span></a>
          <a class="sos-num sos-num--alt" href="tel:114"><b>114</b><span>Fire</span></a>
        </div>
      </div>

      ${places.length ? `<div class="sos-block">
        <p class="kicker">Taking a taxi?</p>
        <h3>Show address to driver</h3>
        <p>Opens a large card in Vietnamese.</p>
        <div class="driver-pick">${places.map((p) => `<button type="button" data-driver="${C.places.indexOf(p)}">${esc(p.label)}</button>`).join("")}</div>
      </div>` : ""}`;
  }

  // iPhone browsers open chat.whatsapp.com links as a web page instead of the
  // app, so the main button uses WhatsApp's own scheme to go straight into the
  // group. The https invite stays as a fallback link under the button.
  function groupAppUrl() {
    const m = /chat\.whatsapp\.com\/(?:invite\/)?([A-Za-z0-9]+)/.exec(C.whatsappGroupUrl);
    return m ? `whatsapp://chat?code=${m[1]}` : C.whatsappGroupUrl;
  }

  /** One fresh GPS fix, just for this message. */
  const currentPosition = () =>
    new Promise((resolve, reject) => {
      if (!("geolocation" in navigator)) return reject(new Error("unsupported"));
      navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true, maximumAge: 30000, timeout: 15000 });
    });

  async function copyLocation(btn) {
    const out = sosBody.querySelector("[data-locout]");
    const label = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = "<b>1</b> Getting your location…";
    try {
      const { coords } = await currentPosition();
      const who = store.get(NAME_KEY, "").trim() || "A participant";
      const message = `🆘 ${who} (KLU PhD Workshop) needs help. I'm here: https://maps.google.com/?q=${coords.latitude.toFixed(6)},${coords.longitude.toFixed(6)}`;
      try {
        await navigator.clipboard.writeText(message);
        out.innerHTML = `<p class="sos-ok">✓ Location copied — now open the group and paste it.</p>`;
      } catch (e) {
        // Some browsers block copying after the GPS wait: let them copy by hand.
        out.innerHTML = `<p class="sos-ok">Long-press to copy, then paste it into the group:</p><textarea class="sos-msg" readonly>${esc(message)}</textarea>`;
        out.querySelector("textarea").select();
      }
      sounds.confirm();
    } catch (err) {
      sounds.error();
      const denied = err && err.code === 1;
      out.innerHTML = `<p class="sos-err">${denied ? "Location is off" : "Couldn't get your location"} — describe where you are in the group instead.</p>`;
    } finally {
      btn.disabled = false;
      btn.innerHTML = label;
    }
  }

  function showDriver(i) {
    const p = C.places[i];
    const el = document.createElement("div");
    el.className = "driver";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");
    el.innerHTML = `
      <button class="icon-btn driver__close" type="button" aria-label="Close">✕</button>
      <div class="driver__body">
        <p class="driver__ask">Xin vui lòng đưa tôi đến địa chỉ này:</p>
        <p class="driver__name">${esc(p.name)}</p>
        <p class="driver__addr">${esc(p.address)}</p>
        <p class="driver__en">Please take me to this address. · ${esc(p.label)}</p>
      </div>`;
    el.querySelector("button").onclick = () => el.remove();
    document.body.appendChild(el);
  }

  function openSOS() {
    sosBody.innerHTML = sosHTML();
    sos.hidden = false;
    document.body.style.overflow = "hidden";
    sos.querySelector(".icon-btn").focus();
  }
  function closeSOS() {
    sos.hidden = true;
    document.body.style.overflow = "";
  }

  /* ---------------- Events ---------------- */

  // A soft tick on every tap of a button or link, unless it has its own sound.
  document.addEventListener(
    "click",
    (e) => {
      const el = e.target.closest("button, a, summary");
      if (!el || el.matches("[data-sos],[data-loc],[data-start],[data-mute]")) return;
      sounds.tap();
    },
    true
  );

  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-go],[data-sos],[data-close],[data-loc],[data-group],[data-driver],[data-jday],[data-jexport],[data-mute]");
    if (!t) return;
    if (t.dataset.go != null) {
      if (t.hasAttribute("data-start")) sounds.start();
      location.hash = t.dataset.go;
      return;
    }
    if (t.hasAttribute("data-mute")) return toggleMute();
    if (t.hasAttribute("data-sos")) { sounds.alert(); return openSOS(); }
    if (t.hasAttribute("data-close")) return closeSOS();
    if (t.hasAttribute("data-loc")) return copyLocation(t);
    // The link itself opens WhatsApp; close the sheet so the manual is tidy on return.
    if (t.hasAttribute("data-group")) { setTimeout(closeSOS, 300); return; }
    if (t.dataset.driver != null) return showDriver(+t.dataset.driver);
    if (t.dataset.jday != null) {
      const day = +t.dataset.jday;
      store.set(JKEY + ":day", day);
      t.closest("[data-journal]").innerHTML = journalHTML(journalBlock(), day);
      return;
    }
    if (t.hasAttribute("data-jexport")) return exportJournal();
  });

  let saveTimer;
  document.addEventListener("input", (e) => {
    if (e.target.matches("[data-sosname]")) { store.set(NAME_KEY, e.target.value); return; }
    const ta = e.target.closest("[data-jq]");
    if (!ta) return;
    const wrap = ta.closest("[data-journal]");
    const day = +wrap.querySelector('[aria-selected="true"]').dataset.jday;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      const data = store.get(JKEY, {});
      data[day] = data[day] || {};
      data[day][ta.dataset.jq] = ta.value;
      const ok = store.set(JKEY, data);
      const st = wrap.querySelector("[data-jstatus]");
      st.textContent = ok ? "Saved · " + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "Could not save on this device.";
      const tab = wrap.querySelector('[aria-selected="true"]');
      tab.classList.toggle("has", Object.values(data[day]).some((v) => v && v.trim()));
    }, 400);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const d = document.querySelector(".driver");
    if (d) d.remove();
    else if (!sos.hidden) closeSOS();
  });

  /* ---------------- Router ---------------- */
  function route() {
    const h = location.hash || "#/";
    let html;
    if (h.startsWith("#/s/")) html = viewSection(decodeURIComponent(h.slice(4)));
    else if (h === "#/contents") html = viewContents();
    else html = viewCover();
    if (route.done) sounds.whoosh();
    route.done = true;
    app.innerHTML = html;
    document.body.classList.toggle("on-cover", !h.startsWith("#/s/") && h !== "#/contents");
    window.scrollTo(0, 0);
    closeSOS();
    const sec = sections.find((s) => h === "#/s/" + s.id);
    document.title = sec ? `${sec.title} · KLU PhD Field Manual` : "Vietnam 2026 · KLU PhD Field Manual";
  }
  window.addEventListener("hashchange", route);
  route();
  // "?sos" in the URL opens the SOS panel straight away (shareable link).
  if (/[?&]sos\b/.test(location.search)) openSOS();

  if ("serviceWorker" in navigator && location.protocol === "https:") {
    // When a new version takes over a page that was already running an older
    // one, reload once so people never keep using stale content.
    const hadController = !!navigator.serviceWorker.controller;
    let reloaded = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (!hadController || reloaded) return;
      reloaded = true;
      location.reload();
    });
    navigator.serviceWorker.register("sw.js").then((reg) => {
      // Tabs left open for days: check for a new version when they come back.
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") reg.update().catch(() => {});
      });
    }).catch(() => {});
  }
})();
