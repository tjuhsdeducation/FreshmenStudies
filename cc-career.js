/* =====================================================================
   CAREER BLOCKS for the College & Career lesson engine (no need to edit)
   Loaded before cc-lesson.js. Adds three block types:
     bullets : rewrite weak resume bullets into strong ones   (max 2 pts)
     star    : STAR-method interview answer builder           (max 2 pts)
     mock    : timed mock interview, 3 random questions       (max 3 pts)
   ===================================================================== */
(window.CC_EXTS = window.CC_EXTS || []).push(function (BT, H) {
  const { $, $$, esc, words } = H;

  /* ---------- styles (injected once) ---------- */
  if (!document.getElementById("jr-css")) {
    const s = document.createElement("style"); s.id = "jr-css";
    s.textContent = `
.jr-formula{display:flex;flex-wrap:wrap;gap:6px;align-items:center;font-weight:800;margin:8px 0}
.jr-formula span{border-radius:999px;padding:4px 12px;color:#fff}.jr-formula .v{background:#1f6fd1}.jr-formula .t{background:#8a54e0}.jr-formula .r{background:#0b7d55}
.jr-bank{border:2px solid var(--line);border-radius:14px;padding:8px 12px;margin:8px 0}.jr-bank summary{font-weight:800;cursor:pointer}
.jr-bank .chips{margin-top:8px}.jr-vb{border:2px solid var(--line);background:var(--surface);border-radius:999px;padding:4px 11px;font-weight:700;cursor:pointer;font-size:.88rem}
.jr-vb:hover{border-color:var(--lc)}.jr-cat{font-size:.75rem;font-weight:800;text-transform:uppercase;letter-spacing:.05em;color:var(--muted);width:100%;margin-top:6px}
.jr-row{border:2px solid var(--line);border-radius:16px;padding:10px 12px;margin:10px 0;background:var(--surface)}
.jr-row.pass{border-color:color-mix(in srgb,var(--ok) 60%,var(--line))}
.jr-weak{background:color-mix(in srgb,var(--bad) 9%,var(--surface));border-radius:10px;padding:6px 10px;font-weight:700;margin-bottom:6px}
.jr-weak .lbl{margin-right:6px}
.jr-lab{display:grid;gap:4px;font-weight:800;font-size:.9rem}
.jr-ck{list-style:none;padding:0;margin:6px 0 0;display:flex;flex-wrap:wrap;gap:4px 14px;font-size:.86rem;font-weight:700}
.jr-ck li.ok{color:var(--ok)}.jr-ck li.bad{color:var(--muted)}
.jr-ex{margin-top:6px;background:color-mix(in srgb,var(--ok) 10%,var(--surface));border-radius:10px;padding:6px 10px;font-size:.9rem}
.jr-qs{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0 10px}
.jr-part{display:grid;grid-template-columns:44px 1fr;gap:10px;align-items:start;margin:10px 0}
.jr-let{width:44px;height:44px;border-radius:12px;color:#fff;font:700 1.4rem var(--display);display:grid;place-items:center}
.jr-part label{display:grid;gap:4px;font-weight:800;font-size:.92rem}.jr-part small{font-weight:700}
.jr-part small.ok{color:var(--ok)}.jr-part small.bad{color:var(--bad)}.jr-part small.mu{color:var(--muted)}
.jr-out{background:var(--soft);border-radius:14px;padding:12px 14px;margin-top:10px}
.jr-out p{margin:6px 0;font-family:Georgia,serif;line-height:1.6}
.jr-meter{height:12px;border-radius:6px;background:var(--surface);border:1px solid var(--line);overflow:hidden;margin:6px 0}
.jr-meter span{display:block;height:100%;background:var(--lc)}
.jr-mock{border:3px solid color-mix(in srgb,var(--lc) 35%,var(--line));border-radius:18px;padding:14px 16px;background:color-mix(in srgb,var(--lc) 5%,var(--surface))}
.jr-steps{display:flex;gap:6px;flex-wrap:wrap;margin:4px 0 10px}.jr-steps span{border-radius:999px;padding:3px 12px;font-weight:800;font-size:.82rem;background:var(--soft)}
.jr-steps span.on{background:var(--lc);color:#fff}.jr-steps span.done{background:color-mix(in srgb,var(--ok) 20%,var(--surface))}
.jr-q{font:600 clamp(1.25rem,3vw,1.6rem) var(--display);margin:6px 0 10px;line-height:1.25}
.jr-clock{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:8px 0}
.jr-time{font:600 2rem var(--display);font-variant-numeric:tabular-nums;background:var(--surface);border:2px solid var(--line);border-radius:14px;padding:2px 16px;min-width:5.2ch;text-align:center}
.jr-time.low{border-color:var(--bad);color:var(--bad)}
.jr-phase{font-weight:800}
.jr-bar{flex:1;min-width:120px;height:10px;border-radius:5px;background:var(--soft);overflow:hidden}.jr-bar span{display:block;height:100%;background:var(--lc);transition:width .25s linear}
.jr-fb{background:var(--surface);border:2px solid var(--line);border-radius:14px;padding:10px 14px;margin-top:10px}
.jr-fb h5{font:600 1.05rem var(--display);margin:0 0 4px}
.jr-tip{font-size:.9rem;color:var(--muted);margin:4px 0 0}
.jr-sum{display:grid;gap:8px;margin-top:8px}.jr-sum>div{border:2px solid var(--line);border-radius:12px;padding:8px 12px;background:var(--surface)}
.jr-sum .pt{float:right;font-weight:800}
.jr-job{display:grid;gap:4px;font-weight:800;max-width:460px}.jr-job select{padding:8px 10px;border-radius:10px;border:2px solid var(--line);background:var(--surface);font-weight:700}
@media (max-width:520px){.jr-part{grid-template-columns:1fr}.jr-let{width:36px;height:36px;font-size:1.1rem}}`;
    document.head.appendChild(s);
  }

  const canSpeak = () => "speechSynthesis" in window && typeof SpeechSynthesisUtterance !== "undefined";
  const speak = text => { if (!canSpeak()) return; try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(text); u.lang = "en-US"; u.rate = 0.95; speechSynthesis.speak(u); } catch (e) {} };
  const mmss = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  const ckList = res => res.map(r => `<li class="${r.ok ? "ok" : "bad"}">${r.ok ? "✓" : "○"} ${r.label}</li>`).join("");

  /* ---------- action verbs ---------- */
  const VERB_CATS = {
    "Helping people": ["Assisted", "Served", "Greeted", "Helped", "Supported", "Cared", "Tutored", "Mentored", "Translated", "Guided"],
    "Leading": ["Led", "Organized", "Coordinated", "Directed", "Planned", "Trained", "Managed", "Started", "Captained", "Volunteered"],
    "Getting things done": ["Completed", "Prepared", "Maintained", "Cleaned", "Stocked", "Sorted", "Delivered", "Harvested", "Packed", "Operated"],
    "Communicating": ["Explained", "Presented", "Answered", "Wrote", "Created", "Designed", "Promoted", "Recorded", "Scheduled", "Collaborated"],
    "Money and results": ["Raised", "Earned", "Sold", "Handled", "Counted", "Saved", "Improved", "Increased", "Reduced", "Won"]
  };
  const BASE = ["assist", "serve", "greet", "help", "support", "care", "tutor", "mentor", "translate", "guide", "lead", "organize", "coordinate", "direct", "plan", "train", "manage", "start", "captain", "volunteer",
    "complete", "prepare", "maintain", "clean", "stock", "sort", "deliver", "harvest", "pack", "operate", "explain", "present", "answer", "write", "create", "design", "promote", "record", "schedule", "collaborate",
    "raise", "earn", "sell", "handle", "count", "save", "improve", "increase", "reduce", "win", "babysit", "watch", "supervise", "teach", "cook", "mow", "water", "plant", "pick", "load", "unload", "drive", "build", "fix", "repair",
    "cashier", "process", "type", "enter", "file", "track", "measure", "monitor", "check", "inspect", "set", "arrange", "decorate", "run", "host", "coach", "practice", "perform", "compete", "achieve", "earn", "collect", "donate",
    "feed", "groom", "walk", "bathe", "pressure", "edge", "trim", "rake", "weed", "prune", "irrigate", "sweep", "mop", "wash", "fold", "restock", "label", "price", "advise", "research", "solve", "resolve", "respond", "welcome",
    "lift", "carry", "deliver", "ship", "receive", "count", "balance", "budget", "fundraise", "recruit", "encourage", "motivate", "represent", "volunteer", "contribute", "participate", "attend", "design", "draw", "paint", "edit", "film", "photograph", "code", "program", "install", "set up", "learn", "master", "use", "read", "interpret"];
  const IRREG = ["led", "taught", "built", "made", "ran", "kept", "sold", "won", "drove", "wrote", "grew", "brought", "oversaw", "spoke", "began", "took", "met", "set", "chose", "found", "held", "fed", "babysat", "swept", "dealt", "paid", "spent", "gave", "got", "caught"];
  const VSET = new Set(BASE.concat(IRREG));
  const isVerb = w => { w = String(w || "").toLowerCase().replace(/[^a-z]/g, ""); if (!w) return false;
    if (VSET.has(w)) return true;
    const stems = [w.replace(/ed$/, ""), w.replace(/d$/, ""), w.replace(/s$/, ""), w.replace(/es$/, ""), w.replace(/ied$/, "y"), w.replace(/ies$/, "y"), w.replace(/([a-z])\1ed$/, "$1")];
    return stems.some(x => VSET.has(x)) || (/ed$/.test(w) && w.length > 4 && !/^(need|bored|tired|scared|red|bed)$/.test(w)); };
  const firstWord = t => (String(t || "").trim().replace(/^[-•*·\s]+/, "").match(/^[A-Za-z’']+/) || [""])[0];
  const NUM = /\d|%|\$|\b(one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|fifteen|twenty|thirty|fifty|hundred|thousand|dozen|daily|weekly|every (day|week|weekend|month|summer|morning|night|saturday|sunday))\b/i;
  const RESULT = /\b(so that|resulting|which (helped|led|saved|made|raised)|raised|earned|saved|improv\w*|increas\w*|reduc\w*|grew|won|praised|recogni[sz]ed|promoted|repeat|on time|without)\b/i;
  const bulletChecks = t => {
    const fw = firstWord(t);
    return [
      { label: "Starts with an action verb", ok: isVerb(fw) && !/^i$/i.test(fw) },
      { label: "Shows a number or result", ok: NUM.test(t) || RESULT.test(t) },
      { label: "No “I”, “me”, or “my”", ok: !!String(t || "").trim() && !/\b(I|me|my)\b/i.test(String(t || "")) },
      { label: "5+ words", ok: words(t) >= 5 }
    ];
  };
  const bulletPass = t => bulletChecks(t).every(r => r.ok);

  /* ======================= bullets ======================= */
  BT.bullets = {
    html(b, st) {
      const v = st.v || {}, n = b.items.length, good = b.items.filter((_, i) => bulletPass(v[i])).length;
      return `<div class="jr-bul"><h4>✨ ${b.title || "Make it strong: rewrite the resume bullets"}</h4>
        <p class="mu">${b.how || "Each weak line below needs a makeover. Use the formula. Do not copy the weak words: add details from a real or realistic experience."}</p>
        <div class="jr-formula" aria-label="Formula: action verb plus what you did plus a number or result"><span class="v">Action verb</span>+<span class="t">What you did</span>+<span class="r">Number or result</span></div>
        <details class="jr-bank"><summary>📚 Action verb bank (tap a verb to put it at the start of the box you are typing in)</summary><div class="chips">${Object.entries(VERB_CATS).map(([c, vs]) => `<span class="jr-cat">${c}</span>${vs.map(x => `<button type="button" class="jr-vb" data-v="${x}">${x}</button>`).join("")}`).join("")}</div></details>
        ${b.items.map((it, i) => { const pass = bulletPass(v[i]); return `<div class="jr-row${pass ? " pass" : ""}" data-row="${i}">
          <div class="jr-weak"><span class="lbl">Weak</span>${esc(it.weak)}</div>${it.hint ? `<p class="small mu" style="margin:0 0 6px">💡 ${it.hint}</p>` : ""}
          <label class="jr-lab">Your strong version<textarea rows="2" data-i="${i}" placeholder="${esc(it.ph || "Action verb + what you did + number or result")}">${esc(v[i] || "")}</textarea></label>
          <ul class="jr-ck" data-ck="${i}">${ckList(bulletChecks(v[i]))}</ul>
          <div class="jr-ex" data-ex="${i}" ${pass ? "" : "hidden"}>✅ Strong! Compare with another strong version: <i>${esc(it.ex || "")}</i></div></div>`; }).join("")}
        <p class="score" data-sc>Strong bullets: <b>${good} / ${n}</b> · Points: <b>${BT.bullets.score(b, st).pts} / 2</b></p></div>`;
    },
    wire(root, b, st, save) {
      let last = null;
      const upd = ta => { const i = +ta.dataset.i, t = ta.value; (st.v = st.v || {})[i] = t; save();
        const pass = bulletPass(t); $(`[data-ck="${i}"]`, root).innerHTML = ckList(bulletChecks(t)); $(`[data-row="${i}"]`, root).classList.toggle("pass", pass); $(`[data-ex="${i}"]`, root).hidden = !pass;
        const good = b.items.filter((_, k) => bulletPass(st.v[k])).length; $("[data-sc]", root).innerHTML = `Strong bullets: <b>${good} / ${b.items.length}</b> · Points: <b>${BT.bullets.score(b, st).pts} / 2</b>`; };
      $$("textarea[data-i]", root).forEach(ta => { ta.oninput = () => upd(ta); ta.onfocus = () => { last = ta; }; });
      $$(".jr-vb", root).forEach(btn => { btn.onmousedown = e => e.preventDefault(); btn.onclick = () => {
        const ta = last || $("textarea[data-i]", root); const cur = ta.value.trim().replace(/^[-•*·\s]+/, "").replace(/^(I was|I am|I’m|I'm|I)\s+/i, ""); const fw = firstWord(cur);
        const rest = isVerb(fw) ? cur.slice(fw.length).trim() : cur;
        ta.value = btn.dataset.v + (rest ? " " + rest : " "); ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length); upd(ta); }; });
    },
    score: (b, st) => { const n = b.items.length, k = b.items.filter((_, i) => bulletPass((st.v || {})[i])).length; return { max: 2, pts: k === n ? 2 : k >= Math.ceil(n / 2) ? 1 : 0, label: b.label || "resume bullets" }; },
    text: (b, st) => "Bullets: " + b.items.map((_, i) => (st.v || {})[i] || "-").join(" / ")
  };

  /* ======================= star ======================= */
  const STAR = [
    ["S", "Situation", "#1f6fd1", "Set the scene. Where were you, and what was going on?", "Last spring at my family’s produce stand, …", 8, 60],
    ["T", "Task", "#8a54e0", "What was your job or the problem you had to solve?", "My job was to …", 6, 45],
    ["A", "Action", "#c2410c", "What did YOU do, step by step? Use “I”, not “we”.", "First I … Then I … I also …", 15, 90],
    ["R", "Result", "#0b7d55", "What happened because of what you did? What did you learn?", "Because of that, … I learned …", 8, 60]
  ];
  const starPart = (p, t) => { const w = words(t), lo = p[5], hi = p[6]; return { w, ok: w >= lo && w <= hi, msg: !w ? `Aim for ${lo} to ${hi} words` : w < lo ? `${w} words · add more (aim for ${lo}+)` : w > hi ? `${w} words · too long, keep it under ${hi}` : `✓ ${w} words` }; };
  BT.star = {
    html(b, st) {
      const v = st.v || {}, q = st.q != null ? b.qs[st.q] : null;
      const parts = STAR.map(p => `<div class="jr-part"><span class="jr-let" style="background:${p[2]}" aria-hidden="true">${p[0]}</span>
        <label>${p[1]}: <span class="mu" style="font-weight:700">${p[3]}</span><textarea rows="2" data-p="${p[0]}" placeholder="${esc(p[4])}">${esc(v[p[0]] || "")}</textarea><small data-m="${p[0]}"></small></label></div>`).join("");
      return `<div class="jr-star"><h4>⭐ ${b.title || "Build a STAR answer"}</h4><p class="mu">${b.how || "Choose an interview question. Then answer it in four short parts."}</p>
        <div class="jr-qs" role="group" aria-label="Choose a question">${b.qs.map((x, i) => `<button type="button" class="chip${st.q === i ? " on" : ""}" data-q="${i}">${esc(x)}</button>`).join("")}</div>
        ${q ? `<p class="jr-q">“${esc(q)}”</p>${parts}
        <div class="jr-out"><b>Your full answer</b> <span class="mu small">(it builds as you type)</span><p data-full></p>
          <div data-time></div>${canSpeak() ? `<div class="btnrow"><button type="button" class="btn ghost" data-hear>🔊 Hear my answer</button><span class="mu small">Then practice saying it out loud yourself.</span></div>` : ""}</div>
        <p class="score" data-sc></p>` : `<p class="warn">Tap a question above to start.</p>`}</div>`;
    },
    wire(root, b, st, save, redraw) {
      $$("[data-q]", root).forEach(c => c.onclick = () => { st.q = +c.dataset.q; save(); redraw(); });
      if (st.q == null) return;
      const full = () => STAR.map(p => String((st.v || {})[p[0]] || "").trim()).filter(Boolean).join(" ");
      const upd = () => {
        STAR.forEach(p => { const r = starPart(p, (st.v || {})[p[0]]), el = $(`[data-m="${p[0]}"]`, root); el.textContent = r.msg; el.className = r.ok ? "ok" : r.w ? "bad" : "mu"; });
        const f = full(), w = words(f), sec = Math.round(w / 130 * 60);
        $("[data-full]", root).textContent = f || "Start typing in the boxes above.";
        $("[data-time]", root).innerHTML = `<div class="jr-meter" aria-hidden="true"><span style="width:${Math.min(100, sec / 120 * 100)}%"></span></div><span class="small"><b>${w} words</b> · about <b>${sec} seconds</b> when spoken at a calm pace (about 130 words a minute). Good interview answers are usually 1 to 2 minutes, so when you speak, add a detail or two.</span>`;
        const sc = BT.star.score(b, st); $("[data-sc]", root).innerHTML = `Parts that are the right length: <b>${STAR.filter(p => starPart(p, (st.v || {})[p[0]]).ok).length} / 4</b> · Points: <b>${sc.pts} / 2</b>`;
      };
      $$("textarea[data-p]", root).forEach(t => t.oninput = () => { (st.v = st.v || {})[t.dataset.p] = t.value; save(); upd(); });
      const h = $("[data-hear]", root); if (h) h.onclick = () => speak(b.qs[st.q] + ". " + full());
      upd();
    },
    score: (b, st) => { if (st.q == null) return { max: 2, pts: 0, label: b.label || "STAR answer" }; const k = STAR.filter(p => starPart(p, (st.v || {})[p[0]]).ok).length; return { max: 2, pts: k === 4 ? 2 : k >= 2 ? 1 : 0, label: b.label || "STAR answer" }; },
    text: (b, st) => `STAR (${st.q != null ? b.qs[st.q] : "-"}): ` + STAR.map(p => `${p[0]}: ${(st.v || {})[p[0]] || ""}`).join(" | ")
  };

  /* ======================= mock interview ======================= */
  const MOCK_Q = [
    ["Tell me about yourself.", "Share school, one or two strengths, and why you want this job. Skip private details."],
    ["Why do you want to work here?", "Name something you like about this place and how you can help."],
    ["What are your greatest strengths?", "Pick one or two strengths and prove each with an example."],
    ["What is one weakness you are working on?", "Name a real but small weakness, then say what you are doing to improve."],
    ["Tell me about a time you worked on a team.", "Use STAR. Say what YOU did on the team."],
    ["Tell me about a time you solved a problem.", "Use STAR: situation, task, action, result."],
    ["How would you handle an upset customer?", "Stay calm, listen, apologize, fix it or get a manager. Give an example if you can."],
    ["Why should we hire you?", "Connect your best strengths to what this job needs."],
    ["Tell me about a time you made a mistake.", "Own it, explain how you fixed it, and say what you learned."],
    ["How do you handle school, work, and other responsibilities at the same time?", "Show how you plan: a planner, a schedule, AVID binder, or a phone calendar."],
    ["Tell me about a time you showed responsibility.", "Babysitting, chores, a family business, or a club all count."],
    ["What would you do if a coworker was not doing their share?", "Stay positive: talk to them kindly first, then a supervisor if needed."]
  ];
  const MOCK_JOBS = [
    ["Cashier at a grocery store", /customer|cash|register|store|groceries|shopper|count|money|line|friendly/i],
    ["Crew member at a fast-food restaurant", /customer|food|order|restaurant|team|crew|fast|clean|kitchen|rush|drive.?thru/i],
    ["Summer camp counselor", /kid|child|camp|camper|safe|activit|lead|young|games/i],
    ["Office assistant at a farm or dairy business", /office|file|phone|organiz|computer|farm|dairy|agri|record|schedul|spreadsheet/i],
    ["Retail sales associate", /customer|store|product|shel(f|ves)|sales|clothes|stock|register/i],
    ["Library or recreation center helper", /librar|book|kid|child|recreation|communit|program|patron|organiz/i]
  ];
  const JOBWORDS = /this (job|position|role|company|store|restaurant|place|team)|your (company|store|team|restaurant|camp|business|customers|library|office)|work here|working here|here at|for you|be a good (fit|employee)|as an? (cashier|crew|counselor|assistant|associate|helper|employee)/i;
  const EXAMPLE = /for example|for instance|one time|once[, ]|last (year|summer|spring|fall|winter|month|week|semester)|this (year|summer|semester)|when I (was|had|worked|helped|volunteered)|at my|in my|\b(19|20)\d\d\b|\d/i;
  const NEG = /\b(hate|hated|boring|lazy|stupid|dumb|annoying|sucks?|whatever|idk|i don[’']?t know|my old boss was|bad boss|got fired|quit because|just need money|only for the money)\b/i;
  const POS = /\b(learn\w*|enjoy\w*|proud|improv\w*|grow\w*|excit\w*|happy|glad|good at|strength\w*|help\w*|better|love|like|care|ready|eager|motivat\w*|hard.?work\w*|responsib\w*)\b/i;
  const mockEval = (b, st, k) => {
    const t = (st.a || {})[k] || "", job = MOCK_JOBS[st.job || 0];
    const res = [
      { label: "Gives a specific example (a time, place, or number)", ok: EXAMPLE.test(t), tip: "Add “For example, last summer I…” with a real detail." },
      { label: "Connects to the job", ok: JOBWORDS.test(t) || job[1].test(t), tip: `Say how this helps you as a ${job[0].toLowerCase()}: “This would help me with your customers because…”` },
      { label: "Positive framing (no complaining, shows growth)", ok: POS.test(t) && !NEG.test(t), tip: NEG.test(t) ? "Remove complaints or negative words. Turn it into what you learned." : "Add a positive word: what you learned, enjoy, or are proud of." }
    ];
    const w = words(t), pass = res.filter(r => r.ok).length;
    return { res, w, pt: w >= 20 && pass >= 2 ? 1 : 0 };
  };
  let MOCK_TICK = null;
  BT.mock = {
    html(b, st) {
      const n = b.n || 3, ph = st.ph || "setup", k = st.k || 0, list = st.list || [], q = list.length ? MOCK_Q[list[k]] : null, job = MOCK_JOBS[st.job || 0];
      const steps = `<div class="jr-steps">${Array.from({ length: n }, (_, i) => `<span class="${ph !== "setup" && ph !== "end" && i === k ? "on" : (st.a || {})[i] != null && (i < k || ph === "end" || (i === k && ph === "fb")) ? "done" : ""}">Question ${i + 1}</span>`).join("")}</div>`;
      const hear = q && canSpeak() ? `<button type="button" class="btn ghost" data-hear>🔊 Read the question aloud</button>` : "";
      let body = "";
      if (ph === "setup") body = `<p>${b.how || `You will get <b>${n} random interview questions</b>. For each one you get <b>${b.think || 60} seconds to think</b> and <b>${b.answer || 90} seconds to type</b> your answer. Then you get feedback.`}</p>
        <label class="jr-job">Which job are you interviewing for?<select data-job>${MOCK_JOBS.map((j, i) => `<option value="${i}" ${(st.job || 0) === i ? "selected" : ""}>${j[0]}</option>`).join("")}</select></label>
        <div class="btnrow"><button type="button" class="btn big" data-start>▶ Start the interview</button></div>`;
      else if (ph === "think") body = `${steps}<p class="mu small" style="margin:0">Job: <b>${job[0]}</b></p><p class="jr-q">“${q[0]}”</p>
        <div class="jr-clock"><span class="jr-time" data-clock>${mmss(b.think || 60)}</span><span class="jr-phase">🤔 Think time</span><div class="jr-bar"><span data-bar style="width:100%"></span></div></div>
        <label class="note">Quick notes (optional): jot key words for your answer<textarea rows="2" data-notes placeholder="Example: team project, I made the schedule, got an A">${esc((st.n || {})[k] || "")}</textarea></label>
        <div class="btnrow">${hear}<button type="button" class="btn" data-ready>I’m ready, start my answer ▶</button></div><p class="jr-tip">💡 ${q[1]}</p>`;
      else if (ph === "ans") body = `${steps}<p class="mu small" style="margin:0">Job: <b>${job[0]}</b></p><p class="jr-q">“${q[0]}”</p>
        <div class="jr-clock"><span class="jr-time" data-clock>${mmss(b.answer || 90)}</span><span class="jr-phase" data-phase>🎤 Answer time</span><div class="jr-bar"><span data-bar style="width:100%"></span></div></div>
        ${(st.n || {})[k] ? `<p class="small mu">Your notes: ${esc(st.n[k])}</p>` : ""}
        <label class="note">Type your answer like you are talking to the interviewer<textarea rows="5" data-ans placeholder="Start with a full sentence. Give an example. Connect it to the job.">${esc((st.a || {})[k] || "")}</textarea></label>
        <div class="wc"><span data-wc>${words((st.a || {})[k])}</span> words · aim for 30+</div>
        <div class="btnrow">${hear}<button type="button" class="btn" data-done>✅ Done answering</button><span class="msg" data-msg></span></div>`;
      else if (ph === "fb") { const ev = mockEval(b, st, k); body = `${steps}<p class="jr-q">“${q[0]}”</p>
        <label class="note">Your answer (you can revise it and check again)<textarea rows="4" data-ans>${esc((st.a || {})[k] || "")}</textarea></label>
        <div class="jr-fb"><h5>Feedback · ${ev.w} words${(st.late || {})[k] ? " · went over time (that is OK, keep practicing)" : ""}</h5><ul class="rub">${ev.res.map(r => `<li class="${r.ok ? "ok" : "bad"}">${r.ok ? "✓" : "✗"} ${r.label}${r.ok ? "" : `<div class="jr-tip">${r.tip}</div>`}</li>`).join("")}${ev.w < 20 ? `<li class="bad">✗ Say more: aim for at least 20 to 30 words.</li>` : ""}</ul>
          <p class="score" style="margin-top:4px">${ev.pt ? "✅ 1 point: strong answer!" : "0 points so far: fix one of the ✗ items and check again."}</p></div>
        <div class="btnrow"><button type="button" class="btn ghost" data-recheck>↻ Check my revised answer</button><button type="button" class="btn" data-mnext>${k < n - 1 ? "Next question →" : "See my results →"}</button></div>`; }
      else { const tot = BT.mock.score(b, st).pts; body = `<h4 style="margin-top:4px">🎉 Interview complete!</h4><p>Score: <b>${tot} / ${n}</b>${st.best && st.best > BT.mock.cur(b, st) ? ` (your best round counts)` : ""}</p>
        <div class="jr-sum">${list.slice(0, n).map((qi, i) => { const ev = mockEval(b, st, i); return `<div><span class="pt">${ev.pt} pt</span><b>${MOCK_Q[qi][0]}</b><p class="small" style="margin:4px 0">${esc((st.a || {})[i] || "")}</p><span class="small mu">${ev.res.map(r => (r.ok ? "✓ " : "✗ ") + r.label.split(" (")[0]).join(" · ")}</span></div>`; }).join("")}</div>
        <div class="btnrow"><button type="button" class="btn ghost" data-again>🔁 Practice 3 new questions</button><span class="mu small">Your best round is kept.</span></div>`; }
      return `<div class="jr-mock"><h4>🎤 ${b.title || "Mock interview"}</h4>${body}</div>`;
    },
    cur(b, st) { const n = b.n || 3; return Array.from({ length: n }, (_, i) => (st.a || {})[i] != null && (st.ph === "end" || st.k > i || (st.k === i && st.ph === "fb")) ? mockEval(b, st, i).pt : 0).reduce((a, x) => a + x, 0); },
    wire(root, b, st, save, redraw) {
      clearInterval(MOCK_TICK); MOCK_TICK = null;
      const n = b.n || 3, THINK = (b.think || 60) * 1000, ANS = (b.answer || 90) * 1000, k = st.k || 0;
      const go = ph => { st.ph = ph; if (ph === "think") st.end = Date.now() + THINK; if (ph === "ans") st.end = Date.now() + ANS; save(); redraw(); };
      const js = $("[data-job]", root); if (js) js.onchange = () => { st.job = +js.value; save(); };
      const s = $("[data-start]", root); if (s) s.onclick = () => { const pool = MOCK_Q.map((_, i) => i).sort(() => Math.random() - 0.5); st.list = pool.slice(0, n); st.k = 0; st.a = {}; st.n = {}; st.late = {}; go("think"); };
      const hr = $("[data-hear]", root); if (hr) hr.onclick = () => speak(MOCK_Q[st.list[k]][0]);
      const nt = $("[data-notes]", root); if (nt) nt.oninput = () => { (st.n = st.n || {})[k] = nt.value; save(); };
      const rd = $("[data-ready]", root); if (rd) rd.onclick = () => go("ans");
      const an = $("[data-ans]", root); if (an) an.oninput = () => { (st.a = st.a || {})[k] = an.value; const wc = $("[data-wc]", root); if (wc) wc.textContent = words(an.value); save(); };
      const dn = $("[data-done]", root); if (dn) dn.onclick = () => { if (words((st.a || {})[k]) < 3) { $("[data-msg]", root).textContent = "Type your answer first."; return; } if (Date.now() > st.end) (st.late = st.late || {})[k] = 1; if (canSpeak()) speechSynthesis.cancel(); go("fb"); };
      const rc = $("[data-recheck]", root); if (rc) rc.onclick = () => { save(); redraw(); };
      const nx = $("[data-mnext]", root); if (nx) nx.onclick = () => { if (k < n - 1) { st.k = k + 1; go("think"); } else { st.best = Math.max(st.best || 0, BT.mock.cur(b, Object.assign({}, st, { ph: "end" }))); go("end"); } };
      const ag = $("[data-again]", root); if (ag) ag.onclick = () => { st.best = Math.max(st.best || 0, BT.mock.cur(b, st)); st.ph = "setup"; st.list = []; st.a = {}; st.k = 0; save(); redraw(); };
      if (st.ph === "think" || st.ph === "ans") {
        const total = st.ph === "think" ? THINK : ANS;
        const tick = () => {
          if (!root.isConnected) { clearInterval(MOCK_TICK); MOCK_TICK = null; return; }
          const ms = Math.max(0, (st.end || 0) - Date.now()), left = Math.ceil(ms / 1000), c = $("[data-clock]", root), bar = $("[data-bar]", root);
          if (c) { c.textContent = mmss(left); c.classList.toggle("low", left <= 10); } if (bar) bar.style.width = (ms / total * 100).toFixed(1) + "%";
          if (!ms) { clearInterval(MOCK_TICK); MOCK_TICK = null;
            if (st.ph === "think") go("ans");
            else { const p = $("[data-phase]", root); if (p) p.textContent = "⏰ Time! Finish your sentence, then press Done."; } }
        };
        tick(); if ((st.end || 0) > Date.now()) MOCK_TICK = setInterval(tick, 250);
      }
    },
    score: (b, st) => ({ max: b.n || 3, pts: Math.max(st.best || 0, BT.mock.cur(b, st)), label: b.label || "mock interview" }),
    text: (b, st) => `Mock interview (${(MOCK_JOBS[st.job || 0] || [""])[0]}): ` + (st.list || []).map((qi, i) => `Q${i + 1} ${MOCK_Q[qi][0]} A: ${(st.a || {})[i] || "-"}`).join(" | ")
  };
});
