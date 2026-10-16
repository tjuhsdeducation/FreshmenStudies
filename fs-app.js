/* =====================================================================
   FRESHMEN STUDIES LESSONS: site engine
   Content lives in topic-*.js files. This file handles sign-in, pages,
   pop-up windows, slide shows, quizzes, and saving to Google Sheets.
   ===================================================================== */
const CFG = window.FS_CONFIG || {};
/* School sites + teachers come from sheets-config.js (shared by every activity) */
const SITES = (typeof SCHOOLS !== 'undefined' && SCHOOLS) || CFG.schools || {};
const PERIODS = CFG.periods || ['1', '2', '3', '4', '5', '6', '7', '8'];
const FS = window.FS = { topics: [], items: {} };
FS.topic = t => FS.topics.push(t);
FS.item = (id, d) => { FS.items[id] = Object.assign({ id }, d); };
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; };
const words = s => (String(s || '').trim().match(/\S+/g) || []).length;
FS.esc = esc; FS.shuffle = shuffle; FS.words = words;

/* ---------- who is signed in ---------- */
let CUR = null;
try { CUR = JSON.parse(localStorage.getItem('fsStudent') || 'null'); } catch (e) { CUR = null; }
/* sign in again if saved info is from an older version, or the school/teacher list changed */
if (CUR && CUR.role === 'student' && (!CUR.period || !(SITES[CUR.school] || []).includes(CUR.teacher))) CUR = null;
const isTeacher = () => !!(CUR && CUR.role === 'teacher');
FS.me = () => CUR; FS.isTeacher = isTeacher;
function saveMe(v) { CUR = v; try { v ? localStorage.setItem('fsStudent', JSON.stringify(v)) : localStorage.removeItem('fsStudent'); } catch (e) { } }

const app = $('#app'), modal = $('#modal'), crumb = $('#crumb'), who = $('#who');

function toast(msg, ms = 3200) {
  const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; t.setAttribute('role', 'status');
  document.body.appendChild(t); setTimeout(() => t.remove(), ms);
}
FS.toast = toast;

function renderWho() {
  if (!CUR) { who.hidden = true; return; }
  who.hidden = false;
  who.innerHTML = `<span>${isTeacher() ? '🍎 Teacher view' : '👤 ' + esc(CUR.first + ' ' + CUR.last.charAt(0) + '.') + ' · P' + esc(CUR.period) + ' · ' + esc(CUR.school)}</span><button type="button" id="signout">Sign out</button>`;
  $('#signout').onclick = () => { if (confirm('Sign out of Freshmen Studies?')) { saveMe(null); location.hash = '#home'; route(); } };
}

