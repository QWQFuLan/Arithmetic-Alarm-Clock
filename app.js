// ═══════════════════════════════════════
//  INTERNATIONALIZATION (i18n)
// ═══════════════════════════════════════

const I18N = {
  zh: {
    appTitle: '⏰ 算術鬧鐘',
    emptyIcon: '🔔',
    emptyText: '添加第一個算術鬧鐘',
    newAlarm: '新增鬧鐘',
    editAlarm: '編輯鬧鐘',
    time: '時間',
    repeat: '重複',
    once: '單次',
    daily: '每天',
    custom: '自訂',
    days: ['日', '一', '二', '三', '四', '五', '六'],
    daysFull: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    gradeLabel: '香港數學課程年級',
    grades: { p1:'小一', p2:'小二', p3:'小三', p4:'小四', p5:'小五', p6:'小六', s1:'中一', s2:'中二', s3:'中三', s4:'中四', s5:'中五', s6:'中六', m1:'M1（微積分與統計）', m2:'M2（代數與微積分）' },
    gradesShort: { p1:'小一', p2:'小二', p3:'小三', p4:'小四', p5:'小五', p6:'小六', s1:'中一', s2:'中二', s3:'中三', s4:'中四', s5:'中五', s6:'中六', m1:'M1', m2:'M2' },
    questionCount: '題目數量',
    qCountOpt: n => `${n} 題`,
    labelField: '標籤（自訂）',
    labelPlaceholder: '例如：起床上學',
    cancel: '取消',
    save: '儲存',
    defaultLabel: '鬧鐘',
    submit: '提交答案',
    skip: '換一題',
    alarmOff: '鬧鐘已關閉',
    notifPrompt: '開啟通知以防錯過鬧鐘',
    notifEnable: '啟用',
    delete: '刪除',
    deleteTitle: '刪除鬧鐘',
    deleteConfirm: '確定要刪除這個鬧鐘嗎？',
    wrongAnswer: '答案不對，再試一次！',
    enterAnswer: '請輸入答案',
    correct: '✓ 正確！',
    leaveWarn: '鬧鐘正在響，確定要離開嗎？',
    notifTitle: '⏰ 算術鬧鐘',
    notifBody: '鬧鐘響了！請解答算術題以關閉。',
    progress: (n, t) => `第 ${n}/${t} 題`,
    pickDay: '請至少選擇一個重複日子',
    gradeGroups: { primary: '小學', secondary: '中學', elective: 'DSE 選修' },
    // Math question fragments
    math: {
      plus: '+', minus: '−', times: '×', divide: '÷',
      find: '求', solve: '解', value: '的值', eq: '= ?',
      if: '若', at: '在',
      biggerRoot: '較大嘅根',
      ap: '等差數列', gp: '等比數列',
      meanOf: '數據', meanQ: '嘅平均值 = ?',
      medianOf: '數據', medianQ: '嘅中位數 = ?',
      inequality: (a,b,sign,c) => `解 ${a}x + ${b} ${sign} ${c}，x ${sign} ?`,
      det: 'det',
      Re: 'Re',
    }
  },
  en: {
    appTitle: '⏰ Math Alarm',
    emptyIcon: '🔔',
    emptyText: 'Add your first math alarm',
    newAlarm: 'New Alarm',
    editAlarm: 'Edit Alarm',
    time: 'Time',
    repeat: 'Repeat',
    once: 'Once',
    daily: 'Daily',
    custom: 'Custom',
    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    gradeLabel: 'HK Math Curriculum Level',
    grades: { p1:'P1', p2:'P2', p3:'P3', p4:'P4', p5:'P5', p6:'P6', s1:'S1', s2:'S2', s3:'S3', s4:'S4', s5:'S5', s6:'S6', m1:'M1 (Calculus & Statistics)', m2:'M2 (Algebra & Calculus)' },
    gradesShort: { p1:'P1', p2:'P2', p3:'P3', p4:'P4', p5:'P5', p6:'P6', s1:'S1', s2:'S2', s3:'S3', s4:'S4', s5:'S5', s6:'S6', m1:'M1', m2:'M2' },
    questionCount: 'Number of Questions',
    qCountOpt: n => n === 1 ? '1 question' : `${n} questions`,
    labelField: 'Label',
    labelPlaceholder: 'e.g. Wake up for school',
    cancel: 'Cancel',
    save: 'Save',
    defaultLabel: 'Alarm',
    submit: 'Submit',
    skip: 'Skip',
    alarmOff: 'Alarm Off',
    notifPrompt: 'Enable notifications so you don\'t miss alarms',
    notifEnable: 'Enable',
    delete: 'Delete',
    deleteTitle: 'Delete Alarm',
    deleteConfirm: 'Are you sure you want to delete this alarm?',
    wrongAnswer: 'Wrong answer, try again!',
    enterAnswer: 'Please enter an answer',
    correct: '✓ Correct!',
    leaveWarn: 'Alarm is ringing! Are you sure you want to leave?',
    notifTitle: '⏰ Math Alarm',
    notifBody: 'Alarm ringing! Solve the math problem to turn it off.',
    progress: (n, t) => `Question ${n}/${t}`,
    pickDay: 'Please select at least one day',
    gradeGroups: { primary: 'Primary', secondary: 'Secondary', elective: 'DSE Elective' },
    math: {
      plus: '+', minus: '−', times: '×', divide: '÷',
      find: 'Find', solve: 'Solve', value: '', eq: '= ?',
      if: 'If', at: 'at',
      biggerRoot: 'larger root',
      ap: 'Arithmetic sequence', gp: 'Geometric sequence',
      meanOf: 'Data', meanQ: ' mean = ?',
      medianOf: 'Data', medianQ: ' median = ?',
      inequality: (a,b,sign,c) => `Solve ${a}x + ${b} ${sign} ${c}, x ${sign} ?`,
      det: 'det',
      Re: 'Re',
    }
  }
};

let currentLang = localStorage.getItem('arithmetic-lang') || 'zh';

