/* =====================================================================
   WICOR LESSON ENGINE (shared by every lesson page, no need to edit)
   Each lesson page defines a LESSON object, then loads this file.
   Builds the R, W, C and O stations from the data, mounts the lesson's
   own Inquiry (I) station, saves work in the browser, and handles printing.
   ===================================================================== */
(function () {
  const L = LESSON; // defined by the lesson page
  const ORDER = L.order || ["R", "W", "I", "C", "O"];
  const META = {
    W: { name: "Writing", color: "var(--W)" }, I: { name: "Inquiry", color: "var(--I)" },
    C: { name: "Collaboration", color: "var(--C)" }, O: { name: "Organization", color: "var(--O)" },
    R: { name: "Reading", color: "var(--R)" }
  };
  /* ✏️ Teacher and period choices for the sign-in screen */
  const CFG = window.HUB_CONFIG || {};
  const SCHOOLS = CFG.schools || {};
  const TEACHERS = CFG.teachers || Object.values(SCHOOLS).flat();
  const tOpts = (school, sel) => `<option value="">${school ? "Choose…" : "Choose a school first"}</option>` + (SCHOOLS[school] || []).map(t => `<option ${sel === t ? "selected" : ""}>${esc(t)}</option>`).join("");
  const PERIODS = CFG.periods || ["1", "2", "3", "4", "5", "6", "7", "8"];
  const HUB_URL = (CFG.scriptUrl || "").trim();
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const words = s => (String(s).trim().match(/[A-Za-z0-9'’%₂₆-]+/g) || []).length;

  /* ---------- saved state (this browser only) ---------- */
  const KEY = "wicor-lesson-" + L.id;
  let S = {};
  try { S = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) { S = {}; }
  S.inputs = S.inputs || {}; S.marks = S.marks || {}; S.circles = S.circles || []; S.notes = S.notes || {};
  S.done = S.done || {}; S.sort = S.sort || {}; S.sim = S.sim || {};
  let saveT;
  function save() { clearTimeout(saveT); saveT = setTimeout(() => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }, 250); }

  /* ---------- page shell (hub header bar + pastel banner) ---------- */
  document.title = `${L.title} | WICOR ${L.subject}`;
  const LC = L.color || "#8a54e0";
  document.body.insertAdjacentHTML("afterbegin", `
    <header class="top"><div class="bar">
      <a class="brand" href="index.html#home"><span class="mark"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3zm-7 9.2V16l7 4 7-4v-3.8l-7 3.8-7-3.8z"/></svg></span>Teacher Resource Hub</a>
      <span class="crumb"><span>›</span><a href="index.html#wicor">WICOR</a><span>›</span><b>${esc(L.short || L.subject)}</b></span>
      <span class="spacer"></span>
      <a class="pill-btn" href="index.html#wicor">← Lessons</a>
      <button class="pill-btn" id="resetAll" title="Erase your answers on this lesson">↺ Start over</button>
      <button class="pill-btn" data-turnin>📤 Turn in</button>
      <button class="pill-btn dark" data-print>🖨️ Print my work</button>
    </div></header>
    <div class="wrap">
      <section class="banner" style="--lc:${LC}">
        <div class="kicker">WICOR Lesson · ${esc(L.subject)}</div>
        <h1>${esc(L.title)}</h1>
        <p>${esc(L.intro)}</p>
        <div class="who-chip" id="whoChip"></div>
        <span class="art" aria-hidden="true">${L.emoji || "🧪"}</span>
      </section>
      <section class="lt-box" style="--lc:${LC}">
        <div class="lt-eq"><span class="lt-lbl">Essential Question</span><p>${esc(L.eq || "")}</p></div>
        <div class="lt-list"><span class="lt-lbl">Learning Targets</span><ul>${ORDER.map(k => L.targets && L.targets[k] ? `<li><b style="color:${META[k].color}">${k}</b> ${esc(L.targets[k])}</li>` : "").join("")}</ul></div>
      </section>
      <section class="lgate" id="lgate">
        <form class="g-form" autocomplete="off" novalidate><h3>✋ Sign in to start this lesson</h3>
          <div class="g-row"><label>First name<input id="g-first" placeholder="First name"></label>
          <label>Last name<input id="g-last" placeholder="Last name"></label></div>
          <label>Student ID<input id="g-id" inputmode="numeric" placeholder="Your student ID number"></label>
          <label>School<select id="g-sch"><option value="">Choose…</option>${Object.keys(SCHOOLS).map(s => `<option>${esc(s)}</option>`).join("")}</select></label>
          <div class="g-row"><label>Period<select id="g-per"><option value="">Choose…</option>${PERIODS.map(p => `<option>${p}</option>`).join("")}</select></label>
          <label>Teacher<select id="g-t">${tOpts("", "")}</select></label></div>
          <button class="g-start" type="submit" disabled>Start ▶</button><p class="g-msg" aria-live="polite">Fill in every box to start.</p>
        </form>
      </section>
      <nav class="map" id="map" aria-label="WICOR stations"></nav>
      <div class="progress"><div id="progress"></div></div>
      <main id="stations"></main>
      <div class="finish" id="finish" hidden>
        <h2>🎉 You completed all five WICOR stations!</h2>
        <p>Turn in your work to your teacher, or print it.</p>
        <button class="pill-btn dark" data-turnin>📤 Turn in to my teacher</button> <button class="pill-btn" data-print>🖨️ Print my work</button>
        <p class="turnin-msg" aria-live="polite"></p>
      </div>
    </div>`);

  /* ---------- station map ---------- */
  $("#map").innerHTML = ORDER.map((k, i) => `
    <button class="stop" data-st="${k}" style="--c:${META[k].color}">
      <span class="step">${i + 1}</span><span class="L">${k}</span><span class="nm">${META[k].name}</span><span class="chk">✓</span>
    </button>`).join("");
  $("#map").addEventListener("click", e => { const b = e.target.closest(".stop"); if (b) show(b.dataset.st, true); });

  /* ---------- station shells ---------- */
  const host = $("#stations");
  ORDER.forEach((k, i) => {
    const d = L.stations[k];
    const sec = document.createElement("section");
    sec.className = "station"; sec.id = "st-" + k; sec.hidden = true; sec.style.setProperty("--c", META[k].color);
    const next = ORDER[i + 1];
    sec.innerHTML = `
      <div class="st-head"><div class="st-badge">${k}</div>
        <div><h2>${esc(d.title)}</h2><div class="time">${META[k].name} · ⏱ ${esc(d.time || "5–10 min")}</div></div></div>
      ${L.targets && L.targets[k] ? `<div class="target"><b>Learning target:</b> ${esc(L.targets[k])}</div>` : ""}
      <div class="goal">📝 ${d.goal}</div>
      <div class="st-body"></div>
      <div class="st-foot"><span class="status" id="status-${k}">Not finished yet</span>
        ${next ? `<button class="btn solid" data-next="${next}">Next: ${next} · ${META[next].name} →</button>` : `<button class="btn solid" data-print>🖨️ Print my work</button>`}</div>`;
    host.appendChild(sec);
  });
  host.addEventListener("click", e => {
    const n = e.target.closest("[data-next]"); if (n) show(n.dataset.next, true);
  });

  function show(k, scroll) {
    ORDER.forEach(x => { $("#st-" + x).hidden = x !== k; });
    $$(".stop").forEach(b => b.classList.toggle("on", b.dataset.st === k));
    S.current = k; save();
    if (scroll) $("#map").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ---------- completion ---------- */
  function complete(k, msg) {
    const first = !S.done[k];
    S.done[k] = true; save(); paintDone();
    const st = $("#status-" + k); st.textContent = "✅ " + (msg || "Station complete!"); st.classList.add("ok");
    if (first) confetti(70);
    if (ORDER.every(x => S.done[x]) && first) { $("#finish").hidden = false; confetti(160); }
  }
  function paintDone() {
    $$(".stop").forEach(b => b.classList.toggle("done", !!S.done[b.dataset.st]));
    const n = ORDER.filter(x => S.done[x]).length;
    $("#progress").style.width = (n / ORDER.length * 100) + "%";
    ORDER.forEach(k => { if (S.done[k]) { const st = $("#status-" + k); st.textContent = "✅ Station complete!"; st.classList.add("ok"); } });
    $("#finish").hidden = n < ORDER.length;
  }
  function confetti(n) {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const colors = ["#0b6fb8", "#7b5cff", "#e8573f", "#14a396", "#d08a00", "#ffb703"];
    for (let i = 0; i < n; i++) {
      const d = document.createElement("div"); d.className = "confetti";
      d.style.left = Math.random() * 100 + "vw"; d.style.background = colors[i % colors.length];
      d.style.animationDuration = 1.6 + Math.random() * 1.6 + "s"; d.style.animationDelay = Math.random() * .4 + "s";
      document.body.appendChild(d); setTimeout(() => d.remove(), 3800);
    }
  }
  const body = k => $("#st-" + k + " .st-body");
  const part = (n, title, inner) => `<div class="part"><h3><span class="n">${n}</span>${title}</h3>${inner}</div>`;

  /* =====================================================================
     R: READ & ANNOTATE
     ===================================================================== */
  (function () {
    const A = L.stations.R;
    if (A.mode === "visual") { visualReading(A); return; }
    let html = `<div class="legend no-print">
        <span><span style="display:inline-block;width:16px;border-bottom:3px solid var(--claim);vertical-align:3px"></span> Underline the CLAIM (1 sentence)</span>
        <span><span class="sw" style="display:inline-block;width:14px;height:14px;border-radius:4px;background:color-mix(in srgb,var(--evid) 40%,#fff)"></span> Highlight EVIDENCE</span>
        <span><span class="sw" style="display:inline-block;width:14px;height:14px;border-radius:4px;background:color-mix(in srgb,var(--reas) 35%,#fff)"></span> Highlight REASONING</span>
        <span>⭕ Circle KEY TERMS</span><span>💬 Write margin NOTES</span></div>
      <div class="tools">
        <button class="tool" data-mode="claim"><span class="sw" style="border-bottom:3px solid var(--claim);border-radius:0"></span>Claim</button>
        <button class="tool" data-mode="evid"><span class="sw" style="background:var(--evid)"></span>Evidence</button>
        <button class="tool" data-mode="reas"><span class="sw" style="background:var(--reas)"></span>Reasoning</button>
        <button class="tool on" data-mode="circle">⭕ Key term</button>
        <button class="tool" data-mode="note">💬 Note</button>
        <button class="tool" data-mode="erase">🧽 Erase</button>
        <button class="btn solid" id="rCheck" style="margin-left:auto">Check my annotations</button>
      </div>
      <div class="article" id="article"><h3>${esc(A.article.title)}</h3><div class="by">${esc(A.article.byline || "")}</div>`;
    let wid = 0;
    A.article.paragraphs.forEach((para, pi) => {
      html += `<p><span class="pn">¶${pi + 1}</span>`;
      para.forEach((raw, si) => {
        const m = raw.match(/^\[(C|E|R)\]\s*/); const role = m ? m[1] : ""; const text = m ? raw.slice(m[0].length) : raw;
        const sid = `${pi}-${si}`;
        let inner = "";
        text.split(/(\{\{.*?\}\})/).forEach(part => {
          if (!part) return;
          if (part.startsWith("{{")) inner += `<span class="wd k" data-w="${wid++}" data-key="1">${esc(part.slice(2, -2))}</span>`;
          else part.split(/(\s+)/).forEach(t => { inner += /^\s*$/.test(t) ? t : `<span class="wd" data-w="${wid++}">${esc(t)}</span>`; });
        });
        html += `<span class="s" data-sid="${sid}" data-role="${role}">${inner}</span> `;
      });
      html += `</p>`;
    });
    html += `</div><div class="feedback" id="rFb"></div>`;
    html += part("✍", "Quick check: in your own words", `<p class="hint" style="margin-top:0">${esc(A.gist)}</p><textarea class="box" rows="2" data-save="r-gist" placeholder="The author wants me to understand that…"></textarea>`);
    body("R").innerHTML = html;

    const art = $("#article");
    let mode = "circle";
    $$("#st-R .tool").forEach(b => b.onclick = () => { mode = b.dataset.mode; $$("#st-R .tool").forEach(x => x.classList.toggle("on", x === b)); });

    // restore
    Object.entries(S.marks).forEach(([sid, t]) => { const s = art.querySelector(`[data-sid="${sid}"]`); if (s) s.classList.add("m-" + t); });
    S.circles.forEach(w => { const el = art.querySelector(`[data-w="${w}"]`); if (el) el.classList.add("circ"); });
    Object.entries(S.notes).forEach(([sid, t]) => addNote(sid, t));

    function addNote(sid, text) {
      const s = art.querySelector(`[data-sid="${sid}"]`); if (!s) return;
      let n = s.nextElementSibling && s.nextElementSibling.classList.contains("note") ? s.nextElementSibling : null;
      if (!n) {
        n = document.createElement("span"); n.className = "note"; n.dataset.for = sid;
        n.innerHTML = `💬<input placeholder="Type your note…"><button title="Delete note">✕</button>`;
        s.after(n);
        n.querySelector("input").addEventListener("input", e => { S.notes[sid] = e.target.value; save(); });
        n.querySelector("button").onclick = () => { delete S.notes[sid]; n.remove(); save(); };
      }
      n.querySelector("input").value = text || "";
      if (text === undefined) n.querySelector("input").focus();
      S.notes[sid] = text || S.notes[sid] || ""; save();
    }
    art.addEventListener("click", e => {
      if (e.target.closest(".note")) return;
      $$(".right,.wrong,.wrongk", art).forEach(x => x.classList.remove("right", "wrong", "wrongk"));
      const w = e.target.closest(".wd"), s = e.target.closest(".s");
      if (mode === "circle" && w) {
        w.classList.toggle("circ");
        const id = +w.dataset.w; S.circles = S.circles.filter(x => x !== id); if (w.classList.contains("circ")) S.circles.push(id);
      } else if (["claim", "evid", "reas"].includes(mode) && s) {
        const had = s.classList.contains("m-" + mode);
        s.classList.remove("m-claim", "m-evid", "m-reas"); delete S.marks[s.dataset.sid];
        if (!had) { s.classList.add("m-" + mode); S.marks[s.dataset.sid] = mode; }
      } else if (mode === "note" && s) {
        addNote(s.dataset.sid);
      } else if (mode === "erase") {
        if (w && w.classList.contains("circ")) { w.classList.remove("circ"); S.circles = S.circles.filter(x => x !== +w.dataset.w); }
        else if (s) { s.classList.remove("m-claim", "m-evid", "m-reas"); delete S.marks[s.dataset.sid]; }
      }
      save();
    });

    $("#rCheck").onclick = () => {
      const sents = $$(".s", art);
      let claimRight = 0, claimWrong = 0, eR = 0, eW = 0, rR = 0, rW = 0;
      const totalE = sents.filter(s => s.dataset.role === "E").length;
      sents.forEach(s => {
        const r = s.dataset.role;
        if (s.classList.contains("m-claim")) { if (r === "C") { claimRight++; s.classList.add("right"); } else { claimWrong++; s.classList.add("wrong"); } }
        if (s.classList.contains("m-evid")) { if (r === "E") { eR++; s.classList.add("right"); } else { eW++; s.classList.add("wrong"); } }
        if (s.classList.contains("m-reas")) { if (r === "R") { rR++; s.classList.add("right"); } else { rW++; s.classList.add("wrong"); } }
      });
      const keys = $$(".k", art).length, kc = $$(".k.circ", art).length;
      const extra = $$(".wd.circ:not(.k)", art).length;
      const notes = Object.values(S.notes).filter(t => t && t.trim().length > 2).length;
      const need = A.minKeys || 5;
      const tips = [];
      if (!claimRight) tips.push("Underline the author's CLAIM. It's the one sentence that states the author's position and could be argued.");
      if (claimWrong) tips.push("One of your underlined sentences isn't the claim (dashed red). Only one sentence is the claim.");
      if (eR < 2) tips.push(`Highlight at least 2 EVIDENCE sentences: facts, data, or examples that support the claim (${eR} of ${totalE} found).`);
      if (eW) tips.push(`${eW} evidence highlight${eW > 1 ? "s are" : " is"} really background information or reasoning (dashed red). Ask yourself: does it PROVE the claim?`);
      if (rR < 1) tips.push("Highlight the REASONING: the sentence that explains WHY the evidence supports the claim. Look for words like \"because\" or \"without it.\"");
      if (rW) tips.push("A reasoning highlight is marked dashed red. Reasoning explains, rather than giving a fact.");
      if (kc < need) tips.push(`Circle at least ${need} KEY TERMS (${kc} of ${keys} found). Look for science vocabulary you'd put in a glossary.`);
      if (notes < 1) tips.push("Add at least 1 margin NOTE 💬: a question, a connection, or a reaction.");
      const fb = $("#rFb");
      if (!tips.length) {
        fb.className = "feedback good";
        fb.innerHTML = `🌟 Expert annotation! Claim ✓ · Evidence ${eR}/${totalE} ✓ · Reasoning ✓ · Key terms ${kc}/${keys} ✓ · Notes ${notes} ✓` + (extra ? `<br><small>(You also circled ${extra} other word${extra > 1 ? "s" : ""}. That's fine if they helped you!)</small>` : "");
        complete("R", "Annotations complete!");
      } else { fb.className = "feedback try"; fb.innerHTML = "Keep going:<br>• " + tips.join("<br>• "); }
    };
  })();


  /* =====================================================================
     R (visual): READ A GRAPH, DIAGRAM, OR WORKED EQUATION
     Students complete "click the…" tasks on the figure, then notice & wonder.
     ===================================================================== */
  function visualReading(A) {
    S.vis = S.vis || { done: [] };
    const done = new Set(S.vis.done);
    let cur = A.tasks.findIndex((_, i) => !done.has(i)); if (cur < 0) cur = 0;
    body("R").innerHTML = `
      ${part(1, esc(A.figureTitle || "Read the figure"), `<p class="hint" style="margin-top:0">${A.intro || "Pick a task, then click the matching part of the figure."}</p>
        <div class="vis-wrap"><div class="figure" id="figure">${A.figure}</div>
          <div class="vtasks"><div class="lt-lbl">Your reading tasks</div><ol id="vtasks"></ol><div class="feedback" id="vfb"></div></div></div>`)}
      ${part(2, "Notice & wonder", `<label class="hint" style="display:block;margin:0 0 4px"><b>I notice…</b> (something you see in the ${esc(A.kind || "figure")})</label>
        <textarea class="box" rows="2" data-save="r-notice" placeholder="I notice that…"></textarea>
        <label class="hint" style="display:block;margin:10px 0 4px"><b>I wonder…</b> (a question it makes you ask)</label>
        <textarea class="box" rows="2" data-save="r-wonder" placeholder="I wonder why / what would happen if…"></textarea>`)}
      ${part("✍", "Quick check: in your own words", `<p class="hint" style="margin-top:0">${esc(A.gist)}</p><textarea class="box" rows="2" data-save="r-gist" placeholder="This ${esc(A.kind || "figure")} shows…"></textarea>`)}
      <ul class="checks" id="rChecks"><li data-k="tasks">Completed every reading task</li><li data-k="nw">Wrote a notice and a wonder (6+ words each)</li><li data-k="gist">Summed it up in your own words (8+ words)</li></ul>`;
    const fig = $("#figure"), list = $("#vtasks"), fb = $("#vfb");
    function paint() {
      list.innerHTML = A.tasks.map((t, i) => `<li class="vtask ${done.has(i) ? "ok" : ""} ${i === cur ? "cur" : ""}" data-i="${i}"><span class="vn">${done.has(i) ? "✔" : i + 1}</span><span class="vq">${t.q}</span></li>`).join("");
      $$("[data-hot]", fig).forEach(h => h.classList.toggle("found", A.tasks.some((t, i) => done.has(i) && t.hot === h.dataset.hot)));
      check();
    }
    list.addEventListener("click", e => { const li = e.target.closest(".vtask"); if (li) { cur = +li.dataset.i; fb.textContent = ""; fb.className = "feedback"; paint(); } });
    fig.addEventListener("click", e => {
      const h = e.target.closest("[data-hot]"); if (!h) return;
      const t = A.tasks[cur];
      if (done.has(cur)) { fb.className = "feedback"; fb.textContent = "That task is done. Pick another task from the list."; return; }
      if (h.dataset.hot === t.hot) {
        done.add(cur); S.vis.done = [...done]; save();
        fb.className = "feedback good"; fb.innerHTML = "✅ " + (t.why || "Correct!");
        const next = A.tasks.findIndex((_, i) => !done.has(i)); if (next >= 0) cur = next;
      } else {
        h.classList.add("miss"); setTimeout(() => h.classList.remove("miss"), 600);
        fb.className = "feedback try"; fb.innerHTML = "🤔 Not quite. " + (t.hint || "Look again.");
      }
      paint();
    });
    function check() {
      const i = S.inputs;
      const r = { tasks: done.size === A.tasks.length, nw: words(i["r-notice"] || "") >= 6 && words(i["r-wonder"] || "") >= 6, gist: words(i["r-gist"] || "") >= 8 };
      $$("#rChecks li").forEach(li => li.classList.toggle("ok", r[li.dataset.k]));
      if (r.tasks && r.nw && r.gist) complete("R", "Reading complete!");
    }
    body("R").addEventListener("input", check);
    setTimeout(paint, 0);
  }
  /* =====================================================================
     W: CER WRITING
     ===================================================================== */
  (function () {
    const W = L.stations.W;
    const colors = { claim: "var(--claim)", evidence: "var(--evid)", reasoning: "var(--reas)" };
    let html = `<div class="statement" style="background:linear-gradient(135deg,var(--W),#3d8bfd)"><small>Writing prompt</small>${esc(W.prompt)}</div>
      ${part(1, "Build your CER paragraph", `<div class="cer">${W.parts.map(p => `
        <div class="cer-row"><div class="cer-tag" id="tag-${p.key}" style="background:${colors[p.key]}">${p.label}<small>${esc(p.sub)}</small></div>
        <div><textarea class="box" rows="${p.rows || 2}" data-save="w-${p.key}" placeholder="${esc(p.starter)}"></textarea><p class="hint">${p.hint}</p></div></div>`).join("")}</div>`)}
      ${part(2, "Your finished paragraph", `<div class="paragraph" id="wPara"></div>
        <ul class="checks" id="wChecks">
          ${W.parts.map(p => `<li data-k="${p.key}">${esc(p.checkLabel)}</li>`).join("")}
          <li data-k="terms">Uses at least ${W.minTerms} vocabulary words (${W.terms.map(t => t[0]).join(", ")})</li>
          <li data-k="len">${W.minWords}+ words total</li>
        </ul>`)}`;
    body("W").innerHTML = html;
    function update() {
      const v = {}; W.parts.forEach(p => v[p.key] = (S.inputs["w-" + p.key] || "").trim());
      const all = W.parts.map(p => v[p.key]).join(" ");
      const res = {};
      W.parts.forEach(p => { res[p.key] = p.check(v[p.key]); $("#tag-" + p.key).classList.toggle("ok", res[p.key]); });
      res.terms = W.terms.filter(t => t[1].test(all)).length >= W.minTerms;
      res.len = words(all) >= W.minWords;
      $$("#wChecks li").forEach(li => li.classList.toggle("ok", !!res[li.dataset.k]));
      $("#wPara").innerHTML = [["claim", "pc"], ["evidence", "pe"], ["reasoning", "pr"]].map(([k, c]) => v[k] ? `<span class="${c}">${esc(v[k])}</span>` : "").filter(Boolean).join(" ");
      if (Object.values(res).every(Boolean)) complete("W", "CER paragraph complete!");
    }
    body("W").addEventListener("input", update);
    W._update = update;
  })();

  /* =====================================================================
     I: INQUIRY (custom per lesson: the page supplies it)
     ===================================================================== */
  (function () {
    const I = L.stations.I;
    if (I.lab) { genericInquiry(I); return; }
    body("I").innerHTML = I.html;
    I.mount({ root: body("I"), state: S, save, complete: msg => complete("I", msg), part, esc, words });
  })();

  /* Generic Inquiry station: predict → virtual lab (sliders, record, live graph) → analyze + Level 3 question */
  function genericInquiry(I) {
    const P = I.predict, B = I.lab, A = I.analyze, root = body("I");
    const curve = B.mode === "curve";
    S.sim.ctrl = S.sim.ctrl || {}; S.sim.trials = S.sim.trials || []; S.sim.runs = S.sim.runs || [];
    B.controls.forEach(c => { if (S.sim.ctrl[c.id] === undefined) S.sim.ctrl[c.id] = c.value; });
    const ax = (d, l) => `<svg viewBox="0 0 120 70"><path d="M10 62 L110 62 M10 62 L10 6" stroke="#bbb" stroke-width="2"/><path d="${d}" stroke="currentColor" stroke-width="4" fill="none" stroke-linecap="round"/></svg>${esc(l)}`;
    const ctrlHTML = c => c.type === "seg"
      ? `<div class="control"><label>${c.label}</label><div class="seg" data-ctrl="${c.id}">${c.options.map(([v, l]) => `<button data-v="${v}">${esc(l)}</button>`).join("")}</div></div>`
      : `<div class="control"><label>${c.label} <span data-val="${c.id}"></span></label><input type="range" data-ctrl="${c.id}" min="${c.min}" max="${c.max}" step="${c.step || 1}"></div>`;
    root.innerHTML = `
      ${part(1, esc(P.q), `<div class="choices" id="predChoices" style="color:var(--I)">${P.options.map(o => `<button class="choice" data-v="${o.v}">${o.d ? ax(o.d, o.label) : `<span class="bigopt">${esc(o.label)}</span>${o.sub ? `<small>${esc(o.sub)}</small>` : ""}`}</button>`).join("")}</div>
        <textarea class="box" rows="2" data-save="i-hyp" style="margin-top:12px" placeholder="${esc(P.placeholder)}"></textarea>
        <p class="hint">Write your hypothesis as <b>If… then… because…</b></p>`)}
      ${part(2, esc(B.title), `<p class="hint" style="margin-top:0">${B.intro}</p>
        <div class="lab">
          <div class="panel">
            <div id="scene">${B.scene}</div>
            ${B.controls.map(ctrlHTML).join("")}
            <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:8px">
              <div><div class="hint" style="margin:0">${esc(B.readout)}</div><div class="readout" id="readout">–</div></div>
              <button class="btn solid" id="record">${curve ? "▶ Run & graph it" : "📍 Record this trial"}</button>
            </div>
          </div>
          <div>
            <canvas class="graph" id="graph" height="260"></canvas>
            <div class="hint" id="legend"></div>
            <table class="data"><thead><tr id="thead"></tr></thead><tbody id="rows"></tbody></table>
            <button class="btn" id="clearData" style="margin-top:8px;padding:6px 12px;font-size:.85rem">Clear data</button>
          </div>
        </div>`)}
      ${part(3, "Analyze & ask", `<label style="font-weight:800">Was your prediction supported?</label>
        <div class="seg" id="supported" style="margin:6px 0 10px"><button data-v="yes">Yes</button><button data-v="partly">Partly</button><button data-v="no">No</button></div>
        <textarea class="box" rows="3" data-save="i-analysis" placeholder="${esc(A.placeholder)}"></textarea>
        <p class="hint">${A.hint}</p>
        <label style="font-weight:800;display:block;margin-top:12px">Write a Level 3 question you could investigate next (Costa's Levels):</label>
        <div class="stems">${A.stems.map(t => `<button class="stem">${esc(t)}</button>`).join("")}</div>
        <input class="box" data-save="i-q3" style="margin-top:8px" placeholder="What would happen if…?">
        <ul class="checks" id="iChecks">
          <li data-k="pred">Chose a prediction + wrote an If/then hypothesis</li>
          <li data-k="data">${esc(B.needLabel)}</li>
          <li data-k="ana">${esc(A.checkLabel)}</li>
          <li data-k="q3">Wrote a Level 3 question</li>
        </ul>`)}`;
    const $r = q => root.querySelector(q);

    /* prediction */
    root.querySelectorAll("#predChoices .choice").forEach(b => {
      b.classList.toggle("on", S.inputs["i-pred"] === b.dataset.v);
      b.onclick = () => { S.inputs["i-pred"] = b.dataset.v; save(); root.querySelectorAll("#predChoices .choice").forEach(x => x.classList.toggle("on", x === b)); check(); };
    });
    root.querySelectorAll("#supported button").forEach(b => {
      b.classList.toggle("on", S.inputs["i-supported"] === b.dataset.v);
      b.onclick = () => { S.inputs["i-supported"] = b.dataset.v; save(); root.querySelectorAll("#supported button").forEach(x => x.classList.toggle("on", x === b)); check(); };
    });

    /* controls */
    const ctrl = S.sim.ctrl;
    const fmt = c => (c.fmt ? c.fmt(ctrl[c.id]) : ctrl[c.id] + (c.unit || ""));
    B.controls.forEach(c => {
      if (c.type === "seg") {
        const g = $r(`[data-ctrl="${c.id}"]`);
        const paint = () => g.querySelectorAll("button").forEach(b => b.classList.toggle("on", String(ctrl[c.id]) === b.dataset.v));
        g.querySelectorAll("button").forEach(b => b.onclick = () => { ctrl[c.id] = isNaN(+b.dataset.v) ? b.dataset.v : +b.dataset.v; save(); paint(); refresh(); });
        paint();
      } else {
        const r = $r(`input[data-ctrl="${c.id}"]`); r.value = ctrl[c.id];
        r.oninput = () => { ctrl[c.id] = +r.value; save(); refresh(); };
      }
    });
    let current = null;
    const round = v => { const d = B.digits || 0; return Math.round(v * 10 ** d) / 10 ** d; };
    function measure() {
      if (curve) return null;
      const exact = B.model({ ...ctrl });
      const n = B.noise ? (Math.random() * 2 - 1) * B.noise : 0;
      return round(Math.max(B.y.min || 0, exact + (exact === 0 ? 0 : n)));
    }
    function refresh() {
      B.controls.forEach(c => { const v = $r(`[data-val="${c.id}"]`); if (v) v.textContent = fmt(c); });
      if (curve) { const pts = B.curve({ ...ctrl }); current = B.summary(pts, { ...ctrl }); $r("#readout").textContent = current.text; }
      else { current = measure(); $r("#readout").textContent = (B.prefix || "") + (B.digits ? current.toFixed(B.digits) : current) + (B.unit || ""); }
      if (B.draw) B.draw($r("#scene svg"), { ...ctrl }, curve ? current : current);
    }

    /* animation hook */
    if (B.animate && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      let last = 0;
      const tick = t => { const dt = Math.min(.05, (t - last) / 1000 || 0); last = t; B.animate($r("#scene svg"), { ...ctrl }, curve ? current : current, dt); requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }

    /* data + graph */
    const COLORS = ["#8a54e0", "#f05a28", "#0e9f6e", "#e08a00", "#2b7de9", "#e8368f"];
    const groupOf = c => (B.group ? B.group(c) : "Trials");
    const xId = B.x.id;
    function table() {
      const cols = curve ? ["Run", ...B.controls.map(c => c.short || c.id), B.summaryCol] : ["Trial", ...B.controls.map(c => c.short || c.id), B.yShort];
      $r("#thead").innerHTML = cols.map(c => `<th>${esc(c)}</th>`).join("");
      const list = curve ? S.sim.runs : S.sim.trials;
      $r("#rows").innerHTML = list.map((t, i) => `<tr><td>${i + 1}</td>${B.controls.map(c => `<td>${esc(c.fmt ? c.fmt(t.c[c.id]) : t.c[c.id] + (c.unit || ""))}</td>`).join("")}<td><b>${esc(curve ? t.sum : (B.prefix || "") + (B.digits ? (+t.y).toFixed(B.digits) : t.y))}</b></td></tr>`).join("");
    }
    function draw() {
      table();
      const cv = $r("#graph"), dpr = window.devicePixelRatio || 1, W = cv.clientWidth || 400, H = 260;
      cv.width = W * dpr; cv.height = H * dpr; cv.style.height = H + "px";
      const x = cv.getContext("2d"); x.scale(dpr, dpr); x.clearRect(0, 0, W, H);
      const pad = { l: 50, r: 14, t: 16, b: 40 }, pw = W - pad.l - pad.r, ph = H - pad.t - pad.b;
      const X0 = B.x.min || 0, X1 = B.x.max, Y0 = B.y.min || 0, Y1 = B.y.max;
      const X = v => pad.l + (v - X0) / (X1 - X0) * pw, Y = v => pad.t + ph - (v - Y0) / (Y1 - Y0) * ph;
      const dark = matchMedia("(prefers-color-scheme: dark)").matches;
      x.fillStyle = dark ? "#211e2b" : "#fff"; x.fillRect(0, 0, W, H);
      x.strokeStyle = dark ? "#352f45" : "#e8e2d6"; x.lineWidth = 1; x.fillStyle = dark ? "#aaa5bd" : "#5d6577"; x.font = "11px Nunito, sans-serif"; x.textAlign = "center";
      for (let v = X0; v <= X1 + 1e-9; v += B.x.tick) { x.beginPath(); x.moveTo(X(v), pad.t); x.lineTo(X(v), pad.t + ph); x.stroke(); x.fillText(+v.toFixed(2), X(v), pad.t + ph + 14); }
      x.textAlign = "right";
      for (let v = Y0; v <= Y1 + 1e-9; v += B.y.tick) { x.beginPath(); x.moveTo(pad.l, Y(v)); x.lineTo(pad.l + pw, Y(v)); x.stroke(); x.fillText(+v.toFixed(2), pad.l - 6, Y(v) + 4); }
      x.strokeStyle = dark ? "#ece9f5" : "#1f2430"; x.lineWidth = 2; x.beginPath(); x.moveTo(pad.l, pad.t); x.lineTo(pad.l, pad.t + ph); x.lineTo(pad.l + pw, pad.t + ph); x.stroke();
      x.fillStyle = dark ? "#ece9f5" : "#1f2430"; x.font = "bold 12px Nunito, sans-serif"; x.textAlign = "center";
      x.fillText(B.x.label, pad.l + pw / 2, H - 6);
      x.save(); x.translate(13, pad.t + ph / 2); x.rotate(-Math.PI / 2); x.fillText(B.y.label, 0, 0); x.restore();
      const legend = [];
      if (curve) {
        S.sim.runs.forEach((r, i) => {
          const col = COLORS[i % COLORS.length]; legend.push(`<span style="color:${col};font-weight:800">● Run ${i + 1}: ${esc(groupOf(r.c))}</span>`);
          x.strokeStyle = col; x.lineWidth = 2.5; x.beginPath(); r.pts.forEach(([a, b], j) => j ? x.lineTo(X(a), Y(b)) : x.moveTo(X(a), Y(b))); x.stroke();
        });
      } else {
        const groups = {};
        S.sim.trials.forEach(t => (groups[groupOf(t.c)] = groups[groupOf(t.c)] || []).push(t));
        Object.keys(groups).forEach((k, gi) => {
          const col = COLORS[gi % COLORS.length], pts = groups[k].slice().sort((a, b) => a.c[xId] - b.c[xId]);
          legend.push(`<span style="color:${col};font-weight:800">● ${esc(k)}</span>`);
          x.strokeStyle = col; x.lineWidth = 2.5; x.beginPath(); pts.forEach((p, i) => i ? x.lineTo(X(p.c[xId]), Y(p.y)) : x.moveTo(X(p.c[xId]), Y(p.y))); x.stroke();
          x.fillStyle = col; pts.forEach(p => { x.beginPath(); x.arc(X(p.c[xId]), Y(p.y), 5, 0, 7); x.fill(); });
        });
      }
      $r("#legend").innerHTML = legend.join(" &nbsp; ") || (curve ? "Run the simulation to see your graph." : "Record trials to see your graph.");
    }
    $r("#record").onclick = () => {
      if (curve) { const pts = B.curve({ ...ctrl }); S.sim.runs.push({ c: { ...ctrl }, pts, sum: B.summary(pts, { ...ctrl }).short }); }
      else S.sim.trials.push({ c: { ...ctrl }, y: current });
      save(); draw(); check(); refresh();
    };
    $r("#clearData").onclick = () => { if (confirm("Clear all your data?")) { S.sim.trials = []; S.sim.runs = []; save(); draw(); check(); } };
    window.addEventListener("resize", draw);
    root.querySelectorAll(".stem").forEach(b => b.onclick = () => {
      const inp = root.querySelector('[data-save="i-q3"]'); inp.value = b.textContent + " "; inp.focus();
      inp.dispatchEvent(new Event("input", { bubbles: true }));
    });
    function check() {
      const i = S.inputs, need = B.need || { distinct: 5, groups: 1 };
      let dataOk;
      if (curve) dataOk = new Set(S.sim.runs.map(r => JSON.stringify(r.c))).size >= (need.runs || 2);
      else {
        const g = {}; S.sim.trials.forEach(t => (g[groupOf(t.c)] = g[groupOf(t.c)] || new Set()).add(t.c[xId]));
        dataOk = Object.values(g).filter(set => set.size >= need.distinct).length >= (need.groups || 1);
      }
      const r = {
        pred: !!i["i-pred"] && /\bif\b/i.test(i["i-hyp"] || "") && /\bthen\b/i.test(i["i-hyp"] || ""),
        data: dataOk,
        ana: !!i["i-supported"] && words(i["i-analysis"] || "") >= (A.minWords || 25) && A.must.test(i["i-analysis"] || ""),
        q3: words(i["i-q3"] || "") >= 6 && /\?\s*$/.test(i["i-q3"] || "")
      };
      root.querySelectorAll("#iChecks li").forEach(li => li.classList.toggle("ok", r[li.dataset.k]));
      if (Object.values(r).every(Boolean)) complete("I", "Inquiry complete!");
    }
    root.addEventListener("input", check);
    refresh(); setTimeout(() => { draw(); check(); }, 0);
    new IntersectionObserver(() => draw()).observe($r("#graph"));
  }

  /* =====================================================================
     C: COLLABORATION
     ===================================================================== */
  (function () {
    const C = L.stations.C;
    const stanceBtns = key => `<div class="stance" data-stance="${key}">
      <button data-v="agree"><span>👍</span>Agree</button><button data-v="depends"><span>🤔</span>It depends</button><button data-v="disagree"><span>👎</span>Disagree</button></div>`;
    body("C").innerHTML = `
      <div class="statement"><small>Philosophical Chairs statement</small>${esc(C.statement)}</div>
      ${part(1, "Take a stand", stanceBtns("c-stance1"))}
      ${part(2, "Explain your thinking", `<textarea class="box" rows="3" data-save="c-reason" placeholder="${esc(C.reasonStarter)}"></textarea><p class="hint">Use evidence from the article or your simulation. Include the word <b>because</b>.</p>`)}
      ${part(3, "Respond to a classmate", `
        <div class="peer"><div class="who">${esc(C.peer.name)} says:</div>"${esc(C.peer.says)}"</div>
        <p class="hint">Working with a partner? Respond to their argument instead and write their name here: <input class="box" data-save="c-partner" style="width:180px;display:inline-block;padding:4px 10px" placeholder="Partner's name"></p>
        <div class="frames">${C.frames.map(f => `<button class="stem" data-frame="${esc(f)}">${esc(f)}</button>`).join("")}</div>
        <textarea class="box" rows="3" data-save="c-respond" placeholder="Tap a sentence frame above to get started…"></textarea>`)}
      ${part(4, "Move your chair?", `${stanceBtns("c-stance2")}
        <textarea class="box" rows="2" data-save="c-reflect" style="margin-top:10px" placeholder="My thinking changed / stayed the same because…"></textarea>`)}
      <ul class="checks" id="cChecks"><li data-k="s1">Took a stand</li><li data-k="reason">Explained with "because" + evidence (15+ words)</li><li data-k="respond">Responded respectfully using a frame (12+ words)</li><li data-k="s2">Final position + reflection</li></ul>`;
    const root = body("C");
    function paintStance() { $$("[data-stance]", root).forEach(g => $$("button", g).forEach(b => b.classList.toggle("on", S.inputs[g.dataset.stance] === b.dataset.v))); }
    root.addEventListener("click", e => {
      const b = e.target.closest("[data-stance] button");
      if (b) { S.inputs[b.parentElement.dataset.stance] = b.dataset.v; save(); paintStance(); update(); }
      const f = e.target.closest("[data-frame]");
      if (f) { const ta = $('[data-save="c-respond"]', root); ta.value = (ta.value ? ta.value.trim() + " " : "") + f.dataset.frame + " "; ta.focus(); ta.dispatchEvent(new Event("input", { bubbles: true })); }
    });
    function update() {
      const i = S.inputs;
      const r = { s1: !!i["c-stance1"], reason: words(i["c-reason"] || "") >= 15 && /because/i.test(i["c-reason"] || ""), respond: words(i["c-respond"] || "") >= 12, s2: !!i["c-stance2"] && words(i["c-reflect"] || "") >= 6 };
      $$("#cChecks li").forEach(li => li.classList.toggle("ok", r[li.dataset.k]));
      if (Object.values(r).every(Boolean)) complete("C", "Discussion complete!");
    }
    root.addEventListener("input", update);
    C._paint = () => { paintStance(); update(); };
  })();

  /* =====================================================================
     O: ORGANIZE (sort into a graphic organizer)
     ===================================================================== */
  (function () {
    const O = L.stations.O;
    body("O").innerHTML = `
      ${part(1, esc(O.sortTitle), `<p class="hint" style="margin-top:0">Drag each card into the right box, or <b>tap a card, then tap a box</b>.</p>
        <div class="bank" id="bank" data-zone="-1"></div>
        <div class="zones">${O.zones.map((z, i) => `<div class="zone" data-zone="${i}"><h4>${esc(z)}</h4><div class="drop"></div></div>`).join("")}</div>
        <div style="margin-top:12px"><button class="btn solid" id="oCheck">Check my organizer</button> <button class="btn" id="oReset">Reset</button></div>
        <div class="feedback" id="oFb"></div>`)}
      ${part(2, "Summarize it", `<p class="hint" style="margin-top:0">${esc(O.summaryPrompt)}</p>
        <textarea class="box" rows="3" data-save="o-sum" placeholder="${esc(O.summaryStarter)}"></textarea>
        <ul class="checks" id="oChecks"><li data-k="sort">Every card is in the right box</li><li data-k="sum">Summary is 2+ sentences (20+ words)</li></ul>`)}`;
    const root = body("O");
    let sel = null, sorted = false;
    function place(ti, zi) {
      const t = $(`.tile[data-t="${ti}"]`, root);
      const dest = zi < 0 ? $("#bank") : $(`.zone[data-zone="${zi}"] .drop`, root);
      dest.appendChild(t); S.sort[ti] = zi; save();
      $$(".tile", root).forEach(x => x.classList.remove("right", "wrong"));
    }
    function build() {
      $("#bank").innerHTML = ""; $$(".drop", root).forEach(d => d.innerHTML = "");
      const idx = O.tiles.map((_, i) => i).sort(() => Math.random() - .5);
      idx.forEach(i => {
        const t = document.createElement("div"); t.className = "tile"; t.draggable = true; t.dataset.t = i; t.textContent = O.tiles[i][0];
        $("#bank").appendChild(t);
        if (S.sort[i] !== undefined && S.sort[i] >= 0) place(i, S.sort[i]);
      });
    }
    build();
    root.addEventListener("click", e => {
      const t = e.target.closest(".tile");
      if (t) { e.stopPropagation(); if (sel === t) { t.classList.remove("sel"); sel = null; return; } $$(".tile", root).forEach(x => x.classList.remove("sel")); sel = t; t.classList.add("sel"); return; }
      const z = e.target.closest(".zone, #bank");
      if (z && sel) { place(+sel.dataset.t, +z.dataset.zone); sel.classList.remove("sel"); sel = null; }
    });
    root.addEventListener("dragstart", e => { const t = e.target.closest(".tile"); if (t) e.dataTransfer.setData("text/plain", t.dataset.t); });
    root.addEventListener("dragover", e => { const z = e.target.closest(".zone, #bank"); if (z) { e.preventDefault(); z.classList.add("over"); } });
    root.addEventListener("dragleave", e => { const z = e.target.closest(".zone, #bank"); if (z) z.classList.remove("over"); });
    root.addEventListener("drop", e => { const z = e.target.closest(".zone, #bank"); if (!z) return; e.preventDefault(); z.classList.remove("over"); place(+e.dataTransfer.getData("text/plain"), +z.dataset.zone); });
    $("#oReset").onclick = () => { S.sort = {}; save(); build(); $("#oFb").textContent = ""; sorted = false; update(); };
    $("#oCheck").onclick = () => {
      let right = 0, placed = 0;
      $$(".tile", root).forEach(t => {
        const zi = S.sort[t.dataset.t]; if (zi === undefined || zi < 0) return; placed++;
        const ok = O.tiles[t.dataset.t][1] === zi; t.classList.add(ok ? "right" : "wrong"); if (ok) right++;
      });
      const fb = $("#oFb"), total = O.tiles.length;
      sorted = right === total;
      if (sorted) { fb.className = "feedback good"; fb.textContent = `🌟 All ${total} cards are organized correctly!`; }
      else { fb.className = "feedback try"; fb.textContent = placed < total ? `${right} correct so far. ${total - placed} card${total - placed > 1 ? "s are" : " is"} still in the bank.` : `${right} of ${total} correct. Move the red cards to a different box.`; }
      update();
    };
    function update() {
      const r = { sort: sorted, sum: words(S.inputs["o-sum"] || "") >= 20 && ((S.inputs["o-sum"] || "").match(/[.!?](\s|$)/g) || []).length >= 2 };
      $$("#oChecks li").forEach(li => li.classList.toggle("ok", r[li.dataset.k]));
      if (r.sort && r.sum) complete("O", "Organizer complete!");
    }
    root.addEventListener("input", update);
    if (S.done.O) sorted = true;
  })();

  /* ---------- generic save/restore for every [data-save] field ---------- */
  $$("[data-save]").forEach(el => {
    const k = el.dataset.save;
    if (S.inputs[k] !== undefined) el.value = S.inputs[k];
    el.addEventListener("input", () => { S.inputs[k] = el.value; save(); });
  });
  // run checkers once with restored values
  L.stations.W._update && L.stations.W._update();
  L.stations.C._paint && L.stations.C._paint();

  /* ---------- printing ---------- */
  function doPrint() { window.print(); }
  $$("[data-print]").forEach(b => b.addEventListener("click", doPrint));
  window.addEventListener("beforeprint", () => {
    $$("textarea.box").forEach(t => {
      let c = t.nextElementSibling && t.nextElementSibling.classList.contains("print-copy") ? t.nextElementSibling : null;
      if (!c) { c = document.createElement("div"); c.className = "print-copy"; t.after(c); }
      c.textContent = t.value || " ";
    });
  });
  const ps = document.createElement("style");
  ps.textContent = `.print-copy{display:none}@media print{textarea.box{display:none!important}.print-copy{display:block;border:1px solid #999;border-radius:8px;padding:8px 10px;min-height:3em;white-space:pre-wrap;font-family:Georgia,serif}}`;
  document.head.appendChild(ps);
  $("#resetAll") && ($("#resetAll").onclick = () => { if (confirm("Erase all your work on this lesson and start over?")) { try { localStorage.removeItem(KEY); } catch (e) {} location.reload(); } });

  /* ---------- turn in to the teacher's Google Sheet ---------- */
  async function turnIn(btn) {
    const msgs = $$(".turnin-msg"), say = t => { msgs.forEach(m => m.textContent = t); if (!msgs.length || btn.closest("header")) alert(t); };
    if (!S.student) { say("Sign in first."); return; }
    const done = ORDER.filter(k => S.done[k]).length;
    if (done < ORDER.length && !confirm(`You have finished ${done} of ${ORDER.length} stations. Turn in anyway?`)) return;
    const I = S.inputs, lab = { "r-notice": "R: I notice", "r-wonder": "R: I wonder", "r-gist": "R: In my own words", "w-claim": "W: Claim", "w-evidence": "W: Evidence", "w-reasoning": "W: Reasoning",
      "i-pred": "I: Prediction", "i-hyp": "I: Hypothesis", "i-supported": "I: Supported?", "i-analysis": "I: Analysis", "i-q3": "I: Level 3 question",
      "c-stance1": "C: First stance", "c-reason": "C: Reason", "c-partner": "C: Partner", "c-respond": "C: Response", "c-stance2": "C: Final stance", "c-reflect": "C: Reflection", "o-sum": "O: Summary" };
    const answers = Object.keys(lab).filter(k => I[k]).map(k => `${lab[k]}: ${String(I[k]).replace(/\s+/g, " ").trim()}`).join("  |  ");
    const body = { action: "lesson", student: S.student, lesson: `${L.subject}: ${L.title}`, stationsDone: done, answers,
      qlabels: ORDER.map(k => `${k} · ${META[k].name} station`), qpoints: ORDER.map(k => S.done[k] ? 2 : 0), qmax: ORDER.map(() => 2) };
    btn.disabled = true; say("Turning in…");
    try {
      if (!HUB_URL) {
        let d = {}; try { d = JSON.parse(localStorage.getItem("hubDemo") || "{}"); } catch (e) {}
        (d.lessons = d.lessons || []).push({ ...body, time: new Date().toISOString() }); try { localStorage.setItem("hubDemo", JSON.stringify(d)); } catch (e) {}
        say("👀 Preview mode: saved on this computer only. Your teacher still needs to connect the Google Sheet.");
      } else {
        const r = await (await fetch(HUB_URL, { method: "POST", body: JSON.stringify(body) })).json();
        if (!r.ok) throw new Error(r.error);
        say(`✅ Turned in to ${S.student.teacher}! (${done} of ${ORDER.length} stations)`);
      }
    } catch (e) { say("⚠️ " + (e.message || "Could not turn in. Check your internet and try again.")); }
    btn.disabled = false;
  }
  $$("[data-turnin]").forEach(b => b.addEventListener("click", () => turnIn(b)));

  /* ---------- sign-in, then start ---------- */
  paintDone();
  const hashSt = (location.hash || "").slice(1).toUpperCase();
  function begin(d) {
    S.student = d; save();
    try { localStorage.setItem("wicorStudent", JSON.stringify(d)); } catch (e) {}
    document.body.classList.remove("locked");
    $("#whoChip").innerHTML = `👤 <b>${esc(d.name)}</b> · ID ${esc(d.id)} · ${esc(d.school || "")} · Period ${esc(d.period)} · ${esc(d.teacher)} · ${new Date().toLocaleDateString()} <button class="pill-btn" id="switchUser" style="padding:4px 10px;font-size:.8rem">Not you?</button>`;
    $("#switchUser").onclick = () => { document.body.classList.add("locked"); $("#lgate").scrollIntoView({ behavior: "smooth" }); };
    show(ORDER.includes(hashSt) ? hashSt : (S.current && ORDER.includes(S.current) ? S.current : ORDER[0]), false);
  }
  (function gate() {
    document.body.classList.add("locked");
    let prev = S.student; if (!prev) { try { prev = JSON.parse(localStorage.getItem("wicorStudent") || "null"); } catch (e) {} }
    if (prev && !(prev.first && prev.last && prev.school && (SCHOOLS[prev.school] || []).includes(prev.teacher))) { prev = null; S.student = null; }   // old sign-in: sign in again
    const f = $("#lgate form"), q = x => f.querySelector(x);
    q("#g-sch").addEventListener("change", () => { q("#g-t").innerHTML = tOpts(q("#g-sch").value, ""); });
    if (prev) { q("#g-first").value = prev.first; q("#g-last").value = prev.last; q("#g-id").value = prev.id || ""; q("#g-sch").value = prev.school; q("#g-t").innerHTML = tOpts(prev.school, prev.teacher); q("#g-per").value = prev.period || ""; }
    const read = () => { const first = q("#g-first").value.trim(), last = q("#g-last").value.trim();
      return { first, last, name: (first + " " + last).trim(), id: q("#g-id").value.trim(), school: q("#g-sch").value, period: q("#g-per").value, teacher: q("#g-t").value }; };
    const okId = v => /^[A-Za-z0-9-]{3,12}$/.test(v), hasL = v => /[A-Za-z]/.test(v);
    const ok = d => hasL(d.first) && hasL(d.last) && okId(d.id) && d.school && d.period && d.teacher;
    const upd = () => { const d = read(), good = ok(d); q(".g-start").disabled = !good;
      q(".g-msg").textContent = good ? "Looks good! Press Start." : !hasL(d.first) ? "Type your first name." : !hasL(d.last) ? "Type your last name." : !okId(d.id) ? "Type your student ID (numbers only)." : !d.school ? "Choose your school." : !d.period ? "Choose your period." : !d.teacher ? "Choose your teacher." : "Fill in every box to start."; };
    f.addEventListener("input", upd); f.addEventListener("change", upd); upd();
    f.onsubmit = e => { e.preventDefault(); const d = read(); if (ok(d)) begin(d); };
  })();
})();