/* ---------- SIGN-IN SCREEN (required before anything opens) ---------- */
function signin() {
  closeModal(); crumb.innerHTML = ''; renderWho();
  const v = {};
  app.innerHTML = `<div class="wrap signin"><div class="sbox">
    <div class="left">${CONFETTI}<h1 style="position:relative">Freshmen <span>Studies</span></h1>
      <p style="position:relative">Health lessons for 9th grade. Sign in to open the lessons, activities, and exit tickets.</p>
      <ul style="position:relative"><li><i>💊</i>Fentanyl: One Pill Can Kill</li><li><i>🌎</i>Human Trafficking Prevention</li><li><i>🏳️‍🌈</i>Identity, Respect &amp; Healthy Relationships</li></ul></div>
    <form class="sform" id="sf" autocomplete="off" novalidate>
      <h2>Student sign-in</h2>
      <div class="srow"><label>First name<input id="s-first" autocomplete="given-name"></label><label>Last name<input id="s-last" autocomplete="family-name"></label></div>
      <label>Student ID<input id="s-id" inputmode="numeric" placeholder="Your student ID number"></label>
      <label>School site<select id="s-school"><option value="">Choose your school…</option>${Object.keys(SITES).map(s => `<option>${esc(s)}</option>`).join('')}</select></label>
      <div class="srow"><label>Period<select id="s-period"><option value="">Choose…</option>${PERIODS.map(p => `<option>${esc(p)}</option>`).join('')}</select></label>
      <label>Teacher<select id="s-teacher" disabled><option value="">Pick a school first</option></select></label></div>
      <button class="sgo" type="submit" disabled>Start ▶</button>
      <p class="smsg" id="smsg" aria-live="polite"></p>
      <p class="privacy">Your name and ID are only sent to your teacher with your work. They are never shown to classmates.</p>
      <button type="button" class="tlink" id="tlog">I'm a teacher</button>
      <div id="tbox" hidden><label>Teacher passcode<input id="s-pass" type="password" autocomplete="off"></label><div class="btnrow" style="margin-top:8px"><button type="button" class="btn" id="tgo" style="--c:var(--c-tg)">Open teacher view</button></div></div>
    </form></div></div>`;
  const f = $('#sf'), sch = $('#s-school'), tch = $('#s-teacher');
  sch.onchange = () => {
    const list = SITES[sch.value] || [];
    tch.disabled = !sch.value;
    tch.innerHTML = sch.value ? `<option value="">Choose your teacher…</option>${list.map(t => `<option>${esc(t)}</option>`).join('')}` : '<option value="">Pick a school first</option>';
    upd();
  };
  const read = () => ({ first: $('#s-first').value.trim(), last: $('#s-last').value.trim(), id: $('#s-id').value.trim(), school: sch.value, teacher: tch.value, period: $('#s-period').value });
  const okName = s => /^[A-Za-zÀ-ÿ' .-]{1,40}$/.test(s) && /[A-Za-zÀ-ÿ]/.test(s);
  const okId = s => /^[A-Za-z0-9-]{3,12}$/.test(s);
  function upd() {
    const d = read(), good = okName(d.first) && okName(d.last) && okId(d.id) && d.school && d.period && d.teacher;
    $('.sgo', f).disabled = !good;
    $('#smsg').textContent = good ? 'Looks good! Press Start.' : !d.first ? 'Type your first name.' : !okName(d.first) ? 'First name: letters only.' : !d.last ? 'Type your last name.' : !okName(d.last) ? 'Last name: letters only.' : !okId(d.id) ? 'Type your student ID.' : !d.school ? 'Choose your school site.' : !d.period ? 'Choose your class period.' : 'Choose your teacher.';
  }
  f.addEventListener('input', upd); f.addEventListener('change', upd); upd();
  f.onsubmit = e => { e.preventDefault(); const d = read(); if ($('.sgo', f).disabled) return; d.role = 'student'; saveMe(d); toast('Welcome, ' + d.first + '!'); route(); };
  $('#tlog').onclick = () => { $('#tbox').hidden = !$('#tbox').hidden; if (!$('#tbox').hidden) $('#s-pass').focus(); };
  const tgo = () => { if ($('#s-pass').value.trim() === String(CFG.teacherPasscode || '')) { saveMe({ role: 'teacher', first: 'Teacher', last: '', id: 'teacher', school: '', teacher: '' }); route(); } else toast('That passcode does not match fs-config.js.'); };
  $('#tgo').onclick = tgo; $('#s-pass').onkeydown = e => { if (e.key === 'Enter') { e.preventDefault(); tgo(); } };
  setTimeout(() => $('#s-first').focus(), 30);
}

/* ---------- SAVING WORK ---------- */
function studentPayload() { return { first: CUR.first, last: CUR.last, id: CUR.id, school: CUR.school, period: CUR.period, teacher: CUR.teacher }; }
/* Each activity name becomes its own tab in the teacher's spreadsheet, e.g. "Fentanyl · Exit Ticket: Fentanyl Facts" */
const TOPIC_TAG = { fentanyl: 'Fentanyl', trafficking: 'Trafficking', lgbtq: 'LGBTQ+' };
const activityName = (topicId, title) => (TOPIC_TAG[topicId] ? TOPIC_TAG[topicId] + ' · ' : '') + title;
/* submit(topic, type, activity, score, max, responses, q) → sends one score to the teacher's spreadsheet.
   q = { labels:[question names], points:[points earned], max:[points possible] } (optional) */
FS.submit = async function (topicId, type, activity, score, max, responses, q) {
  if (isTeacher()) return { ok: true, teacher: true, msg: 'Teacher view: practice only, nothing sent.' };
  q = q && q.labels && q.labels.length ? q : { labels: [type || 'Activity'], points: [score], max: [max] };
  const r = await window.sendScoreToSheets({
    studentId: CUR.id, firstName: CUR.first, lastName: CUR.last, period: CUR.period, teacher: CUR.teacher, school: CUR.school,
    activity: activityName(topicId, activity), score: Math.round(score * 10) / 10, total: max,
    qlabels: q.labels, qpoints: q.points.map(x => Math.round((+x || 0) * 10) / 10), qmax: q.max,
    locks: FS.lockOverride ? FS.lockOverride() : locks, topic: topicId, responses: typeof responses === 'string' ? responses : JSON.stringify(responses)
  });
  return r.ok ? { ok: true, msg: r.preview ? 'Saved (preview mode: your teacher will connect Google Sheets soon).' : '✅ Score sent to your teacher!' }
    : { ok: false, msg: '📶 No connection right now. Your score is saved and will send automatically. You can also press the button again.' };
};
FS.ask = async function (topicId, text) {
  const r = await window.sendScoreToSheets({ kind: 'question', school: CUR.school || '', teacher: CUR.teacher || '', period: CUR.period || '', topic: TOPIC_TAG[topicId] || topicId, text });
  return r.preview ? 'Saved (preview mode).' : r.ok ? '✅ Sent anonymously. Your teacher will answer questions with the whole class.' : '📶 No connection. It will send when you’re back online.';
};
/* saveBox: the "Send my score to my teacher" button. opts.auto = send right away (the button becomes a backup). */
function saveBox(el, topicId, type, title, score, max, responses, opts = {}) {
  const box = document.createElement('div'); box.className = 'btnrow noprint';
  box.innerHTML = `<button class="btn" type="button">📤 Send my score to my teacher</button><span class="save" aria-live="polite"></span>`;
  el.appendChild(box);
  const b = $('button', box), s = $('.save', box);
  const val = v => typeof v === 'function' ? v() : v;
  const send = async () => { b.disabled = true; s.textContent = 'Sending…'; const r = await FS.submit(topicId, type, title, val(score), val(max), responses(), val(opts.q)); s.textContent = r.msg; b.disabled = false; if (r.ok) b.textContent = '📤 Send again (backup)'; };
  b.onclick = send;
  if (opts.auto) send();
  return box;
}
FS.saveBox = saveBox;

/* ---------- QUIZ ENGINE (exit tickets + practice) ----------
   Question types:
   {t:'mc', q, opts:[...], a:index, why}         one answer
   {t:'ms', q, opts:[...], a:[i,j], why}         select all that apply
   {t:'order', q, items:[...in correct order], why}
   {t:'sort', q, bins:[...], cards:[[text,binIndex],...], why}
   {t:'short', q, min:words, frames:[...], keys:[...]}  written; full credit if long enough
   {t:'scale', q, opts:[...]}                     self-rating, not scored                      */
FS.quiz = function (el, qs, opt = {}) {
  const state = qs.map(() => ({ done: false, pts: 0, max: 0, ans: '' }));
  el.innerHTML = `<div class="prog"><i style="width:0%"></i></div><div class="qs"></div><div class="fin"></div>`;
  const wrap = $('.qs', el);
  const prog = () => { const n = state.filter(s => s.done).length; $('.prog i', el).style.width = (n / qs.length * 100) + '%'; if (n === qs.length) finish(); };
  qs.forEach((q, i) => {
    const c = document.createElement('div'); c.className = 'qcard';
    c.innerHTML = `<div class="qn">${opt.label || 'Question'} ${i + 1} of ${qs.length}${q.t === 'ms' ? ' · select all that apply' : ''}</div><div class="q">${q.q}</div><div class="body"></div><div class="out"></div>`;
    wrap.appendChild(c);
    const body = $('.body', c), out = $('.out', c), st = state[i];
    const fb = (ok, html) => { out.innerHTML = `<div class="fb ${ok === true ? 'ok' : ok === false ? 'no' : 'info'}">${html}</div>`; };
    if (q.t === 'mc' || q.t === 'scale') {
      st.max = q.t === 'mc' ? 1 : 0;
      const ord = q.keep || q.t === 'scale' ? q.opts.map((_, k) => k) : shuffle(q.opts.map((_, k) => k));
      body.innerHTML = `<div class="opts">${ord.map(k => `<button class="opt" type="button" data-k="${k}">${q.opts[k]}</button>`).join('')}</div>`;
      $$('.opt', body).forEach(b => b.onclick = () => {
        const k = +b.dataset.k; $$('.opt', body).forEach(x => x.disabled = true); st.done = true; st.ans = q.opts[k].replace(/<[^>]+>/g, '');
        if (q.t === 'scale') { b.classList.add('sel'); fb(null, q.why || 'Thanks for being honest.'); }
        else { const ok = k === q.a; st.pts = ok ? 1 : 0; b.classList.add(ok ? 'right' : 'wrong'); $(`.opt[data-k="${q.a}"]`, body).classList.add('right'); fb(ok, (ok ? '✅ Correct. ' : '❌ Not quite. ') + (q.why || '')); }
        prog();
      });
    } else if (q.t === 'ms') {
      st.max = 1;
      const ord = shuffle(q.opts.map((_, k) => k));
      body.innerHTML = `<div class="opts">${ord.map(k => `<button class="opt" type="button" aria-pressed="false" data-k="${k}">${q.opts[k]}</button>`).join('')}</div><div class="btnrow"><button class="btn chk" type="button">Check</button></div>`;
      $$('.opt', body).forEach(b => b.onclick = () => { const on = b.classList.toggle('sel'); b.setAttribute('aria-pressed', on); });
      $('.chk', body).onclick = () => {
        const picked = $$('.opt.sel', body).map(b => +b.dataset.k); if (!picked.length) { fb(null, 'Choose at least one.'); return; }
        const right = new Set(q.a); let wrong = 0;
        $$('.opt', body).forEach(b => { const k = +b.dataset.k, p = b.classList.contains('sel'); b.disabled = true; if (right.has(k)) b.classList.add('right'); else if (p) b.classList.add('wrong'); if (right.has(k) !== p) wrong++; });
        st.pts = wrong === 0 ? 1 : wrong === 1 ? .5 : 0; st.done = true; st.ans = picked.map(k => q.opts[k]).join(' | ');
        $('.chk', body).remove(); fb(wrong === 0 ? true : wrong === 1 ? null : false, (wrong === 0 ? '✅ All correct. ' : wrong === 1 ? '🟡 Almost (half credit). ' : '❌ Look at the green answers. ') + (q.why || '')); prog();
      };
    } else if (q.t === 'order') {
      st.max = 1;
      let cur = shuffle(q.items.map((_, k) => k)); if (cur.every((v, k) => v === k)) cur.reverse();
      const draw = (lock) => {
        body.innerHTML = `<ol class="olist">${cur.map((k, p) => `<li class="${lock ? (k === p ? 'okrow' : 'badrow') : ''}"><span class="n">${p + 1}</span><span class="tx">${q.items[k]}</span>${lock ? '' : `<span class="mv"><button type="button" aria-label="Move up" data-u="${p}" ${p === 0 ? 'disabled' : ''}>↑</button><button type="button" aria-label="Move down" data-d="${p}" ${p === cur.length - 1 ? 'disabled' : ''}>↓</button></span>`}</li>`).join('')}</ol>${lock ? '' : '<div class="btnrow"><button class="btn chk" type="button">Check my order</button></div>'}`;
        if (lock) return;
        $$('[data-u]', body).forEach(b => b.onclick = () => { const p = +b.dataset.u;[cur[p - 1], cur[p]] = [cur[p], cur[p - 1]]; draw(); $(`[data-u="${p - 1}"]`, body)?.focus(); });
        $$('[data-d]', body).forEach(b => b.onclick = () => { const p = +b.dataset.d;[cur[p + 1], cur[p]] = [cur[p], cur[p + 1]]; draw(); $(`[data-d="${p + 1}"]`, body)?.focus(); });
        $('.chk', body).onclick = () => {
          const n = cur.filter((k, p) => k === p).length; st.pts = n === cur.length ? 1 : Math.round(n / cur.length * 10) / 10; st.done = true; st.ans = cur.map(k => q.items[k].replace(/<[^>]+>/g, '')).join(' → ');
          draw(true); fb(n === cur.length ? true : false, (n === cur.length ? '✅ Perfect order. ' : `🟡 ${n} of ${cur.length} in the right spot. Correct order: <ol style="margin:6px 0 0">${q.items.map(x => `<li>${x}</li>`).join('')}</ol>`) + (q.why || '')); prog();
        };
      }; draw();
    } else if (q.t === 'sort') {
      st.max = 1;
      FS.sorter(body, { bins: q.bins, cards: q.cards, onDone: (n, tot, log) => { st.pts = Math.round(n / tot * 10) / 10; st.done = true; st.ans = log; fb(n === tot ? true : null, `${n === tot ? '✅' : '🟡'} ${n} of ${tot} sorted correctly. ${q.why || ''}`); prog(); } });
    } else if (q.t === 'short') {
      const min = q.min || 15; st.max = 1;
      body.innerHTML = `${q.frames ? `<p class="sorthelp">Sentence starters: ${q.frames.map(f => `<i>“${f}”</i>`).join(' · ')}</p>` : ''}<textarea aria-label="Your answer"></textarea><div class="wc">0 / ${min} words</div><div class="btnrow"><button class="btn chk" type="button" disabled>Save answer</button></div>`;
      const ta = $('textarea', body), wc = $('.wc', body), b = $('.chk', body);
      ta.oninput = () => { const n = words(ta.value); wc.textContent = `${n} / ${min} words`; b.disabled = n < Math.ceil(min / 2); };
      b.onclick = () => { const n = words(ta.value); st.pts = n >= min ? 1 : .5; st.done = true; st.ans = ta.value.trim(); ta.readOnly = true; b.remove(); fb(n >= min ? true : null, (n >= min ? '✅ Saved. ' : '🟡 Saved for half credit (add more detail next time). ') + (q.why || '')); prog(); };
    }
  });
  function finish() {
    if ($('.fin', el).innerHTML) return;
    const pts = state.reduce((a, s) => a + s.pts, 0), max = state.reduce((a, s) => a + s.max, 0);
    const pct = max ? Math.round(pts / max * 100) : 100;
    $('.fin', el).innerHTML = `<div class="scorebox"><div class="big">${Math.round(pts * 10) / 10} / ${max}</div><div>${pct >= 80 ? 'Great work!' : pct >= 60 ? 'Good effort. Review the feedback above.' : 'Review the feedback above, then ask your teacher about anything confusing.'}</div></div>`;
    if (opt.onFinish) opt.onFinish(pts, max, qs.map((q, i) => ({ q: q.q.replace(/<[^>]+>/g, ''), a: state[i].ans, pts: state[i].pts })));
    const qinfo = { labels: qs.map((q, i) => 'Q' + (i + 1) + ' ' + q.q.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 40)).filter((_, i) => state[i].max), points: state.filter(x => x.max).map(x => x.pts), max: state.filter(x => x.max).map(x => x.max) };
    if (opt.topic) saveBox($('.fin', el), opt.topic, opt.type || 'Exit Ticket', opt.title, Math.round(pts * 10) / 10, max, () => qs.map((q, i) => `${i + 1}. ${state[i].ans}`).join('\n'), { auto: true, q: qinfo });
  }
};