function t(path) {
  const keys = path.split('.');
  let val = I18N[currentLang];
  for (const k of keys) {
    if (val == null) return path;
    val = val[k];
  }
  return val != null ? val : path;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('arithmetic-lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-HK' : 'en';
  refreshI18nUI();
  renderAlarmList();
}

function refreshI18nUI() {
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = t(key);
    if (typeof text === 'string') el.textContent = text;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  // Update grade selector options
  const gradeSel = document.getElementById('grade-select');
  if (gradeSel) {
    const selGrade = gradeSel.value;
    gradeSel.querySelectorAll('option').forEach(opt => {
      if (opt.dataset.grade) {
        opt.textContent = t('gradesShort.' + opt.dataset.grade);
      }
    });
    // Update optgroup labels
    gradeSel.querySelectorAll('optgroup').forEach(g => {
      if (g.dataset.group) g.label = t('gradeGroups.' + g.dataset.group);
    });
  }
  // Update question count options
  const qcSel = document.getElementById('question-count-select');
  if (qcSel) {
    qcSel.querySelectorAll('option').forEach(opt => {
      const n = parseInt(opt.value);
      if (n) opt.textContent = t('qCountOpt')(n);
    });
  }
  // Update day checkboxes
  document.querySelectorAll('[data-i18n-day]').forEach(el => {
    const day = parseInt(el.dataset.i18nDay);
    el.textContent = t('days')[day];
  });
  // Update dynamic title
  const titleEl = document.getElementById('settings-title');
  if (titleEl) {
    titleEl.textContent = editAlarmId ? t('editAlarm') : t('newAlarm');
  }
}

// ═══════════════════════════════════════
//  DATA LAYER
// ═══════════════════════════════════════

const STORAGE_KEY = 'arithmetic-alarms';

function loadAlarms() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch { return []; }
}

function saveAlarms(alarms) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(alarms));
}

function findAlarm(id) {
  return loadAlarms().find(a => a.id === id);
}

// ═══════════════════════════════════════
//  SCHEDULE CALCULATION
// ═══════════════════════════════════════

function calculateNextTrigger(hour, minute, repeat, repeatDays) {
  const now = new Date();
  const target = new Date(now);
  target.setHours(hour, minute, 0, 0);

  if (repeat === 'once') {
    if (target <= now) target.setDate(target.getDate() + 1);
    return target.getTime();
  }

  if (repeat === 'daily') {
    if (target <= now) target.setDate(target.getDate() + 1);
    return target.getTime();
  }

  if (repeat === 'custom') {
    const active = repeatDays || [];
    if (active.every(d => !d)) {
      if (target <= now) target.setDate(target.getDate() + 1);
      return target.getTime();
    }

    for (let offset = 0; offset < 7; offset++) {
      const check = new Date(now);
      check.setDate(check.getDate() + offset);
      check.setHours(hour, minute, 0, 0);
      if (offset === 0 && check <= now) continue;
      if (active[check.getDay()]) return check.getTime();
    }
    for (let offset = 1; offset <= 7; offset++) {
      const check = new Date(now);
      check.setDate(check.getDate() + offset);
      check.setHours(hour, minute, 0, 0);
      if (active[check.getDay()]) return check.getTime();
    }
    target.setDate(target.getDate() + 1);
    return target.getTime();
  }

  if (target <= now) target.setDate(target.getDate() + 1);
  return target.getTime();
}

function formatRepeat(alarm) {
  if (alarm.repeat === 'once') return t('once');
  if (alarm.repeat === 'daily') return t('daily');
  if (alarm.repeat === 'custom') {
    const days = t('days');
    const active = alarm.repeatDays.map((d, i) => d ? days[i] : null).filter(Boolean);
    return active.length ? active.join(currentLang === 'zh' ? '、' : ', ') : t('once');
  }
  return t('once');
}

function formatTime(hour, minute) {
  return String(hour).padStart(2, '0') + ':' + String(minute).padStart(2, '0');
}

// ═══════════════════════════════════════
//  MATH QUESTION GENERATION
// ═══════════════════════════════════════

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gcd(a, b) {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { [a, b] = [b, a % b]; }
  return a;
}

function simplifyFraction(num, den) {
  const g = gcd(num, den);
  const sign = den < 0 ? -1 : 1;
  return { num: sign * num / g, den: sign * den / g };
}

function fracStr(num, den) {
  if (den === 1) return String(num);
  const s = simplifyFraction(num, den);
  return s.den === 1 ? String(s.num) : s.num + '/' + s.den;
}

