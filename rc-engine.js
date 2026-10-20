/* =====================================================================
   READING CHECK ENGINE (no need to edit)
   Split screen like a state test: the reading (text, image, table, graph)
   is on the left with annotation tools, the graded questions are on the
   right. Scores go to the teacher's Google Sheet (same as the rest of
   the hub) as "Reading Check · <title>".

   Activities are added in rc-history.js, rc-science.js, rc-math.js:
       RC["my-id"] = { subject, title, eq, target, sources:[...], qs:[...] };
   Question types: mc, multi, ebsr, inline, grid, num, order (see the
   examples in those files).
   ===================================================================== */
window.RC = window.RC || {};

/* ---------- graph helper used by the activity files ---------- */
window.RCG = (function () {
  const f = n => Math.round(n * 100) / 100;
  const e = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  function frame(o) {
    const w = o.w || 540, h = o.h || 340, P = Object.assign({ l: 58, r: 18, t: o.title ? 34 : 18, b: 50 }, o.pad || {});
    const X = o.x, Y = o.y;
    const sx = v => P.l + (v - X.min) / (X.max - X.min) * (w - P.l - P.r);
    const sy = v => h - P.b - (v - Y.min) / (Y.max - Y.min) * (h - P.t - P.b);
    let g = "";
    if (o.title) g += `<text class="tx tb" x="${w / 2}" y="20" text-anchor="middle">${e(o.title)}</text>`;
    const xs = X.ticks || []; if (!X.ticks) for (let v = X.min; v <= X.max + 1e-9; v += X.step) xs.push(f(v));
    const ys = Y.ticks || []; if (!Y.ticks) for (let v = Y.min; v <= Y.max + 1e-9; v += Y.step) ys.push(f(v));
    if (!o.nogrid) {
      xs.forEach(v => g += `<line class="gr" x1="${f(sx(v))}" x2="${f(sx(v))}" y1="${P.t}" y2="${h - P.b}"/>`);
      ys.forEach(v => g += `<line class="gr" y1="${f(sy(v))}" y2="${f(sy(v))}" x1="${P.l}" x2="${w - P.r}"/>`);
    }
    g += `<line class="ax" x1="${P.l}" x2="${w - P.r}" y1="${h - P.b}" y2="${h - P.b}"/><line class="ax" x1="${P.l}" x2="${P.l}" y1="${P.t}" y2="${h - P.b}"/>`;
    const xf = X.fmt || (v => v), yf = Y.fmt || (v => v);
    xs.forEach((v, i) => { if (X.every && i % X.every) return; g += `<text class="tx sm" x="${f(sx(v))}" y="${h - P.b + 17}" text-anchor="middle">${e(xf(v))}</text>`; });
    ys.forEach((v, i) => { if (Y.every && i % Y.every) return; g += `<text class="tx sm" x="${P.l - 7}" y="${f(sy(v)) + 4}" text-anchor="end">${e(yf(v))}</text>`; });
    if (X.label) g += `<text class="tx lb" x="${(P.l + w - P.r) / 2}" y="${h - 10}" text-anchor="middle">${e(X.label)}</text>`;
    if (Y.label) g += `<text class="tx lb" transform="translate(15 ${(P.t + h - P.b) / 2}) rotate(-90)" text-anchor="middle">${e(Y.label)}</text>`;
    return { w, h, P, sx, sy, g };
  }
  function legend(F, items, pos) {
    if (!items.length) return "";
    const width = items.reduce((t, it) => t + 30 + it.label.length * 6.6, 0);
    let x0 = pos === "right" ? F.w - F.P.r - width - 6 : F.P.l + 10, x = x0, out = "";
    items.forEach(it => {
      out += `<rect class="${it.cls} lgbox" x="${x}" y="${F.P.t + 6}" width="14" height="14" rx="3"/><text class="tx sm" x="${x + 19}" y="${F.P.t + 17}">${e(it.label)}</text>`;
      x += 30 + it.label.length * 6.6;
    });
    return `<rect class="lgbg" x="${x0 - 6}" y="${F.P.t + 2}" width="${x - x0 + 2}" height="22" rx="6"/>` + out;
  }
  /* line graph: series [{pts:[[x,y],...] | fn:x=>y, from, to, cls:'s1', label, dots, dash, step}] */
  function line(o) {
    const F = frame(o); let g = F.g;
    (o.bands || []).forEach(b => { g += `<rect class="band" x="${f(F.sx(b.x1 ?? o.x.min))}" width="${f(F.sx(b.x2 ?? o.x.max) - F.sx(b.x1 ?? o.x.min))}" y="${f(F.sy(b.y2 ?? o.y.max))}" height="${f(F.sy(b.y1 ?? o.y.min) - F.sy(b.y2 ?? o.y.max))}"/>` + (b.label ? `<text class="tx sm mu" x="${f(F.sx(b.x2 ?? o.x.max) - 6)}" y="${f(F.sy(b.y1 ?? o.y.min) + 15)}" text-anchor="end">${e(b.label)}</text>` : ""); });
    (o.hlines || []).forEach(h => { g += `<line class="ax" x1="${F.P.l}" x2="${F.w - F.P.r}" y1="${f(F.sy(h.y))}" y2="${f(F.sy(h.y))}" stroke-dasharray="6 4"/>` + (h.label ? `<text class="tx sm mu" x="${F.w - F.P.r - 4}" y="${f(F.sy(h.y) - 6)}" text-anchor="end">${e(h.label)}</text>` : ""); });
    (o.series || []).forEach(s => {
      let pts = s.pts;
      if (s.fn) { pts = []; const a = s.from ?? o.x.min, b = s.to ?? o.x.max, n = s.n || 80; for (let i = 0; i <= n; i++) { const x = a + (b - a) * i / n; pts.push([x, s.fn(x)]); } }
      const d = pts.map((p, i) => `${i ? "L" : "M"}${f(F.sx(p[0]))} ${f(F.sy(p[1]))}`).join(" ");
      g += `<path class="ln ${s.cls || "s1"}" d="${d}"${s.dash ? ' stroke-dasharray="7 5"' : ""}/>`;
      if (s.dots) pts.forEach(p => g += `<circle class="dot ${s.cls || "s1"}" cx="${f(F.sx(p[0]))}" cy="${f(F.sy(p[1]))}" r="4.2"/>`);
      if (s.end) { const p = pts[pts.length - 1]; g += `<text class="tx sm ${s.cls || "s1"} lbl" x="${f(F.sx(p[0]) + 6)}" y="${f(F.sy(p[1]) + 4)}">${e(s.end)}</text>`; }
    });
    (o.notes || []).forEach(n => g += `<text class="tx sm ${n.cls || ""}" x="${f(F.sx(n.x))}" y="${f(F.sy(n.y))}" text-anchor="${n.anchor || "start"}">${e(n.text)}</text>`);
    (o.marks || []).forEach(m => g += `<circle class="dot ${m.cls || "s3"}" cx="${f(F.sx(m.x))}" cy="${f(F.sy(m.y))}" r="5"/>` + (m.text ? `<text class="tx sm" x="${f(F.sx(m.x) + (m.dx ?? 8))}" y="${f(F.sy(m.y) + (m.dy ?? -8))}" text-anchor="${m.anchor || "start"}">${e(m.text)}</text>` : ""));
    g += legend(F, (o.series || []).filter(s => s.label).map(s => ({ cls: s.cls || "s1", label: s.label })), o.legend);
    return `<svg class="rc-graph" viewBox="0 0 ${F.w} ${F.h}" role="img" aria-label="${e(o.alt || o.title || "graph")}">${g}</svg>`;
  }
  /* bar graph: cats [..], series [{vals:[..], cls, label}] */
  function bar(o) {
    const n = o.cats.length, F = frame(Object.assign({}, o, { x: { min: 0, max: n, ticks: [] } })); let g = F.g;
    const S = o.series, bw = (F.sx(1) - F.sx(0)) * 0.72 / S.length;
    o.cats.forEach((c, i) => {
      const x0 = F.sx(i) + (F.sx(1) - F.sx(0)) * 0.14;
      S.forEach((s, j) => { const v = s.vals[i]; if (v == null) return; const y = F.sy(Math.max(v, o.y.min)), y0 = F.sy(Math.max(o.y.min, 0));
        g += `<rect class="br ${s.cls || "s1"}" x="${f(x0 + j * bw)}" y="${f(Math.min(y, y0))}" width="${f(bw - 2)}" height="${f(Math.abs(y0 - y))}" rx="3"/>`;
        if (o.values) g += `<text class="tx sm" x="${f(x0 + j * bw + bw / 2 - 1)}" y="${f(Math.min(y, y0) - 5)}" text-anchor="middle">${e((o.y.fmt || (q => q))(v))}</text>`; });
      g += `<text class="tx sm" x="${f(F.sx(i + 0.5))}" y="${F.h - F.P.b + 17}" text-anchor="middle">${e(c)}</text>`;
    });
    g += legend(F, S.filter(s => s.label).map(s => ({ cls: s.cls || "s1", label: s.label })), o.legend);
    return `<svg class="rc-graph" viewBox="0 0 ${F.w} ${F.h}" role="img" aria-label="${e(o.alt || o.title || "bar graph")}">${g}</svg>`;
  }
  return { line, bar };
})();

