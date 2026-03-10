document.addEventListener('DOMContentLoaded', function() {
  var unitSelect = document.getElementById('unit-system');
  var totalInput = document.getElementById('total-cholesterol');
  var hdlInput = document.getElementById('hdl');
  var ldlInput = document.getElementById('ldl');
  var trigInput = document.getElementById('triglycerides');
  var genderSelect = document.getElementById('gender');
  var calculateBtn = document.getElementById('calculate-btn');
  var resultsSection = document.getElementById('results-section');

  // Conversion factor: 1 mmol/L = 38.67 mg/dL for cholesterol, 88.57 for triglycerides
  var CHOL_FACTOR = 38.67;
  var TRIG_FACTOR = 88.57;

  // Update placeholder hints when unit changes
  unitSelect.addEventListener('change', function() {
    var isMMOL = unitSelect.value === 'mmol';
    if (isMMOL) {
      totalInput.placeholder = 'e.g. 5.2';
      hdlInput.placeholder = 'e.g. 1.4';
      ldlInput.placeholder = 'e.g. 3.1';
      trigInput.placeholder = 'e.g. 1.7';
      totalInput.step = '0.1';
      hdlInput.step = '0.1';
      ldlInput.step = '0.1';
      trigInput.step = '0.1';
      document.getElementById('tc-hint').innerHTML = 'Desirable: &lt;5.2 mmol/L';
      document.getElementById('hdl-hint').innerHTML = 'Optimal: &ge;1.6 mmol/L';
      document.getElementById('ldl-hint').innerHTML = 'Optimal: &lt;2.6 mmol/L';
      document.getElementById('trig-hint').innerHTML = 'Normal: &lt;1.7 mmol/L';
    } else {
      totalInput.placeholder = 'e.g. 200';
      hdlInput.placeholder = 'e.g. 55';
      ldlInput.placeholder = 'e.g. 120';
      trigInput.placeholder = 'e.g. 150';
      totalInput.step = '1';
      hdlInput.step = '1';
      ldlInput.step = '1';
      trigInput.step = '1';
      document.getElementById('tc-hint').innerHTML = 'Desirable: &lt;200 mg/dL';
      document.getElementById('hdl-hint').innerHTML = 'Optimal: &ge;60 mg/dL';
      document.getElementById('ldl-hint').innerHTML = 'Optimal: &lt;100 mg/dL';
      document.getElementById('trig-hint').innerHTML = 'Normal: &lt;150 mg/dL';
    }
  });

  calculateBtn.addEventListener('click', function() {
    var tc = parseFloat(totalInput.value);
    var hdl = parseFloat(hdlInput.value);
    var ldl = parseFloat(ldlInput.value);
    var trig = parseFloat(trigInput.value);
    var gender = genderSelect.value;
    var isMMOL = unitSelect.value === 'mmol';

    // Validate required fields
    if (isNaN(tc) || isNaN(hdl) || isNaN(ldl)) {
      alert('Please enter your Total Cholesterol, HDL, and LDL values.');
      return;
    }

    if (hdl <= 0) {
      alert('HDL must be greater than zero.');
      return;
    }

    // Convert to mg/dL for calculations if in mmol/L
    var tcMgdl = isMMOL ? tc * CHOL_FACTOR : tc;
    var hdlMgdl = isMMOL ? hdl * CHOL_FACTOR : hdl;
    var ldlMgdl = isMMOL ? ldl * CHOL_FACTOR : ldl;
    var trigMgdl = !isNaN(trig) ? (isMMOL ? trig * TRIG_FACTOR : trig) : null;

    // Calculate ratios
    var tcHdlRatio = tcMgdl / hdlMgdl;
    var ldlHdlRatio = ldlMgdl / hdlMgdl;
    var nonHdl = tcMgdl - hdlMgdl;
    var trigHdlRatio = trigMgdl !== null ? trigMgdl / hdlMgdl : null;

    // Display unit suffix
    var unit = isMMOL ? ' mmol/L' : ' mg/dL';

    // Show results
    resultsSection.classList.remove('hidden');

    // Primary result: TC/HDL ratio
    var ratioEl = document.getElementById('tc-hdl-ratio');
    ratioEl.textContent = tcHdlRatio.toFixed(1);

    // Animate count-up if available
    if (typeof animateCountUp === 'function') {
      animateCountUp(ratioEl, 0, tcHdlRatio, 1);
    }

    // TC/HDL status
    var tcHdlStatus = getTcHdlCategory(tcHdlRatio);
    var statusEl = document.getElementById('tc-hdl-status');
    statusEl.className = 'result-status status-' + tcHdlStatus.statusClass;
    document.getElementById('tc-hdl-icon').textContent = tcHdlStatus.icon;
    document.getElementById('tc-hdl-description').textContent = tcHdlStatus.text;

    // Gauge marker position (scale: 0=1.0, 100%=8.0)
    var gaugePos = Math.min(Math.max((tcHdlRatio - 1.0) / 7.0, 0), 1) * 100;
    document.getElementById('gauge-marker').style.left = gaugePos + '%';

    // Breakdown values
    document.getElementById('display-tc-hdl').textContent = tcHdlRatio.toFixed(2);
    document.getElementById('tc-hdl-interpret').textContent = tcHdlStatus.detail;

    document.getElementById('display-ldl-hdl').textContent = ldlHdlRatio.toFixed(2);
    var ldlHdlCat = getLdlHdlCategory(ldlHdlRatio, gender);
    document.getElementById('ldl-hdl-interpret').textContent = ldlHdlCat.detail;

    var nonHdlDisplay = isMMOL ? (nonHdl / CHOL_FACTOR).toFixed(1) + ' mmol/L' : Math.round(nonHdl) + ' mg/dL';
    document.getElementById('display-non-hdl').textContent = nonHdlDisplay;
    var nonHdlCat = getNonHdlCategory(nonHdl);
    document.getElementById('non-hdl-interpret').textContent = nonHdlCat.detail;

    // Triglyceride/HDL section
    var trigSection = document.getElementById('trig-hdl-section');
    var trigBox = document.getElementById('trig-comparison-box');
    if (trigHdlRatio !== null) {
      trigSection.classList.remove('hidden');
      trigBox.style.display = '';
      document.getElementById('display-trig-hdl').textContent = trigHdlRatio.toFixed(2);
      var trigCat = getTrigHdlCategory(trigHdlRatio);
      document.getElementById('trig-hdl-interpret').textContent = trigCat.detail;
      document.getElementById('display-trig-val').textContent = (isMMOL ? trig.toFixed(1) : Math.round(trigMgdl)) + (isMMOL ? '' : '');
    } else {
      trigSection.classList.add('hidden');
      trigBox.style.display = 'none';
    }

    // Individual values display
    document.getElementById('display-tc').textContent = isMMOL ? tc.toFixed(1) : Math.round(tcMgdl);
    document.getElementById('display-hdl-val').textContent = isMMOL ? hdl.toFixed(1) : Math.round(hdlMgdl);
    document.getElementById('display-ldl-val').textContent = isMMOL ? ldl.toFixed(1) : Math.round(ldlMgdl);

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Trigger celebration for good results
    if (typeof celebratePulse === 'function' && tcHdlStatus.statusClass === 'good') {
      celebratePulse(document.getElementById('result-hero'));
    }

    // Content loops
    if (typeof showNextSteps === 'function') {
      showNextSteps('cholesterol-ratio', {});
    }
  });

  // --- Category helper functions ---

  function getTcHdlCategory(ratio) {
    if (ratio < 3.5) {
      return { statusClass: 'good', icon: '✓', text: 'Optimal — Low cardiovascular risk', detail: 'Optimal (below 3.5) — significantly lower heart disease risk' };
    } else if (ratio < 5.0) {
      return { statusClass: 'good', icon: '✓', text: 'Desirable — Within AHA guidelines', detail: 'Desirable (3.5–5.0) — acceptable cardiovascular risk per AHA' };
    } else if (ratio < 6.0) {
      return { statusClass: 'warning', icon: '⚠', text: 'Borderline High — Elevated risk', detail: 'Borderline high (5.0–6.0) — above desirable range, discuss with your doctor' };
    } else {
      return { statusClass: 'danger', icon: '⚠', text: 'High Risk — Consult your doctor', detail: 'High risk (above 6.0) — roughly double the average heart disease risk' };
    }
  }

  function getLdlHdlCategory(ratio, gender) {
    var highThreshold = gender === 'female' ? 3.0 : 3.5;
    if (ratio < 2.0) {
      return { detail: 'Optimal (below 2.0) — low atherogenic risk' };
    } else if (ratio < 2.5) {
      return { detail: 'Desirable (2.0–2.5) — acceptable LDL/HDL balance' };
    } else if (ratio < highThreshold) {
      return { detail: 'Borderline (2.5–' + highThreshold.toFixed(1) + ') — consider lifestyle modifications' };
    } else {
      return { detail: 'High risk (above ' + highThreshold.toFixed(1) + ') — elevated atherogenic burden' };
    }
  }

  function getNonHdlCategory(mgdl) {
    if (mgdl < 100) {
      return { detail: 'Optimal (below 100 mg/dL) — low atherogenic particle burden' };
    } else if (mgdl < 130) {
      return { detail: 'Desirable (100–130 mg/dL) — within ATP III guidelines' };
    } else if (mgdl < 160) {
      return { detail: 'Borderline high (130–160 mg/dL) — above target for most adults' };
    } else {
      return { detail: 'High (above 160 mg/dL) — elevated cardiovascular risk' };
    }
  }

  function getTrigHdlCategory(ratio) {
    if (ratio < 2.0) {
      return { detail: 'Optimal (below 2.0) — low insulin resistance risk' };
    } else if (ratio < 3.0) {
      return { detail: 'Moderate (2.0–3.0) — acceptable but monitor metabolic markers' };
    } else if (ratio < 4.0) {
      return { detail: 'Elevated (3.0–4.0) — suggests insulin resistance and small dense LDL' };
    } else {
      return { detail: 'High (above 4.0) — strong marker of metabolic syndrome' };
    }
  }
});