function generateQuestion(grade) {
  let question, answer;
  const m = I18N[currentLang].math;

  switch (grade) {
    case 'p1': {
      const op = Math.random() < 0.5 ? '+' : '−';
      if (op === '+') {
        const a = randInt(1, 18);
        const b = randInt(1, 20 - a);
        question = `${a} + ${b} = ?`;
        answer = String(a + b);
      } else {
        const a = randInt(1, 20);
        const b = randInt(0, a);
        question = `${a} − ${b} = ?`;
        answer = String(a - b);
      }
      break;
    }

    case 'p2': {
      const op = Math.random() < 0.5 ? '+' : '−';
      if (op === '+') {
        const a = randInt(10, 99);
        const b = randInt(10, 99);
        question = `${a} + ${b} = ?`;
        answer = String(a + b);
      } else {
        const a = randInt(10, 99);
        const b = randInt(10, a);
        question = `${a} − ${b} = ?`;
        answer = String(a - b);
      }
      break;
    }

    case 'p3': {
      if (Math.random() < 0.5) {
        const a = randInt(2, 9);
        const b = randInt(2, 9);
        question = `${a} × ${b} = ?`;
        answer = String(a * b);
      } else {
        const b = randInt(2, 9);
        const c = randInt(2, 9);
        const a = b * c;
        question = `${a} ÷ ${b} = ?`;
        answer = String(c);
      }
      break;
    }

    case 'p4': {
      if (Math.random() < 0.5) {
        const a = randInt(10, 99);
        const b = randInt(2, 9);
        question = `${a} × ${b} = ?`;
        answer = String(a * b);
      } else {
        const b = randInt(2, 9);
        const c = randInt(3, 99);
        const a = b * c;
        question = `${a} ÷ ${b} = ?`;
        answer = String(c);
      }
      break;
    }

    case 'p5': {
      const op = Math.random() < 0.5 ? '+' : '−';
      let d1 = randInt(2, 12);
      let d2 = randInt(2, 12);
      while (d2 === d1) d2 = randInt(2, 12);
      const n1 = randInt(1, d1 - 1);
      const n2 = randInt(1, d2 - 1);
      const common = d1 * d2;
      const num1 = n1 * d2;
      const num2 = n2 * d1;
      const resultNum = op === '+' ? num1 + num2 : num1 - num2;
      question = `${n1}/${d1} ${op} ${n2}/${d2} = ?`;
      if (op === '−' && resultNum < 0) {
        question = `${n2}/${d2} − ${n1}/${d1} = ?`;
        answer = fracStr(n2 * d1 - n1 * d2, common);
      } else {
        answer = fracStr(resultNum, common);
      }
      break;
    }

    case 'p6': {
      const type = randInt(0, 3);
      if (type === 0) {
        const a = randInt(10, 99) / 10;
        const b = randInt(10, 50) / 10;
        const result = Math.round(a * b * 100) / 100;
        question = `${a} × ${b} = ?`;
        answer = result === Math.floor(result) ? String(Math.floor(result)) : String(result);
      } else if (type === 1) {
        const b = randInt(1, 9);
        const c = randInt(1, 20);
        const a = b * c;
        const aDec = a / 10;
        const bDec = b / 10;
        question = `${aDec} ÷ ${bDec} = ?`;
        answer = String(c);
      } else if (type === 2) {
        const n1 = randInt(1, 9), d1 = randInt(2, 8);
        const n2 = randInt(1, 9), d2 = randInt(2, 8);
        question = `(${n1}/${d1}) × (${n2}/${d2}) = ?`;
        answer = fracStr(n1 * n2, d1 * d2);
      } else {
        const n1 = randInt(1, 9), d1 = randInt(2, 8);
        const n2 = randInt(1, 9), d2 = randInt(2, 8);
        question = `(${n1}/${d1}) ÷ (${n2}/${d2}) = ?`;
        answer = fracStr(n1 * d2, d1 * n2);
      }
      break;
    }

    case 's1': {
      const opType = randInt(0, 3);
      if (opType === 0) {
        const a = randInt(-15, 15);
        const b = randInt(-15, 15);
        question = `(${a}) + (${b}) = ?`;
        answer = String(a + b);
      } else if (opType === 1) {
        const a = randInt(-15, 15);
        const b = randInt(-15, 15);
        question = `(${a}) − (${b}) = ?`;
        answer = String(a - b);
      } else if (opType === 2) {
        const a = randInt(-12, 12);
        const b = randInt(-9, 9);
        question = `(${a}) × (${b}) = ?`;
        answer = String(a * b);
      } else {
        const b = randInt(-9, 9);
        const bNonZero = b === 0 ? 3 : b;
        const c = randInt(-9, 9);
        const a = bNonZero * c;
        question = `(${a}) ÷ (${bNonZero}) = ?`;
        answer = String(c);
      }
      break;
    }

    case 's2': {
      const a = randInt(1, 9);
      const b = randInt(-9, 9);
      const x = randInt(-5, 5);
      const useX2 = Math.random() < 0.3;
      if (useX2) {
        const c = randInt(1, 3);
        const result = a * x * x + b * x + c;
        const bxSign = b >= 0 ? `+ ${b}` : `− ${Math.abs(b)}`;
        const cSign = c >= 0 ? `+ ${c}` : `− ${Math.abs(c)}`;
        if (currentLang === 'zh') {
          question = `若 x = ${x}，求 ${a}x² ${bxSign}x ${cSign} 的值`;
        } else {
          question = `If x = ${x}, find the value of ${a}x² ${bxSign}x ${cSign}`;
        }
        answer = String(result);
      } else {
        const bxSign = b >= 0 ? `+ ${b}` : `− ${Math.abs(b)}`;
        if (currentLang === 'zh') {
          question = `若 x = ${x}，求 ${a}x ${bxSign} 的值`;
        } else {
          question = `If x = ${x}, find the value of ${a}x ${bxSign}`;
        }
        answer = String(a * x + b);
      }
      break;
    }

    case 's3': {
      const type = Math.random() < 0.5 ? 'simple' : 'both';
      if (type === 'simple') {
        const a = randInt(2, 9);
        const x = randInt(-9, 9);
        const b = randInt(-5, 5);
        const c = a * x + b;
        const bSign = b >= 0 ? `+ ${b}` : `− ${Math.abs(b)}`;
        question = `${a}x ${bSign} = ${c}, ${m.find} x`;
        answer = String(x);
      } else {
        const a = randInt(2, 7);
        const c = randInt(1, 6);
        const b = randInt(-5, 5);
        const x = randInt(-5, 5);
        const d = a * x + b - c * x;
        const bSign = b >= 0 ? `+ ${b}` : `− ${Math.abs(b)}`;
        const dSign = d >= 0 ? `+ ${d}` : `− ${Math.abs(d)}`;
        question = `${a}x ${bSign} = ${c}x ${dSign}, ${m.find} x`;
        answer = String(x);
      }
      break;
    }

    // ── 中四 (S4): Quadratic roots, indices, simultaneous eq, surds ──
    case 's4': {
      const t = randInt(0, 4);
      if (t === 0) {
        const r1 = randInt(1, 8);
        const r2 = randInt(1, 8);
        const sum = r1 + r2;
        const prod = r1 * r2;
        question = `x² − ${sum}x + ${prod} = 0, ${m.biggerRoot} = ?`;
        answer = String(Math.max(r1, r2));
      } else if (t === 1) {
        const base = randInt(2, 4);
        const a = randInt(2, 5);
        const b = randInt(2, 4);
        const result = Math.pow(base, a + b);
        question = `${base}${'⁰¹²³⁴⁵⁶⁷⁸⁹'[a]} × ${base}${'⁰¹²³⁴⁵⁶⁷⁸⁹'[b]} = ?`;
        answer = String(result);
      } else if (t === 2) {
        const base = randInt(2, 4);
        const x = randInt(2, 4);
        const N = Math.pow(base, x);
        question = `${m.if} ${base}ˣ = ${N}, ${m.find} x`;
        answer = String(x);
      } else if (t === 3) {
        const x = randInt(1, 9);
        const y = randInt(1, 9);
        question = `x + y = ${x + y}, x − y = ${x - y}, ${m.find} x`;
        answer = String(x);
      } else {
        const a = randInt(2, 6);
        const b = randInt(2, 5);
        const N = a * a * b;
        question = `√${N} = a√${b}, ${m.find} a`;
        answer = String(a);
      }
      break;
    }

    // ── 中五 (S5): Logarithms, permutations, combinations, trig values ──
    case 's5': {
      const t = randInt(0, 4);
      if (t === 0) {
        const base = randInt(2, 4);
        const exp = randInt(2, 4);
        const N = Math.pow(base, exp);
        question = `log${'₀₁₂₃₄₅₆₇₈₉'[base]} ${N} = ?`;
        answer = String(exp);
      } else if (t === 1) {
        const n = randInt(5, 7);
        const r = randInt(2, 3);
        let result = 1;
        for (let i = 0; i < r; i++) result *= (n - i);
        question = `${n}P${r} = ?`;
        answer = String(result);
      } else if (t === 2) {
        const n = randInt(5, 7);
        const r = randInt(2, 3);
        let num = 1, den = 1;
        for (let i = 0; i < r; i++) { num *= (n - i); den *= (i + 1); }
        question = `${n}C${r} = ?`;
        answer = String(num / den);
      } else if (t === 3) {
        const pairs = [
          { q: 'sin 30° = ?', a: '1/2' },
          { q: 'cos 60° = ?', a: '1/2' },
          { q: 'tan 45° = ?', a: '1' },
          { q: 'sin 90° = ?', a: '1' },
          { q: 'cos 90° = ?', a: '0' },
          { q: 'sin² 30° + cos² 30° = ?', a: '1' }
        ];
        const pick = pairs[randInt(0, pairs.length - 1)];
        question = pick.q;
        answer = pick.a;
      } else {
        const base = randInt(2, 5);
        const exp = randInt(2, 3);
        const N = Math.pow(base, exp);
        question = `log${'₀₁₂₃₄₅₆₇₈₉'[base]} ${N} = ?`;
        answer = String(exp);
      }
      break;
    }

    // ── 中六 (S6): AP, GP, statistics, inequalities ──
    case 's6': {
      const t = randInt(0, 4);
      if (t === 0) {
        const a = randInt(2, 5);
        const d = randInt(2, 4);
        const n = randInt(4, 7);
        const Tn = a + (n - 1) * d;
        question = `${m.ap}: a=${a}, d=${d}, T${'₀₁₂₃₄₅₆₇₈₉'[n]} = ?`;
        answer = String(Tn);
      } else if (t === 1) {
        const a = randInt(2, 3);
        const r = randInt(2, 3);
        const n = randInt(3, 5);
        const Tn = a * Math.pow(r, n - 1);
        question = `${m.gp}: a=${a}, r=${r}, T${'₀₁₂₃₄₅₆₇₈₉'[n]} = ?`;
        answer = String(Tn);
      } else if (t === 2) {
        const base = randInt(2, 9);
        const nums = [base, base + 2, base + 4, base + 6, base + 8];
        const mean = base + 4;
        question = `${m.meanOf} ${nums.join(', ')}${m.meanQ}`;
        answer = String(mean);
      } else if (t === 3) {
        const nums = [randInt(1, 3), randInt(4, 6), randInt(7, 9), randInt(10, 12), randInt(13, 15)];
        question = `${m.medianOf} ${nums.join(', ')}${m.medianQ}`;
        answer = String(nums[2]);
      } else {
        const a = randInt(2, 5);
        const k = randInt(2, 8);
        const b = randInt(1, 5);
        const c = a * k + b;
        const sign = Math.random() < 0.5 ? '>' : '<';
        question = m.inequality(a, b, sign, c);
        answer = String(k);
      }
      break;
    }

    // ── M1 (Calculus & Statistics): Simple differentiation, integration ──
    case 'm1': {
      const t = randInt(0, 4);
      if (t === 0) {
        const n = randInt(2, 4);
        const a = randInt(1, 3);
        const result = n * Math.pow(a, n - 1);
        question = `d/dx (x${'⁰¹²³⁴⁵⁶⁷⁸⁹'[n]}) ${m.at} x=${a}${m.value} = ?`;
        answer = String(result);
      } else if (t === 1) {
        const c = randInt(2, 5);
        const n = randInt(2, 3);
        const a = randInt(1, 3);
        const result = c * n * Math.pow(a, n - 1);
        question = `d/dx (${c}x${'⁰¹²³⁴⁵⁶⁷⁸⁹'[n]}) ${m.at} x=${a}${m.value} = ?`;
        answer = String(result);
      } else if (t === 2) {
        const a = randInt(2, 5);
        const b = randInt(1, 4);
        const n = randInt(2, 4);
        const m2 = randInt(1, 2);
        const result = a * n + b * m2;
        question = `d/dx (${a}x${'⁰¹²³⁴⁵⁶⁷⁸⁹'[n]} + ${b}x${'⁰¹²³⁴⁵⁶⁷⁸⁹'[m2]}) ${m.at} x=1${m.value} = ?`;
        answer = String(result);
      } else if (t === 3) {
        const a = randInt(2, 4);
        const b = a % 2 === 0 ? randInt(2, 6) : 2 * randInt(1, 3);
        const result = b * a * a / 2;
        question = `∫₀${'⁰¹²³⁴⁵⁶⁷⁸⁹'[a]} ${b}x dx = ?`;
        answer = String(Math.floor(result));
      } else {
        const b = randInt(2, 7);
        const a = randInt(2, 4);
        question = `d/dx (${b}x) ${m.at} x=${a}${m.value} = ?`;
        answer = String(b);
      }
      break;
    }

    // ── M2 (Algebra & Calculus): Matrix determinant, limits, complex numbers ──
    case 'm2': {
      const t = randInt(0, 4);
      if (t === 0) {
        // 2×2 determinant: ad - bc
        const a = randInt(2, 5);
        const b = randInt(1, 4);
        const c = randInt(1, 3);
        const d = randInt(2, 5);
        const det = a * d - b * c;
        question = `det [[${a},${b}],[${c},${d}]] = ?`;
        answer = String(det);
      } else if (t === 1) {
        // 2×2 determinant (ensure positive)
        const a = randInt(3, 6);
        const b = randInt(1, 2);
        const c = randInt(1, 2);
        const d = randInt(3, 6);
        const det = a * d - b * c;
        question = `det [[${a},${b}],[${c},${d}]] = ?`;
        answer = String(det);
      } else if (t === 2) {
        // Limit: lim(x→a) (x²-a²)/(x-a) = 2a
        const a = randInt(2, 5);
        const result = 2 * a;
        question = `lim(x→${a}) (x²−${a * a})/(x−${a}) = ?`;
        answer = String(result);
      } else if (t === 3) {
        // |a+bi| = √(a²+b²) — use Pythagorean triples for integer answer
        const triples = [[3, 4, 5], [6, 8, 10], [5, 12, 13]];
        const [x, y, r] = triples[randInt(0, 2)];
        question = `|${x} + ${y}i| = ?`;
        answer = String(r);
      } else {
        // Re((a+bi)(c+di)) = ac - bd
        const a = randInt(1, 3), b = randInt(1, 3);
        const c = randInt(2, 4), d = randInt(1, 2);
        const real = a * c - b * d;
        question = `Re((${a}+${b}i)(${c}+${d}i)) = ?`;
        answer = String(real);
      }
      break;
    }

    default:
      question = '1 + 1 = ?';
      answer = '2';
  }

  return { question, answer };
}