/* ===================================================================== */
(function () {
  const CFG = window.HUB_CONFIG || {};
  const SCHOOLS = CFG.schools || {};
  const PERIODS = CFG.periods || ["1", "2", "3", "4", "5", "6", "7", "8"];
  const HUB_URL = (CFG.scriptUrl || "").trim();
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const strip = s => String(s ?? "").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&");
  const LS = { get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} } };
  const hash = s => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return String(h); };
  const LETTER = i => String.fromCharCode(65 + i);
  const isTeacher = () => { try { return localStorage.getItem("hubMode") === "teacher"; } catch (e) { return false; } };
  const SUBJ = { "US History": ["#d0453a", "🇺🇸"], "World History": ["#e08a00", "🌍"], "Chemistry": ["#8a54e0", "⚗️"], "Biology": ["#1aa36f", "🧬"], "Algebra 1": ["#2b7de9", "📈"], "ELA": ["#e8368f", "📚"], "Math": ["#5b5fe0", "➗"], "Science (CAST)": ["#1aa36f", "🔬"], "Algebra 2": ["#5b5fe0", "📉"], "Geometry": ["#0e9aa7", "📐"], "English 1": ["#e8368f", "📚"], "English 2": ["#c2297a", "📖"] };
  const subj = s => SUBJ[s] || [[/chem/i, "#8a54e0", "⚗️"], [/bio/i, "#1aa36f", "🧬"], [/us history|apush|u\.s\.|gov/i, "#d0453a", "🇺🇸"], [/world/i, "#e08a00", "🌍"], [/geometry/i, "#0e9aa7", "📐"], [/calc|stat|algebra|math|precalc/i, "#2b7de9", "📈"], [/lit|lang|english|ela/i, "#e8368f", "📚"], [/psych/i, "#7a5af8", "🧠"], [/physics/i, "#2b7de9", "🧲"], [/environ/i, "#1aa36f", "🌱"]].filter(r => r[0].test(s)).map(r => [r[1], r[2]])[0] || ["#5b5fe0", "📖"];
  const SIMS = [];
  const TYPE = { mc: "Multiple choice", multi: "Multiple select", ebsr: "Two-part", inline: "Drop-down", grid: "Table match", num: "Short answer (number)", order: "Put in order", hot: "Hot text", write: "Brief write" };
  const SAY = [];

  window.addEventListener("DOMContentLoaded", start);

  function start() {
    const id = new URLSearchParams(location.search).get("id");
    const A = id && RC[id];
    if (!A) return listAll();
    A.id = id;
    const [color, emoji] = A.color ? [A.color, A.emoji || "📖"] : subj(A.subject);
    document.documentElement.style.setProperty("--lc", color);
    A.kind = A.kind || window.RC_KIND || "Reading Check";
    document.title = `${A.title} | ${A.kind}`;
    const bt = $(".brand span:last-child"); if (bt && A.kind !== "Reading Check") { bt.textContent = A.kind; $(".brand .mark").textContent = { "Study Guide": "📘", "Honors & AP": "🎓" }[A.kind] || "📝"; }
    $("#crumb").innerHTML = `<span>›</span><a href="index.html#lessons">Interactive Lessons</a><span>›</span><b>${esc(A.subject)}</b>`;
    gate(A, emoji);
  }

  /* ---------- list page (reading-check.html with no id) ---------- */
  function listAll() {
    document.body.classList.remove("locked");
    const groups = {};
    Object.entries(RC).forEach(([id, a]) => (groups[a.subject] = groups[a.subject] || []).push([id, a]));
    const pg = location.pathname.split("/").pop() || "reading-check.html";
    $("#app").innerHTML = `<div class="wrap"><div class="rc-hero">${/study-guide/.test(pg) ? "<h1>📘 Unit Study Guides</h1><p>Review a whole unit: read and annotate on the left, try the simulation, and answer the questions on the right.</p>" : /honors/.test(pg) ? "<h1>🎓 Honors & AP Check-Ins</h1><p>15-minute check-ins and AP-style practice quizzes with stimulus sources, scored with feedback.</p>" : /caaspp/.test(pg) ? "<h1>📝 CAASPP Practice</h1><p>Smarter Balanced–style ELA and math sets plus CAST science, grades 9–12. Read on the left, answer on the right, with scores and feedback.</p>" : "<h1>📖 10-Minute Reading Checks</h1><p>About 10 minutes each. Read and annotate on the left, answer on the right, just like on a state test.</p>"}</div>
      ${Object.entries(groups).map(([s, list]) => `<h2 class="rc-gh">${subj(s)[1]} ${esc(s)}</h2><div class="rc-cards">${list.map(([id, a]) =>
        `<a class="rc-card" style="--lc:${subj(s)[0]}" href="${pg}?id=${encodeURIComponent(id)}"><b>${esc(a.title)}</b><span>${esc(a.blurb || a.eq || "")}</span><small>${a.qs.length} questions · ~${a.mins || 10} min</small></a>`).join("")}</div>`).join("")}</div>`;
  }

  /* ---------- sign-in ---------- */
  function tOpts(school, sel) { return `<option value="">${school ? "Choose…" : "Choose a school first"}</option>` + (SCHOOLS[school] || []).map(t => `<option ${sel === t ? "selected" : ""}>${esc(t)}</option>`).join(""); }
  function gate(A, emoji) {
    let prev = LS.get("wicorStudent", null);
    if (prev && !(prev.first && prev.last && prev.school && (SCHOOLS[prev.school] || []).includes(prev.teacher))) prev = null;
    const pts = A.qs.reduce((t, q) => t + maxOf(q), 0);
    $("#app").innerHTML = `<div class="wrap"><div class="rc-gate">
      <div class="rc-intro"><span class="kick">${emoji} ${esc(A.subject)} · ${esc(A.kind)}</span><h1>${esc(A.title)}</h1>
        ${A.eq ? `<div class="eqbox"><span class="lbl">Essential Question</span><p>${esc(A.eq)}</p></div>` : ""}
        ${A.target ? `<div class="ltbox"><span class="lbl">Learning Target</span><p>${esc(A.target)}</p></div>` : ""}
        <ul class="how"><li><b>⏱ About ${A.mins || 10} minutes</b> · ${A.qs.length} questions · ${pts} points</li>
        <li><b>Left side:</b> read and annotate. Highlight, underline, and add notes. Annotations are <i>not graded</i>, they are there to help you think.</li>
        <li><b>Right side:</b> answer the questions. These <b>are graded</b> and sent to your teacher when you submit.</li>
        ${A.qs.some(q => q.t === "write") ? `<li><b>✍️ Brief writes</b> are scored with a rubric checklist (0–2 points). You will see what you earned and a sample answer. Your teacher may adjust the score.</li>` : ""}
        ${A.sources.some(x => x.blocks.some(b => b.sim)) ? `<li><b>🔬 Simulations:</b> play with the simulation in the reading. It is <i>not graded</i>, but it will help you answer the questions.</li>` : ""}
        ${A.sources.some(x => x.blocks.some(b => b.listen)) ? `<li><b>🎧 Listening:</b> press ▶ Play to hear the passage (use headphones). You may replay it.</li>` : ""}
        <li>Use <b>🚩 Flag</b> to mark questions to come back to, like on the real test.</li></ul></div>
      <form class="g-form" autocomplete="off" novalidate><h3>✋ Sign in to start</h3>
        <div class="g-row"><label>First name<input id="g-first" placeholder="First name"></label><label>Last name<input id="g-last" placeholder="Last name"></label></div>
        <label>Student ID<input id="g-id" inputmode="numeric" placeholder="Your student ID number"></label>
        <label>School<select id="g-sch"><option value="">Choose…</option>${Object.keys(SCHOOLS).map(s => `<option>${esc(s)}</option>`).join("")}</select></label>
        <div class="g-row"><label>Period<select id="g-per"><option value="">Choose…</option>${PERIODS.map(p => `<option>${p}</option>`).join("")}</select></label>
        <label>Teacher<select id="g-t">${tOpts("", "")}</select></label></div>
        <button class="g-start" type="submit" disabled>Start ▶</button><p class="g-msg" aria-live="polite">Fill in every box to start.</p>
        ${isTeacher() ? `<button type="button" class="linkbtn" id="g-preview">🍎 Teacher preview without signing in (nothing is sent)</button>` : ""}
      </form></div></div>`;
    const f = $(".g-form"), q = x => f.querySelector(x);
    q("#g-sch").addEventListener("change", () => { q("#g-t").innerHTML = tOpts(q("#g-sch").value, ""); });
    if (prev) { q("#g-first").value = prev.first; q("#g-last").value = prev.last; q("#g-id").value = prev.id || ""; q("#g-sch").value = prev.school; q("#g-t").innerHTML = tOpts(prev.school, prev.teacher); q("#g-per").value = prev.period || ""; }
    const read = () => { const first = q("#g-first").value.trim(), last = q("#g-last").value.trim();
      return { first, last, name: (first + " " + last).trim(), id: q("#g-id").value.trim(), school: q("#g-sch").value, period: q("#g-per").value, teacher: q("#g-t").value }; };
    const okId = v => /^[A-Za-z0-9-]{3,12}$/.test(v), hasL = v => /[A-Za-z]/.test(v);
    const ok = d => hasL(d.first) && hasL(d.last) && okId(d.id) && d.school && d.period && d.teacher;
    const upd = () => { const d = read(), good = ok(d); q(".g-start").disabled = !good;
      q(".g-msg").textContent = good ? "Looks good! Press Start." : !hasL(d.first) ? "Type your first name." : !hasL(d.last) ? "Type your last name." : !okId(d.id) ? "Type your student ID (numbers only)." : !d.school ? "Choose your school." : !d.period ? "Choose your period." : !d.teacher ? "Choose your teacher." : "Fill in every box to start."; };
    f.addEventListener("input", upd); f.addEventListener("change", upd); upd();
    f.onsubmit = e => { e.preventDefault(); const d = read(); if (!ok(d)) return; LS.set("wicorStudent", d); run(A, d, false); };
    if (q("#g-preview")) q("#g-preview").onclick = () => run(A, { first: "Teacher", last: "Preview", name: "Teacher Preview", id: "preview", school: "", period: "", teacher: "" }, true);
    setTimeout(() => q(prev ? ".g-start" : "#g-first").focus(), 50);
  }

  /* ---------- scoring ---------- */
  function maxOf(q) {
    if (q.pts) return q.pts;
    if (q.t === "hot") return q.a.length > 1 ? 2 : 1;
    if (q.t === "write") return 2;
    return q.t === "multi" ? 2 : q.t === "ebsr" ? 2 : q.t === "inline" ? q.blanks.length : q.t === "grid" ? q.rows.length : q.t === "order" ? 2 : 1;
  }
  const same = (a, b) => a.length === b.length && [...a].sort().join() === [...b].sort().join();
  const symDiff = (a, b) => a.filter(x => !b.includes(x)).length + b.filter(x => !a.includes(x)).length;
  function numVal(s) { const t = String(s ?? "").replace(/,/g, "").replace(/−/g, "-"); const fr = t.match(/(-?)\s*(\d+)\s+(\d+)\s*\/\s*(\d+)|(-?\d+)\s*\/\s*(\d+)/);
    if (fr) { if (fr[2]) return (fr[1] ? -1 : 1) * (+fr[2] + fr[3] / fr[4]); return fr[5] / fr[6]; }
    const m = t.match(/-?\d*\.?\d+(e-?\d+)?/i); return m ? parseFloat(m[0]) : NaN; }
  const wcount = t => (String(t || "").trim().match(/[A-Za-z0-9'’-]+/g) || []).length;
  /* brief write: rubric checklist → 0, 1, or 2 points */
  function writeEval(q, text) {
    const w = wcount(text), res = [];
    if (q.min) res.push({ label: `At least ${q.min} words (you wrote ${w})`, ok: w >= q.min });
    (q.checks || []).forEach(c => { const re = new RegExp(c.re.source, c.re.flags.includes("g") ? c.re.flags : c.re.flags + "g");
      const hits = new Set((String(text || "").match(re) || []).map(x => x.toLowerCase().trim())); res.push({ label: c.label, ok: c.not ? hits.size === 0 : hits.size >= (c.min || 1) }); });
    const max = maxOf(q), passed = res.filter(r => r.ok).length;
    const score = w < 5 ? 0 : passed === res.length ? max : passed >= Math.ceil(res.length / 2) ? Math.max(0, max - 1) : 0;
    return { score, res, w };
  }
  function scoreOf(q, a) {
    const max = maxOf(q);
    if (a == null) return 0;
    switch (q.t) {
      case "mc": return a === q.a ? max : 0;
      case "multi": { const d = symDiff(a, q.a); return d === 0 ? max : (max >= 2 && d === 1 ? max - 1 : 0); }
      case "ebsr": { const A1 = a.a === q.A.a ? 1 : 0; const B = q.B.a, b = a.b; const B1 = Array.isArray(B) ? (Array.isArray(b) && same(b, B) ? 1 : 0) : (b === B ? 1 : 0); return A1 + B1; }
      case "inline": return q.blanks.reduce((t, bl, i) => t + (a[i] === bl.a ? 1 : 0), 0);
      case "grid": return q.rows.reduce((t, r, i) => t + (a[i] === r[1] ? 1 : 0), 0);
      case "num": { const v = numVal(a), tol = q.tol ?? Math.max(Math.abs(q.a) * 0.01, 0.01); return Math.abs(v - q.a) <= tol + 1e-9 ? max : 0; }
      case "hot": { const d = symDiff(a, q.a); return d === 0 ? max : (max >= 2 && d === 1 ? max - 1 : 0); }
      case "write": return writeEval(q, a).score;
      case "order": { if (!a.moved) return 0; const right = a.v.filter((x, i) => x === i).length; return right === a.v.length ? max : right >= Math.ceil(a.v.length / 2) ? Math.floor(max / 2) : 0; }
    }
    return 0;
  }
  function answered(q, a) {
    if (a == null) return false;
    switch (q.t) {
      case "mc": return true;
      case "multi": return a.length > 0;
      case "ebsr": return a.a != null && (Array.isArray(a.b) ? a.b.length > 0 : a.b != null);
      case "inline": return q.blanks.every((_, i) => a[i] != null);
      case "grid": return q.rows.every((_, i) => a[i] != null);
      case "num": return String(a).trim() !== "";
      case "order": return !!a.moved;
      case "hot": return a.length > 0;
      case "write": return wcount(a) > 0;
    }
    return false;
  }
  function answerText(q, a) {
    if (!answered(q, a)) return "(blank)";
    switch (q.t) {
      case "mc": return LETTER(a);
      case "multi": return [...a].sort().map(LETTER).join(",");
      case "ebsr": return "A:" + LETTER(a.a) + " B:" + (Array.isArray(a.b) ? [...a.b].sort().map(LETTER).join(",") : LETTER(a.b));
      case "inline": return a.map((x, i) => strip(q.blanks[i].opts[x])).join(" / ");
      case "grid": return a.map((x, i) => strip(q.cols[x])).join(", ");
      case "num": return String(a).trim();
      case "order": return a.v.map(x => x + 1).join("-");
      case "hot": return [...a].sort((x, y) => x - y).map(j => `“${strip(q.text[j]).slice(0, 60)}”`).join(" + ");
      case "write": return `“${String(a).replace(/\s+/g, " ").trim()}”`;
    }
    return "";
  }

  /* ---------- the workspace ---------- */
  function run(A, who, preview) {
    document.body.classList.remove("locked");
    const KEY = `rc:${A.id}:${who.id}`;
    const srcHTML = A.sources.map(renderSource);
    const ver = hash(srcHTML.join("") + JSON.stringify(A.qs));
    let S = LS.get(KEY, null);
    if (!S || S.ver !== ver) S = { ver, ans: {}, flags: {}, cur: 0, ann: [], done: null, start: Date.now(), tab: 0, att: 1 };
    if (preview) S = { ver, ans: {}, flags: {}, cur: 0, ann: [], done: null, start: Date.now(), tab: 0, att: 1 };
    const save = () => { if (!preview) LS.set(KEY, S); };
    A.qs.forEach((q, k) => { if (q.t === "order" && !S.ans[k]) S.ans[k] = { v: shuffle(q.items.map((_, i) => i)), moved: false }; });

    $("#whoChip").innerHTML = preview ? `<span class="prevtag">👀 Teacher preview · nothing is sent</span>` :
      `👤 <b>${esc(who.name)}</b> · ${esc(who.school)} · P${esc(who.period)} · ${esc(who.teacher)} <button class="pill-btn sm" id="switchUser">Not you?</button>`;
    if ($("#switchUser")) $("#switchUser").onclick = () => { location.reload(); };

    const multiSrc = A.sources.length > 1;
    $("#app").innerHTML = `
    <div class="rc-mtabs" role="tablist"><button class="on" data-pane="left">📄 Reading</button><button data-pane="right">❓ Questions <span id="mcount"></span></button></div>
    <div class="rc-split" id="split">
      <section class="rc-left" aria-label="Reading">
        <div class="rc-toolbar">
          ${multiSrc ? `<div class="rc-stabs" role="tablist">${A.sources.map((s, i) => `<button role="tab" data-src="${i}" class="${i === S.tab ? "on" : ""}">${esc(s.tab || "Source " + (i + 1))}</button>`).join("")}</div>` : ""}
          <div class="rc-tools" role="toolbar" aria-label="Annotation tools">
            <span class="tg">Annotate:</span>
            <button data-tool="hl" data-c="y" class="sw y" title="Highlight yellow" aria-label="Highlight yellow"></button>
            <button data-tool="hl" data-c="g" class="sw g" title="Highlight green" aria-label="Highlight green"></button>
            <button data-tool="hl" data-c="p" class="sw p" title="Highlight pink" aria-label="Highlight pink"></button>
            <button data-tool="hl" data-c="b" class="sw b" title="Highlight blue" aria-label="Highlight blue"></button>
            <button data-tool="ul" title="Underline"><u>U</u></button>
            <button data-tool="note" title="Add a note (select words, or click a picture or graph)">📝 Note</button>
            <button data-tool="erase" title="Click a mark or note to erase it">🧽 Erase</button>
            <span class="sep"></span>
            <button data-act="reader" title="Line reader">📏</button>
            <button data-act="smaller" title="Smaller text">A−</button><button data-act="bigger" title="Bigger text">A+</button>
            <button data-act="clear" title="Clear all my annotations">Clear</button>
          </div>
          <div class="rc-hint" id="hint">Select words to highlight them. Pick a color, underline, or 📝 note first.</div>
        </div>
        <div class="rc-scroll" id="lscroll">${srcHTML.map((h, i) => `<article class="rc-src" data-i="${i}" ${i === S.tab ? "" : "hidden"}>${S.ann[i] && S.ann[i].v === hash(h) ? S.ann[i].html : h}</article>`).join("")}
          <div class="reader" id="reader" hidden></div></div>
      </section>
      <div class="rc-divider" id="divider" title="Drag to resize" aria-hidden="true"><span></span></div>
      <section class="rc-right" aria-label="Questions">
        <nav class="rc-qnav" id="qnav" aria-label="Question list"></nav>
        <div class="rc-qbox" id="qbox" aria-live="polite"></div>
        <div class="rc-qfoot" id="qfoot"></div>
      </section>
    </div>
    <div class="notepop" id="notepop" hidden><textarea rows="3" placeholder="Type your note…"></textarea><div class="row"><button class="pill-btn dark" data-np="save">Save note</button><button class="pill-btn" data-np="del">Delete</button><button class="pill-btn" data-np="close">Close</button></div></div>`;

    /* --- simulations (rebuilt every time; never saved with annotations) --- */
    const initSims = () => $$(".rc-sim", $("#lscroll")).forEach(el => { const b = SIMS[+el.dataset.sim]; el.innerHTML = ""; try { if (window.RCSIM && RCSIM[b.sim]) RCSIM[b.sim](el, b); else el.innerHTML = `<p class="mu">Simulation “${esc(b.sim)}” is missing (upload rc-sims.js).</p>`; } catch (e) { el.innerHTML = `<p class="mu">Simulation error: ${esc(e.message)}</p>`; } });
    initSims();

    /* --- mobile tabs --- */
    $$(".rc-mtabs button").forEach(b => b.onclick = () => { $$(".rc-mtabs button").forEach(x => x.classList.toggle("on", x === b)); $("#split").dataset.pane = b.dataset.pane; window.scrollTo({ top: 0 }); });
    $("#split").dataset.pane = "left";

    /* --- source tabs --- */
    $$(".rc-stabs button").forEach(b => b.onclick = () => { S.tab = +b.dataset.src; save(); $$(".rc-stabs button").forEach(x => x.classList.toggle("on", x === b)); $$(".rc-src").forEach(s => s.hidden = +s.dataset.i !== S.tab); });

    /* --- timer --- */
    const tm = $("#timer"); tm.hidden = false;
    const tick = () => { const s = Math.floor((Date.now() - S.start) / 1000), m = Math.floor(s / 60); tm.querySelector("b").textContent = `${m}:${String(s % 60).padStart(2, "0")}`; tm.classList.toggle("over", m >= (A.mins || 10) && !S.done); };
    tick(); setInterval(tick, 1000);

    /* ===== annotations ===== */
    let tool = "hl", color = "y", fs = LS.get("rcFont", 100);
    const lscroll = $("#lscroll"); lscroll.style.setProperty("--rcfs", fs + "%");
    /* listening passages: the browser reads the text aloud */
    lscroll.addEventListener("click", e => {
      const b = e.target.closest("[data-sp]"); if (!b || b.tagName === "SELECT") return;
      const box = b.closest(".listen"), st = box.querySelector(".lstat"), synth = window.speechSynthesis;
      if (!synth) { st.textContent = "This browser can’t read aloud. Open the transcript below."; box.nextElementSibling.open = true; return; }
      const act = b.dataset.sp;
      if (act === "pause") { if (synth.speaking && !synth.paused) { synth.pause(); st.textContent = "Paused."; } else if (synth.paused) { synth.resume(); st.textContent = "Playing…"; } return; }
      if (act === "play" && synth.paused) { synth.resume(); st.textContent = "Playing…"; return; }
      synth.cancel();
      const rate = +box.querySelector("select").value, parts = SAY[+box.dataset.say].match(/[^.!?]+[.!?]+["”’]?\s*/g) || [SAY[+box.dataset.say]];
      const vs = synth.getVoices().filter(v => /^en(-|_)US/i.test(v.lang)); const voice = vs.find(v => /natural|google|samantha|aria|jenny/i.test(v.name)) || vs[0];
      parts.forEach((t, i) => { const u = new SpeechSynthesisUtterance(t.trim()); u.rate = rate; if (voice) u.voice = voice; if (i === parts.length - 1) u.onend = () => { st.textContent = "Finished. Press ▶ Play to hear it again."; }; synth.speak(u); });
      st.textContent = "Playing…";
    });
    window.addEventListener("beforeunload", () => window.speechSynthesis && speechSynthesis.cancel());
    const setTool = (t, c) => { tool = t; if (c) color = c; $$(".rc-tools [data-tool]").forEach(b => b.classList.toggle("on", b.dataset.tool === tool && (tool !== "hl" || b.dataset.c === color)));
      $("#hint").textContent = tool === "hl" ? "Select words to highlight them." : tool === "ul" ? "Select words to underline them." : tool === "note" ? "Select words, or click on a picture, table, or graph, to add a note." : "Click any highlight, underline, or note to erase it."; lscroll.dataset.tool = tool; };
    setTool("hl", "y");
    $$(".rc-tools [data-tool]").forEach(b => b.onclick = () => setTool(b.dataset.tool, b.dataset.c));
    const saveAnn = () => { $$(".rc-src").forEach(el => { const i = +el.dataset.i, c = el.cloneNode(true); $$(".rc-sim", c).forEach(x => x.innerHTML = ""); S.ann[i] = { v: hash(srcHTML[i]), html: c.innerHTML }; }); save(); };
    let gid = Date.now() % 100000;
    function wrapRange(range, cls) {
      const g = "g" + (++gid), root = range.commonAncestorContainer.nodeType === 3 ? range.commonAncestorContainer.parentNode : range.commonAncestorContainer;
      const nodes = [], w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => range.intersectsNode(n) && n.nodeValue.trim() !== "" && !n.parentNode.closest("svg,.pin,.rc-noann,figcaption .pn") ? 1 : 3 });
      while (w.nextNode()) nodes.push(w.currentNode);
      const out = [];
      nodes.forEach(n => {
        let s = 0, e = n.nodeValue.length;
        if (n === range.startContainer) s = range.startOffset;
        if (n === range.endContainer) e = range.endOffset;
        if (s >= e) return;
        let t = n; if (e < t.nodeValue.length) t.splitText(e); if (s > 0) t = t.splitText(s);
        const m = document.createElement("mark"); m.className = cls; m.dataset.g = g; t.parentNode.insertBefore(m, t); m.appendChild(t); out.push(m);
      });
      return out;
    }
    function unwrapGroup(g) { $$(`mark[data-g="${g}"]`, lscroll).forEach(m => { const p = m.parentNode; while (m.firstChild) p.insertBefore(m.firstChild, m); p.removeChild(m); p.normalize(); }); }
    const pop = $("#notepop"); let popTarget = null;
    function openNote(target, x, y) {
      popTarget = target; pop.hidden = false; const ta = pop.querySelector("textarea"); ta.value = target.dataset.note || "";
      const r = lscroll.getBoundingClientRect(); pop.style.left = Math.max(8, Math.min(x - 10, window.innerWidth - 300)) + "px"; pop.style.top = Math.min(y + 14, window.innerHeight - 160) + "px"; void r; ta.focus();
    }
    pop.onclick = e => { const a = e.target.dataset.np; if (!a || !popTarget) return;
      if (a === "save" || a === "close") setNote(popTarget, pop.querySelector("textarea").value.trim());
      if (a === "del") { if (popTarget.classList.contains("pin")) popTarget.remove(); else unwrapGroup(popTarget.dataset.g); }
      pop.hidden = true; popTarget = null; saveAnn(); renumberPins(); };
    function setNote(t, v) {
      if (t.classList.contains("pin")) { t.dataset.note = v; t.title = v; return; }
      $$(`mark[data-g="${t.dataset.g}"]`, lscroll).forEach((m, i) => { m.dataset.note = v; m.title = v; if (i === 0) m.classList.add("first"); });
    }
    function renumberPins() { let n = 0; $$(".pin", lscroll).forEach(p => p.textContent = ++n); }
    document.addEventListener("mouseup", annotateSel); document.addEventListener("touchend", () => setTimeout(annotateSel, 30));
    function annotateSel(ev) {
      if (S.lockAnn || !["hl", "ul", "note"].includes(tool)) return;
      if (ev && ev.target && ev.target.closest && ev.target.closest(".notepop,.rc-tools,.rc-sim")) return;
      const sel = window.getSelection(); if (!sel || sel.isCollapsed || !sel.rangeCount) return;
      const range = sel.getRangeAt(0), src = (range.commonAncestorContainer.nodeType === 3 ? range.commonAncestorContainer.parentNode : range.commonAncestorContainer).closest(".rc-src");
      if (!src || !lscroll.contains(src)) return;
      const marks = wrapRange(range, tool === "hl" ? "hl hl-" + color : tool === "ul" ? "ul" : "nt");
      sel.removeAllRanges();
      if (!marks.length) return;
      if (tool === "note") { marks[0].classList.add("first"); const r = marks[marks.length - 1].getBoundingClientRect(); openNote(marks[0], r.left, r.bottom); }
      saveAnn();
    }
    lscroll.addEventListener("click", e => {
      const pin = e.target.closest(".pin"), mk = e.target.closest("mark[data-g]");
      if (tool === "erase") { if (pin) { pin.remove(); renumberPins(); saveAnn(); } else if (mk) { unwrapGroup(mk.dataset.g); saveAnn(); } return; }
      if (pin) { openNote(pin, e.clientX, e.clientY); return; }
      if (mk && (mk.classList.contains("nt") || mk.dataset.note) && window.getSelection().isCollapsed) { openNote($(`mark[data-g="${mk.dataset.g}"]`, lscroll), e.clientX, e.clientY); return; }
      const fig = e.target.closest(".rc-fig .figbox");
      if (fig && tool === "note" && window.getSelection().isCollapsed) {
        const r = fig.getBoundingClientRect(), x = (e.clientX - r.left) / r.width * 100, y = (e.clientY - r.top) / r.height * 100;
        const p = document.createElement("button"); p.className = "pin"; p.type = "button"; p.style.left = x.toFixed(1) + "%"; p.style.top = y.toFixed(1) + "%"; p.dataset.note = "";
        fig.appendChild(p); renumberPins(); openNote(p, e.clientX, e.clientY); saveAnn();
      }
    });
    $$(".rc-tools [data-act]").forEach(b => b.onclick = () => {
      const a = b.dataset.act;
      if (a === "bigger" || a === "smaller") { fs = Math.max(85, Math.min(150, fs + (a === "bigger" ? 10 : -10))); lscroll.style.setProperty("--rcfs", fs + "%"); LS.set("rcFont", fs); }
      if (a === "clear" && confirm("Erase all of your highlights, underlines, and notes?")) { $$(".rc-src").forEach(el => { el.innerHTML = srcHTML[+el.dataset.i]; }); initSims(); saveAnn(); }
      if (a === "reader") { const r = $("#reader"); r.hidden = !r.hidden; b.classList.toggle("on", !r.hidden); }
    });
    lscroll.addEventListener("pointermove", e => { const r = $("#reader"); if (r.hidden) return; const box = lscroll.getBoundingClientRect(); r.style.top = (e.clientY - box.top + lscroll.scrollTop - 22) + "px"; });

    /* --- resizable divider (desktop) --- */
    const dv = $("#divider"), split = $("#split");
    const lw = LS.get("rcSplit", 52); split.style.setProperty("--lw", lw + "%");
    dv.addEventListener("pointerdown", e => { dv.setPointerCapture(e.pointerId); dv.classList.add("drag");
      const mv = ev => { const r = split.getBoundingClientRect(); const p = Math.max(30, Math.min(70, (ev.clientX - r.left) / r.width * 100)); split.style.setProperty("--lw", p + "%"); LS.set("rcSplit", Math.round(p)); };
      const up = () => { dv.removeEventListener("pointermove", mv); dv.removeEventListener("pointerup", up); dv.classList.remove("drag"); };
      dv.addEventListener("pointermove", mv); dv.addEventListener("pointerup", up); });

    /* ===== questions ===== */
    const N = A.qs.length, total = A.qs.reduce((t, q) => t + maxOf(q), 0);
    const qnav = $("#qnav"), qbox = $("#qbox"), qfoot = $("#qfoot");
    let reviewScreen = false;
    function drawNav() {
      qnav.innerHTML = A.qs.map((q, k) => { const a = S.ans[k], d = S.done; let c = answered(q, a) ? "ans" : "";
        if (d) { const s = scoreOf(q, a), m = maxOf(q); c = s === m ? "right" : s > 0 ? "part" : "wrong"; }
        return `<button class="${c} ${k === S.cur && !reviewScreen ? "cur" : ""}" data-k="${k}" aria-label="Question ${k + 1}${S.flags[k] ? ", flagged" : ""}">${k + 1}${S.flags[k] ? '<i class="fl">🚩</i>' : ""}</button>`; }).join("") +
        `<button class="rv ${reviewScreen ? "cur" : ""}" data-k="review">${S.done ? "📊 Score" : "✔ Review"}</button>`;
      $$("button", qnav).forEach(b => b.onclick = () => { if (b.dataset.k === "review") { reviewScreen = true; } else { reviewScreen = false; S.cur = +b.dataset.k; save(); } draw(); });
      const left = A.qs.filter((q, k) => !answered(q, S.ans[k])).length; $("#mcount").textContent = S.done ? "· done" : `· ${N - left}/${N}`;
    }
    function draw() { drawNav(); if (reviewScreen) return drawReview(); drawQ(); }
    function drawQ() {
      const k = S.cur, q = A.qs[k], a = S.ans[k], done = !!S.done, m = maxOf(q);
      let h = `<div class="qhead"><span class="qn">Question ${k + 1} of ${N}</span><span class="qt">${TYPE[q.t]} · ${m} pt${m > 1 ? "s" : ""}</span></div>`;
      if (q.ref) h += `<button class="refbtn" data-ref="${q.ref}">📄 Look at: ${esc(A.sources[q.ref - 1] ? (A.sources[q.ref - 1].tab || "Source " + q.ref) : "")}</button>`;
      if (q.t === "ebsr") {
        h += `<div class="part"><span class="plbl">Part A</span><div class="stem">${q.A.q}</div>${optsHTML(q.A, a ? a.a : null, "A", done)}</div>`;
        h += `<div class="part"><span class="plbl">Part B</span><div class="stem">${q.B.q}</div>${optsHTML(q.B, a ? a.b : null, "B", done)}</div>`;
      } else {
        h += `<div class="stem">${q.q}</div>`;
        if (q.fig) h += `<div class="qfig">${q.fig}</div>`;
        if (q.t === "mc" || q.t === "multi") h += optsHTML(q, a, "", done);
        if (q.t === "inline") { let i = 0; h += `<div class="inline">${q.text.replace(/\[\[\]\]/g, () => { const bi = i++, bl = q.blanks[bi], v = a ? a[bi] : null; const cls = done ? (v === bl.a ? "ok" : "bad") : "";
          return `<select class="ib ${cls}" data-b="${bi}" ${done ? "disabled" : ""} aria-label="Blank ${bi + 1}"><option value="">Choose…</option>${bl.opts.map((o, j) => `<option value="${j}" ${v === j ? "selected" : ""}>${strip(o)}</option>`).join("")}</select>${done && v !== bl.a ? `<span class="fix">✓ ${strip(bl.opts[bl.a])}</span>` : ""}`; })}</div>`; }
        if (q.t === "grid") h += `<div class="gridwrap"><table class="qgrid"><thead><tr><th></th>${q.cols.map(c => `<th>${c}</th>`).join("")}</tr></thead><tbody>${q.rows.map((r, ri) => `<tr><th scope="row">${r[0]}</th>${q.cols.map((c, ci) => { const on = a && a[ri] === ci; const cls = done ? (ci === r[1] ? "ok" : on ? "bad" : "") : "";
          return `<td class="${cls}"><label><input type="radio" name="g${k}r${ri}" data-r="${ri}" data-c="${ci}" ${on ? "checked" : ""} ${done ? "disabled" : ""} aria-label="${strip(r[0])}: ${strip(c)}"><span></span></label></td>`; }).join("")}</tr>`).join("")}</tbody></table></div>`;
        if (q.t === "num") { const ok = done && scoreOf(q, a) === m; h += `<div class="numrow">${q.pre ? `<span class="unit">${q.pre}</span>` : ""}<input class="numin ${done ? (ok ? "ok" : "bad") : ""}" id="numin" inputmode="decimal" placeholder="Type a number" value="${esc(a ?? "")}" aria-label="Your answer" ${done ? "disabled" : ""}>${q.unit ? `<span class="unit">${q.unit}</span>` : ""}${done && !ok ? `<span class="fix">✓ ${q.a}${q.unit ? " " + q.unit : ""}</span>` : ""}</div>`; }
        if (q.t === "hot") { const need = q.need || (q.a.length > 1 ? q.a.length : 1); h += `<div class="sel-note">Click to select <b>${need}</b> ${need > 1 ? "parts" : "part"}. Click again to unselect.</div><div class="hot">${q.text.map((t, j) => {
            const on = Array.isArray(a) && a.includes(j); let c = "hs"; if (on) c += " sel"; if (done) { if (q.a.includes(j)) c += " right"; else if (on) c += " wrong"; }
            return `<button class="${c}" data-hj="${j}" ${done ? "disabled" : ""} aria-pressed="${on}">${t}</button>`; }).join(" ")}</div>`; }
        if (q.t === "write") { h += `<textarea class="wrin" id="wrin" rows="8" ${done ? "readonly" : ""} placeholder="Type your answer here.">${esc(a || "")}</textarea><div class="wc" id="wc">${wcount(a)} words${q.min ? ` · aim for at least ${q.min}` : ""}</div>`;
          if (done) { const ev = writeEval(q, a); h += `<div class="rubric"><b>Rubric checklist</b><ul>${ev.res.map(r => `<li class="${r.ok ? "ok" : "bad"}">${r.ok ? "✓" : "✗"} ${r.label}</li>`).join("")}</ul>${q.rubric ? `<p class="mu">${q.rubric}</p>` : ""}${q.model ? `<details open><summary>Sample 2-point answer</summary><p>${q.model}</p></details>` : ""}<p class="mu">This score is automatic. Your teacher may read your answer and adjust it.</p></div>`; } }
        if (q.t === "order") { h += `<ol class="olist">${a.v.map((si, pos) => `<li class="${done ? (si === pos ? "ok" : "bad") : ""}"><span>${q.items[si]}</span>${done ? "" : `<span class="mv"><button data-p="${pos}" data-d="-1" ${pos === 0 ? "disabled" : ""} aria-label="Move up">↑</button><button data-p="${pos}" data-d="1" ${pos === a.v.length - 1 ? "disabled" : ""} aria-label="Move down">↓</button></span>`}</li>`).join("")}</ol>`;
          if (done) h += `<div class="fix block">Correct order: ${q.items.map((x, i) => `${i + 1}) ${strip(x)}`).join("  ")}</div>`; }
      }
      if (done) { const s = scoreOf(q, a); h += `<div class="why ${s === m ? "ok" : s ? "part" : "bad"}"><b>${s === m ? "✅ Correct" : s ? "🟡 Partly correct" : "❌ Not quite"} · ${s}/${m}</b>${q.why ? `<p>${q.why}</p>` : ""}</div>`; }
      qbox.innerHTML = h; qbox.scrollTop = 0;
      /* wire */
      $$(".opt", qbox).forEach(b => b.onclick = () => {
        if (S.done) return; const part = b.dataset.part, j = +b.dataset.j;
        const obj = part ? q[part] : q, multi = obj.t === "multi" || Array.isArray(obj.a);
        let cur = part ? (S.ans[k] || {})[part.toLowerCase()] : S.ans[k];
        if (multi) { cur = Array.isArray(cur) ? [...cur] : []; const i = cur.indexOf(j); if (i >= 0) cur.splice(i, 1); else { if (obj.need && cur.length >= obj.need) cur.shift(); cur.push(j); } } else cur = j;
        if (part) { S.ans[k] = Object.assign({}, S.ans[k] || {}, { [part.toLowerCase()]: cur }); } else S.ans[k] = cur;
        save(); drawNav(); drawQ();
      });
      $$("select.ib", qbox).forEach(s => s.onchange = () => { const arr = Array.isArray(S.ans[k]) ? [...S.ans[k]] : []; arr[+s.dataset.b] = s.value === "" ? null : +s.value; S.ans[k] = arr; save(); drawNav(); });
      $$(".qgrid input", qbox).forEach(r => r.onchange = () => { const arr = Array.isArray(S.ans[k]) ? [...S.ans[k]] : []; arr[+r.dataset.r] = +r.dataset.c; S.ans[k] = arr; save(); drawNav(); });
      const ni = $("#numin", qbox); if (ni) ni.oninput = () => { S.ans[k] = ni.value; save(); drawNav(); };
      const wi = $("#wrin", qbox); if (wi) wi.oninput = () => { S.ans[k] = wi.value; $("#wc", qbox).textContent = `${wcount(wi.value)} words${q.min ? ` · aim for at least ${q.min}` : ""}`; save(); drawNav(); };
      $$(".hs", qbox).forEach(b => b.onclick = () => { if (S.done) return; const j = +b.dataset.hj, need = q.need || (q.a.length > 1 ? q.a.length : 1); let cur = Array.isArray(S.ans[k]) ? [...S.ans[k]] : [];
        const i = cur.indexOf(j); if (i >= 0) cur.splice(i, 1); else { if (cur.length >= need) cur.shift(); cur.push(j); } S.ans[k] = cur; save(); drawNav(); drawQ(); });
      $$(".mv button", qbox).forEach(b => b.onclick = () => { const o = S.ans[k].v, p = +b.dataset.p, t = p + +b.dataset.d; [o[p], o[t]] = [o[t], o[p]]; S.ans[k].moved = true; save(); drawNav(); drawQ(); });
      $$(".refbtn", qbox).forEach(b => b.onclick = () => { const i = +b.dataset.ref - 1; const tb = $$(".rc-stabs button")[i]; if (tb) tb.click(); $$(".rc-mtabs button")[0].click(); });
      /* footer */
      qfoot.innerHTML = `<button class="pill-btn" id="qback" ${k === 0 ? "disabled" : ""}>← Back</button>
        ${done ? "" : `<button class="pill-btn flag ${S.flags[k] ? "on" : ""}" id="qflag">🚩 ${S.flags[k] ? "Flagged" : "Flag"}</button>`}
        <button class="pill-btn dark" id="qnext">${k === N - 1 ? (done ? "📊 My score" : "Review & submit →") : "Next →"}</button>`;
      $("#qback").onclick = () => { S.cur = Math.max(0, k - 1); save(); draw(); };
      $("#qnext").onclick = () => { if (k === N - 1) reviewScreen = true; else S.cur = k + 1; save(); draw(); };
      if ($("#qflag")) $("#qflag").onclick = () => { S.flags[k] = !S.flags[k]; save(); draw(); };
    }
    function optsHTML(obj, a, part, done) {
      const multi = obj.t === "multi" || Array.isArray(obj.a);
      const sel = j => multi ? Array.isArray(a) && a.includes(j) : a === j;
      const right = j => multi ? obj.a.includes(j) : obj.a === j;
      return `${multi ? `<div class="sel-note">${obj.need ? `Select <b>${obj.need}</b> answers.` : "Select <b>all</b> that apply."}</div>` : ""}<div class="opts ${multi ? "multi" : ""}">${obj.opts.map((o, j) => {
        let c = "opt"; if (sel(j)) c += " sel"; if (done) { if (right(j)) c += " right"; else if (sel(j)) c += " wrong"; }
        return `<button class="${c}" data-j="${j}" ${part ? `data-part="${part}"` : ""} ${done ? "disabled" : ""} aria-pressed="${sel(j)}"><span class="lt">${LETTER(j)}</span><span>${o}</span></button>`; }).join("")}</div>`;
    }
    function drawReview() {
      if (S.done) return drawScore();
      const un = A.qs.map((q, k) => answered(q, S.ans[k]) ? null : k + 1).filter(Boolean), fl = A.qs.map((q, k) => S.flags[k] ? k + 1 : null).filter(Boolean);
      qbox.innerHTML = `<div class="review"><h2>Review before you submit</h2>
        <div class="rgrid">${A.qs.map((q, k) => `<button data-k="${k}" class="${answered(q, S.ans[k]) ? "ans" : ""}"><b>${k + 1}</b><span>${answered(q, S.ans[k]) ? "Answered" : "Not answered"}</span>${S.flags[k] ? "<i>🚩</i>" : ""}</button>`).join("")}</div>
        ${un.length ? `<p class="warn">⚠️ Not answered yet: <b>${un.join(", ")}</b></p>` : `<p class="good">✅ Every question is answered.</p>`}
        ${fl.length ? `<p class="warn">🚩 Flagged to check: <b>${fl.join(", ")}</b></p>` : ""}
        <p class="mu">When you submit, your answers are graded and ${preview ? "<b>(preview) nothing is sent</b>" : `sent to <b>${esc(who.teacher)}</b>`}. Annotations are not graded.</p></div>`;
      $$(".rgrid button", qbox).forEach(b => b.onclick = () => { reviewScreen = false; S.cur = +b.dataset.k; save(); draw(); });
      qfoot.innerHTML = `<button class="pill-btn" id="rback">← Back to questions</button><button class="pill-btn dark big" id="submit">Submit ✔</button>`;
      $("#rback").onclick = () => { reviewScreen = false; draw(); };
      $("#submit").onclick = () => { if (un.length && !confirm(`You have ${un.length} unanswered question${un.length > 1 ? "s" : ""}. Submit anyway?`)) return; submit(); };
    }
    function submit() {
      const pts = A.qs.map((q, k) => scoreOf(q, S.ans[k]));
      const score = pts.reduce((a, b) => a + b, 0);
      S.done = { score, total, pts, when: new Date().toISOString(), mins: Math.round((Date.now() - S.start) / 6000) / 10, sent: false };
      S.lockAnn = false; save(); reviewScreen = true; draw(); send();
    }
    function annSummary() {
      const gs = sel => new Set($$(sel, lscroll).map(m => m.dataset.g)).size;
      const notes = [...new Set($$("mark.nt.first, mark.first[data-note]", lscroll).map(m => m.dataset.note).filter(Boolean))].concat($$(".pin", lscroll).map(p => p.dataset.note).filter(Boolean));
      return { hl: gs("mark.hl"), ul: gs("mark.ul"), notes };
    }
    async function send() {
      const msg = t => { const m = $("#sendmsg"); if (m) m.innerHTML = t; };
      if (preview) { msg("👀 Teacher preview: nothing was sent."); return; }
      const d = S.done, an = annSummary();
      const responses = A.qs.map((q, k) => `Q${k + 1}: ${answerText(q, S.ans[k])}`).join(" | ") + ` || Annotations (not graded): ${an.hl} highlights, ${an.ul} underlines, ${an.notes.length} notes` + (an.notes.length ? ": " + an.notes.map(n => `“${n}”`).join(" ") : "") + ` || Time: ${d.mins} min · Attempt ${S.att}`;
      const body = { action: "score", student: who, activity: `${A.kind} · ${A.subject}: ${A.title}`, score: `${d.score}/${d.total}`, scoreNum: d.score, total: d.total, percent: Math.round(d.score / d.total * 100) + "%",
        qlabels: A.qs.map((q, k) => `Q${k + 1} ${TYPE[q.t]}`), qpoints: d.pts, qmax: A.qs.map(maxOf), responses: responses.slice(0, 2500) };
      msg("Sending your score to " + esc(who.teacher) + "…");
      try {
        if (!HUB_URL) {
          const db = LS.get("hubDemo", {}); (db.scores = db.scores || []).push(Object.assign({}, body, { time: new Date().toISOString() })); LS.set("hubDemo", db);
          d.sent = true; save(); msg("👀 Preview mode: saved on this computer only. Your teacher still needs to connect the Google Sheet.");
        } else {
          const r = await (await fetch(HUB_URL, { method: "POST", body: JSON.stringify(body) })).json();
          if (!r.ok) throw new Error(r.error);
          d.sent = true; save(); msg(`✅ Sent to ${esc(who.teacher)}!`);
        }
        const b = $("#resend"); if (b) b.textContent = "📤 Send again (backup)";
      } catch (e) { msg("⚠️ " + esc(e.message || "Could not send. Check your internet and press Send again.")); }
    }
    function drawScore() {
      const d = S.done, pc = Math.round(d.score / d.total * 100);
      qbox.innerHTML = `<div class="scorecard"><div class="ring" style="--p:${pc}"><b>${pc}%</b></div><div><h2>${d.score} / ${d.total} points</h2>
        <p class="mu">Finished in about ${d.mins} min.</p><p id="sendmsg" class="sendmsg">${d.sent ? (preview ? "👀 Teacher preview: nothing was sent." : HUB_URL ? `✅ Sent to ${esc(who.teacher)}!` : "👀 Preview mode: saved on this computer only.") : ""}</p></div></div>
        <div class="rgrid">${A.qs.map((q, k) => { const s = d.pts[k], m = maxOf(q); return `<button data-k="${k}" class="${s === m ? "right" : s ? "part" : "wrong"}"><b>${k + 1}</b><span>${s}/${m}</span></button>`; }).join("")}</div>
        <p class="mu">Tap a number to see the correct answer and why. Your highlights and notes are still on the left.</p>`;
      $$(".rgrid button", qbox).forEach(b => b.onclick = () => { reviewScreen = false; S.cur = +b.dataset.k; save(); draw(); });
      qfoot.innerHTML = `<button class="pill-btn" id="resend" ${preview ? "hidden" : ""}>${d.sent ? "📤 Send again (backup)" : "📤 Send to my teacher"}</button><button class="pill-btn dark" id="again">↻ Try again</button>`;
      $("#resend").onclick = send;
      $("#again").onclick = () => { if (!confirm("Start a new attempt? Your answers will be cleared (your annotations stay). Your teacher will see your newest score.")) return;
        S.ans = {}; S.flags = {}; S.cur = 0; S.done = null; S.att = (S.att || 1) + 1; S.start = Date.now();
        A.qs.forEach((q, k) => { if (q.t === "order") S.ans[k] = { v: shuffle(q.items.map((_, i) => i)), moved: false }; }); save(); reviewScreen = false; draw(); };
    }
    reviewScreen = !!S.done; draw();
  }

  function shuffle(a) { a = [...a]; if (a.length < 2) return a; do { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } } while (a.every((v, i) => v === i)); return a; }

  /* ---------- reading blocks ---------- */
  function renderSource(s) {
    let pn = 0;
    return (s.title ? `<h2 class="stitle">${s.title}</h2>` : "") + s.blocks.map(b => {
      if (b.sim) { const i = SIMS.push(b) - 1; return `<div class="rc-sim rc-noann" data-sim="${i}"></div>`; }
      if (b.h) return `<h3>${b.h}</h3>`;
      if (b.p) return `<p class="${b.n === false ? "" : s.numbered ? "num" : ""}">${s.numbered && b.n !== false ? `<span class="pn rc-noann" aria-hidden="true">${++pn}</span>` : ""}${b.p}</p>`;
      if (b.quote) return `<blockquote>${b.quote}${b.by ? `<cite class="rc-noann">— ${b.by}</cite>` : ""}</blockquote>`;
      if (b.fig) return `<figure class="rc-fig ${b.paper ? "paper" : ""} ${b.wide ? "wide" : ""}"><div class="figbox">${b.fig}</div>${b.cap ? `<figcaption>${b.cap}</figcaption>` : ""}</figure>`;
      if (b.img) return `<figure class="rc-fig"><div class="figbox"><img src="${b.img}" alt="${esc(b.alt || "")}"></div>${b.cap ? `<figcaption>${b.cap}</figcaption>` : ""}</figure>`;
      if (b.table) { const t = b.table; return `<figure class="rc-fig tbl"><div class="figbox"><div class="tablewrap"><table>${t.head ? `<thead><tr>${t.head.map(x => `<th>${x}</th>`).join("")}</tr></thead>` : ""}<tbody>${t.rows.map(r => `<tr>${r.map((x, i) => i === 0 && t.rowHead ? `<th scope="row">${x}</th>` : `<td>${x}</td>`).join("")}</tr>`).join("")}</tbody></table></div></div>${t.cap ? `<figcaption>${t.cap}</figcaption>` : ""}</figure>`; }
      if (b.vocab) return `<div class="vocab"><b class="rc-noann">Key words</b><dl>${b.vocab.map(v => `<div><dt>${v[0]}</dt><dd>${v[1]}</dd></div>`).join("")}</dl></div>`;
      if (b.box) return `<div class="callout">${b.box}</div>`;
      if (b.src) return `<p class="srcline">${b.src}</p>`;
      if (b.listen) { const i = SAY.push(b.listen.map(strip).join(" ")) - 1;
        return `<div class="listen rc-noann" data-say="${i}"><div class="lhead">🎧 <b>${b.title || "Listen to the passage"}</b></div>
          <div class="lbtns"><button type="button" class="pill-btn dark" data-sp="play">▶ Play</button><button type="button" class="pill-btn" data-sp="pause">⏸ Pause</button><button type="button" class="pill-btn" data-sp="stop">⏮ Start over</button>
          <label class="lrate">Speed <select data-sp="rate"><option value="0.8">Slower</option><option value="0.95" selected>Normal</option><option value="1.1">Faster</option></select></label></div>
          <p class="lstat" aria-live="polite">Use headphones. You may listen more than once.</p></div>
          <details class="transcript"><summary>Show the transcript (try listening first)</summary>${b.listen.map(t => `<p>${t}</p>`).join("")}</details>`; }
      if (b.html) return b.html;
      return "";
    }).join("");
  }
})();
