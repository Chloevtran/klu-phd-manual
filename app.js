(function () {
  "use strict";

  const M = window.MANUAL;
  const C = window.CONFIG;
  const app = document.getElementById("app");
  const sections = M.sections;

  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pad2 = (n) => String(n).padStart(2, "0");
  const telHref = (n) => "tel:" + String(n).replace(/[^\d+]/g, "");
  const digits = (n) => String(n).replace(/\D/g, "");

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
  const logos = () => `
    <div class="logos" aria-label="Kühne Logistics University · Leading with an Operations Mindset · Learn Logistics by Kühne Foundation">
      <div class="logo"><span class="logo__mark">KLU</span><span class="logo__words">Kühne<br>Logistics<br>University</span></div>
      <div class="logo logo--tag">Leading with an<br>Operations Mindset</div>
      <div class="logo logo--ll"><span class="ll-k">K</span><span class="ll-t">LEARN<br>LOGISTICS<small>by Kühne Foundation</small></span></div>
    </div>`;

  const topbar = (left, right) => `
    <header class="topbar">
      ${left}
      <span class="topbar__label">${right}</span>
    </header>`;

  /* ---------------- Views ---------------- */
  function viewCover() {
    const c = M.cover;
    return `
      <section class="cover view">
        ${logos()}
        <div class="cover__main">
          <p class="kicker kicker--blue">${esc(c.kicker)}</p>
          <h1 class="cover__title">${esc(c.title)}<br>${esc(c.year)}</h1>
          <p class="cover__sub">${esc(c.subtitle)}</p>
          <p class="kicker kicker--blue cover__tag">${esc(c.tagline)}</p>
        </div>
        <div class="cover__place">${c.place.map(esc).join("<br>")}</div>
        <hr class="cover__line">
        <div class="cover__foot">
          <div><strong>${esc(c.host)}</strong><br>${esc(c.partner)}</div>
          <div class="cover__date">${esc(c.dates)}</div>
        </div>
        <button class="btn-primary" type="button" data-go="#/contents">Start the journey <span class="arrow">→</span></button>
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
        ${topbar(`<button class="topbar__btn" data-go="#/"><span class="chev">‹</span> Cover</button>`, "Vietnam 2026 · PhD Field Manual")}
        <div class="page">
          <p class="kicker">Contents</p>
          <h1 class="page__title">In this manual.</h1>
          <hr class="rule-red">
          <ul class="toc">${rows}</ul>
          <details class="imprint">
            <summary><span class="kicker">Imprint</span></summary>
            ${renderBlocks(M.imprint)}
          </details>
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
          <p class="kicker">Section ${s.num}</p>
          <p class="hero__num">${pad2(i + 1)}</p>
          <h1 class="hero__title">${esc(s.title)}</h1>
          <hr class="rule-red">
          <p class="hero__intro">${esc(s.intro)}</p>
        </section>
        <article class="content">${renderBlocks(s.blocks)}</article>
        <nav class="pager" aria-label="Section navigation">
          ${prev ? `<a href="#/s/${prev.id}"><span class="lab">‹ Previous</span><span class="ttl">${esc(prev.title)}</span></a>` : `<a href="#/contents"><span class="lab">‹ Back</span><span class="ttl">Contents</span></a>`}
          ${next ? `<a class="next" href="#/s/${next.id}"><span class="lab">Next ›</span><span class="ttl">${esc(next.title)}</span></a>` : `<a class="next" href="#/contents"><span class="lab">Done ›</span><span class="ttl">Contents</span></a>`}
        </nav>
        <footer class="footer"><span>KLU PhD · Vietnam 2026</span><span>— ${pad2(i + 1)} —</span></footer>
      </div>`;
  }

  /* ---------------- Blocks ---------------- */
  const list = (items) => `<ul class="bul">${items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;

  const B = {
    kicker: (b) => `<p class="kicker b-kicker">${esc(b.text)}</p>`,
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
            ${c.body ? `<p class="card__body">${esc(c.body)}</p>` : ""}
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
      const items = b.items.map((d) => {
        const slots = d.slots && d.slots.length
          ? `<div class="slots">${d.slots
              .map((s) => `<div class="slot"><div class="slot__time">${esc(s.time)}</div><div class="slot__what">${esc(s.what)}</div>${s.where ? `<div class="slot__where">${esc(s.where)}</div>` : ""}</div>`)
              .join("")}</div>`
          : `<p class="tbc">Detailed schedule to be confirmed.</p>`;
        const refl = d.reflection
          ? `<div class="callout"><p class="kicker">Reflection · end of ${esc(d.day.toLowerCase())}</p><p>“${esc(d.reflection)}”</p></div>`
          : "";
        return { kicker: d.day, title: d.focus, sub: d.date, html: slots + refl };
      });
      return `<div class="acc">${items
        .map(
          (x, i) => `<details${i === todayIndex(b.items) ? " open" : ""}>
            <summary><span><span class="kicker">${esc(x.kicker)}</span><span class="ttl">${esc(x.title)}</span><span class="sub">${esc(x.sub)}</span></span><span class="pm" aria-hidden="true">+</span></summary>
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
        <span><strong>Lost or need help?</strong><span>Tap here, or the red SOS button on any page, to call for help, share your location, or show an address to a driver.</span></span>
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

  /* ---------------- SOS ---------------- */
  const sos = document.getElementById("sos");
  const sosBody = document.getElementById("sos-body");
  let lastLoc = null;

  function sosHTML() {
    const ph = C.supportPhone;
    const support = ph
      ? `<div class="sos-actions">
           <a class="act act--solid full" href="${telHref(ph)}">Call ${esc(C.supportName)}</a>
           <a class="act" href="https://wa.me/${digits(ph)}" target="_blank" rel="noopener">WhatsApp</a>
           <a class="act" href="https://zalo.me/${digits(ph).replace(/^84/, "0")}" target="_blank" rel="noopener">Zalo</a>
         </div>`
      : `<p>Contact the programme coordinator, or message the group chat.</p>
         <div class="sos-actions"><a class="act act--solid full" href="mailto:${esc(C.coordinatorEmail)}?subject=${encodeURIComponent("KLU PhD Workshop – I need help")}">Email ${esc(C.coordinatorEmail)}</a></div>`;

    const places = C.places.filter((p) => p.address);
    return `
      <div class="sos-grid">
        <a class="sos-num" href="tel:115"><b>115</b><span>Ambulance</span></a>
        <a class="sos-num sos-num--alt" href="tel:113"><b>113</b><span>Police</span></a>
        <a class="sos-num sos-num--alt" href="tel:114"><b>114</b><span>Fire</span></a>
      </div>

      <div class="sos-block">
        <p class="kicker">Lost from the group?</p>
        <h3>Reach the KLU team</h3>
        ${support}
      </div>

      <div class="sos-block">
        <p class="kicker">Where am I?</p>
        <h3>Share my location</h3>
        <p>Sends a map link so the team can find you.</p>
        <div class="sos-actions">
          <button class="act act--red full" type="button" data-loc>Get my location</button>
        </div>
        <div data-locout></div>
      </div>

      ${places.length ? `<div class="sos-block">
        <p class="kicker">Taking a taxi?</p>
        <h3>Show address to driver</h3>
        <p>Opens a large card in Vietnamese.</p>
        <div class="driver-pick">${places.map((p, i) => `<button type="button" data-driver="${C.places.indexOf(p)}">${esc(p.label)}</button>`).join("")}</div>
      </div>` : ""}`;
  }

  function locActions(url) {
    const msg = `I'm lost from the KLU PhD group. My location: ${url}`;
    const ph = C.supportPhone;
    const wa = ph ? `https://wa.me/${digits(ph)}?text=${encodeURIComponent(msg)}` : `https://wa.me/?text=${encodeURIComponent(msg)}`;
    const sms = ph ? `sms:${ph.replace(/[^\d+]/g, "")}?&body=${encodeURIComponent(msg)}` : `sms:?&body=${encodeURIComponent(msg)}`;
    return `
      <div class="sos-actions">
        ${navigator.share ? `<button class="act act--solid full" type="button" data-share>Share location…</button>` : ""}
        <a class="act" href="${wa}" target="_blank" rel="noopener">WhatsApp</a>
        <a class="act" href="${sms}">SMS</a>
        <button class="act" type="button" data-copyloc>Copy link</button>
        <a class="act" href="${url}" target="_blank" rel="noopener">Open map</a>
      </div>
      <p class="loc-out">${esc(url)}</p>`;
  }

  function getLocation(btn) {
    const out = sosBody.querySelector("[data-locout]");
    if (!("geolocation" in navigator)) { out.innerHTML = `<p class="loc-out">Location is not available on this device.</p>`; return; }
    btn.disabled = true;
    btn.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude: la, longitude: lo } = pos.coords;
        lastLoc = `https://maps.google.com/?q=${la.toFixed(6)},${lo.toFixed(6)}`;
        btn.disabled = false;
        btn.textContent = "Update location";
        out.innerHTML = locActions(lastLoc);
      },
      (err) => {
        btn.disabled = false;
        btn.textContent = "Try again";
        out.innerHTML = `<p class="loc-out">Could not get your location (${esc(err.message || "permission denied")}). Please allow location access in your browser settings.</p>`;
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 30000 }
    );
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
    if (lastLoc) sosBody.querySelector("[data-locout]").innerHTML = locActions(lastLoc);
    sos.hidden = false;
    document.body.style.overflow = "hidden";
    sos.querySelector(".icon-btn").focus();
  }
  function closeSOS() {
    sos.hidden = true;
    document.body.style.overflow = "";
  }

  /* ---------------- Events ---------------- */
  document.getElementById("sos-btn").addEventListener("click", openSOS);

  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-go],[data-sos],[data-close],[data-loc],[data-share],[data-copyloc],[data-driver],[data-jday],[data-jexport]");
    if (!t) return;
    if (t.dataset.go != null) { location.hash = t.dataset.go; return; }
    if (t.hasAttribute("data-sos")) return openSOS();
    if (t.hasAttribute("data-close")) return closeSOS();
    if (t.hasAttribute("data-loc")) return getLocation(t);
    if (t.hasAttribute("data-share")) {
      navigator.share({ title: "My location", text: "I'm lost from the KLU PhD group. My location:", url: lastLoc }).catch(() => {});
      return;
    }
    if (t.hasAttribute("data-copyloc")) return copy(lastLoc);
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

  if (!C.supportPhone) console.info("[KLU manual] CONFIG.supportPhone is empty — SOS call buttons are hidden.");

  if ("serviceWorker" in navigator && location.protocol === "https:") {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
})();