// ═══════════════════════════════════════
//  ALARM SOUND (Web Audio API)
// ═══════════════════════════════════════

let audioCtx = null;
let alarmInterval = null;
let currentOscillator = null;
let currentGain = null;

function startAlarmSound() {
  if (alarmInterval) return;
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  } catch (e) {
    console.warn('Web Audio API not available');
    return;
  }

  let high = true;

  function beep() {
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'square';
      osc.frequency.value = high ? 880 : 440;
      gain.gain.value = 0.15;
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.4);
      currentOscillator = osc;
      currentGain = gain;
      high = !high;
    } catch (e) { /* ignore */ }
  }

  beep();
  alarmInterval = setInterval(beep, 500);
}

function stopAlarmSound() {
  if (alarmInterval) {
    clearInterval(alarmInterval);
    alarmInterval = null;
  }
  try {
    if (currentOscillator) { currentOscillator.stop(); currentOscillator = null; }
  } catch (e) { /* ignore */ }
  try {
    if (audioCtx && audioCtx.state !== 'closed') audioCtx.close();
  } catch (e) { /* ignore */ }
  audioCtx = null;
}

// ═══════════════════════════════════════
//  NOTIFICATIONS
// ═══════════════════════════════════════

function requestNotificationPermission() {
  if ('Notification' in window && Notification.permission === 'default') {
    document.getElementById('notification-prompt').classList.add('show');
  }
}