/* ---------- SORTER (tap a card, then tap a bin) ---------- */
FS.sorter = function (el, cfg) {
  const cards = shuffle(cfg.cards.map(([t, b], i) => ({ t, b, i })));
  el.innerHTML = `<div class="sorter"><p class="sorthelp">Tap a card, then tap the box where it belongs. (You can also drag on a computer.)</p><div class="pool">${cards.map(c => `<button class="chipc" type="button" draggable="true" data-i="${c.i}">${c.t}</button>`).join('')}</div>
   <div class="bins">${cfg.bins.map((b, k) => { const [name, sub, col] = Array.isArray(b) ? b : [b]; return `<div class="bin" data-b="${k}" role="button" tabindex="0" style="${col ? '--bc:' + col : ''}"><h4>${name}</h4>${sub ? `<small>${sub}</small>` : ''}</div>`; }).join('')}</div>
   <div class="btnrow"><button class="btn chk" type="button" disabled>Check</button></div></div>`;
  let pick = null; const pool = $('.pool', el), chk = $('.chk', el);
  const place = (card, bin) => { bin.appendChild(card); card.classList.remove('pick'); pick = null; chk.disabled = !!$('.pool .chipc', el); };
  $$('.chipc', el).forEach(c => {
    c.onclick = () => { if (c.disabled) return; if (pick && pick !== c && c.closest('.bin')) return; /* tapping a bin over a placed card drops the picked card there */ if (pick === c) { c.classList.remove('pick'); pick = null; return; } $$('.chipc.pick', el).forEach(x => x.classList.remove('pick')); pick = c; c.classList.add('pick'); };
    c.ondragstart = e => { pick = c; e.dataTransfer.setData('text/plain', c.dataset.i); };
  });
  $$('.bin', el).forEach(b => {
    const go = () => { if (pick) place(pick, b); };
    b.onclick = e => { if (e.target.closest('.chipc') && !pick) return; go(); };
    b.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } };
    b.ondragover = e => { e.preventDefault(); b.classList.add('hot'); }; b.ondragleave = () => b.classList.remove('hot');
    b.ondrop = e => { e.preventDefault(); b.classList.remove('hot'); go(); };
  });
  pool.ondragover = e => e.preventDefault(); pool.ondrop = e => { e.preventDefault(); if (pick) { pool.appendChild(pick); pick.classList.remove('pick'); pick = null; chk.disabled = true; } };
  chk.onclick = () => {
    let n = 0; const log = [];
    $$('.bin', el).forEach(b => $$('.chipc', b).forEach(c => { const card = cfg.cards[+c.dataset.i]; const ok = card[1] === +b.dataset.b; if (ok) n++; c.classList.add(ok ? 'right' : 'wrong'); c.disabled = true; c.draggable = false; if (!ok) c.title = 'Belongs in: ' + (Array.isArray(cfg.bins[card[1]]) ? cfg.bins[card[1]][0] : cfg.bins[card[1]]); log.push(`${card[0].replace(/<[^>]+>/g, '')} → ${(Array.isArray(cfg.bins[+b.dataset.b]) ? cfg.bins[+b.dataset.b][0] : cfg.bins[+b.dataset.b])}${ok ? ' ✓' : ' ✗'}`); }));
    chk.remove();
    const wrongs = $$('.chipc.wrong', el);
    if (wrongs.length) { const p = document.createElement('div'); p.className = 'fb info'; p.innerHTML = '<b>Fix-it list:</b><ul style="margin:4px 0 0">' + wrongs.map(c => `<li>${c.innerHTML} → <b>${esc(c.title.replace('Belongs in: ', ''))}</b></li>`).join('') + '</ul>'; el.appendChild(p); }
    if (cfg.onDone) cfg.onDone(n, cfg.cards.length, log.join('\n'));
  };
};

