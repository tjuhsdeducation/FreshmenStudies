/* =====================================================================
   FULL LESSON MODULES: a 60-minute, step-by-step lesson students do
   start to finish (hook → learn → simulation → checks → scenarios →
   writing → exit ticket). Progress is saved on the device, so students
   can close the window and pick up where they left off.

   A module looks like:
   FS.item('id', { kind:'module', topic, title, mins:60, info:{eq, lt:[...]}, steps:[ ... ] })
   Each step: { name, icon, mins, html?, and ONE of:
       qs:[quiz questions]                (uses FS.quiz question types)
       run:(el, done) => {...}            custom simulation; call done(points, outOf, answerText)
       write:{prompt, min, frames, keys, checks}
       scen:[{who, s, o:[[choice, points 0–2, feedback], ...]}]
     or nothing (a reading with an "I read this" button) }
   ===================================================================== */
(() => {
const $ = (s, el) => el.querySelector(s), $$ = (s, el) => [...el.querySelectorAll(s)];
const esc = FS.esc;

FS.runModule = function (el, mod, ctx) {
  const me = FS.me() || {}, teacher = FS.isTeacher();
  const KEY = 'fsMod:' + (teacher ? 'teacher' : me.school + ':' + me.id) + ':' + mod.id;
  let st; try { st = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) { st = null; }
  if (!st || !st.res) st = { cur: 0, res: {}, drafts: {}, turnedIn: false, selfcheck: {} };
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) { } };
  const steps = mod.steps, N = steps.length;
  const firstOpen = () => { for (let i = 0; i < N; i++) if (!st.res[i]) return i; return N; };
  const cum = []; steps.reduce((a, s, i) => (cum[i] = a + (s.mins || 0)), 0);
  let cleanupStep = null;

  function nav() {
    const open = firstOpen();
    return `<nav class="mnav" aria-label="Lesson steps">${steps.map((s, i) => `<button type="button" class="mchip ${i === st.cur ? 'on' : ''} ${st.res[i] ? 'done' : ''}" data-go="${i}" ${teacher || i <= open ? '' : 'disabled'}><b>${st.res[i] ? '✓' : i + 1}</b><span>${s.icon || ''} ${esc(s.name)}</span></button>`).join('')}<button type="button" class="mchip ${st.cur === N ? 'on' : ''} ${st.turnedIn ? 'done' : ''}" data-go="${N}" ${teacher || open === N ? '' : 'disabled'}><b>${st.turnedIn ? '✓' : '🏁'}</b><span>Finish</span></button></nav>
      <div class="prog" title="${Object.keys(st.res).length} of ${N} steps done"><i style="width:${Object.keys(st.res).length / N * 100}%"></i></div>`;
  }
  function draw() {
    if (cleanupStep) { try { cleanupStep(); } catch (e) { } cleanupStep = null; }
    if (st.cur >= N) return finish();
    const s = steps[st.cur], r = st.res[st.cur];
    el.innerHTML = `${st.cur === 0 && !Object.keys(st.res).length ? `<div class="note">🧭 <b>How this works:</b> ${N} steps, about ${mod.mins || 60} minutes. Finish each step to unlock the next. Your progress saves automatically on this device. At the end you’ll turn everything in to your teacher.</div>` : ''}
      ${nav()}
      <section class="mcard"><div class="mhead"><span class="mnum">Step ${st.cur + 1} of ${N}</span><h3>${s.icon || ''} ${esc(s.name)}</h3><span class="mtime">⏱ ~${s.mins} min · aim to finish by minute ${cum[st.cur]}</span></div>
        <div class="mbody"></div></section>
      <div class="btnrow mfoot"><button class="btn ghost" type="button" id="mb" ${st.cur === 0 ? 'disabled' : ''}>← Back</button><span class="spacer"></span><span class="save" id="mmsg"></span><button class="btn" type="button" id="mn" ${r || teacher ? '' : 'disabled'}>${st.cur === N - 1 ? 'Finish 🏁' : 'Next step →'}</button></div>`;
    $$('[data-go]', el).forEach(b => b.onclick = () => { st.cur = +b.dataset.go; save(); draw(); el.scrollIntoView({ block: 'start' }); });
    $('#mb', el).onclick = () => { st.cur--; save(); draw(); el.scrollIntoView({ block: 'start' }); };
    $('#mn', el).onclick = () => { st.cur++; save(); draw(); el.scrollIntoView({ block: 'start' }); };
    const body = $('.mbody', el);
    if (r) { body.innerHTML = `${s.html ? `<details class="mrev"><summary>Review the reading</summary>${s.html}</details>` : ''}<div class="fb ok">✅ You finished this step${r.max ? `: <b>${r.pts} / ${r.max}</b>` : ''}.</div>${r.ans ? `<details class="mrev" open><summary>Your answers</summary><div style="white-space:pre-wrap">${esc(r.ans)}</div></details>` : ''}<div class="btnrow"><button class="btn ghost" type="button" id="redo">↺ Redo this step</button></div>`; $('#redo', body).onclick = () => { if (confirm('Redo this step? Your saved answers for this step will be replaced.')) { delete st.res[st.cur]; st.turnedIn = false; save(); draw(); } }; return; }
    const done = (pts, max, ans) => {
      st.res[st.cur] = { pts: Math.round((pts || 0) * 10) / 10, max: max || 0, ans: String(ans || '').slice(0, 3000) }; save();
      const n = $('#mn', el); n.disabled = false; n.classList.add('pulse'); $('#mmsg', el).textContent = '✅ Step complete! Press Next.';
      const nv = $('.mnav', el); if (nv) { const tmp = document.createElement('div'); tmp.innerHTML = nav(); nv.replaceWith(tmp.firstElementChild); $('.prog', el).replaceWith(tmp.lastElementChild); $$('[data-go]', el).forEach(b => b.onclick = () => { st.cur = +b.dataset.go; save(); draw(); }); }
    };
    if (s.html) body.insertAdjacentHTML('beforeend', `<div class="mread">${s.html}</div>`);
    const zone = document.createElement('div'); body.appendChild(zone);
    if (s.qs) FS.quiz(zone, s.qs, { label: s.label || 'Check', onFinish: (p, m, arr) => done(p, m, arr.map((x, i) => `${i + 1}. ${x.q}\n   → ${x.a}`).join('\n')) });
    else if (s.run) cleanupStep = s.run(zone, done, { draft: v => { if (v === undefined) return st.drafts[st.cur]; st.drafts[st.cur] = v; save(); } }) || null;
    else if (s.write) writeStep(zone, s.write, done);
    else if (s.scen) scenStep(zone, s.scen, done);
    else { zone.innerHTML = `<div class="btnrow"><button class="btn" type="button">✔ I read this</button></div>`; $('button', zone).onclick = () => { $('button', zone).disabled = true; done(0, 0, ''); }; }
  }

  function writeStep(z, w, done) {
    const min = w.min || 40;
    z.innerHTML = `<div class="qcard"><div class="q">${w.prompt}</div>${w.frames ? `<p class="sorthelp">Sentence starters: ${w.frames.map(f => `<i>“${f}”</i>`).join(' · ')}</p>` : ''}
      <textarea style="min-height:180px" aria-label="Your writing"></textarea><div class="wc">0 / ${min} words</div>
      ${w.checks ? `<div class="mchecks"><span class="lbl">Before you save, check your work:</span>${w.checks.map((c, i) => `<label><input type="checkbox" data-c="${i}"> ${c}</label>`).join('')}</div>` : ''}
      <div class="btnrow"><button class="btn" type="button" disabled>💾 Save my writing</button><span class="save"></span></div></div>`;
    const ta = $('textarea', z), wc = $('.wc', z), b = $('.btn', z);
    ta.value = st.drafts[st.cur] || '';
    const upd = () => { const n = FS.words(ta.value); wc.textContent = `${n} / ${min} words`; wc.style.color = n >= min ? 'var(--ok)' : ''; b.disabled = n < Math.ceil(min / 2); st.drafts[st.cur] = ta.value; save(); };
    ta.oninput = upd; upd();
    b.onclick = () => {
      const n = FS.words(ta.value), low = ta.value.toLowerCase();
      const checks = $$('[data-c]', z), allChecked = checks.every(c => c.checked);
      const usedKey = !w.keys || w.keys.some(k => low.includes(k.toLowerCase()));
      const pts = (n >= min ? 2 : 1) + (usedKey ? 1 : 0) + (checks.length && allChecked ? 1 : 0), max = 3 + (checks.length ? 1 : 0);
      ta.readOnly = true; b.remove();
      $('.save', z).innerHTML = '';
      z.insertAdjacentHTML('beforeend', `<div class="fb ${pts === max ? 'ok' : 'info'}">${pts === max ? '✅ Great writing!' : '💾 Saved.'} ${n < min ? `Next time aim for at least ${min} words. ` : ''}${!usedKey ? 'Tip: use vocabulary or evidence from today’s lesson. ' : ''}${checks.length && !allChecked ? 'Remember to check each item on the checklist. ' : ''}</div>`);
      done(pts, max, ta.value.trim());
    };
  }

  function scenStep(z, items, done) {
    let i = 0, pts = 0; const log = [];
    const go = () => {
      if (i >= items.length) { z.innerHTML = `<div class="scorebox"><div class="big">${pts} / ${items.length * 2}</div>scenario points</div>`; done(pts, items.length * 2, log.join('\n')); return; }
      const s = items[i];
      z.innerHTML = `<div class="sorthelp">Scenario ${i + 1} of ${items.length}</div><div class="scn"><div class="who">${s.who ? '💬 ' + s.who : '📍 Scenario'}</div><div class="bubble">${s.s}</div></div><h4 style="margin:12px 0 8px">${s.ask || 'What is the BEST response?'}</h4>
       <div class="opts">${FS.shuffle(s.o.map((_, k) => k)).map(k => `<button class="opt" type="button" data-k="${k}">${s.o[k][0]}</button>`).join('')}</div><div class="o"></div>`;
      $$('.opt', z).forEach(b => b.onclick = () => {
        const o = s.o[+b.dataset.k]; pts += o[1]; log.push(`${i + 1}. ${o[0].replace(/<[^>]+>/g, '')} (${o[1]}/2)`);
        $$('.opt', z).forEach(x => { x.disabled = true; if (s.o[+x.dataset.k][1] === 2) x.classList.add('right'); }); if (o[1] < 2) b.classList.add('wrong');
        $('.o', z).innerHTML = `<div class="fb ${o[1] === 2 ? 'ok' : o[1] ? 'info' : 'no'}">${o[2]}</div><div class="btnrow"><button class="btn" type="button">${i < items.length - 1 ? 'Next scenario →' : 'See my score'}</button></div>`;
        $('.o .btn', z).onclick = () => { i++; go(); };
      });
    }; go();
  }

  function finish() {
    const tot = steps.reduce((a, s, i) => a + (st.res[i] ? st.res[i].pts : 0), 0), max = steps.reduce((a, s, i) => a + (st.res[i] ? st.res[i].max : 0), 0);
    const missing = steps.map((s, i) => st.res[i] ? null : i + 1).filter(Boolean);
    el.innerHTML = `${nav()}<section class="mcard"><div class="mhead"><span class="mnum">Finish</span><h3>🏁 Lesson summary</h3></div><div class="mbody">
      <div class="scorebox"><div class="big">${Math.round(tot * 10) / 10} / ${max}</div>${max ? Math.round(tot / max * 100) + '%' : ''} of points earned</div>
      <div class="tablewrap" style="margin-top:12px"><table class="std"><tr><th>Step</th><th>Score</th></tr>${steps.map((s, i) => `<tr><td>${i + 1}. ${s.icon || ''} ${esc(s.name)}</td><td>${st.res[i] ? (st.res[i].max ? st.res[i].pts + ' / ' + st.res[i].max : '✓') : '<b style="color:var(--bad)">not done</b>'}</td></tr>`).join('')}</table></div>
      <h3 style="margin-top:16px">How well can you do each learning target?</h3><div class="mself">${mod.info.lt.map((t, k) => `<div class="qcard"><div class="q">I can ${esc(t)}.</div><div class="opts" style="grid-template-columns:repeat(4,1fr)">${['1 · Not yet', '2 · Getting there', '3 · I can', '4 · I can teach it'].map((o, v) => `<button class="opt ${st.selfcheck[k] === v + 1 ? 'sel' : ''}" type="button" data-t="${k}" data-v="${v + 1}">${o}</button>`).join('')}</div></div>`).join('')}</div>
      ${missing.length ? `<div class="fb no">Finish step${missing.length > 1 ? 's' : ''} ${missing.join(', ')} before you turn in.</div>` : ''}
      <div class="btnrow"><button class="btn" type="button" id="ti" ${missing.length || st.turnedIn ? 'disabled' : ''}>${st.turnedIn ? '✔ Turned in' : '📤 Turn in the whole lesson'}</button><span class="save" id="tim"></span><span class="spacer"></span><button class="btn ghost" type="button" id="rs">↺ Start over</button></div></div></section>`;
    $$('[data-go]', el).forEach(b => b.onclick = () => { st.cur = +b.dataset.go; save(); draw(); });
    $$('[data-t]', el).forEach(b => b.onclick = () => { st.selfcheck[b.dataset.t] = +b.dataset.v; save(); $$(`[data-t="${b.dataset.t}"]`, el).forEach(x => x.classList.toggle('sel', x === b)); });
    $('#rs', el).onclick = () => { if (confirm('Start the whole lesson over? This clears your saved answers on this device.')) { st = { cur: 0, res: {}, drafts: {}, turnedIn: false, selfcheck: {} }; save(); draw(); } };
    $('#ti', el).onclick = async () => {
      if (mod.info.lt.some((_, k) => !st.selfcheck[k])) { $('#tim', el).textContent = 'Rate yourself on each learning target first.'; return; }
      const b = $('#ti', el); b.disabled = true; $('#tim', el).textContent = 'Sending…';
      const text = steps.map((s, i) => `=== STEP ${i + 1}: ${s.name} (${st.res[i].max ? st.res[i].pts + '/' + st.res[i].max : 'done'}) ===\n${st.res[i].ans || ''}`).join('\n') + '\n=== SELF-CHECK ===\n' + mod.info.lt.map((t, k) => `${t}: ${st.selfcheck[k]}/4`).join('\n');
      const r = await FS.submit(ctx.topic, 'Full Lesson', ctx.title, Math.round(tot * 10) / 10, max, text);
      $('#tim', el).textContent = r.msg; if (r.ok) { st.turnedIn = true; save(); b.textContent = '✔ Turned in'; } else b.disabled = false;
    };
  }

  if (teacher) el.insertAdjacentHTML('beforebegin', `<details class="note" style="margin-bottom:12px"><summary><b>🍎 Teacher overview</b> (students don’t see this): ${N} steps · ${mod.mins || 60} min</summary><ol style="margin:8px 0 0">${steps.map((s, i) => `<li><b>${s.icon || ''} ${esc(s.name)}</b> (~${s.mins} min, by minute ${cum[i]})${s.tn ? `: ${s.tn}` : ''}</li>`).join('')}</ol>${mod.tn ? `<p style="margin:8px 0 0">${mod.tn}</p>` : ''}<p style="margin:6px 0 0">Teacher view lets you jump to any step. Students unlock steps in order.</p></details>`);
  draw();
  return () => { if (cleanupStep) try { cleanupStep(); } catch (e) { } };
};

/* helper: put a "Full Lessons" folder first inside a topic */
FS.addModules = function (topicId, ids, sub) {
  const t = FS.topics.find(x => x.id === topicId); if (!t) return;
  t.folders.unshift({ name: 'Full Lessons (60 min)', icon: '🧭', sub: sub || 'Complete lessons students do start to finish: hook, simulation, checks for understanding, scenarios, writing, and an exit ticket.', items: ids });
};
})();