function sendNotification(title, body) {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, { body, icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🔔</text></svg>', requireInteraction: true });
  }
}

// ═══════════════════════════════════════
//  SCREEN NAVIGATION
// ═══════════════════════════════════════

let currentScreen = 'main';
let editAlarmId = null;
let currentChallengeAlarm = null;
let currentQuestion = null;
let inChallenge = false;
let questionsCorrect = 0;
let totalQuestions = 1;

function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const screen = document.getElementById('screen-' + name);
  if (screen) {
    screen.classList.add('active');
    currentScreen = name;
  }
}

// ═══════════════════════════════════════
//  SCREEN 1: ALARM LIST
// ═══════════════════════════════════════

let longPressTimer = null;
let currentDeleteCard = null;

function renderAlarmList() {
  const alarms = loadAlarms();
  const listEl = document.getElementById('alarm-list');
  const emptyEl = document.getElementById('empty-state');

  alarms.sort((a, b) => a.nextTrigger - b.nextTrigger);

  if (alarms.length === 0) {
    emptyEl.style.display = 'flex';
    listEl.innerHTML = '';
    return;
  }

  emptyEl.style.display = 'none';
  listEl.innerHTML = alarms.map(alarm => {
    const timeStr = formatTime(alarm.hour, alarm.minute);
    const repeatStr = formatRepeat(alarm);
    const gradeStr = (t('gradesShort.' + alarm.grade) || alarm.grade);
    const label = alarm.label || '';
    const disabledClass = alarm.enabled ? '' : ' disabled';

    return `
      <div class="alarm-card${disabledClass}" data-id="${alarm.id}">
        <div class="card-time">${timeStr}</div>
        <div class="card-info">
          <div class="card-repeat">${repeatStr}</div>
          <div class="card-grade">${gradeStr}</div>
          ${label ? `<div class="card-label">${label}</div>` : ''}
        </div>
        <div class="toggle${alarm.enabled ? ' on' : ''}" data-action="toggle"></div>
        <button class="delete-btn" data-action="delete-confirm">${t('delete')}</button>
      </div>
    `;
  }).join('');

  listEl.onclick = function(e) {
    const card = e.target.closest('.alarm-card');
    if (!card) return;

    const action = e.target.dataset.action || e.target.closest('[data-action]')?.dataset.action;

    if (action === 'toggle') {
      e.stopPropagation();
      toggleAlarm(card.dataset.id);
      return;
    }
    if (action === 'delete-confirm') {
      e.stopPropagation();
      showDeleteConfirm(card.dataset.id);
      return;
    }
    navigateToSettings(card.dataset.id);
  };

  listEl.addEventListener('touchstart', function(e) {
    const card = e.target.closest('.alarm-card');
    if (!card || e.target.closest('.toggle') || e.target.closest('.delete-btn')) return;
    longPressTimer = setTimeout(() => {
      longPressTimer = null;
      card.classList.add('show-delete');
      currentDeleteCard = card;
    }, 600);
  }, { passive: true });

  listEl.addEventListener('touchend', function() {
    if (longPressTimer) { clearTimeout(longPressTimer); longPressTimer = null; }
  });

  listEl.addEventListener('touchmove', function() {
    if (longPressTimer) { clearTimeout(longPressTimer); longPressTimer = null; }
  });

  listEl.addEventListener('mousedown', function(e) {
    const card = e.target.closest('.alarm-card');
    if (!card || e.target.closest('.toggle') || e.target.closest('.delete-btn')) return;
    longPressTimer = setTimeout(() => {
      longPressTimer = null;
      card.classList.add('show-delete');
      currentDeleteCard = card;
    }, 600);
  });

  listEl.addEventListener('mouseup', function() {
    if (longPressTimer) { clearTimeout(longPressTimer); longPressTimer = null; }
  });

  listEl.addEventListener('mouseleave', function() {
    if (longPressTimer) { clearTimeout(longPressTimer); longPressTimer = null; }
  });
}