/* ---------- WARM-UP HELPERS (projector, teacher-led) ---------- */
/* Agree / Disagree style tally: rounds = [{s:'statement', fact:'html revealed after vote'}] */
FS.tallyWarm = function (el, cfg) {
  let i = 0; const L = cfg.labels || ['Agree', 'Disagree'], C = cfg.colors || ['#2e9b4a', '#d93a2b'];
  const draw = () => {
    const r = cfg.rounds[i];
    el.innerHTML = `<div class="warm"><div class="wstep">${cfg.rounds.map((_, k) => `<i class="${k <= i ? 'on' : ''}"></i>`).join('')}</div><div class="kick">${cfg.kick || 'Warm-up'} · ${i + 1} of ${cfg.rounds.length}</div><div class="big">${r.s}</div>
      <div class="tally">${L.map((l, k) => `<div class="side" style="border-color:${C[k]}"><span style="font-weight:900;color:${C[k]}">${l}</span><b data-n="${k}">0</b><div class="pm"><button type="button" data-m="${k}" aria-label="minus">−</button><button type="button" data-p="${k}" aria-label="plus">+</button></div></div>`).join('')}</div>
      <p class="sorthelp">${cfg.howto || 'Students stand on the side of the room that matches their answer (or show thumbs). Count with + / −.'}</p>
      <div class="btnrow" style="justify-content:center"><button class="btn" type="button" id="rv">${r.fact ? 'Reveal the facts' : 'Discussion prompt'}</button>${i > 0 ? '<button class="btn ghost" id="pv" type="button">← Back</button>' : ''}${i < cfg.rounds.length - 1 ? '<button class="btn ghost" id="nx" type="button">Next →</button>' : ''}</div>
      <div class="reveal note">${r.fact || r.talk || ''}</div></div>`;
    const n = L.map(() => 0);
    $$('[data-p]', el).forEach(b => b.onclick = () => { n[b.dataset.p]++; $(`[data-n="${b.dataset.p}"]`, el).textContent = n[b.dataset.p]; });
    $$('[data-m]', el).forEach(b => b.onclick = () => { n[b.dataset.m] = Math.max(0, n[b.dataset.m] - 1); $(`[data-n="${b.dataset.m}"]`, el).textContent = n[b.dataset.m]; });
    $('#rv', el).onclick = () => $('.reveal', el).classList.add('on');
    if ($('#nx', el)) $('#nx', el).onclick = () => { i++; draw(); };
    if ($('#pv', el)) $('#pv', el).onclick = () => { i--; draw(); };
  }; draw();
};
/* Flip cards: cards=[{front, back, tag:'myth'|'fact'}] */
FS.flipWarm = function (el, cfg) {
  el.innerHTML = `<div class="warm"><div class="kick">${cfg.kick || 'Warm-up'}</div><div class="big">${cfg.big}</div>${cfg.sub ? `<p class="sorthelp">${cfg.sub}</p>` : ''}
    <div class="flipgrid">${cfg.cards.map((c, i) => `<button class="flip" type="button" data-i="${i}"><div class="front">${c.front}<div class="sorthelp" style="margin-top:8px">Tap to reveal</div></div><div class="back">${c.tag ? `<span class="tag ${c.tag}">${c.tag}</span><br>` : ''}${c.back}</div></button>`).join('')}</div>
    ${cfg.after ? `<div class="note" style="margin-top:14px;text-align:left">${cfg.after}</div>` : ''}</div>`;
  $$('.flip', el).forEach(b => b.onclick = () => b.classList.toggle('on'));
};
/* Quick-write warm-up with optional timer */
FS.writeWarm = function (el, cfg) {
  el.innerHTML = `<div class="warm"><div class="kick">${cfg.kick || 'Quick-write'}</div><div class="big">${cfg.big}</div>${cfg.html || ''}
   <div class="btnrow" style="justify-content:center"><button class="btn" type="button" id="tm">⏱ Start ${cfg.mins || 3}-minute timer</button><span id="tt" style="font-family:var(--display);font-size:1.8rem;font-weight:700"></span></div>
   ${cfg.share ? `<div class="note" style="text-align:left;margin-top:14px"><b>Share-out:</b> ${cfg.share}</div>` : ''}</div>`;
  let h = null;
  $('#tm', el).onclick = () => { clearInterval(h); let s = (cfg.mins || 3) * 60; const tt = $('#tt', el); const f = () => { tt.textContent = Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); if (s-- <= 0) { clearInterval(h); tt.textContent = '⏰ Time!'; } }; f(); h = setInterval(f, 1000); };
  return () => clearInterval(h);
};

