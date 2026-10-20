/* =====================================================================
   🔬 SIMULATIONS for Study Guides and Honors & AP (no need to edit)
   Add one to any reading with a block like:
       { sim: "slope", title: "Slope Explorer", tip: "Try a negative slope.", lines: [{ m: 2, b: 1 }] }
   Simulations are for practice. They are NOT graded.
   Available: slope, quadratic, pythag, transform, atom, gas, balance,
              osmosis, punnett, timeline, datarace, branches, plot, classify
   ===================================================================== */
window.RCSIM = (function () {
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const fm = (n, d = 2) => { const r = Math.round(n * 10 ** d) / 10 ** d; return (Object.is(r, -0) ? 0 : r).toString().replace("-", "−"); };
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const col = (el, v) => getComputedStyle(el).getPropertyValue(v).trim() || "#888";
  const $ = (s, r) => r.querySelector(s), $$ = (s, r) => [...r.querySelectorAll(s)];
  function shell(el, o, def, icon) {
    el.innerHTML = `<div class="sim"><div class="simhead"><span class="simic">${icon || "🔬"}</span><b>${esc(o.title || def)}</b><span class="simtag">Simulation · try it · not graded</span></div><div class="simbody"></div>${o.tip ? `<p class="simtip">💡 ${o.tip}</p>` : ""}</div>`;
    return $(".simbody", el);
  }
  const sl = (id, label, min, max, step, val) => `<label class="simsl"><span>${label} <b data-v="${id}">${fm(val)}</b></span><input type="range" data-s="${id}" min="${min}" max="${max}" step="${step}" value="${val}" aria-label="${esc(label)}"></label>`;
  /* animation loop that stops when the sim is removed from the page */
  function loop(el, fn) { let last = performance.now(); const f = t => { if (!el.isConnected) return; const dt = Math.min(0.05, (t - last) / 1000); last = t; fn(dt, t / 1000); requestAnimationFrame(f); }; requestAnimationFrame(f); }
  function tween(ms, fn, done) { const t0 = performance.now(); const f = t => { const p = clamp((t - t0) / ms, 0, 1), e = p < .5 ? 2 * p * p : 1 - (-2 * p + 2) ** 2 / 2; fn(e); if (p < 1) requestAnimationFrame(f); else if (done) done(); }; requestAnimationFrame(f); }
  function grid(R, W, every = 2) {
    const s = W / (2 * R); let g = "";
    for (let i = -R; i <= R; i++) { const p = W / 2 + i * s; g += `<line class="sg ${i === 0 ? "ax" : ""}" x1="${p}" y1="0" x2="${p}" y2="${W}"/><line class="sg ${i === 0 ? "ax" : ""}" x1="0" y1="${p}" x2="${W}" y2="${p}"/>`;
      if (i && i % every === 0) g += `<text class="st" x="${p}" y="${W / 2 + 13}" text-anchor="middle">${fm(i)}</text><text class="st" x="${W / 2 - 5}" y="${W / 2 - i * s + 4}" text-anchor="end">${fm(i)}</text>`; }
    return g + `<text class="st" x="${W - 6}" y="${W / 2 - 6}" text-anchor="end">x</text><text class="st" x="${W / 2 + 6}" y="12">y</text>`;
  }
  const lineEq = (m, b) => { const mm = m === 0 ? "" : m === 1 ? "x" : m === -1 ? "−x" : fm(m) + "x"; const bb = b === 0 ? (m === 0 ? "0" : "") : (mm ? (b > 0 ? " + " : " − ") + fm(Math.abs(b)) : fm(b)); return "y = " + mm + bb; };

  const S = {};

  /* ---------------- SLOPE / SYSTEMS ---------------- */
  S.slope = (el, o) => {
    const body = shell(el, o, "Slope Explorer", "📈"), R = o.range || 10, W = 360, s = W / (2 * R), X = x => W / 2 + x * s, Y = y => W / 2 - y * s;
    const L = (o.lines || [{ m: 1, b: 0 }]).slice(0, 2).map((l, i) => ({ m: l.m ?? 1, b: l.b ?? 0, label: l.label || (o.lines && o.lines.length > 1 ? "Line " + (i + 1) : "Your line") }));
    body.innerHTML = `<div class="simrow"><svg viewBox="0 0 ${W} ${W}" class="simsvg sq">${grid(R, W)}<g class="tri"></g><g class="lns"></g><g class="walk"></g></svg>
      <div class="simctl">${L.map((l, i) => `<div class="simgrp k${i + 1}"><b>${esc(l.label)}</b>${sl("m" + i, "Slope m", -5, 5, 0.5, l.m)}${sl("b" + i, "y-intercept b", -8, 8, 1, l.b)}<div class="simeq" data-eq="${i}"></div></div>`).join("")}<div class="simout"></div></div></div>`;
    const out = $(".simout", body);
    function draw() {
      L.forEach((l, i) => { l.m = +$(`[data-s=m${i}]`, body).value; l.b = +$(`[data-s=b${i}]`, body).value; $(`[data-v=m${i}]`, body).textContent = fm(l.m); $(`[data-v=b${i}]`, body).textContent = fm(l.b); $(`[data-eq="${i}"]`, body).textContent = lineEq(l.m, l.b); });
      $(".lns", body).innerHTML = L.map((l, i) => `<line class="sl${i + 1}" x1="${X(-R)}" y1="${Y(l.m * -R + l.b)}" x2="${X(R)}" y2="${Y(l.m * R + l.b)}"/><circle class="pt${i + 1}" cx="${X(0)}" cy="${Y(l.b)}" r="5"/>`).join("");
      const l = L[0];
      $(".tri", body).innerHTML = `<path class="rise" d="M${X(0)} ${Y(l.b)} H${X(1)}"/><path class="run" d="M${X(1)} ${Y(l.b)} V${Y(l.b + l.m)}"/><text class="st b" x="${X(.5)}" y="${Y(l.b) + (l.m >= 0 ? 15 : -7)}" text-anchor="middle">run 1</text><text class="st b" x="${X(1) + 6}" y="${Y(l.b + l.m / 2) + 4}">rise ${fm(l.m)}</text>`;
      let h = `<div><b>Slope:</b> ${fm(l.m)} (${l.m > 0 ? "rises left to right" : l.m < 0 ? "falls left to right" : "flat, horizontal line"})</div><div><b>y-intercept:</b> (0, ${fm(l.b)})</div><div><b>x-intercept:</b> ${l.m === 0 ? (l.b === 0 ? "every point" : "none") : `(${fm(-l.b / l.m)}, 0)`}</div>`;
      if (L.length > 1) { const [a, c] = L; if (a.m === c.m) h += `<div class="simbig">${a.b === c.b ? "Same line: <b>infinitely many solutions</b>" : "Parallel lines: <b>no solution</b>"}</div>`;
        else { const x = (c.b - a.b) / (a.m - c.m), y = a.m * x + a.b; h += `<div class="simbig">Solution (intersection): <b>(${fm(x)}, ${fm(y)})</b></div>`; $(".lns", body).innerHTML += `<circle class="hit" cx="${X(x)}" cy="${Y(y)}" r="7"/>`; } }
      out.innerHTML = h;
    }
    body.addEventListener("input", draw); draw();
    let t = 0; loop(el, dt => { t += dt; const x = Math.sin(t * 0.6) * (R - 1), l = L[0], y = l.m * x + l.b; $(".walk", body).innerHTML = Math.abs(y) <= R ? `<circle class="walker" cx="${X(x)}" cy="${Y(y)}" r="6"/><text class="st b" x="${X(x) + 9}" y="${Y(y) - 9}">(${fm(x, 1)}, ${fm(y, 1)})</text>` : ""; });
  };

  /* ---------------- QUADRATIC (vertex form) ---------------- */
  S.quadratic = (el, o) => {
    const body = shell(el, o, "Parabola Lab", "🏀"), R = 10, W = 360, s = W / (2 * R), X = x => W / 2 + x * s, Y = y => W / 2 - y * s;
    body.innerHTML = `<div class="simrow"><svg viewBox="0 0 ${W} ${W}" class="simsvg sq">${grid(R, W)}<g class="par"></g><g class="ball"></g></svg>
      <div class="simctl"><div class="simgrp k1"><b>y = a(x − h)² + k</b>${sl("a", "a (stretch / flip)", -3, 3, 0.25, o.a ?? -1)}${sl("h", "h (left / right)", -6, 6, 1, o.h ?? 0)}${sl("k", "k (up / down)", -8, 8, 1, o.k ?? 6)}</div>
      <button class="pill-btn dark" data-go>🏀 Launch along the curve</button><div class="simout"></div></div></div>`;
    let a, h, k;
    function draw() {
      a = +$("[data-s=a]", body).value || 0.25; h = +$("[data-s=h]", body).value; k = +$("[data-s=k]", body).value;
      ["a", "h", "k"].forEach(v => $(`[data-v=${v}]`, body).textContent = fm({ a, h, k }[v]));
      let d = ""; for (let i = 0; i <= 120; i++) { const x = -R + 2 * R * i / 120, y = a * (x - h) ** 2 + k; d += (i ? "L" : "M") + X(x).toFixed(1) + " " + Y(clamp(y, -40, 40)).toFixed(1); }
      const disc = -k / a, zs = disc > 0 ? [h - Math.sqrt(disc), h + Math.sqrt(disc)] : disc === 0 ? [h] : [];
      $(".par", body).innerHTML = `<line class="axs" x1="${X(h)}" y1="0" x2="${X(h)}" y2="${W}"/><path class="sl1" d="${d}" fill="none"/><circle class="pt1" cx="${X(h)}" cy="${Y(k)}" r="6"/>` + zs.map(z => `<circle class="hit" cx="${X(z)}" cy="${Y(0)}" r="6"/>`).join("");
      const B = -2 * a * h, C = a * h * h + k;
      $(".simout", body).innerHTML = `<div><b>Vertex:</b> (${fm(h)}, ${fm(k)}) · <b>${a > 0 ? "minimum" : "maximum"}</b> (opens ${a > 0 ? "up ∪" : "down ∩"})</div><div><b>Axis of symmetry:</b> x = ${fm(h)}</div>
        <div><b>Zeros (x-intercepts):</b> ${zs.length ? zs.map(z => fm(z)).join(" and ") : "none (it never crosses the x-axis)"}</div><div><b>y-intercept:</b> (0, ${fm(C)})</div><div><b>Standard form:</b> y = ${(a === 1 ? "" : a === -1 ? "−" : fm(a)) + "x²" + (B ? ` ${B < 0 ? "−" : "+"} ${Math.abs(B) === 1 ? "" : fm(Math.abs(B))}x` : "") + (C ? ` ${C < 0 ? "−" : "+"} ${fm(Math.abs(C))}` : "")}</div>
        <div class="mu">${Math.abs(a) > 1 ? "|a| > 1 makes it narrower." : Math.abs(a) < 1 ? "|a| < 1 makes it wider." : "|a| = 1 is the regular width."}</div>`;
      return zs;
    }
    body.addEventListener("input", draw); draw();
    $("[data-go]", body).onclick = () => { const zs = draw(); const x0 = zs.length === 2 ? zs[0] : -R, x1 = zs.length === 2 ? zs[1] : R; let trail = "";
      tween(2200, p => { const x = x0 + (x1 - x0) * p, y = a * (x - h) ** 2 + k; trail += `<circle class="trail" cx="${X(x)}" cy="${Y(y)}" r="2"/>`; $(".ball", body).innerHTML = trail + (Math.abs(y) < R + 1 ? `<text x="${X(x)}" y="${Y(y) + 7}" text-anchor="middle" font-size="20">🏀</text>` : ""); }, () => setTimeout(() => { if (el.isConnected) $(".ball", body).innerHTML = ""; }, 1500)); };
  };

  /* ---------------- PYTHAGOREAN THEOREM + TRIG ---------------- */
  S.pythag = (el, o) => {
    const body = shell(el, o, "Pythagorean Pour", "📐"), W = 380, H = 330;
    body.innerHTML = `<div class="simrow"><svg viewBox="0 0 ${W} ${H}" class="simsvg"></svg><div class="simctl"><div class="simgrp k1"><b>Right triangle</b>${sl("a", "Leg a", 1, 12, 1, o.a ?? 3)}${sl("b", "Leg b", 1, 12, 1, o.b ?? 4)}</div>
      <button class="pill-btn dark" data-go>💧 Pour a² + b² into c²</button><div class="simout"></div></div></div>`;
    const svg = $("svg", body); let fa = 1, fb = 1, busy = false;
    function draw() {
      const a = +$("[data-s=a]", body).value, b = +$("[data-s=b]", body).value, c = Math.hypot(a, b);
      $("[data-v=a]", body).textContent = a; $("[data-v=b]", body).textContent = b;
      const minx = -a, maxx = b + a, miny = -b, maxy = a + b, k = Math.min((W - 30) / (maxx - minx), (H - 30) / (maxy - miny));
      const P = (x, y) => [15 + (x - minx) * k, H - 15 - (y - miny) * k], pt = (x, y) => P(x, y).map(v => v.toFixed(1)).join(" ");
      const poly = (pts, cls) => `<polygon class="${cls}" points="${pts.map(p => pt(...p)).join(",")}"/>`;
      const hf = clamp((a * a * (1 - fa) + b * b * (1 - fb)) / (c * c), 0, 1);
      let g = poly([[0, 0], [b, 0], [b, -b], [0, -b]], "sqb") + poly([[0, -b * (1 - fb)], [b, -b * (1 - fb)], [b, -b], [0, -b]], "wat") +
        poly([[0, 0], [0, a], [-a, a], [-a, 0]], "sqa") + poly([[-a * (1 - fa), 0], [-a * (1 - fa), a], [-a, a], [-a, 0]], "wat") +
        poly([[b, 0], [0, a], [a, a + b], [b + a, b]], "sqc") + poly([[b, 0], [0, a], [a * hf, a + b * hf], [b + a * hf, b * hf]], "wat") +
        poly([[0, 0], [b, 0], [0, a]], "tri");
      const [cx, cy] = P(0, 0); g += `<path class="ra" d="M${cx + 12} ${cy} V${cy - 12} H${cx}"/>`;
      const lab = (x, y, t) => { const [u, v] = P(x, y); return `<text class="st big" x="${u}" y="${v}" text-anchor="middle">${t}</text>`; };
      g += lab(b / 2, -b / 2, `b² = ${b * b}`) + lab(-a / 2, a / 2, `a² = ${a * a}`) + lab(b / 2 + a / 2, a / 2 + b / 2, `c² = ${fm(c * c)}`);
      svg.innerHTML = g;
      const th = Math.atan2(a, b) * 180 / Math.PI;
      $(".simout", body).innerHTML = `<div class="simbig">c = √(${a}² + ${b}²) = √${a * a + b * b} = <b>${fm(c)}</b>${Number.isInteger(c) ? ` <span class="badge">Pythagorean triple!</span>` : ""}</div>
        <div><b>Angle θ</b> (across from leg a) ≈ ${fm(th, 1)}°</div><div>sin θ = a/c = ${fm(a / c, 3)} · cos θ = b/c = ${fm(b / c, 3)} · tan θ = a/b = ${fm(a / b, 3)}</div>`;
    }
    body.addEventListener("input", () => { if (!busy) { fa = fb = 1; draw(); } }); draw();
    $("[data-go]", body).onclick = () => { if (busy) return; busy = true; fa = fb = 1; draw();
      tween(1300, p => { fa = 1 - p; draw(); }, () => tween(1300, p => { fb = 1 - p; draw(); }, () => setTimeout(() => { busy = false; }, 200))); };
  };

  /* ---------------- TRANSFORMATIONS ---------------- */
  S.transform = (el, o) => {
    const body = shell(el, o, "Transformation Station", "🔄"), R = 10, W = 360, s = W / (2 * R), X = x => W / 2 + x * s, Y = y => W / 2 - y * s;
    const pre = (o.shape || [[1, 1], [4, 1], [1, 3]]).map(p => [...p]), names = "ABCDEF";
    let cur = pre.map(p => [...p]), log = [];
    body.innerHTML = `<div class="simrow"><svg viewBox="0 0 ${W} ${W}" class="simsvg sq">${grid(R, W)}<g class="shp"></g></svg>
      <div class="simctl"><div class="simgrp k1"><b>Translate</b>${sl("dx", "Move right/left", -6, 6, 1, 3)}${sl("dy", "Move up/down", -6, 6, 1, -2)}<button class="pill-btn" data-t="tr">➡️ Translate</button></div>
      <div class="simbtns"><button class="pill-btn" data-t="rx">↕️ Reflect over x-axis</button><button class="pill-btn" data-t="ry">↔️ Reflect over y-axis</button><button class="pill-btn" data-t="rd">⤢ Reflect over y = x</button>
      <button class="pill-btn" data-t="r90">↺ Rotate 90°</button><button class="pill-btn" data-t="r180">⟲ Rotate 180°</button><button class="pill-btn" data-t="d2">🔍 Dilate ×2</button><button class="pill-btn" data-t="dh">🔎 Dilate ×½</button><button class="pill-btn dark" data-t="reset">↻ Reset</button></div>
      <div class="simout"></div></div></div>`;
    const path = pts => pts.map((p, i) => (i ? "L" : "M") + X(p[0]).toFixed(1) + " " + Y(p[1]).toFixed(1)).join(" ") + "Z";
    function draw(pts) {
      $(".shp", body).innerHTML = `<path class="pre" d="${path(pre)}"/><path class="img" d="${path(pts)}"/>` + pts.map((p, i) => `<circle class="pt2" cx="${X(p[0])}" cy="${Y(p[1])}" r="4"/><text class="st b" x="${X(p[0]) + 6}" y="${Y(p[1]) - 6}">${names[i]}′</text>`).join("") + pre.map((p, i) => `<text class="st mu" x="${X(p[0]) - 6}" y="${Y(p[1]) + 14}" text-anchor="end">${names[i]}</text>`).join("");
    }
    function report() { const rigid = !log.some(l => /Dilat/.test(l));
      $(".simout", body).innerHTML = `<table class="simtbl"><tr><th>Pre-image</th><th>Image</th></tr>${pre.map((p, i) => `<tr><td>${names[i]} (${fm(p[0])}, ${fm(p[1])})</td><td>${names[i]}′ (${fm(cur[i][0])}, ${fm(cur[i][1])})</td></tr>`).join("")}</table>
        <div><b>Moves:</b> ${log.length ? log.join(" → ") : "none yet"}</div><div class="simbig">${rigid ? "Rigid motion: the image is <b>congruent</b> (same size and shape)." : "A dilation changed the size: the image is <b>similar</b>, not congruent."}</div>`; }
    function apply(f, label, rot) { const from = cur.map(p => [...p]), to = cur.map(p => f(p[0], p[1])); log.push(label); if (log.length > 5) log.shift();
      tween(700, e => { draw(from.map((p, i) => { if (rot) { const ang = rot * e * Math.PI / 180, c = Math.cos(ang), s2 = Math.sin(ang); return [p[0] * c - p[1] * s2, p[0] * s2 + p[1] * c]; } return [p[0] + (to[i][0] - p[0]) * e, p[1] + (to[i][1] - p[1]) * e]; })); }, () => { cur = to; draw(cur); report(); }); }
    body.addEventListener("input", e => { const v = e.target.dataset.s; if (v) $(`[data-v=${v}]`, body).textContent = fm(+e.target.value); });
    $$("[data-t]", body).forEach(b => b.onclick = () => { const t = b.dataset.t, dx = +$("[data-s=dx]", body).value, dy = +$("[data-s=dy]", body).value;
      if (t === "tr") apply((x, y) => [x + dx, y + dy], `(x, y) → (x ${dx < 0 ? "−" : "+"} ${Math.abs(dx)}, y ${dy < 0 ? "−" : "+"} ${Math.abs(dy)})`);
      if (t === "rx") apply((x, y) => [x, -y], "(x, y) → (x, −y)"); if (t === "ry") apply((x, y) => [-x, y], "(x, y) → (−x, y)"); if (t === "rd") apply((x, y) => [y, x], "(x, y) → (y, x)");
      if (t === "r90") apply((x, y) => [-y, x], "rotate 90°: (x, y) → (−y, x)", 90); if (t === "r180") apply((x, y) => [-x, -y], "rotate 180°: (x, y) → (−x, −y)", 180);
      if (t === "d2") apply((x, y) => [2 * x, 2 * y], "Dilate ×2: (x, y) → (2x, 2y)"); if (t === "dh") apply((x, y) => [x / 2, y / 2], "Dilate ×½: (x, y) → (½x, ½y)");
      if (t === "reset") { cur = pre.map(p => [...p]); log = []; draw(cur); report(); } });
    draw(cur); report();
  };

  /* ---------------- ATOM BUILDER ---------------- */
  const ELEM = [["", ""], ["Hydrogen", "H"], ["Helium", "He"], ["Lithium", "Li"], ["Beryllium", "Be"], ["Boron", "B"], ["Carbon", "C"], ["Nitrogen", "N"], ["Oxygen", "O"], ["Fluorine", "F"], ["Neon", "Ne"], ["Sodium", "Na"], ["Magnesium", "Mg"], ["Aluminum", "Al"], ["Silicon", "Si"], ["Phosphorus", "P"], ["Sulfur", "S"], ["Chlorine", "Cl"], ["Argon", "Ar"], ["Potassium", "K"], ["Calcium", "Ca"]];
  const STABLE = { 1: [1, 2], 2: [3, 4], 3: [6, 7], 4: [9], 5: [10, 11], 6: [12, 13], 7: [14, 15], 8: [16, 17, 18], 9: [19], 10: [20, 21, 22], 11: [23], 12: [24, 25, 26], 13: [27], 14: [28, 29, 30], 15: [31], 16: [32, 33, 34, 36], 17: [35, 37], 18: [36, 38, 40], 19: [39, 41], 20: [40, 42, 43, 44, 46] };
  S.atom = (el, o) => {
    const body = shell(el, o, "Build an Atom", "⚛️"); let p = o.p ?? 6, n = o.n ?? 6, e = o.e ?? 6;
    body.innerHTML = `<div class="simrow"><svg viewBox="-160 -160 320 320" class="simsvg sq"><g class="shells"></g><g class="nuc"></g></svg>
      <div class="simctl">${[["p", "Protons", "k2"], ["n", "Neutrons", "k3"], ["e", "Electrons", "k1"]].map(([id, t, k]) => `<div class="simstep ${k}"><span>${t}</span><button class="pill-btn" data-d="${id}-">−</button><b data-c="${id}"></b><button class="pill-btn" data-d="${id}+">+</button></div>`).join("")}
      <div class="ptcell"></div><div class="simout"></div></div></div>`;
    const svg = $("svg", body); let wob = 0;
    function draw() {
      const tot = p + n, nuc = []; let pc = 0;
      for (let i = 0; i < tot; i++) { const r = 4.6 * Math.sqrt(i), a = i * 2.39996, isP = pc < Math.round((i + 1) * p / tot); if (isP) pc++;
        nuc.push(`<circle class="${isP ? "pro" : "neu"}" cx="${(r * Math.cos(a)).toFixed(1)}" cy="${(r * Math.sin(a)).toFixed(1)}" r="5"/>`); }
      const nucFixed = nuc;
      $(".nuc", svg).innerHTML = nucFixed.join("");
      const caps = [2, 8, 8, 2], radii = [55, 85, 115, 145]; let left = e, sh = "";
      caps.forEach((cap, si) => { const cnt = Math.min(cap, left); left -= cnt; if (si > 0 && cnt === 0 && e <= caps.slice(0, si).reduce((x, y) => x + y, 0)) { return; }
        sh += `<circle class="orb" r="${radii[si]}"/><g class="ring" data-r="${si}">${Array.from({ length: cnt }, (_, j) => { const a = j / cnt * 2 * Math.PI; return `<circle class="ele" cx="${(radii[si] * Math.cos(a)).toFixed(1)}" cy="${(radii[si] * Math.sin(a)).toFixed(1)}" r="5"/>`; }).join("")}</g>`; });
      $(".shells", svg).innerHTML = sh;
      ["p", "n", "e"].forEach(id => $(`[data-c=${id}]`, body).textContent = { p, n, e }[id]);
      const [name, sym] = ELEM[p] || ["", ""], A = p + n, q = p - e, shells = []; let l2 = e; caps.forEach(c => { if (l2 > 0) { shells.push(Math.min(c, l2)); l2 -= c; } });
      const stable = p && (STABLE[p] || []).includes(A); wob = p && !stable ? 1 : 0;
      $(".ptcell", body).innerHTML = p ? `<div class="pcell"><small>${p}</small><b>${sym}</b><span>${name}</span><small>mass # ${A}</small></div>` : `<div class="pcell empty"><b>?</b><span>Add a proton</span></div>`;
      $(".simout", body).innerHTML = p ? `<div><b>Element:</b> ${name} (atomic number ${p}, because it has ${p} proton${p > 1 ? "s" : ""})</div><div><b>Isotope:</b> ${name}-${A} · mass number = ${p} + ${n} = ${A}</div>
        <div><b>Charge:</b> ${q === 0 ? "0 → neutral atom" : (q > 0 ? "+" + q + " → cation (lost electrons)" : "−" + -q + " → anion (gained electrons)")}</div><div><b>Electron shells:</b> ${shells.join(", ") || "none"} · <b>valence electrons:</b> ${shells.length ? shells[shells.length - 1] : 0}</div>
        <div class="simbig">${stable ? "✅ Stable nucleus (a real isotope found in nature)" : "☢️ Unstable nucleus: this isotope would be radioactive and decay"}</div>` : "<div>No protons means no element. Press + next to Protons.</div>";
    }
    $$("[data-d]", body).forEach(b => b.onclick = () => { const [id, sgn] = [b.dataset.d[0], b.dataset.d[1]]; const d = sgn === "+" ? 1 : -1;
      if (id === "p") p = clamp(p + d, 0, 20); if (id === "n") n = clamp(n + d, 0, 26); if (id === "e") e = clamp(e + d, 0, 20); draw(); });
    draw();
    let t = 0; loop(el, dt => { t += dt; $$(".ring", svg).forEach(g => { const r = +g.dataset.r; g.setAttribute("transform", `rotate(${(t * (40 - r * 8)) % 360})`); });
      $(".nuc", svg).setAttribute("transform", wob ? `translate(${(Math.sin(t * 40) * 1.6).toFixed(2)} ${(Math.cos(t * 33) * 1.6).toFixed(2)})` : ""); });
  };

  /* ---------------- GAS LAWS (particles in a box) ---------------- */
  S.gas = (el, o) => {
    const body = shell(el, o, "Gas Law Lab", "🎈"), show = o.show || ["T", "V", "n"];
    body.innerHTML = `<div class="simcol"><canvas width="560" height="260" class="simcv"></canvas>
      <div class="simrow2"><div class="simgrp k1">${show.includes("T") ? sl("T", "Temperature (K)", 100, 600, 10, o.T ?? 300) : ""}${show.includes("V") ? sl("V", "Volume (L)", 5, 20, 1, o.V ?? 12) : ""}${show.includes("n") ? sl("n", "Amount (mol)", 0.5, 2, 0.25, o.n ?? 1) : ""}</div>
      <div class="simout"></div></div><div class="simbtns"><button class="pill-btn dark" data-rec>📌 Record data</button><button class="pill-btn" data-clr>Clear table</button></div><div class="simdata"></div></div>`;
    const cv = $("canvas", body), cx = cv.getContext("2d"), get = id => { const s = $(`[data-s=${id}]`, body); return s ? +s.value : { T: o.T ?? 300, V: o.V ?? 12, n: o.n ?? 1 }[id]; };
    let parts = [], hits = 0, hitRate = 0, acc = 0, rows = [];
    const P = () => 0.0821 * get("n") * get("T") / get("V");
    const wallX = () => 20 + get("V") / 20 * 520;
    function sync() { const want = Math.round(get("n") * 28); while (parts.length < want) { const a = Math.random() * 6.28; parts.push({ x: 30 + Math.random() * (wallX() - 40), y: 30 + Math.random() * 200, vx: Math.cos(a), vy: Math.sin(a) }); } parts.length = want;
      ["T", "V", "n"].forEach(id => { const v = $(`[data-v=${id}]`, body); if (v) v.textContent = fm(get(id)); });
      $(".simout", body).innerHTML = `<div class="gauge"><b>${fm(P(), 2)}</b> atm</div><div>P = nRT ÷ V = (${fm(get("n"))})(0.0821)(${get("T")}) ÷ ${get("V")}</div><div class="mu">Wall hits per second: <b data-h>${Math.round(hitRate)}</b></div>`; }
    body.addEventListener("input", sync); sync();
    $("[data-rec]", body).onclick = () => { rows.push([get("T"), get("V"), get("n"), fm(P(), 2)]); if (rows.length > 8) rows.shift(); tbl(); };
    $("[data-clr]", body).onclick = () => { rows = []; tbl(); };
    function tbl() { $(".simdata", body).innerHTML = rows.length ? `<table class="simtbl"><tr><th>T (K)</th><th>V (L)</th><th>n (mol)</th><th>P (atm)</th></tr>${rows.map(r => `<tr>${r.map(x => `<td>${x}</td>`).join("")}</tr>`).join("")}</table>` : ""; }
    loop(el, dt => {
      const T = get("T"), sp = 55 * Math.sqrt(T / 100), wx = wallX(), fg = col(el, "--fg"), hot = clamp((T - 100) / 500, 0, 1);
      cx.clearRect(0, 0, 560, 260);
      cx.fillStyle = col(el, "--soft"); cx.fillRect(20, 20, wx - 20, 220);
      cx.strokeStyle = fg; cx.lineWidth = 3; cx.strokeRect(20, 20, wx - 20, 220);
      cx.fillStyle = fg; cx.fillRect(wx - 3, 14, 8, 232); cx.font = "13px Nunito, sans-serif"; cx.fillText("◀ movable wall (volume)", Math.min(wx + 8, 400), 140);
      cx.fillStyle = `rgb(${Math.round(60 + 195 * hot)},${Math.round(120 - 40 * hot)},${Math.round(230 - 190 * hot)})`;
      parts.forEach(q => { q.x += q.vx * sp * dt; q.y += q.vy * sp * dt;
        if (q.x < 26) { q.x = 26; q.vx = Math.abs(q.vx); hits++; } if (q.x > wx - 6) { q.x = wx - 6; q.vx = -Math.abs(q.vx); hits++; }
        if (q.y < 26) { q.y = 26; q.vy = Math.abs(q.vy); hits++; } if (q.y > 234) { q.y = 234; q.vy = -Math.abs(q.vy); hits++; }
        cx.beginPath(); cx.arc(q.x, q.y, 4, 0, 6.283); cx.fill(); });
      acc += dt; if (acc >= 1) { hitRate = hits / acc; hits = 0; acc = 0; const h = $("[data-h]", body); if (h) h.textContent = Math.round(hitRate); }
    });
  };

  /* ---------------- EQUATION BALANCER ---------------- */
  S.balance = (el, o) => {
    const body = shell(el, o, "Balance the Equation", "⚖️"), R = o.r || [], Pr = o.p || [], all = [...R, ...Pr], co = all.map(() => 1);
    const els = [...new Set(all.flatMap(m => Object.keys(m.a)))], pal = ["--c1", "--c2", "--c3", "--c4", "--muted"];
    body.innerHTML = `<div class="simcol"><div class="eqrow">${all.map((m, i) => `${i === R.length ? '<span class="arrow">→</span>' : i ? '<span class="plus">+</span>' : ""}<span class="mol"><span class="simstep"><button class="pill-btn" data-i="${i}" data-d="-1">−</button><b data-c="${i}">1</b><button class="pill-btn" data-i="${i}" data-d="1">+</button></span><span class="fml">${m.f}</span><span class="dots" data-m="${i}"></span></span>`).join("")}</div>
      <div class="tally"></div><div class="simout"></div></div>`;
    const gcd = (a, b) => b ? gcd(b, a % b) : a;
    function draw() {
      co.forEach((c, i) => { $(`[data-c="${i}"]`, body).textContent = c; $(`[data-m="${i}"]`, body).innerHTML = Array.from({ length: c }, () => `<span class="mdot">${Object.entries(all[i].a).map(([e, k]) => Array.from({ length: k }, () => `<i style="background:var(${pal[els.indexOf(e) % 5]})" title="${e}"></i>`).join("")).join("")}</span>`).join(""); });
      const cnt = side => els.map(e => side.reduce((t, m, j) => t + (m.a[e] || 0) * co[all.indexOf(m)], 0));
      const L = cnt(R), Rt = cnt(Pr), mx = Math.max(...L, ...Rt, 1);
      $(".tally", body).innerHTML = `<table class="simtbl"><tr><th>Atom</th><th>Reactants</th><th></th><th>Products</th></tr>${els.map((e, i) => `<tr><td><i class="key" style="background:var(${pal[i % 5]})"></i> ${e}</td><td><span class="bar" style="width:${L[i] / mx * 100}%"></span> ${L[i]}</td><td>${L[i] === Rt[i] ? "✅" : "❌"}</td><td><span class="bar" style="width:${Rt[i] / mx * 100}%"></span> ${Rt[i]}</td></tr>`).join("")}</table>`;
      const ok = els.every((e, i) => L[i] === Rt[i]), low = co.reduce(gcd) === 1;
      $(".simout", body).innerHTML = ok ? (low ? `<div class="simbig win">🎉 Balanced! Atoms are conserved: same count of every element on both sides.</div>` : `<div class="simbig">Balanced, but not in lowest terms. Divide every coefficient by ${co.reduce(gcd)}.</div>`) : `<div class="mu">Change the coefficients (big numbers in front). Never change the small subscripts!</div>`;
    }
    $$("[data-d]", body).forEach(b => b.onclick = () => { const i = +b.dataset.i; co[i] = clamp(co[i] + +b.dataset.d, 1, 9); draw(); });
    draw();
  };

  /* ---------------- OSMOSIS ---------------- */
  S.osmosis = (el, o) => {
    const body = shell(el, o, "Osmosis Lab", "💧"), inside = o.inside ?? 0.9;
    body.innerHTML = `<div class="simcol"><canvas width="560" height="280" class="simcv"></canvas><div class="simrow2"><div class="simgrp k1">${sl("out", "Salt outside the cell (%)", 0, 6, 0.1, o.out ?? 0.9)}
      <div class="simbtns"><button class="pill-btn on" data-k="animal">🩸 Animal cell</button><button class="pill-btn" data-k="plant">🌿 Plant cell</button></div></div><div class="simout"></div></div></div>`;
    const cv = $("canvas", body), cx = cv.getContext("2d"); let kind = "animal", r = 80, burst = 0, water = [], sol = [];
    for (let i = 0; i < 40; i++) sol.push({ a: Math.random() * 6.283, d: Math.sqrt(Math.random()), ph: Math.random() * 6, out: false });
    for (let i = 0; i < 260; i++) sol.push({ u: Math.random(), v: Math.random(), ph: Math.random() * 6, out: true });
    $$("[data-k]", body).forEach(b => b.onclick = () => { kind = b.dataset.k; burst = 0; $$("[data-k]", body).forEach(x => x.classList.toggle("on", x === b)); });
    const out = () => +$("[data-s=out]", body).value;
    function info() { const o2 = out(), d = inside - o2; $("[data-v=out]", body).textContent = fm(o2, 1);
      const type = Math.abs(d) < 0.05 ? "isotonic" : d > 0 ? "hypotonic" : "hypertonic";
      const res = type === "isotonic" ? "No net movement of water. The cell stays the same size." : type === "hypotonic" ? (kind === "animal" ? (o2 < 0.3 ? "Water rushes IN. The animal cell swells and can burst (lysis)." : "Water moves IN. The animal cell swells.") : "Water moves IN. The plant cell becomes firm (turgid); the cell wall keeps it from bursting.") : (kind === "animal" ? "Water moves OUT. The animal cell shrinks (crenation)." : "Water moves OUT. The membrane pulls away from the cell wall (plasmolysis) and the plant wilts.");
      $(".simout", body).innerHTML = `<div><b>Inside the cell:</b> ${inside}% salt · <b>Outside:</b> ${fm(o2, 1)}% salt</div><div class="simbig">The solution outside is <b>${type}</b>.</div><div>${res}</div><div class="mu">Water moves toward the side with MORE dissolved solute. The salt can’t cross the membrane.</div>`;
      return d; }
    body.addEventListener("input", () => { burst = 0; info(); }); info();
    loop(el, (dt, t) => {
      const d = info(), W = 560, H = 280, c0 = [W / 2, H / 2];
      const target = kind === "animal" ? clamp(80 * (1 + 0.6 * d), 48, 125) : clamp(80 * (1 + 0.35 * d), 52, 92);
      r += (target - r) * Math.min(1, dt * 1.2);
      if (kind === "animal" && r > 118 && out() < 0.3) burst = Math.min(1, burst + dt);
      cx.clearRect(0, 0, W, H); const fg = col(el, "--fg"), c1 = col(el, "--c1"), c3 = col(el, "--c3"), c4 = col(el, "--c4");
      if (kind === "plant") { cx.strokeStyle = c4; cx.lineWidth = 6; cx.strokeRect(c0[0] - 96, c0[1] - 96, 192, 192); cx.fillStyle = c4; cx.font = "12px Nunito, sans-serif"; cx.fillText("cell wall", c0[0] - 92, c0[1] - 102); }
      cx.setLineDash(burst ? [6, 10] : []); cx.strokeStyle = fg; cx.lineWidth = 3; cx.beginPath();
      if (kind === "plant") { const h = r * 1.13; cx.roundRect ? cx.roundRect(c0[0] - h, c0[1] - h, 2 * h, 2 * h, 28 * (92 / r)) : cx.rect(c0[0] - h, c0[1] - h, 2 * h, 2 * h); } else cx.arc(c0[0], c0[1], r + burst * 30, 0, 6.283);
      cx.stroke(); cx.setLineDash([]);
      cx.fillStyle = fg; cx.font = "12px Nunito, sans-serif"; cx.fillText("cell membrane", c0[0] + r * 0.8, c0[1] + r + 18);
      const R2 = kind === "plant" ? r * 1.13 : r;
      /* same dots per area inside and outside = same concentration */
      cx.fillStyle = c3; const dens = 0.00045, nIn = Math.round(inside * dens * Math.PI * 80 * 80), nOut = Math.min(260, Math.round(out() * dens * (W * H - Math.PI * R2 * R2)));
      let ki = 0, ko = 0;
      sol.forEach(p => { const jig = Math.sin(t * 2 + p.ph) * 3; let x, y;
        if (!p.out) { if (ki++ >= nIn) return; const rr = p.d * (R2 - 10); x = c0[0] + rr * Math.cos(p.a) + jig; y = c0[1] + rr * Math.sin(p.a); }
        else { if (ko >= nOut) return; x = 8 + p.u * (W - 16) + jig; y = 44 + p.v * (H - 70); const far = kind === "plant" ? Math.max(Math.abs(x - c0[0]), Math.abs(y - c0[1])) > 104 : Math.hypot(x - c0[0], y - c0[1]) > R2 + 8; if (!far) return; ko++; }
        cx.beginPath(); cx.arc(x, y, 4.5, 0, 6.283); cx.fill(); });
      const net = clamp(d * 3, -1, 1);
      if (Math.random() < 0.5 + Math.abs(net) * 0.5) { const inward = Math.random() < 0.5 + net / 2; water.push({ a: Math.random() * 6.283, p: 0, inward }); }
      cx.fillStyle = c1; water = water.filter(w => { w.p += dt * 0.6; if (w.p > 1) return false; const rr = w.inward ? R2 + 50 - w.p * 90 : R2 - 40 + w.p * 90; cx.beginPath(); cx.arc(c0[0] + rr * Math.cos(w.a), c0[1] + rr * Math.sin(w.a), 2.6, 0, 6.283); cx.fill(); return true; });
      cx.font = "13px Nunito, sans-serif"; cx.fillStyle = c1; cx.fillText("● water (crosses the membrane)", 10, 18); cx.fillStyle = c3; cx.fillText("● salt (can’t cross)", 10, 36);
      if (Math.abs(net) > 0.05) { cx.fillStyle = fg; cx.font = "bold 15px Nunito, sans-serif"; cx.fillText(net > 0 ? "Net water flow: INTO the cell ➜" : "Net water flow: OUT of the cell ➜", W - 260, H - 12); }
    });
  };

  /* ---------------- PUNNETT SQUARE ---------------- */
  S.punnett = (el, o) => {
    const body = shell(el, o, "Punnett Square Breeder", "🧬"), L = o.letter || "B", l = L.toLowerCase(), mode = o.mode || "complete";
    const ph = { dom: o.dom || "Dominant trait", rec: o.rec || "Recessive trait", mid: o.mid || "Blended trait" };
    const G = [L + L, L + l, l + l];
    body.innerHTML = `<div class="simrow"><div class="psq"></div><div class="simctl"><label class="simsel">Parent 1 <select data-p="0">${G.map(g => `<option ${g === (o.p1 || L + l) ? "selected" : ""}>${g}</option>`).join("")}</select></label>
      <label class="simsel">Parent 2 <select data-p="1">${G.map(g => `<option ${g === (o.p2 || L + l) ? "selected" : ""}>${g}</option>`).join("")}</select></label>
      <div class="simout"></div><button class="pill-btn dark" data-go>🐣 Breed 100 offspring</button><div class="babies"></div></div></div>`;
    const phen = g => { const k = (g.match(new RegExp(L, "g")) || []).length; return mode === "incomplete" ? (k === 2 ? "dom" : k === 1 ? "mid" : "rec") : (k ? "dom" : "rec"); };
    const sort = g => g.split("").sort((a, b) => (a === L ? -1 : 1) - (b === L ? -1 : 1)).join("");
    let cells = [];
    function draw(anim) {
      const p1 = $("[data-p='0']", body).value, p2 = $("[data-p='1']", body).value; cells = [];
      for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) cells.push(sort(p2[i] + p1[j]));
      $(".psq", body).innerHTML = `<table class="punnett"><tr><th></th><th class="gam">${p1[0]}</th><th class="gam">${p1[1]}</th></tr>${[0, 1].map(i => `<tr><th class="gam">${p2[i]}</th>${[0, 1].map(j => { const g = cells[i * 2 + j]; return `<td class="${phen(g)} ${anim ? "pop" : ""}" style="animation-delay:${(i * 2 + j) * 0.25}s">${g}<small>${ph[phen(g)]}</small></td>`; }).join("")}</tr>`).join("")}</table><p class="mu">Parent 1’s gametes go across the top. Parent 2’s go down the side.</p>`;
      const gc = {}, pc = {}; cells.forEach(g => { gc[g] = (gc[g] || 0) + 1; pc[phen(g)] = (pc[phen(g)] || 0) + 1; });
      $(".simout", body).innerHTML = `<div><b>Genotypes:</b> ${Object.entries(gc).map(([g, c]) => `${c} ${g}`).join(" : ")} &nbsp;(${Object.entries(gc).map(([g, c]) => `${g} ${c * 25}%`).join(", ")})</div><div><b>Phenotypes:</b> ${Object.entries(pc).map(([k, c]) => `${ph[k]} ${c * 25}%`).join(", ")}</div>`;
      $(".babies", body).innerHTML = "";
    }
    $$("select", body).forEach(s => s.onchange = () => draw(true)); draw(true);
    $("[data-go]", body).onclick = () => { const box = $(".babies", body), tally = { dom: 0, rec: 0, mid: 0 }; box.innerHTML = `<div class="kids"></div><div class="ktally"></div>`; let i = 0;
      const tick = () => { if (!el.isConnected || i >= 100) return; for (let k = 0; k < 4 && i < 100; k++, i++) { const g = cells[Math.floor(Math.random() * 4)], f = phen(g); tally[f]++; $(".kids", box).insertAdjacentHTML("beforeend", `<i class="kid ${f}" title="${g}"></i>`); }
        $(".ktally", box).innerHTML = Object.keys(ph).filter(k => tally[k] || (mode === "incomplete" || k !== "mid")).map(k => `<span class="${k}">${ph[k]}: <b>${tally[k]}</b></span>`).join(" · ") + (i >= 100 ? `<div class="mu">Real results are close to the Punnett square’s prediction, but not exact. That’s probability!</div>` : "");
        setTimeout(tick, 40); }; tick(); };
  };

  /* ---------------- TIMELINE ---------------- */
  S.timeline = (el, o) => {
    const body = shell(el, o, "Animated Timeline", "⏳"), ev = [...(o.events || [])].sort((a, b) => a.y - b.y), W = 600, H = 150;
    const y0 = o.from ?? Math.floor(ev[0].y / 5) * 5, y1 = o.to ?? Math.ceil(ev[ev.length - 1].y / 5) * 5, X = y => 30 + (y - y0) / (y1 - y0 || 1) * (W - 60);
    const tags = [...new Set(ev.map(e => e.tag).filter(Boolean))], tk = t => "k" + (tags.indexOf(t) % 4 + 1);
    body.innerHTML = `<div class="simcol"><svg viewBox="0 0 ${W} ${H}" class="simsvg wide"><line class="tl" x1="20" y1="${H / 2}" x2="${W - 20}" y2="${H / 2}"/>
      ${ev.map((e, i) => `<g class="tev ${tk(e.tag)}" data-i="${i}" tabindex="0" role="button" aria-label="${esc(e.y + ": " + e.t)}"><line x1="${X(e.y)}" y1="${H / 2}" x2="${X(e.y)}" y2="${i % 2 ? H / 2 + 28 : H / 2 - 28}" class="stem"/><circle cx="${X(e.y)}" cy="${H / 2}" r="7"/><text class="st b" x="${X(e.y)}" y="${i % 2 ? H / 2 + 44 : H / 2 - 34}" text-anchor="middle">${e.y}</text></g>`).join("")}
      <g class="mark"><line y1="22" y2="${H - 22}" class="nowl"/><text class="st b" y="${H - 6}" text-anchor="middle"></text></g></svg>
      ${tags.length ? `<div class="tlkey">${tags.map(t => `<span class="${tk(t)}"><i></i>${esc(t)}</span>`).join("")}</div>` : ""}
      <div class="simbtns"><button class="pill-btn dark" data-a="play">▶ Play</button><button class="pill-btn" data-a="prev">◀ Back</button><button class="pill-btn" data-a="next">Next ▶</button></div><div class="tcard" aria-live="polite"><p class="mu">Press ▶ Play or tap any dot on the timeline.</p></div></div>`;
    const svg = $("svg", body); let cur = -1, playing = false, yr = y0;
    function show(i) { cur = i; const e = ev[i]; $$(".tev", svg).forEach((g, j) => { g.classList.toggle("on", j <= i); g.classList.toggle("cur", j === i); });
      $(".tcard", body).innerHTML = `<div class="tc ${tk(e.tag)}"><span class="ty">${e.y}${e.tag ? ` · ${esc(e.tag)}` : ""}</span><b>${e.t}</b><p>${e.d || ""}</p></div>`; setMark(e.y); }
    function setMark(y) { const m = $(".mark", svg); m.setAttribute("transform", `translate(${X(y)} 0)`); $(".mark text", svg).textContent = Math.round(y); }
    setMark(y0);
    $$(".tev", svg).forEach(g => { g.onclick = () => { playing = false; show(+g.dataset.i); }; g.onkeydown = e => { if (e.key === "Enter") g.onclick(); }; });
    $$("[data-a]", body).forEach(b => b.onclick = () => { const a = b.dataset.a;
      if (a === "play") { if (playing) { playing = false; b.textContent = "▶ Play"; return; } if (cur >= ev.length - 1) { cur = -1; yr = y0; $$(".tev", svg).forEach(g => g.classList.remove("on", "cur")); } playing = true; b.textContent = "⏸ Pause"; }
      if (a === "next") { playing = false; show(Math.min(ev.length - 1, cur + 1)); } if (a === "prev") { playing = false; show(Math.max(0, cur - 1)); } });
    let hold = 0;
    loop(el, dt => { if (!playing) { $("[data-a=play]", body).textContent = "▶ Play"; return; } if (hold > 0) { hold -= dt; return; }
      yr = cur >= 0 ? Math.max(yr, ev[cur].y) : yr; yr += dt * (y1 - y0) / 14; setMark(yr);
      const nx = ev[cur + 1]; if (nx && yr >= nx.y) { show(cur + 1); hold = 2.6; } if (!nx || yr > y1) { if (!nx) playing = false; } });
  };

  /* ---------------- DATA RACE (animated bars over time) ---------------- */
  S.datarace = (el, o) => {
    const body = shell(el, o, "Animated Data", "📊"), yrs = o.years, ser = o.series, mx = o.max || Math.max(...ser.flatMap(s => s.vals)) * 1.08, u = o.unit || "";
    body.innerHTML = `<div class="simcol"><div class="dryear"></div><div class="drbars">${ser.map((s, i) => `<div class="drrow"><span class="drl">${esc(s.label)}</span><span class="drtrack"><span class="drbar k${i % 4 + 1}" data-i="${i}"></span></span><b class="drv" data-v="${i}"></b></div>`).join("")}</div>
      <input type="range" class="drslide" min="0" max="${yrs.length - 1}" step="0.01" value="0" aria-label="Year"><div class="simbtns"><button class="pill-btn dark" data-a="play">▶ Play</button></div>${o.src ? `<p class="mu small">${o.src}</p>` : ""}</div>`;
    const sld = $(".drslide", body); let playing = false;
    function draw(f) { const i = Math.floor(f), j = Math.min(yrs.length - 1, i + 1), r = f - i;
      $(".dryear", body).textContent = Math.round(yrs[i] + (yrs[j] - yrs[i]) * r);
      ser.forEach((s, k) => { const v = s.vals[i] + (s.vals[j] - s.vals[i]) * r; $(`.drbar[data-i="${k}"]`, body).style.width = clamp(v / mx * 100, 0, 100) + "%"; $(`[data-v="${k}"]`, body).textContent = (Math.abs(v) >= 100 ? Math.round(v).toLocaleString() : fm(v, 1)) + u; }); }
    sld.oninput = () => { playing = false; draw(+sld.value); }; draw(0);
    $("[data-a=play]", body).onclick = e => { if (+sld.value >= yrs.length - 1) sld.value = 0; playing = !playing; e.target.textContent = playing ? "⏸ Pause" : "▶ Play"; };
    loop(el, dt => { if (!playing) return; let v = +sld.value + dt * 0.45; if (v >= yrs.length - 1) { v = yrs.length - 1; playing = false; $("[data-a=play]", body).textContent = "▶ Play again"; } sld.value = v; draw(v); });
  };

  /* ---------------- CHECKS AND BALANCES ---------------- */
  S.branches = (el, o) => {
    const body = shell(el, o, "Checks and Balances", "🏛️");
    const B = { L: ["Legislative", "Congress: makes laws", 300, 60], E: ["Executive", "President: enforces laws", 110, 290], J: ["Judicial", "Supreme Court: interprets laws", 490, 290] };
    const CK = o.checks || { "L>E": "Override a veto (2/3 vote) · impeach the President · Senate approves treaties and appointments · controls the budget", "L>J": "Senate confirms judges · can impeach judges · creates lower courts", "E>L": "Veto bills · call special sessions", "E>J": "Nominates Supreme Court justices and federal judges · can pardon", "J>L": "Judicial review: declare laws unconstitutional", "J>E": "Declare executive actions unconstitutional" };
    body.innerHTML = `<div class="simcol"><svg viewBox="0 0 600 360" class="simsvg wide"><defs><marker id="bah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="16" markerHeight="16" markerUnits="userSpaceOnUse" orient="auto"><path d="M0 0L10 5L0 10z" class="ahd"/></marker></defs><g class="arr"></g>
      ${Object.entries(B).map(([k, [n, d, x, y]]) => `<g class="br" data-b="${k}" tabindex="0" role="button" aria-label="${n} branch"><rect x="${x - 95}" y="${y - 38}" width="190" height="76" rx="16"/><text class="st big" x="${x}" y="${y - 6}" text-anchor="middle">${n}</text><text class="st" x="${x}" y="${y + 16}" text-anchor="middle">${d}</text></g>`).join("")}</svg>
      <div class="tcard" aria-live="polite"><p class="mu">Tap a branch to see how it checks the other two.</p></div>${o.scenarios ? `<div class="bquiz"></div>` : ""}</div>`;
    const svg = $("svg", body);
    const arrow = (a, b, i) => { const [, , x1, y1] = B[a], [, , x2, y2] = B[b], off = (i ? 1 : -1) * 14, dx = x2 - x1, dy = y2 - y1, L2 = Math.hypot(dx, dy), nx = -dy / L2 * off, ny = dx / L2 * off;
      return `<line class="chk" x1="${x1 + dx * 0.32 + nx}" y1="${y1 + dy * 0.32 + ny}" x2="${x1 + dx * 0.68 + nx}" y2="${y1 + dy * 0.68 + ny}" marker-end="url(#bah)"/>`; };
    function pick(k) { $$(".br", svg).forEach(g => g.classList.toggle("on", g.dataset.b === k)); const others = Object.keys(B).filter(x => x !== k);
      $(".arr", svg).innerHTML = others.map((x, i) => arrow(k, x, 0)).join("");
      $(".tcard", body).innerHTML = `<div class="tc"><b>How the ${B[k][0]} branch checks…</b>${others.map(x => `<p><b>${B[x][0]}:</b> ${CK[k + ">" + x]}</p>`).join("")}</div>`; }
    $$(".br", svg).forEach(g => { g.onclick = () => pick(g.dataset.b); g.onkeydown = e => { if (e.key === "Enter") pick(g.dataset.b); }; });
    if (o.scenarios) { let qi = 0, right = 0; const qz = $(".bquiz", body);
      const ask = () => { if (qi >= o.scenarios.length) { qz.innerHTML = `<div class="simbig win">Done! ${right} of ${o.scenarios.length} on the first try.</div>`; return; } const s = o.scenarios[qi];
        qz.innerHTML = `<div class="tc"><b>Scenario ${qi + 1}/${o.scenarios.length}:</b> ${s.t}<div class="simbtns">${Object.keys(CK).map(k => `<button class="pill-btn" data-k="${k}">${B[k[0]][0]} → ${B[k[2]][0]}</button>`).join("")}</div><p class="fb"></p></div>`;
        let first = true; $$("[data-k]", qz).forEach(b => b.onclick = () => { if (b.dataset.k === s.a) { if (first) right++; b.classList.add("ok"); $(".fb", qz).innerHTML = "✅ " + (s.why || ""); pick(s.a[0]); setTimeout(() => { qi++; ask(); }, 1800); } else { first = false; b.classList.add("no"); $(".fb", qz).textContent = "Not quite. Who is doing the checking, and who is being checked?"; } }); };
      ask(); }
  };

  /* ---------------- PLOT MOUNTAIN (Freytag) ---------------- */
  S.plot = (el, o) => {
    const body = shell(el, o, "Plot Mountain", "⛰️"), ST = o.stages || ["Exposition", "Rising Action", "Climax", "Falling Action", "Resolution"], SX = [60, 190, 320, 440, 545], SY = [230, 150, 50, 150, 200];
    const items = (o.events || []).map((e, i) => ({ ...e, i, placed: false })), order = [...items].sort(() => Math.random() - 0.5);
    const d = `M20 240 L100 230 L320 50 L480 180 L580 190`;
    body.innerHTML = `<div class="simcol"><svg viewBox="0 0 600 270" class="simsvg wide"><path class="mtn" d="${d}"/><path class="mtnfill" d="${d} L580 270 L20 270 Z"/>
      ${ST.map((s, i) => `<g class="stg" data-s="${i}" tabindex="0" role="button"><circle cx="${SX[i]}" cy="${SY[i]}" r="14"/><text class="st b" x="${SX[i]}" y="${SY[i] + (i === 2 ? -22 : 32)}" text-anchor="middle">${s}</text><text class="st" x="${SX[i]}" y="${SY[i] + 5}" text-anchor="middle" data-n="${i}">0</text></g>`).join("")}<circle class="hiker" r="9" cx="20" cy="240"/></svg>
      <p class="mu">Tap an event card, then tap the part of the plot mountain where it belongs.</p><div class="pcards">${order.map(e => `<button class="pcard" data-i="${e.i}">${e.t}</button>`).join("")}</div><div class="tcard" aria-live="polite"></div>
      <div class="simbtns"><button class="pill-btn dark" data-a="trace">🥾 Hike the story</button><button class="pill-btn" data-a="reset">↻ Reset</button></div></div>`;
    const svg = $("svg", body); let sel = null, first = 0, tries = 0;
    $$(".pcard", body).forEach(c => c.onclick = () => { if (c.classList.contains("done")) return; sel = +c.dataset.i; $$(".pcard", body).forEach(x => x.classList.toggle("sel", x === c)); });
    $$(".stg", svg).forEach(g => g.onclick = () => { if (sel == null) { $(".tcard", body).innerHTML = `<p class="mu">First tap an event card.</p>`; return; } const it = items[sel], s = +g.dataset.s, card = $(`.pcard[data-i="${sel}"]`, body);
      if (it.s === s) { it.placed = true; if (!it.miss) first++; card.classList.add("done"); card.classList.remove("sel"); card.innerHTML = `✅ ${ST[s]}: ${it.t}`; $(`[data-n="${s}"]`, svg).textContent = items.filter(x => x.placed && x.s === s).length; $(".tcard", body).innerHTML = `<p>✅ ${it.why || "Nice!"}</p>`; sel = null;
        if (items.every(x => x.placed)) $(".tcard", body).innerHTML += `<div class="simbig win">🏔️ Story mapped! ${first} of ${items.length} on the first try. Press 🥾 Hike the story.</div>`; }
      else { it.miss = true; tries++; card.classList.add("shake"); setTimeout(() => card.classList.remove("shake"), 500); $(".tcard", body).innerHTML = `<p>❌ Not ${ST[s]}. ${it.hint || "Think about where the tension is building, peaking, or settling."}</p>`; } });
    const pathEl = $(".mtn", svg);
    $("[data-a=trace]", body).onclick = () => { const len = pathEl.getTotalLength ? pathEl.getTotalLength() : 0; if (!len) return; const hk = $(".hiker", svg);
      tween(5000, p => { const pt = pathEl.getPointAtLength(p * len); hk.setAttribute("cx", pt.x); hk.setAttribute("cy", pt.y); const near = SX.reduce((b, x, i) => Math.abs(x - pt.x) < Math.abs(SX[b] - pt.x) ? i : b, 0);
        $$(".stg", svg).forEach(g => g.classList.toggle("on", +g.dataset.s === near)); const evs = items.filter(x => x.s === near);
        $(".tcard", body).innerHTML = `<div class="tc"><b>${ST[near]}</b>${evs.map(x => `<p>${x.t}</p>`).join("") || "<p class='mu'>(no events here)</p>"}</div>`; }); };
    $("[data-a=reset]", body).onclick = () => S.plot(el, o);
    void tries;
  };

  /* ---------------- CLASSIFY (sorting game, optional triangle) ---------------- */
  S.classify = (el, o) => {
    const body = shell(el, o, "Sort It Out", "🗂️"), C = o.cats || [], its = [...(o.items || [])].map((x, i) => ({ ...x, i })).sort(() => Math.random() - 0.5);
    const tri = o.viz === "triangle" && C.length === 3;
    body.innerHTML = `<div class="simcol">${tri ? `<svg viewBox="-30 0 360 205" class="simsvg trisvg"><polygon class="tri3" points="150,18 30,182 270,182"/><text class="st b" x="150" y="12" text-anchor="middle">${esc(C[0].n)}</text><text class="st b" x="22" y="196" text-anchor="middle">${esc(C[1].n)}</text><text class="st b" x="278" y="196" text-anchor="middle">${esc(C[2].n)}</text><circle class="tdot" cx="150" cy="127" r="10"/></svg>` : ""}
      <div class="ccard" aria-live="polite"></div><div class="cbins">${C.map((c, i) => `<button class="cbin k${i % 4 + 1}" data-c="${i}"><b>${esc(c.n)}</b>${c.d ? `<small>${esc(c.d)}</small>` : ""}<span class="cnt">0</span></button>`).join("")}</div><div class="tcard" aria-live="polite"></div>
      <div class="simbtns"><button class="pill-btn" data-a="reset">↻ Start over</button></div></div>`;
    let k = 0, first = 0, miss = false; const cnt = C.map(() => 0);
    const card = $(".ccard", body), fb = $(".tcard", body);
    function show() { if (k >= its.length) { card.innerHTML = `<div class="simbig win">🎉 All sorted! ${first} of ${its.length} right on the first try.</div>`; return; } card.innerHTML = `<div class="cq in"><small>${k + 1} of ${its.length}</small><p>${its[k].t}</p></div>`; miss = false; }
    function moveDot() { if (!tri) return; const tot = cnt.reduce((a, b) => a + b, 0) || 1, P = [[150, 18], [30, 182], [270, 182]]; const x = cnt.reduce((s, c, i) => s + c * P[i][0], 0) / tot, y = cnt.reduce((s, c, i) => s + c * P[i][1], 0) / tot;
      const d = $(".tdot", body), x0 = +d.getAttribute("cx"), y0 = +d.getAttribute("cy"); tween(600, e => { d.setAttribute("cx", x0 + (x - x0) * e); d.setAttribute("cy", y0 + (y - y0) * e); }); }
    $$(".cbin", body).forEach(b => b.onclick = () => { if (k >= its.length) return; const it = its[k], c = +b.dataset.c;
      if (c === it.c) { if (!miss) first++; cnt[c]++; $(".cnt", b).textContent = cnt[c]; b.classList.add("flash"); setTimeout(() => b.classList.remove("flash"), 500); fb.innerHTML = `<p>✅ <b>${esc(C[c].n)}.</b> ${it.why || ""}</p>`; k++; moveDot(); show(); }
      else { miss = true; b.classList.add("shake"); setTimeout(() => b.classList.remove("shake"), 500); fb.innerHTML = `<p>❌ Not ${esc(C[c].n)}. ${it.hint || "Read it again and look for clue words."}</p>`; } });
    $("[data-a=reset]", body).onclick = () => S.classify(el, o);
    show();
  };

  return S;
})();