function hideDeleteButtons() {
  document.querySelectorAll('.alarm-card.show-delete').forEach(c => c.classList.remove('show-delete'));
  currentDeleteCard = null;
}

function toggleAlarm(id) {
  const alarms = loadAlarms();
  const alarm = alarms.find(a => a.id === id);
  if (!alarm) return;
  alarm.enabled = !alarm.enabled;
  if (alarm.enabled) {
    alarm.nextTrigger = calculateNextTrigger(alarm.hour, alarm.minute, alarm.repeat, alarm.repeatDays);
  }
  saveAlarms(alarms);
  renderAlarmList();
}

function showDeleteConfirm(id) {
  hideDeleteButtons();
  const dialog = document.createElement('div');
  dialog.className = 'delete-confirm';
  dialog.innerHTML = `
    <div class="dialog">
      <h3>${t('deleteTitle')}</h3>
      <p>${t('deleteConfirm')}</p>
      <div class="btn-row">
        <button class="btn-cancel">${t('cancel')}</button>
        <button class="btn-delete-confirm">${t('delete')}</button>
      </div>
    </div>
  `;
  document.body.appendChild(dialog);

  dialog.querySelector('.btn-cancel').onclick = () => dialog.remove();
  dialog.querySelector('.btn-delete-confirm').onclick = () => {
    dialog.remove();
    deleteAlarm(id);
  };
  dialog.onclick = (e) => { if (e.target === dialog) dialog.remove(); };
}

function deleteAlarm(id) {
  const alarms = loadAlarms().filter(a => a.id !== id);
  saveAlarms(alarms);
  renderAlarmList();
}

// ═══════════════════════════════════════
//  SCREEN 2: SETTINGS
// ═══════════════════════════════════════

function populateTimeSelectors() {
  const hourSel = document.getElementById('hour-select');
  const minuteSel = document.getElementById('minute-select');

  hourSel.innerHTML = '';
  for (let h = 0; h < 24; h++) {
    const opt = document.createElement('option');
    opt.value = h;
    opt.textContent = String(h).padStart(2, '0');
    hourSel.appendChild(opt);
  }

  minuteSel.innerHTML = '';
  for (let m = 0; m < 60; m++) {
    const opt = document.createElement('option');
    opt.value = m;
    opt.textContent = String(m).padStart(2, '0');
    minuteSel.appendChild(opt);
  }
}

function navigateToSettings(id) {
  editAlarmId = id || null;
  hideDeleteButtons();
  showScreen('settings');

  if (id) {
    document.getElementById('settings-title').textContent = t('editAlarm');
    const alarm = findAlarm(id);
    if (alarm) {
      document.getElementById('hour-select').value = alarm.hour;
      document.getElementById('minute-select').value = alarm.minute;
      selectRepeat(alarm.repeat, alarm.repeatDays);
      document.getElementById('grade-select').value = alarm.grade;
      document.getElementById('question-count-select').value = alarm.questionCount || 1;
      document.getElementById('label-input').value = alarm.label || '';
    }
  } else {
    document.getElementById('settings-title').textContent = t('newAlarm');
    const now = new Date();
    document.getElementById('hour-select').value = now.getHours();
    document.getElementById('minute-select').value = now.getMinutes();
    selectRepeat('once', [false, false, false, false, false, false, false]);
    document.getElementById('grade-select').value = 'p1';
    document.getElementById('question-count-select').value = '1';
    document.getElementById('label-input').value = '';
  }
}

function selectRepeat(repeat, repeatDays) {
  document.querySelectorAll('#repeat-options .repeat-radio').forEach(el => {
    el.classList.toggle('selected', el.dataset.repeat === repeat);
  });

  const dayBox = document.getElementById('day-checkboxes');
  dayBox.style.display = repeat === 'custom' ? 'flex' : 'none';

  document.querySelectorAll('#day-checkboxes .day-check').forEach(el => {
    const day = parseInt(el.dataset.day);
    el.classList.toggle('checked', repeatDays && repeatDays[day]);
  });
}