/* ---------- SLIDE PRESENTER ---------- */
FS.present = function (deck, color) {
  let i = 0; const d = document.createElement('div'); d.className = 'deck'; d.style.setProperty('--c', color); d.setAttribute('role', 'dialog'); d.setAttribute('aria-label', 'Slide show');
  document.body.appendChild(d);
  const draw = () => {
    const s = deck[i];
    d.innerHTML = `<div class="sl">${s.k ? `<div class="k">${s.k}</div>` : ''}${s.h ? `<h2>${s.h}</h2>` : ''}<div class="b">${s.b || ''}</div>${s.tn ? `<div class="tn">🍎 Teacher note: ${s.tn}</div>` : ''}</div>
     <div class="bar"><button type="button" id="dx">✕ Exit</button><button type="button" id="dn">${'Hide notes'}</button><span class="ct">${i + 1} / ${deck.length}</span><button type="button" id="dp" ${i === 0 ? 'disabled' : ''}>← Back</button><button type="button" id="dnx" ${i === deck.length - 1 ? 'disabled' : ''}>Next →</button></div>`;
    $('#dx', d).onclick = close; $('#dp', d).onclick = () => { if (i > 0) { i--; draw(); } }; $('#dnx', d).onclick = () => { if (i < deck.length - 1) { i++; draw(); } };
    $('#dn', d).onclick = () => { d.classList.toggle('nonotes'); $$('.tn', d).forEach(t => t.hidden = d.classList.contains('nonotes')); $('#dn', d).textContent = d.classList.contains('nonotes') ? 'Show notes' : 'Hide notes'; };
    if (d.classList.contains('nonotes')) { $$('.tn', d).forEach(t => t.hidden = true); $('#dn', d).textContent = 'Show notes'; }
    if (s.run) s.run($('.sl .b', d));
  };
  const key = e => { if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') { e.preventDefault(); if (i < deck.length - 1) { i++; draw(); } } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { if (i > 0) { i--; draw(); } } else if (e.key === 'Escape') { e.stopPropagation(); close(); } };
  function close() { document.removeEventListener('keydown', key, true); d.remove(); try { document.fullscreenElement && document.exitFullscreen(); } catch (e) { } }
  document.addEventListener('keydown', key, true);
  try { d.requestFullscreen?.().catch(() => { }); } catch (e) { }
  draw(); $('#dnx', d).focus();
};

/* ---------- ITEM WINDOWS ---------- */
const KIND = {
  plan: ['📋', 'Lesson plan', 'k-plan', 'Open plan & slides'], warm: ['☀️', 'Warm-up', 'k-warm', 'Project it'], act: ['🎮', 'Interactive', 'k-act', 'Start'], module: ['🧭', 'Full lesson', 'k-mod', 'Start the lesson'],
  exit: ['🎟️', 'Exit ticket', 'k-exit', 'Start'], print: ['🖨️', 'Printable', 'k-print', 'Open & print'], info: ['📘', 'Reference', 'k-info', 'Read'], link: ['🔗', 'Link', 'k-link', 'Open site']
};
const forStudents = it => !it.teacherOnly && it.kind !== 'plan' && it.kind !== 'print';
let cleanup = null;
function openItem(id) {
  const it = FS.items[id]; if (!it) return;
  const t = FS.topics.find(x => x.id === it.topic) || {};
  if (!isTeacher() && !forStudents(it)) { toast('That one is for teachers.'); return; }
  if (it.kind === 'link') { window.open(it.url, '_blank', 'noopener'); return; }
  locks = 0; lockOn = !isTeacher() && ['act', 'exit', 'module'].includes(it.kind); FS.lockHook = null; FS.lockOverride = null;
  if (cleanup) { cleanup(); cleanup = null; }
  modal.style.setProperty('--c', t.color || '#5b5fe0');
  const showPresent = it.kind === 'plan' && it.slides;
  modal.innerHTML = `<div class="dialog ${it.kind === 'act' || it.kind === 'module' || it.kind === 'plan' || it.wide ? 'wide' : ''}" role="dialog" aria-modal="true" aria-label="${esc(it.title)}">
    <div class="dhead"><h3>${KIND[it.kind][0]} ${esc(it.title)}</h3>${showPresent ? '<button id="pres" type="button">▶ Present slides</button>' : ''}${it.kind === 'warm' || it.kind === 'act' || it.kind === 'module' ? '<button id="fs" type="button">Full screen</button>' : ''}${it.kind === 'print' || it.kind === 'plan' || it.kind === 'info' ? '<button id="pr" type="button">🖨 Print</button>' : ''}<button id="cl" type="button">Close</button></div>
    <div class="dbody" id="db"></div></div>`;
  modal.hidden = false; modal.classList.remove('full'); document.body.style.overflow = 'hidden';
  const db = $('#db', modal);
  const strip = it.info ? `<div class="tstrip"><div><b>🎯 Essential Question:</b> ${esc(it.info.eq)}</div><div><b>I can:</b> ${it.info.lt.map(esc).join(' · ')}</div>${isTeacher() ? '' : `<div class="who">👤 ${esc(CUR.first + ' ' + CUR.last)} · ID ${esc(CUR.id)} · ${esc(CUR.school)} · Period ${esc(CUR.period)} · ${esc(CUR.teacher)}</div>`}</div>` : '';
  if (it.care) db.insertAdjacentHTML('beforeend', `<div class="note care">💗 ${it.care}</div>`);
  if (it.kind === 'plan') renderPlan(db, it, t);
  else if (it.kind === 'exit') { db.insertAdjacentHTML('beforeend', strip + '<div id="qz"></div>'); FS.quiz($('#qz', db), it.qs, { topic: it.topic, type: 'Exit Ticket', title: it.title, label: 'Question' }); }
  else if (it.kind === 'module') { db.insertAdjacentHTML('beforeend', strip + '<div id="mz"></div>'); cleanup = FS.runModule($('#mz', db), it, { topic: it.topic, title: it.title, color: t.color }) || null; }
  else if (it.kind === 'act') { db.insertAdjacentHTML('beforeend', strip + '<div id="az"></div>'); cleanup = it.run($('#az', db), { topic: it.topic, title: it.title, color: t.color }) || null; }
  else if (it.kind === 'warm') { db.insertAdjacentHTML('beforeend', (it.tn && isTeacher() ? `<div class="note">🍎 ${it.tn}</div>` : '') + '<div id="wz"></div>'); cleanup = it.run($('#wz', db)) || null; }
  else if (it.kind === 'print') db.insertAdjacentHTML('beforeend', `<div class="note noprint">🖨 Press <b>Print</b> (top right). Tip: choose "Save as PDF" to keep a copy, or turn off headers and footers in the print settings.</div><div class="paper">${it.html}</div>`);
  else if (it.kind === 'info') { if (it.run) { const z = document.createElement('div'); db.appendChild(z); cleanup = it.run(z) || null; } else db.insertAdjacentHTML('beforeend', it.html); }
  $('#cl', modal).onclick = closeModal;
  if ($('#pr', modal)) $('#pr', modal).onclick = () => { document.body.classList.add('printing'); window.print(); setTimeout(() => document.body.classList.remove('printing'), 500); };
  if ($('#pres', modal)) $('#pres', modal).onclick = () => FS.present(it.slides, t.color);
  if ($('#fs', modal)) $('#fs', modal).onclick = () => { const on = modal.classList.toggle('full'); $('#fs', modal).textContent = on ? 'Exit full screen' : 'Full screen'; try { on ? document.documentElement.requestFullscreen?.()?.catch(() => { }) : document.fullscreenElement && document.exitFullscreen(); } catch (e) { } };
  $('#cl', modal).focus();
}
FS.open = openItem;
/* ---------- LOCKED ACTIVITIES: count how many times a student leaves an open activity ---------- */
let locks = 0, lockOn = false;
FS.lockCount = () => locks;
document.addEventListener('visibilitychange', () => {
  if (!lockOn || modal.hidden) return;
  if (document.hidden) { locks++; if (FS.lockHook) FS.lockHook(); return; }
  const d = $('.dialog', modal); if (!d || $('.lockov', d)) return;
  const ov = document.createElement('div'); ov.className = 'lockov'; ov.setAttribute('role', 'alertdialog');
  ov.innerHTML = `<div><div style="font-size:46px">🔒</div><h3>You left the activity</h3><p>Leaving this page is recorded for your teacher (times left: <b>${locks}</b>). Stay on this page until you finish.</p><button class="btn" type="button">Continue my work</button></div>`;
  d.appendChild(ov); $('button', ov).onclick = () => ov.remove(); $('button', ov).focus();
});
function closeModal() { lockOn = false; if (cleanup) { cleanup(); cleanup = null; } modal.hidden = true; modal.innerHTML = ''; document.body.style.overflow = ''; try { document.fullscreenElement && document.exitFullscreen(); } catch (e) { } }
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden && !document.querySelector('.deck')) closeModal(); });

