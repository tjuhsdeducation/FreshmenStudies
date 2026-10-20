/* =====================================================================
   COSTA'S LEVELS OF QUESTIONING: extra lesson blocks for cc-lesson.js
   Blocks: qbank (term bank house), qbuild (question builder + detector),
           qpractice (read, ask, answer), qreverse (answer first)
   Load this BEFORE cc-lesson.js. It registers itself through window.CC_EXTS.
   window.CostaDetect(text) is also exposed so other pages can reuse it.
   ===================================================================== */
(function () {
  /* ---------------- level data ---------------- */
  const LV = {
    1: { n: 1, name: "Gathering", floor: "Ground floor", icon: "🧱", color: "#0e9f6e",
      brain: "Find and remember facts. The answer is right there in the text, the notes, or your memory.",
      verbs: ["define", "list", "identify", "name", "recall", "describe", "observe", "match", "label", "calculate"],
      stems: ["Who…?", "What…?", "When…?", "Where…?", "Which…?", "How many…?", "What is the definition of…?"],
      ex: { Math: "What is the formula for the area of a circle?", Science: "What are the reactants of photosynthesis?", ELA: "Who is the narrator of the story?", History: "In what year was the Declaration of Independence adopted?" } },
    2: { n: 2, name: "Processing", floor: "Second floor", icon: "🪜", color: "#2b7de9",
      brain: "Make sense of the facts. Put pieces together, find patterns, causes, and connections.",
      verbs: ["compare", "contrast", "classify", "explain why", "infer", "analyze", "sequence", "distinguish", "summarize", "cause / effect"],
      stems: ["Why…?", "How is ___ different from ___?", "What is the relationship between…?", "What caused…?", "What are the effects of…?", "What can you infer from…?"],
      ex: { Math: "How is a linear function different from an exponential function?", Science: "Why do plant cells need chloroplasts when animal cells do not?", ELA: "Compare the main character at the beginning and at the end of the story.", History: "What caused the colonists to declare independence from Britain?" } },
    3: { n: 3, name: "Applying", floor: "Rooftop", icon: "🔭", color: "#8a54e0",
      brain: "Go beyond the facts. Use what you know in a new situation, make a judgment, or imagine something new.",
      verbs: ["evaluate", "predict", "imagine", "hypothesize", "judge", "design", "create", "generalize", "apply a principle", "speculate", "justify"],
      stems: ["What if…?", "What would happen if…?", "How would…?", "Do you agree that…? Why?", "What is the best way to…?", "Should…?"],
      ex: { Math: "What would happen to the graph if the slope doubled?", Science: "Predict what would happen to a pond ecosystem if all the algae died.", ELA: "If you were the main character, would you make the same choice? Justify your answer.", History: "How would life in the United States be different today if the Bill of Rights had never been added?" } }
  };
  const SUBJ = { Math: "➗", Science: "🔬", ELA: "📖", History: "🏛️" };

  /* ---------------- the level detector ----------------
     Multi-word stems are checked first and "used up" so their parts are not
     counted again ("what would happen if" is not also "what" + "if").
     light = a weak hint (who/what/how does). guard = skip when used as a noun ("the judge"). */
  const C = (re, l, o = {}) => Object.assign({ re: new RegExp("\\b(?:" + re + ")\\b", "g"), l }, o);
  const CUES = [
    /* Level 3 stems (multi-word) */
    C("what would happen if|what would happen|what will happen|what might happen|what could happen", 3),
    C("what if|how would|how might|how could|how can we|how can you|what would you|what would|what might|what could|if you were|would you rather|would you|would it", 3),
    C("do you agree|would you agree|do you think it is fair|is it fair|is it right|is it better|which is better|which would be better|which is best|what is the best|what's the best|what is the most important|in the future", 3),
    /* Level 2 stems (multi-word) */
    C("explain why|explain how|what is the relationship|what's the relationship|what are the relationships|what is the difference|what's the difference|what are the differences|differences? between|in what ways?|in what order|what caused|what causes|what evidence|what is the meaning|what does [a-z' ]{1,40}? mean|results? in|resulted in|leads? to|led to|what pattern", 2),
    C("how (?:is|are|was|were) [a-z' ]{1,40}? (?:different|similar|alike|related|connected)", 2),
    /* Level 1 stems (multi-word) */
    C("how many|how much|how long ago|what year|in what year|what time|what is the name|what are the names|what is the definition|fill in", 1),
    /* single thinking verbs */
    C("predict\\w*|imagin\\w*|hypothes\\w*|evaluat\\w*|creat(?:e|es|ed|ing)|invent\\w*|generaliz\\w*|apply|applying|applied|speculat\\w*|justif\\w*|forecast\\w*|propos\\w*|defend\\w*|argu(?:e|es|ed|ing)|assess\\w*|critique|recommend\\w*|decid(?:e|es)|suppose|should|improve", 3),
    C("judg(?:e|es|ed|ing)|design(?:s|ed|ing)?", 3, { guard: true }),
    C("why|compar\\w*|contrast\\w*|classif\\w*|categori\\w*|infer\\w*|analy[sz]\\w*|sequenc\\w*|distinguish\\w*|summar\\w*|explain\\w*|interpret\\w*|relationships?|relat(?:e|es|ed)|differ\\w*|similar\\w*|alike|causes?|caused|effects?|affect(?:s|ed)?|evidence|patterns?|reasons?|examin\\w*|organiz\\w*|connect\\w*|conclu\\w*|significan\\w*", 2),
    C("defin\\w*|identif\\w*|recall\\w*|describ\\w*|observ\\w*|recit\\w*|calculat\\w*|count|memoriz\\w*|repeat|tell", 1),
    C("list(?:s|ed)?|name(?:s|d)?|match(?:es)?|label(?:s|ed)?", 1, { guard: true }),
    /* light hints */
    C("how (?:do|does|did|is|are|was|were|can)", 2, { light: true }),
    C("if", 3, { light: true }),
    C("what|who|whom|when|where|which|find|solve|is there|are there", 1, { light: true })
  ];
  const NOUNY = /\b(?:the|a|an|this|that|his|her|their|its|my|your|our|first|last)\s+$/;
  function detect(q) {
    const raw = String(q || "");
    let s = " " + raw.toLowerCase().replace(/[’‘`]/g, "'").replace(/[^a-z0-9' ]+/g, " ").replace(/\s+/g, " ").trim() + " ";
    const n = (raw.match(/[A-Za-z0-9'’]+/g) || []).length, hits = [];
    CUES.forEach(c => {
      s = s.replace(c.re, (m, off) => {
        if (c.guard && NOUNY.test(s.slice(0, off))) return m;
        let cue = m.trim(); const w = cue.split(" "); if (w.length > 4 && !/^what would happen/.test(cue)) cue = `${w[0]} ${w[1]} … ${w[w.length - 1]}`;
        hits.push({ cue, l: c.l, light: !!c.light, at: off });
        return " ".repeat(m.length);
      });
    });
    hits.sort((a, b) => a.at - b.at);
    if (!n) return { level: null, sure: 0, hits, msg: "Type a question and I will estimate its level." };
    if (!hits.length) return { level: null, sure: 0, hits, msg: "I am not sure. I did not find a question word or thinking verb I know. Try a stem from the bank, like “Why…?” or “What would happen if…?”" };
    const strong = hits.filter(h => !h.light), pool = strong.length ? strong : hits;
    const level = Math.max(...pool.map(h => h.l));
    const top = [...new Set(pool.filter(h => h.l === level).map(h => h.cue))];
    const others = [...new Set(hits.filter(h => h.l !== level && h.l < level && !(h.light && strong.length)).map(h => `‘${h.cue}’ (Level ${h.l})`))];
    let sure = strong.length ? 2 : 1;
    const q1 = top.map(c => `‘${c}’`).join(" and ");
    const why = { 1: "Who, what, when, and where questions usually gather facts", 2: "That usually asks you to explain how something works", 3: "“If” often means imagining a new situation" }[level];
    let msg = sure === 2 ? `You used ${q1} → Level ${level}.` : `You used ${q1}. ${why}, so this is probably Level ${level}. I am not completely sure because there is no thinking verb.${level > 1 ? ` Add one from the Level ${level} list to be sure.` : ""}`;
    if (others.length) msg += ` You also used ${others.join(", ")}, but the highest level of thinking counts.`;
    if (n < 4) { sure = Math.min(sure, 1); msg += " Your question is very short, so this is only a guess."; }
    return { level, sure, hits, msg };
  }
  window.CostaDetect = detect;

  /* ---------------- word reuse (answers connect to the reading) ---------------- */
  const STOP = new Set("the a an and or but of to in on at for with by from as is are was were be been being it its this that these those there their they them then than he she his her you your i we our my me not no yes do does did done so too very can will would could should what who when where why how which if into about over under also just more most some any each other such only own same both few many much have has had because while after before during through between every".split(" "));
  const stem = w => w.replace(/(ings?|ed|es|s|ly)$/, "").slice(0, 6);
  const keyw = t => [...new Set((String(t || "").toLowerCase().replace(/[’']/g, "").match(/[a-z]+/g) || []).filter(w => w.length >= 4 && !STOP.has(w)).map(stem))];
  const reuse = (ans, src) => { const K = new Set(keyw(src)), seen = new Set(), out = [];
    (String(ans || "").toLowerCase().replace(/[’']/g, "").match(/[a-z]+/g) || []).forEach(w => { if (w.length < 4 || STOP.has(w)) return; const k = stem(w); if (K.has(k) && !seen.has(k)) { seen.add(k); out.push(w); } }); return out; };

  /* ---------------- styles (injected once) ---------------- */
  const CSS = `
  .cq-l1{--q:#0e9f6e}.cq-l2{--q:#2b7de9}.cq-l3{--q:#8a54e0}
  .cq-pill{display:inline-flex;align-items:center;gap:4px;border-radius:999px;padding:2px 10px;font-weight:800;font-size:.8rem;color:#fff;background:var(--q,var(--muted));white-space:nowrap}
  .cq-pill.none{background:var(--soft);color:var(--muted)}
  .cq-bank{display:grid;grid-template-columns:minmax(220px,300px) 1fr;gap:16px;align-items:start}
  .cq-house{display:flex;flex-direction:column;align-items:stretch;max-width:300px;margin:0 auto;width:100%}
  .cq-roof{height:62px;background:color-mix(in srgb,#8a54e0 75%,#000);clip-path:polygon(50% 0,100% 100%,0 100%);margin:0 -14px;display:grid;place-items:end center;padding-bottom:6px;color:#fff;font-size:1.4rem}
  .cq-floor{position:relative;border:0;border-left:6px solid color-mix(in srgb,var(--q) 70%,#000);border-right:6px solid color-mix(in srgb,var(--q) 70%,#000);background:color-mix(in srgb,var(--q) 16%,var(--surface));padding:12px 12px 12px 14px;text-align:left;cursor:pointer;display:grid;gap:2px;border-bottom:4px solid color-mix(in srgb,var(--q) 55%,var(--surface))}
  .cq-floor:hover{background:color-mix(in srgb,var(--q) 24%,var(--surface))}
  .cq-floor.on{background:var(--q);color:#fff}.cq-floor.on small{color:#fff}
  .cq-floor b{font:600 1.08rem var(--display)}.cq-floor small{font-weight:700;color:var(--muted)}
  .cq-floor .cq-win{position:absolute;right:12px;top:50%;transform:translateY(-50%);font-size:1.4rem}
  .cq-floor .cq-seen{font-size:.75rem;font-weight:800}
  .cq-ground{height:12px;background:color-mix(in srgb,#0e9f6e 45%,var(--line));border-radius:0 0 10px 10px;margin:0 -14px}
  .cq-panel{border:3px solid var(--q);border-radius:18px;padding:14px 16px;background:color-mix(in srgb,var(--q) 6%,var(--surface))}
  .cq-panel h4{color:color-mix(in srgb,var(--q) 75%,var(--fg));font-size:1.3rem}
  .cq-chips{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0 10px}
  .cq-chip{border:2px solid color-mix(in srgb,var(--q) 55%,var(--line));background:var(--surface);border-radius:999px;padding:3px 11px;font-weight:700;font-size:.9rem}
  .cq-sub{display:flex;flex-wrap:wrap;gap:6px;margin:4px 0 8px}
  .cq-sub button,.cq-tabs button{border:2px solid var(--line);background:var(--surface);border-radius:999px;padding:5px 12px;font-weight:800;cursor:pointer;font-size:.9rem}
  .cq-sub button.on{border-color:var(--q);background:var(--q);color:#fff}
  .cq-ex{background:var(--surface);border-radius:12px;padding:10px 12px;font-weight:700;border:1px dashed color-mix(in srgb,var(--q) 50%,var(--line))}
  .cq-lbl{font-size:.74rem;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin:8px 0 2px}
  .cq-det{border:2px solid var(--line);border-radius:14px;padding:10px 12px;background:var(--soft);margin-top:8px}
  .cq-det .cq-dh{display:flex;gap:8px;align-items:center;flex-wrap:wrap;font-weight:800}
  .cq-det p{margin:4px 0 0;font-size:.93rem}
  .cq-det.match{border-color:var(--ok);background:color-mix(in srgb,var(--ok) 10%,var(--surface))}
  .cq-det.miss{border-color:var(--bad);background:color-mix(in srgb,var(--bad) 8%,var(--surface))}
  .cq-tabs{display:flex;flex-wrap:wrap;gap:8px;margin:8px 0 12px}
  .cq-tabs button{display:flex;gap:6px;align-items:center}
  .cq-tabs button.on{border-color:var(--q,var(--fg));box-shadow:0 0 0 2px var(--q,var(--fg)) inset}
  .cq-tabs button.ok::after{content:"✓";color:var(--ok);font-weight:900}
  .cq-stems{display:flex;flex-wrap:wrap;gap:6px;margin:4px 0 10px}
  .cq-stem{border:2px solid color-mix(in srgb,var(--q) 50%,var(--line));background:var(--surface);border-radius:12px;padding:5px 11px;font-weight:700;cursor:pointer;font-size:.92rem}
  .cq-stem.on{background:var(--q);color:#fff;border-color:var(--q)}
  .cq-in{width:100%;border:2px solid var(--line);border-radius:12px;padding:10px;background:var(--surface);font-weight:600}
  .cq-field{display:grid;gap:4px;font-weight:800;font-size:.93rem;margin-top:8px}
  .cq-live{font:600 1.15rem var(--display);background:var(--surface);border:2px solid var(--q,var(--line));border-radius:14px;padding:10px 14px;margin-top:8px;min-height:48px;overflow-wrap:anywhere}
  .cq-live .cq-ph{color:var(--muted);font:600 .95rem var(--body)}
  .cq-try{border:2px dashed var(--line);border-radius:16px;padding:12px 14px;margin-bottom:14px}
  .cq-read{border:2px solid var(--line);border-radius:16px;padding:12px 14px;background:var(--surface);margin:8px 0}
  .cq-read blockquote{margin:6px 0;padding:6px 14px;border-left:5px solid var(--q,var(--lc));background:var(--soft);border-radius:0 12px 12px 0;font-style:italic}
  .cq-read table{border-collapse:collapse;width:100%;font-size:.95rem;margin:6px 0}.cq-read th,.cq-read td{border:1px solid var(--line);padding:6px 9px;text-align:left}.cq-read thead th{background:var(--soft)}
  .cq-read p{margin:0 0 .6em}
  .cq-bars{display:grid;gap:5px;margin:8px 0}.cq-bar{display:grid;grid-template-columns:minmax(90px,130px) 1fr;gap:8px;align-items:center;font-size:.88rem;font-weight:700}
  .cq-bar span{display:block;height:20px;border-radius:6px;background:var(--q,var(--lc));color:#fff;font-size:.78rem;padding:0 6px;line-height:20px;min-width:24px}
  .cq-task{font-weight:800;font-size:1.05rem;margin:10px 0 4px;display:flex;gap:8px;align-items:center;flex-wrap:wrap}
  .cq-ans{font:600 1.1rem var(--display);background:color-mix(in srgb,var(--q) 9%,var(--surface));border:2px solid var(--q);border-radius:14px;padding:12px 14px;margin:6px 0}
  .cq-sum{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:10px;font-weight:700}
  @media (max-width:720px){.cq-bank{grid-template-columns:1fr}}
  `;
  function inject() { if (document.getElementById("cq-css")) return; const s = document.createElement("style"); s.id = "cq-css"; s.textContent = CSS; document.head.appendChild(s); }

  (window.CC_EXTS = window.CC_EXTS || []).push(function (BT, H) {
    const { $, $$, esc, words } = H;
    inject();
    const pill = l => l ? `<span class="cq-pill cq-l${l}">${LV[l].icon} Level ${l}</span>` : `<span class="cq-pill none">❔ Not sure</span>`;
    const sureTxt = r => r.sure === 2 ? "Detector says" : r.sure === 1 ? "Detector guesses" : "Detector";
    const detBox = (text, target) => {
      const r = detect(text), has = words(text) > 0;
      const cls = !has || !target ? "" : r.level === target ? " match" : " miss";
      const tail = !has || !target ? "" : r.level === target ? `<p>✅ That matches your target, Level ${target}.</p>` : r.level ? `<p>✗ Your target is Level ${target}. Try a ${LV[target].name.toLowerCase()} stem such as ${LV[target].stems.slice(0, 2).map(x => `“${x}”`).join(" or ")}.</p>` : `<p>✗ Your target is Level ${target}. Start with a Level ${target} stem so the level is clear.</p>`;
      return `<div class="cq-det${cls}" aria-live="polite"><div class="cq-dh">🔎 ${sureTxt(r)} ${has ? pill(r.level) : ""}</div><p>${esc(r.msg)}</p>${tail}</div>`;
    };
    const tidy = s => { s = String(s || "").replace(/\s+/g, " ").trim(); return s ? s[0].toUpperCase() + s.slice(1) : ""; };

    /* =============== qbank: the three-story house =============== */
    BT.qbank = {
      html(b, st) {
        const cur = st.cur, sub = st.sub || "Math", seen = st.open || {}, k = Object.keys(seen).length;
        const floor = l => `<button class="cq-floor cq-l${l}${cur === l ? " on" : ""}" data-l="${l}" aria-pressed="${cur === l}"><small>${LV[l].floor}</small><b>Level ${l}: ${LV[l].name}</b><span class="cq-seen">${seen[l] ? "✓ opened" : "Tap to open"}</span><span class="cq-win" aria-hidden="true">${LV[l].icon}</span></button>`;
        const L = LV[cur];
        return `<div class="cq-q"><h4>🏠 ${b.title || "The Question House: Costa’s Three Levels"}</h4><p class="mu">${b.how || "Tap each floor of the house to open its word bank. Then tap a subject to see an example question."}</p>
          <div class="cq-bank"><div><div class="cq-house" role="group" aria-label="Costa's levels as a three-story house"><div class="cq-roof" aria-hidden="true">✨</div>${floor(3)}${floor(2)}${floor(1)}<div class="cq-ground" aria-hidden="true"></div></div>
            <p class="mu small" style="text-align:center">Opened <b>${k} of 3</b> floors</p></div>
          ${L ? `<div class="cq-panel cq-l${cur}"><h4>${L.icon} Level ${cur}: ${L.name} <small class="mu">(${L.floor})</small></h4><p>${L.brain}</p>
            <div class="cq-lbl">Thinking verbs</div><div class="cq-chips">${L.verbs.map(v => `<span class="cq-chip">${v}</span>`).join("")}</div>
            <div class="cq-lbl">Question stems</div><div class="cq-chips">${L.stems.map(v => `<span class="cq-chip">${esc(v)}</span>`).join("")}</div>
            <div class="cq-lbl">Example by subject</div><div class="cq-sub" role="group" aria-label="Choose a subject">${Object.keys(SUBJ).map(s => `<button class="${s === sub ? "on" : ""}" data-s="${s}" aria-pressed="${s === sub}">${SUBJ[s]} ${s}</button>`).join("")}</div>
            <div class="cq-ex">${SUBJ[sub]} ${esc(L.ex[sub])}</div></div>`
          : `<div class="cq-panel" style="--q:var(--line)"><h4>👆 Pick a floor</h4><p>Every question lives on one floor of the house. The higher you go, the more your brain has to do.</p><ul><li><b style="color:#0e9f6e">Ground floor:</b> gather the facts.</li><li><b style="color:#2b7de9">Second floor:</b> process the facts.</li><li><b style="color:#8a54e0">Rooftop:</b> apply the facts somewhere new.</li></ul></div>`}</div></div>`;
      },
      wire(root, b, st, save, redraw) {
        $$(".cq-floor", root).forEach(f => f.onclick = () => { st.cur = +f.dataset.l; (st.open = st.open || {})[st.cur] = 1; save(); redraw(); });
        $$(".cq-sub button", root).forEach(x => x.onclick = () => { st.sub = x.dataset.s; save(); redraw(); });
      },
      score: (b, st) => b.graded === false ? null : { max: 1, pts: Object.keys(st.open || {}).length >= 3 ? 1 : 0, label: "question house explored" },
      text: (b, st) => `Opened floors: ${Object.keys(st.open || {}).sort().join(",") || "none"}`
    };

    /* =============== qbuild: build 3 questions, one per level =============== */
    const STEMS = {
      1: ["What is", "Who", "When did", "Where is", "Define", "List", "Identify", "Describe", "Name", "How many"],
      2: ["Why did", "Why does", "Compare", "What is the difference between", "What is the relationship between", "What caused", "What are the effects of", "Explain why", "What can you infer about", "Classify", "Summarize"],
      3: ["What would happen if", "What if", "How would", "Predict what", "Do you agree that", "Should", "Design", "Imagine", "What is the best way to", "Justify", "How could"]
    };
    const ASK = /^(what|who|when|where|why|how|do|does|did|should|is|are|which|can|could|would|in)\b/i;
    const fullQ = (l, q) => {
      if (!q) return "";
      const own = q.s === -1 || q.s == null, base = own ? (q.c || "") : `${STEMS[l][q.s]} ${q.c || ""}`;
      let t = tidy(base); if (!t || (!own && !String(q.c || "").trim())) return own ? t : "";
      if (!/[?.!]$/.test(t)) t += ASK.test(t) ? "?" : ".";
      return t;
    };
    const qbOk = (l, q) => { const t = fullQ(l, q); return words(q && q.c) >= 2 && words(t) >= 4 && detect(t).level === l; };
    BT.qbuild = {
      html(b, st) {
        const cur = st.cur || 1, Q = st.q || {}, q = Q[cur] || {}, t = fullQ(cur, q);
        return `<div class="cq-q"><h4>🛠️ ${b.title || "Question Builder"}</h4>
          <div class="cq-try"><label class="cq-field">🔎 Level detector: type ANY question to test it<input class="cq-in" data-try value="${esc(st.test || "")}" placeholder="Example: Why did the Roman Empire fall?"></label><div data-tryout>${detBox(st.test || "", 0)}</div></div>
          <p class="mu">${b.how || "Build one question for each floor of the house. Step 1: pick a level. Step 2: pick a stem. Step 3: type the rest of your question about any topic from your classes."}</p>
          <div class="cq-lbl">Step 1: Pick a level</div>
          <div class="cq-tabs" role="tablist">${[1, 2, 3].map(l => `<button role="tab" class="cq-l${l}${l === cur ? " on" : ""}${qbOk(l, Q[l]) ? " ok" : ""}" data-l="${l}" aria-selected="${l === cur}">${pill(l)} ${LV[l].name}</button>`).join("")}</div>
          <div class="cq-l${cur}"><div class="cq-lbl">Step 2: Pick a stem for Level ${cur}</div>
          <div class="cq-stems">${STEMS[cur].map((s, i) => `<button class="cq-stem${q.s === i ? " on" : ""}" data-s="${i}" aria-pressed="${q.s === i}">${esc(s)}…</button>`).join("")}<button class="cq-stem${q.s === -1 ? " on" : ""}" data-s="-1" aria-pressed="${q.s === -1}">✏️ My own words</button></div>
          <label class="cq-field">Step 3: ${q.s === -1 ? "Type your whole question" : q.s != null ? `Finish the question that starts “${esc(STEMS[cur][q.s])}…”` : "Pick a stem first, then type the rest of your question"}<input class="cq-in" data-c value="${esc(q.c || "")}" ${q.s == null ? "disabled" : ""} placeholder="${q.s === -1 ? "Type your full question" : "…the rest of your question"}"></label>
          <div class="cq-lbl">Your question</div><div class="cq-live" data-live>${t ? esc(t) : `<span class="cq-ph">Your full question will appear here as you type.</span>`}</div>
          <div data-det>${t ? detBox(t, cur) : ""}</div></div>
          <div class="cq-sum" data-sum>${BT.qbuild.sum(st)}</div></div>`;
      },
      sum(st) { const Q = st.q || {}; return `Questions that match their level: ${[1, 2, 3].map(l => qbOk(l, Q[l]) ? pill(l) : `<span class="cq-pill none">Level ${l} ✗</span>`).join(" ")}`; },
      wire(root, b, st, save, redraw) {
        const tr = $("[data-try]", root); tr.oninput = () => { st.test = tr.value; $("[data-tryout]", root).innerHTML = detBox(tr.value, 0); save(); };
        $$(".cq-tabs button", root).forEach(x => x.onclick = () => { st.cur = +x.dataset.l; save(); redraw(); });
        const cur = st.cur || 1;
        $$(".cq-stem", root).forEach(x => x.onclick = () => { st.q = st.q || {}; const q = st.q[cur] = st.q[cur] || {}; q.s = +x.dataset.s; save(); redraw(); const i = $(".blk [data-c]"); if (i) i.focus(); });
        const c = $("[data-c]", root);
        c.oninput = () => { st.q = st.q || {}; const q = st.q[cur] = st.q[cur] || {}; q.c = c.value; const t = fullQ(cur, q);
          $("[data-live]", root).innerHTML = t ? esc(t) : `<span class="cq-ph">Your full question will appear here as you type.</span>`;
          $("[data-det]", root).innerHTML = t ? detBox(t, cur) : ""; $("[data-sum]", root).innerHTML = BT.qbuild.sum(st);
          $$(".cq-tabs button", root).forEach(x => x.classList.toggle("ok", qbOk(+x.dataset.l, st.q[+x.dataset.l]))); save(); };
      },
      score: (b, st) => ({ max: 3, pts: [1, 2, 3].filter(l => qbOk(l, (st.q || {})[l])).length, label: "question builder" }),
      text: (b, st) => [1, 2, 3].map(l => { const t = fullQ(l, (st.q || {})[l]); return `L${l}${qbOk(l, (st.q || {})[l]) ? "✓" : "✗"}: ${t || "-"}`; }).join(" | ")
    };

    /* =============== shared: reading display =============== */
    const reading = it => `<div class="cq-read cq-l${it.level}"><div class="cq-dh" style="display:flex;gap:8px;align-items:center;flex-wrap:wrap"><b>${SUBJ[it.subject] || "📄"} ${esc(it.subject)}: ${it.title}</b></div>
      ${it.html || ""}${it.bars ? `<div class="cq-bars" role="img" aria-label="${esc(it.barsAlt || "bar chart")}">${it.bars.map(r => { const mx = Math.max(...it.bars.map(x => x[1])); return `<div class="cq-bar"><b>${esc(r[0])}</b><span style="width:${Math.max(8, 100 * r[1] / mx)}%">${r[1]}</span></div>`; }).join("")}</div>${it.barsCap ? `<p class="src">${it.barsCap}</p>` : ""}` : ""}
      ${it.src ? `<p class="src">${it.src}</p>` : ""}</div>`;
    const srcText = it => (it.html || "").replace(/<[^>]+>/g, " ") + " " + (it.bars || []).map(r => r[0]).join(" ") + " " + (it.title || "");

    /* =============== qpractice: read, ask, answer =============== */
    const ANS_MIN = 12;
    const pEval = (it, a) => {
      a = a || {}; const r = detect(a.q), qw = words(a.q), aw = words(a.ans), re = reuse(a.ans, srcText(it)), need = it.reuse || 2;
      const res = [
        { label: `Your question is Level ${it.level}${a.q ? ` (detector: ${r.level ? "Level " + r.level : "not sure"})` : ""}`, ok: qw >= 5 && r.level === it.level },
        { label: `Your answer has at least ${it.min || ANS_MIN} words (you wrote ${aw})`, ok: aw >= (it.min || ANS_MIN) },
        { label: `Your answer uses at least ${need} words from the reading${re.length ? ` (you used: ${re.slice(0, 6).join(", ")})` : ""}`, ok: re.length >= need }
      ];
      return { r, res, pts: (res[0].ok ? 1 : 0) + (res[1].ok && res[2].ok ? 1 : 0) };
    };
    BT.qpractice = {
      html(b, st) {
        const cur = st.cur || 0, it = b.items[cur], a = (st.a || [])[cur] || {}, chk = (st.chk || {})[cur], ev = chk ? pEval(it, a) : null;
        return `<div class="cq-q"><h4>📚 ${b.title || "Read, Ask, Answer"}</h4><p class="mu">${b.how || "Read each short text. Write a question at the level shown, then answer your own question using words from the reading."}</p>
          <div class="cq-tabs" role="tablist">${b.items.map((x, i) => `<button role="tab" class="cq-l${x.level}${i === cur ? " on" : ""}${pEval(x, (st.a || [])[i]).pts === 2 ? " ok" : ""}" data-i="${i}" aria-selected="${i === cur}">${SUBJ[x.subject] || "📄"} ${i + 1}. ${esc(x.subject)}</button>`).join("")}</div>
          ${reading(it)}
          <div class="cq-l${it.level}"><p class="cq-task">✏️ Write a ${pill(it.level)} question about this and answer it.</p>
          <p class="mu small">Level ${it.level} stems: ${LV[it.level].stems.map(esc).join(" · ")}</p>
          <label class="cq-field">My Level ${it.level} question<textarea class="cq-in" rows="2" data-q placeholder="${esc(it.ph || "Type your question")}">${esc(a.q || "")}</textarea></label>
          <div data-det>${a.q ? detBox(a.q, it.level) : ""}</div>
          <label class="cq-field">My answer (use words from the reading)<textarea rows="3" data-a placeholder="${esc(it.aph || "Answer your question in 1 to 3 sentences.")}">${esc(a.ans || "")}</textarea></label>
          <div class="btnrow"><button class="btn" data-check>${chk ? "Check again" : "Check my question and answer"}</button><span class="mu small">Points for this reading: <b data-p>${pEval(it, a).pts} / 2</b></span></div>
          ${ev ? `<ul class="rub">${ev.res.map(x => `<li class="${x.ok ? "ok" : "bad"}">${x.ok ? "✓" : "✗"} ${esc(x.label)}</li>`).join("")}</ul><p class="score">Score for this reading: <b>${ev.pts} / 2</b> · ${ev.pts === 2 ? (cur < b.items.length - 1 ? "Great! Go on to the next reading." : "Great work!") : "Revise and check again."}</p>${it.tip && ev.pts < 2 ? `<p class="fb bad">💡 ${it.tip}</p>` : ""}` : ""}</div></div>`;
      },
      wire(root, b, st, save, redraw) {
        const cur = st.cur || 0, it = b.items[cur];
        $$(".cq-tabs button", root).forEach(x => x.onclick = () => { st.cur = +x.dataset.i; save(); redraw(); });
        const get = () => { st.a = st.a || []; return st.a[cur] = st.a[cur] || {}; };
        const q = $("[data-q]", root), an = $("[data-a]", root), upd = () => { $("[data-p]", root).textContent = `${pEval(it, get()).pts} / 2`; save(); };
        q.oninput = () => { get().q = q.value; $("[data-det]", root).innerHTML = q.value.trim() ? detBox(q.value, it.level) : ""; upd(); };
        an.oninput = () => { get().ans = an.value; upd(); };
        $("[data-check]", root).onclick = () => { (st.chk = st.chk || {})[cur] = 1; save(); redraw(); };
      },
      score: (b, st) => ({ max: 2 * b.items.length, pts: b.items.reduce((s, it, i) => s + pEval(it, (st.a || [])[i]).pts, 0), label: "read, ask, answer" }),
      text: (b, st) => b.items.map((it, i) => { const a = (st.a || [])[i] || {}; return `R${i + 1} L${it.level} (${pEval(it, a).pts}/2) Q: ${a.q || "-"} A: ${a.ans || "-"}`; }).join(" | ")
    };

    /* =============== qreverse: here is the answer, write the question =============== */
    const rEval = (it, q) => {
      const r = detect(q), qw = words(q), re = reuse(q, it.answer + " " + (it.topic || "")), need = it.reuse || 2;
      const res = [
        { label: `Your question is Level ${it.level}${q ? ` (detector: ${r.level ? "Level " + r.level : "not sure"})` : ""}`, ok: qw >= 5 && r.level === it.level },
        { label: `Your question has at least 6 words and uses ${need}+ key words from the answer${re.length ? ` (you used: ${re.slice(0, 6).join(", ")})` : ""}`, ok: qw >= 6 && re.length >= need }
      ];
      return { r, res, pts: res.filter(x => x.ok).length };
    };
    BT.qreverse = {
      html(b, st) {
        const a = st.a || [], chk = st.chk || {};
        return `<div class="cq-q"><h4>🔄 ${b.title || "Answer First"}</h4><p class="mu">${b.how || "Here is the answer. Your job: write a question at the level shown that this answers."}</p>
          ${b.items.map((it, i) => { const ev = chk[i] ? rEval(it, a[i]) : null; return `<div class="cq-l${it.level}" style="margin:14px 0"><p class="cq-task">${i + 1}. ${SUBJ[it.subject] || ""} ${esc(it.subject)} · Write a ${pill(it.level)} question for this answer:</p>
            <div class="cq-ans">💬 “${esc(it.answer)}”</div>
            <label class="cq-field">My Level ${it.level} question<textarea class="cq-in" rows="2" data-i="${i}" placeholder="${esc(it.ph || "Type a question that this answers")}">${esc(a[i] || "")}</textarea></label>
            <div data-det="${i}">${a[i] ? detBox(a[i], it.level) : ""}</div>
            <div class="btnrow"><button class="btn" data-check="${i}">${ev ? "Check again" : "Check"}</button><span class="mu small">Points: <b data-p="${i}">${rEval(it, a[i]).pts} / 2</b></span></div>
            ${ev ? `<ul class="rub">${ev.res.map(x => `<li class="${x.ok ? "ok" : "bad"}">${x.ok ? "✓" : "✗"} ${esc(x.label)}</li>`).join("")}</ul>${ev.pts < 2 && it.tip ? `<p class="fb bad">💡 ${it.tip}</p>` : ev.pts === 2 ? `<p class="fb ok">✅ Your question fits the answer and the level.</p>` : ""}` : ""}</div>`; }).join("")}</div>`;
      },
      wire(root, b, st, save, redraw) {
        $$("textarea[data-i]", root).forEach(x => x.oninput = () => { const i = +x.dataset.i; (st.a = st.a || [])[i] = x.value; $(`[data-det="${i}"]`, root).innerHTML = x.value.trim() ? detBox(x.value, b.items[i].level) : ""; $(`[data-p="${i}"]`, root).textContent = `${rEval(b.items[i], x.value).pts} / 2`; save(); });
        $$("[data-check]", root).forEach(x => x.onclick = () => { (st.chk = st.chk || {})[x.dataset.check] = 1; save(); redraw(); });
      },
      score: (b, st) => ({ max: 2 * b.items.length, pts: b.items.reduce((s, it, i) => s + rEval(it, (st.a || [])[i]).pts, 0), label: "answer first" }),
      text: (b, st) => b.items.map((it, i) => `A${i + 1} L${it.level} (${rEval(it, (st.a || [])[i]).pts}/2): ${(st.a || [])[i] || "-"}`).join(" | ")
    };
  });
})();