function getSelectedRepeat() {
  const selected = document.querySelector('#repeat-options .repeat-radio.selected');
  const repeat = selected ? selected.dataset.repeat : 'once';
  const repeatDays = [false, false, false, false, false, false, false];
  if (repeat === 'custom') {
    document.querySelectorAll('#day-checkboxes .day-check.checked').forEach(el => {
      repeatDays[parseInt(el.dataset.day)] = true;
    });
  }
  return { repeat, repeatDays };
}

function saveSettings() {
  const hour = parseInt(document.getElementById('hour-select').value);
  const minute = parseInt(document.getElementById('minute-select').value);
  const { repeat, repeatDays } = getSelectedRepeat();
  const grade = document.getElementById('grade-select').value;
  const questionCount = parseInt(document.getElementById('question-count-select').value) || 1;
  const label = document.getElementById('label-input').value.trim();

  if (repeat === 'custom' && repeatDays.every(d => !d)) {
    alert(t('pickDay'));
    return;
  }

  const nextTrigger = calculateNextTrigger(hour, minute, repeat, repeatDays);
  const alarms = loadAlarms();

  if (editAlarmId) {
    const idx = alarms.findIndex(a => a.id === editAlarmId);
    if (idx !== -1) {
      alarms[idx].hour = hour;
      alarms[idx].minute = minute;
      alarms[idx].repeat = repeat;
      alarms[idx].repeatDays = repeatDays;
      alarms[idx].grade = grade;
      alarms[idx].questionCount = questionCount;
      alarms[idx].label = label;
      alarms[idx].enabled = true;
      alarms[idx].nextTrigger = nextTrigger;
    }
  } else {
    alarms.push({
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2),
      hour, minute, repeat, repeatDays, grade, questionCount, label,
      enabled: true,
      nextTrigger,
      createdAt: Date.now()
    });
  }

  saveAlarms(alarms);
  editAlarmId = null;
  renderAlarmList();
  showScreen('main');
  requestNotificationPermission();
}

// ═══════════════════════════════════════
//  SCREEN 3: CHALLENGE
// ═══════════════════════════════════════

function enterChallenge(alarm) {
  currentChallengeAlarm = alarm;
  inChallenge = true;
  questionsCorrect = 0;
  totalQuestions = alarm.questionCount || 1;

  history.pushState({ challenge: true, id: alarm.id }, '', '#challenge');
  history.pushState({ challenge: true, id: alarm.id }, '', '#challenge');

  showScreen('challenge');
  document.getElementById('challenge-label').textContent = alarm.label || t('defaultLabel');
  document.getElementById('grade-label').textContent = (t('gradesShort.' + alarm.grade) || alarm.grade);

  updateChallengeClock();
  if (!window._challengeClockInterval) {
    window._challengeClockInterval = setInterval(updateChallengeClock, 1000);
  }

  generateNewQuestion();

  document.getElementById('answer-display').textContent = '';
  document.getElementById('error-msg').textContent = '';
  document.getElementById('correct-msg').textContent = '';

  startAlarmSound();

  try {
    if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
  } catch (e) { /* ignore */ }

  sendNotification(t('notifTitle'), alarm.label || t('notifBody'));
}

function updateChallengeClock() {
  const now = new Date();
  document.getElementById('challenge-time').textContent =
    String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
}

function generateNewQuestion() {
  if (!currentChallengeAlarm) return;
  currentQuestion = generateQuestion(currentChallengeAlarm.grade);
  document.getElementById('question-text').textContent = currentQuestion.question;
  document.getElementById('answer-display').textContent = '';
  document.getElementById('error-msg').textContent = '';
  document.getElementById('correct-msg').textContent = '';
  document.getElementById('answer-display').classList.remove('error');
  document.getElementById('question-progress').textContent =
    t('progress')(questionsCorrect + 1, totalQuestions);
}

function submitAnswer() {
  if (!currentQuestion) return;
  const userAnswer = document.getElementById('answer-display').textContent.trim();

  if (!userAnswer) {
    showError(t('enterAnswer'));
    return;
  }

  if (isAnswerCorrect(userAnswer, currentQuestion.answer)) {
    onCorrectAnswer();
  } else {
    showError(t('wrongAnswer'));
  }
}

function isAnswerCorrect(userAns, correctAns) {
  if (userAns === correctAns) return true;

  const userNum = parseFloat(userAns);
  const correctNum = parseFloat(correctAns);
  if (!isNaN(userNum) && !isNaN(correctNum)) {
    return Math.abs(userNum - correctNum) < 0.001;
  }

  if (userAns.includes('/') || correctAns.includes('/')) {
    const uParts = userAns.split('/');
    const cParts = correctAns.split('/');
    if (uParts.length === 2 && cParts.length === 2) {
      const uNum = parseInt(uParts[0]), uDen = parseInt(uParts[1]);
      const cNum = parseInt(cParts[0]), cDen = parseInt(cParts[1]);
      if (!isNaN(uNum) && !isNaN(uDen) && !isNaN(cNum) && !isNaN(cDen) && uDen !== 0 && cDen !== 0) {
        return uNum * cDen === cNum * uDen;
      }
    }
  }

  return false;
}

function showError(msg) {
  const errEl = document.getElementById('error-msg');
  const displayEl = document.getElementById('answer-display');
  document.getElementById('correct-msg').textContent = '';
  errEl.textContent = msg;
  displayEl.classList.add('error');
  setTimeout(() => displayEl.classList.remove('error'), 400);
}