function renderPlan(db, p, t) {
  const std = p.standards || [];
  db.innerHTML = `<div class="plan">
   <div class="eqbox"><span class="lbl">Essential Question</span><p>${esc(p.eq)}</p></div>
   <div class="pgrid">
    <div class="pbox"><span class="lbl">Learning targets (I can…)</span><ul>${p.targets.map(x => `<li>${x}</li>`).join('')}</ul></div>
    <div class="pbox"><span class="lbl">Success criteria</span><ul>${p.criteria.map(x => `<li>${x}</li>`).join('')}</ul></div>
    <div class="pbox"><span class="lbl">Time · materials</span><p style="margin:0 0 4px"><b>${p.mins} minutes</b></p><ul>${p.materials.map(x => `<li>${x}</li>`).join('')}</ul></div>
   </div>
   ${p.before ? `<div class="note warn"><b>Before you teach:</b> ${p.before}</div>` : ''}
   <div class="pbox"><span class="lbl">Standards</span><div class="tablewrap"><table class="std"><tr><th>Code</th><th>Standard</th></tr>${std.map(([c, s]) => `<tr><td><b>${c}</b></td><td>${s}</td></tr>`).join('')}</table></div></div>
   <h3 style="margin-top:18px">Lesson sequence</h3>
   <div class="steps">${p.steps.map(s => `<div class="step"><div class="tm">${s.tm}</div><div><h4>${s.name}</h4>${s.do}${s.say ? `<div class="say">Say: “${s.say}”</div>` : ''}${s.use ? `<div class="btnrow noprint">${s.use.map(id => FS.items[id] ? `<button class="btn ghost" type="button" data-open="${id}">${KIND[FS.items[id].kind][0]} ${esc(FS.items[id].title)}</button>` : '').join('')}</div>` : ''}</div></div>`).join('')}</div>
   ${p.extra || ''}
   <div class="btnrow noprint"><button class="btn" type="button" id="pres2">▶ Present the slides (${p.slides.length})</button></div></div>`;
  $$('[data-open]', db).forEach(b => b.onclick = () => openItem(b.dataset.open));
  $('#pres2', db).onclick = () => FS.present(p.slides, t.color);
}

