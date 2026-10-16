/* =====================================================================
   SEND SCORES TO GOOGLE SHEETS: shared helper used by every activity.
   Needs sheets-config.js loaded first (it holds SCHOOLS, TEACHERS, SHEETS_WEBHOOK_URL).

   sendScoreToSheets({ studentId, firstName, lastName, period, teacher, school,
                       activity, score, total, qlabels:[...], qpoints:[...], qmax:[...],
                       locks, responses })
     → sends form-encoded data with fetch(mode:"no-cors") to the Apps Script web app.
       If the student is offline, the score is saved and sent automatically next time.

   fillTeacherDropdown(selectElement, schoolName)
     → fills a <select> with the teachers for that school (or all teachers).
   ===================================================================== */
(function () {
  const URL_ = (typeof SHEETS_WEBHOOK_URL !== 'undefined' ? SHEETS_WEBHOOK_URL : '').trim();
  const PENDING = 'scoresPending', PREVIEW = 'fsPreview';
  const clean = v => String(v == null ? '' : v).replace(/\|/g, '/');      // "|" separates questions
  const read = k => { try { return JSON.parse(localStorage.getItem(k) || '[]'); } catch (e) { return []; } };
  const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v.slice(-200))); } catch (e) { } };

  function toForm(d) {
    const f = new URLSearchParams();
    f.append('kind', d.kind || 'score');
    f.append('studentId', d.studentId || '');
    f.append('firstName', d.firstName || '');
    f.append('lastName', d.lastName || '');
    f.append('period', d.period || '');
    f.append('teacher', d.teacher || '');
    f.append('school', d.school || '');
    f.append('activity', d.activity || '');
    f.append('score', d.score == null ? '' : d.score);
    f.append('total', d.total == null ? '' : d.total);
    f.append('qlabels', (d.qlabels || []).map(clean).join('|'));
    f.append('qpoints', (d.qpoints || []).join('|'));
    f.append('qmax', (d.qmax || []).join('|'));
    f.append('locks', d.locks || 0);
    f.append('when', d.when || new Date().toISOString());
    if (d.responses) f.append('responses', String(d.responses).slice(0, 20000));
    if (d.topic) f.append('topic', d.topic);
    if (d.text) f.append('text', d.text);
    return f;
  }
  async function post(d) {
    // "no-cors" means the browser can't read Google's reply, so a finished request counts as sent.
    await fetch(URL_, { method: 'POST', mode: 'no-cors', body: toForm(d) });
  }
  window.sendScoreToSheets = async function (d) {
    d = Object.assign({ when: new Date().toISOString() }, d);
    if (!URL_) { const a = read(PREVIEW); a.push(Object.assign({ time: d.when }, d)); write(PREVIEW, a); return { ok: true, preview: true }; }
    try { await post(d); return { ok: true }; }
    catch (e) { const q = read(PENDING); q.push(d); write(PENDING, q); return { ok: false, queued: true }; }
  };
  // Try to send anything saved while offline (runs when the page opens and when Wi-Fi comes back).
  async function flush() {
    if (!URL_) return; const q = read(PENDING); if (!q.length) return;
    const left = [];
    for (const d of q) { try { await post(d); } catch (e) { left.push(d); } }
    write(PENDING, left);
  }
  window.addEventListener('online', flush); setTimeout(flush, 1500);

  window.fillTeacherDropdown = function (select, school) {
    const list = school && typeof SCHOOLS !== 'undefined' ? (SCHOOLS[school] || []) : (typeof TEACHERS !== 'undefined' ? TEACHERS : []);
    select.innerHTML = '<option value="">Choose your teacher…</option>' + list.map(t => `<option>${String(t).replace(/</g, '&lt;')}</option>`).join('');
  };
})();