function onCorrectAnswer() {
  questionsCorrect++;

  if (questionsCorrect >= totalQuestions) {
    // All questions answered — turn off alarm
    stopAlarmSound();
    inChallenge = false;

    document.getElementById('success-overlay').classList.add('show');

    const alarms = loadAlarms();
    const alarm = alarms.find(a => a.id === currentChallengeAlarm.id);
    if (alarm) {
      if (alarm.repeat === 'once') {
        const idx = alarms.indexOf(alarm);
        alarms.splice(idx, 1);
      } else {
        alarm.nextTrigger = calculateNextTrigger(alarm.hour, alarm.minute, alarm.repeat, alarm.repeatDays);
      }
      saveAlarms(alarms);
    }

    if (window._challengeClockInterval) {
      clearInterval(window._challengeClockInterval);
      window._challengeClockInterval = null;
    }

    setTimeout(() => {
      document.getElementById('success-overlay').classList.remove('show');
      currentChallengeAlarm = null;
      currentQuestion = null;
      questionsCorrect = 0;
      totalQuestions = 1;
      renderAlarmList();
      showScreen('main');
      try {
        if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
      } catch (e) { /* ignore */ }
      history.back();
      history.back();
    }, 2000);
  } else {
    // More questions remain — show brief correct feedback, then next question
    document.getElementById('correct-msg').textContent = t('correct');
    document.getElementById('answer-display').textContent = '';
    document.getElementById('error-msg').textContent = '';

    setTimeout(() => {
      document.getElementById('correct-msg').textContent = '';
      generateNewQuestion();
    }, 600);
  }
}

function skipQuestion() {
  generateNewQuestion();
}

// ═══════════════════════════════════════
//  NUMPAD HANDLING
// ═══════════════════════════════════════

document.getElementById('numpad').addEventListener('click', function(e) {
  const key = e.target.dataset.key;
  if (!key) return;

  const display = document.getElementById('answer-display');

  if (key === 'submit') {
    submitAnswer();
  } else if (key === 'skip') {
    skipQuestion();
  } else if (key === 'back') {
    display.textContent = display.textContent.slice(0, -1);
  } else {
    display.textContent += key;
  }
});

document.addEventListener('keydown', function(e) {
  if (!inChallenge) return;
  const display = document.getElementById('answer-display');

  if (e.key === 'Enter') {
    e.preventDefault();
    submitAnswer();
    return;
  }

  if (e.key === 'Backspace') {
    e.preventDefault();
    display.textContent = display.textContent.slice(0, -1);
    return;
  }

  if (e.key === 'Escape') {
    e.preventDefault();
    return;
  }

  if (/^[0-9.\-/\s]$/.test(e.key)) {
    e.preventDefault();
    display.textContent += e.key;
  }
});

// ═══════════════════════════════════════
//  ANTI-ESCAPE (Challenge Screen)
// ═══════════════════════════════════════

window.addEventListener('popstate', function(e) {
  if (inChallenge && currentChallengeAlarm) {
    history.pushState({ challenge: true, id: currentChallengeAlarm.id }, '', '#challenge');
  }
});

window.addEventListener('hashchange', function(e) {
  if (inChallenge) {
    history.replaceState({ challenge: true, id: currentChallengeAlarm?.id }, '', '#challenge');
  }
});

window.addEventListener('beforeunload', function(e) {
  if (inChallenge) {
    e.preventDefault();
    e.returnValue = t('leaveWarn');
    return e.returnValue;
  }
});

document.addEventListener('touchmove', function(e) {
  if (inChallenge) {
    e.preventDefault();
  }
}, { passive: false });

// ═══════════════════════════════════════
//  ALARM CHECKER (setInterval)
// ═══════════════════════════════════════

let alarmCheckInterval = null;
let alarmFiredMap = {};

function checkAlarms() {
  if (inChallenge) return;

  const now = Date.now();
  const alarms = loadAlarms();

  for (const alarm of alarms) {
    if (!alarm.enabled) continue;
    if (alarmFiredMap[alarm.id]) continue;

    const diff = now - alarm.nextTrigger;
    if (diff >= 0 && diff < 5000) {
      alarmFiredMap[alarm.id] = true;
      enterChallenge(alarm);
      return;
    }

    if (diff > 300000) {
      if (alarm.repeat !== 'once') {
        alarm.nextTrigger = calculateNextTrigger(alarm.hour, alarm.minute, alarm.repeat, alarm.repeatDays);
        saveAlarms(alarms);
      }
    }
  }
}

function startAlarmChecker() {
  if (alarmCheckInterval) return;
  checkAlarms();
  alarmCheckInterval = setInterval(checkAlarms, 1000);
}

document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible' && !inChallenge) {
    alarmFiredMap = {};
    checkAlarms();
  }
});

// ═══════════════════════════════════════
//  APP INITIALIZATION
// ═══════════════════════════════════════

function init() {
  populateTimeSelectors();
  renderAlarmList();
  startAlarmChecker();
  requestNotificationPermission();
  refreshI18nUI();

  // Language toggle
  document.getElementById('btn-lang').addEventListener('click', function() {
    setLang(currentLang === 'zh' ? 'en' : 'zh');
  });

  document.getElementById('fab-add').addEventListener('click', function() {
    navigateToSettings(null);
  });

  document.getElementById('btn-back-settings').addEventListener('click', function() {
    editAlarmId = null;
    showScreen('main');
  });

  document.getElementById('btn-cancel').addEventListener('click', function() {
    editAlarmId = null;
    showScreen('main');
  });

  document.getElementById('btn-save').addEventListener('click', saveSettings);

  document.getElementById('repeat-options').addEventListener('click', function(e) {
    const radio = e.target.closest('.repeat-radio');
    if (!radio) return;

    const repeat = radio.dataset.repeat;
    const repeatDays = [false, false, false, false, false, false, false];
    selectRepeat(repeat, repeatDays);
  });

  document.getElementById('day-checkboxes').addEventListener('click', function(e) {
    const check = e.target.closest('.day-check');
    if (!check) return;
    check.classList.toggle('checked');
  });

  document.getElementById('btn-enable-notifications').addEventListener('click', function() {
    if ('Notification' in window) {
      Notification.requestPermission().then(function() {
        document.getElementById('notification-prompt').classList.remove('show');
      });
    }
  });

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.alarm-card')) {
      hideDeleteButtons();
    }
  });

  if (window.location.hash === '#challenge') {
    history.replaceState(null, '', window.location.pathname);
  }
}

document.addEventListener('DOMContentLoaded', init);