/* ---------- PAGES ---------- */
const CONFETTI = `<svg class="confetti" viewBox="0 0 1000 260" preserveAspectRatio="none" aria-hidden="true">${[[60, 40, '#ff8fab'], [140, 200, '#ffd166'], [230, 70, '#7ad7f0'], [820, 50, '#8a54e0'], [900, 190, '#14a37f'], [760, 210, '#ff8fab'], [960, 90, '#ffd166'], [40, 150, '#2b7de9'], [330, 220, '#14a37f'], [680, 30, '#e0503a']].map(([x, y, c], i) => i % 2 ? `<circle cx="${x}" cy="${y}" r="9" fill="${c}"/>` : `<rect x="${x}" y="${y}" width="16" height="16" rx="3" fill="${c}" transform="rotate(${i * 17} ${x + 8} ${y + 8})"/>`).join('')}</svg>`;
const visibleItems = ids => ids.filter(id => FS.items[id] && (isTeacher() || forStudents(FS.items[id])));
const visibleFolders = t => t.folders.map((f, i) => ({ f, i })).filter(({ f }) => (isTeacher() || !f.teacherOnly) && visibleItems(f.items).length);
const visibleTopics = () => FS.topics.filter(t => isTeacher() || !t.teacherOnly);
const art = t => t.art || `<span class="em">${t.emoji}</span>`;

function home() {
  crumb.innerHTML = '';
  app.innerHTML = `<div class="wrap">
    <section class="hero">${CONFETTI}<h1>Freshmen <span>Studies</span></h1><p>${isTeacher() ? 'Lessons, slides, warm-ups, exit tickets, and printables for California’s required health topics.' : 'Hi ' + esc(CUR.first) + '! Pick a topic to find your activities and exit tickets.'}</p></section>
    <div class="tiles">${visibleTopics().map(t => `<a class="tile" href="#${t.id}" style="--c:${t.color}"><span class="stk">${art(t)}</span><h2>${t.name}</h2><small>${t.short}</small>${t.law && isTeacher() ? `<span class="law">${t.law}</span>` : ''}</a>`).join('')}</div>
    ${helpLine()}</div>`;
}
function helpLine() { return `<p class="helpline">Need to talk to someone? <a href="tel:988">Call or text 988</a> · Trafficking hotline <a href="tel:18883737888">1-888-373-7888</a> · Emergency <a href="tel:911">911</a> · <a href="#help">More help</a></p>`; }
function switcher(t) { return `<nav class="switch" aria-label="Topics"><a class="back" href="#home">← All topics</a>${visibleTopics().map(x => `<a class="swchip ${x.id === t.id ? 'on' : ''}" href="#${x.id}" style="--c:${x.color}">${x.name}</a>`).join('')}</nav>`; }
function banner(t, title, blurb) {
  const vf = visibleFolders(t), n = vf.reduce((a, { f }) => a + visibleItems(f.items).length, 0);
  return `<header class="banner" style="--c:${t.color}"><h1>${title || t.name}</h1><p>${blurb || t.blurb}</p><div class="stats">${t.page ? '' : `<span>${n} resources</span>`}${t.law && isTeacher() ? `<span>${t.law}</span>` : ''}</div><div class="art" aria-hidden="true">${art(t)}</div></header>`;
}
function topicPage(t) {
  crumb.innerHTML = `<span>/</span><b>${t.name}</b>`;
  if (t.page) { app.innerHTML = `<div class="wrap" style="--c:${t.color}">${switcher(t)}${banner(t)}<div class="panel" id="tp"></div>${helpLine()}</div>`; t.page($('#tp')); return; }
  const vf = visibleFolders(t);
  app.innerHTML = `<div class="wrap" style="--c:${t.color}">${switcher(t)}${banner(t)}
    <h2 class="homeh" style="margin-top:24px">${isTeacher() ? 'Open a folder' : 'What are we doing today?'}</h2>
    <div class="tiles folders">${vf.map(({ f, i }) => `<a class="tile" href="#${t.id}/${i}" style="--c:${t.color}"><span class="stk"><span class="em">${f.icon}</span></span><h2>${f.name}</h2><small>${visibleItems(f.items).length} ${visibleItems(f.items).length === 1 ? 'item' : 'items'}</small></a>`).join('')}</div>
    ${t.ask === false ? '' : `<div class="askbox"><p>🙋 Have a question you don't want to ask out loud? Send it anonymously. Your name is not attached.</p><button class="btn" type="button" id="askb">Ask anonymously</button></div>`}
    ${helpLine()}</div>`;
  if ($('#askb')) $('#askb').onclick = () => askBox(t);
}
function folderPage(t, i) {
  const f = t.folders[i]; if (!f || (!isTeacher() && f.teacherOnly)) return topicPage(t);
  crumb.innerHTML = `<span>/</span><a href="#${t.id}">${t.name}</a><span>/</span><b>${f.name}</b>`;
  const ids = visibleItems(f.items);
  app.innerHTML = `<div class="wrap" style="--c:${t.color}">${switcher(t)}<nav class="switch" style="padding-top:2px">${visibleFolders(t).map(({ f: g, i: k }) => `<a class="swchip ${k === i ? 'on' : ''}" href="#${t.id}/${k}" style="--c:${t.color}">${g.icon} ${g.name}</a>`).join('')}</nav>
    <section class="panel"><header><h2>${f.icon} ${f.name}</h2><small>${ids.length} ${ids.length === 1 ? 'item' : 'items'}</small></header>${f.sub ? `<p class="sub">${f.sub}</p>` : ''}
    <div class="cards">${ids.map(id => { const it = FS.items[id], k = KIND[it.kind]; return `<button class="rcard" type="button" data-id="${id}" style="--c:${t.color}"><span class="top"><span class="ico">${it.icon || k[0]}</span><span class="meta"><span class="kpill ${k[2]}">${k[1]}</span>${it.mins ? `<span class="kpill k-info">${it.mins} min</span>` : ''}</span></span><span class="t">${esc(it.title)}</span><span class="d">${it.desc || ''}</span><span class="go">${k[3]} →</span></button>`; }).join('')}</div></section>${helpLine()}</div>`;
  $$('.rcard', app).forEach(b => b.onclick = () => openItem(b.dataset.id));
}
function askBox(t) {
  modal.style.setProperty('--c', t.color);
  modal.innerHTML = `<div class="dialog" role="dialog" aria-modal="true" aria-label="Ask anonymously"><div class="dhead"><h3>🙋 Anonymous question: ${t.name}</h3><button id="cl" type="button">Close</button></div><div class="dbody">
    <p>Type any question about this topic. <b>Your name and ID are not sent.</b> Your teacher sees only the question, your school, and the topic.</p>
    <div class="note care">If you or someone you know is in danger right now, call <b>911</b>. To talk to someone, call or text <b>988</b>, or see a school counselor. An anonymous box can't send help.</div>
    <textarea id="aq" maxlength="600" placeholder="My question is…"></textarea><div class="btnrow"><button class="btn" id="as" type="button" disabled>Send question</button><span class="save" id="am"></span></div></div></div>`;
  modal.hidden = false; document.body.style.overflow = 'hidden';
  $('#cl', modal).onclick = closeModal;
  const ta = $('#aq', modal), b = $('#as', modal);
  ta.oninput = () => b.disabled = words(ta.value) < 3;
  b.onclick = async () => { if (isTeacher()) { $('#am', modal).textContent = 'Teacher view: not sent.'; return; } b.disabled = true; $('#am', modal).textContent = 'Sending…'; $('#am', modal).textContent = await FS.ask(t.id, ta.value.trim()); ta.value = ''; };
  ta.focus();
}

function route() {
  closeModal(); renderWho();
  if (!CUR) { signin(); return; }
  const [main, sub] = location.hash.slice(1).split('/');
  const t = visibleTopics().find(x => x.id === main);
  if (t && sub !== undefined && sub !== '' && !isNaN(+sub)) folderPage(t, +sub);
  else if (t) topicPage(t);
  else home();
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', route);
