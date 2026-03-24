// Running Pace Calculator — factory-migrated
(function() {

  // ── DOM refs ────────────────────────────────────────────────────────────────
  var modeButtons      = document.querySelectorAll('.pace-mode-btn');
  var modeDesc         = document.getElementById('mode-description');
  var calculateBtn     = document.getElementById('calculate-btn');
  var resultsSection   = document.getElementById('results-section');

  // Shared inputs
  var unitSelect       = document.getElementById('unit-select');

  // Row visibility handles
  var rowDistance       = document.getElementById('row-distance');
  var rowTime          = document.getElementById('row-time');
  var rowPace          = document.getElementById('row-pace');

  // Distance
  var distancePreset   = document.getElementById('distance-preset');
  var distanceCustom   = document.getElementById('distance-custom');
  var rowCustomDist    = document.getElementById('row-custom-distance');

  // Time (h / m / s)
  var timeHours        = document.getElementById('time-hours');
  var timeMinutes      = document.getElementById('time-minutes');
  var timeSeconds      = document.getElementById('time-seconds');

  // Pace (m / s)
  var paceMins         = document.getElementById('pace-mins');
  var paceSecs         = document.getElementById('pace-secs');
  var paceUnitLabel    = document.getElementById('pace-unit-label');

  // Result display elements
  var resultHeroNumber = document.getElementById('result-hero-number');
  var resultHeroLabel  = document.getElementById('result-hero-label');
  var resultPacePerMile= document.getElementById('result-pace-per-mile');
  var resultPacePerKm  = document.getElementById('result-pace-per-km');
  var resultSpeed      = document.getElementById('result-speed');
  var splitsBody       = document.getElementById('splits-tbody');
  var raceEquivBody    = document.getElementById('race-equiv-tbody');

  // ── State ───────────────────────────────────────────────────────────────────
  var currentMode = 'time';  // 'time' | 'pace' | 'distance'

  // ── Mode button wiring ───────────────────────────────────────────────────────
  if (modeButtons) {
    modeButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        modeButtons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        currentMode = btn.dataset.mode;
        updateFormLayout();
        if (resultsSection) resultsSection.classList.add('hidden');
      });
    });
  }

  function updateFormLayout() {
    var descriptions = {
      'time':     'Enter your distance and pace to calculate your finish time.',
      'pace':     'Enter your distance and goal finish time to calculate the pace you need.',
      'distance': 'Enter your pace and how long you ran to calculate the distance covered.'
    };
    if (modeDesc) modeDesc.textContent = descriptions[currentMode];

    // Show/hide rows based on mode
    if (currentMode === 'time') {
      if (rowDistance) rowDistance.classList.remove('hidden');
      if (rowTime) rowTime.classList.add('hidden');
      if (rowPace) rowPace.classList.remove('hidden');
    } else if (currentMode === 'pace') {
      if (rowDistance) rowDistance.classList.remove('hidden');
      if (rowTime) rowTime.classList.remove('hidden');
      if (rowPace) rowPace.classList.add('hidden');
    } else {
      if (rowDistance) rowDistance.classList.add('hidden');
      if (rowTime) rowTime.classList.remove('hidden');
      if (rowPace) rowPace.classList.remove('hidden');
    }
  }

  // ── Distance preset ──────────────────────────────────────────────────────────
  if (distancePreset) {
    distancePreset.addEventListener('change', function () {
      if (distancePreset.value === 'custom') {
        if (rowCustomDist) rowCustomDist.classList.remove('hidden');
      } else {
        if (rowCustomDist) rowCustomDist.classList.add('hidden');
      }
    });
  }

  // ── Unit toggle — update pace label ─────────────────────────────────────────
  if (unitSelect) unitSelect.addEventListener('change', updatePaceLabel);

  function updatePaceLabel() {
    if (!unitSelect || !paceUnitLabel) return;
    paceUnitLabel.textContent = unitSelect.value === 'miles' ? 'min/mile' : 'min/km';
  }

  // ── Calculate ────────────────────────────────────────────────────────────────
  if (calculateBtn) calculateBtn.addEventListener('click', runCalculation);

  function runCalculation() {
    if (!unitSelect) return;
    var unit = unitSelect.value; // 'miles' | 'km'

    // ── Parse distance ────────────────────────────────────────────────────────
    var distanceMiles = 0;

    if (currentMode !== 'distance') {
      var preset = distancePreset ? distancePreset.value : '5k';
      var presetDistances = {
        '5k':           3.10686,
        '10k':          6.21371,
        '15k':          9.32057,
        'half':         13.10940,
        'marathon':     26.21875,
        '1mile':        1.0,
        '1km':          0.62137
      };

      if (preset === 'custom') {
        var rawDist = distanceCustom ? parseFloat(distanceCustom.value) : NaN;
        if (isNaN(rawDist) || rawDist <= 0) {
          return showError('Enter a valid custom distance.');
        }
        distanceMiles = unit === 'miles' ? rawDist : rawDist * 0.62137;
      } else {
        distanceMiles = presetDistances[preset];
      }
    }

    // ── Parse time ────────────────────────────────────────────────────────────
    var totalTimeSec = 0;

    if (currentMode === 'pace' || currentMode === 'distance') {
      var h  = parseInt(timeHours ? timeHours.value : '0')   || 0;
      var m  = parseInt(timeMinutes ? timeMinutes.value : '0') || 0;
      var s  = parseInt(timeSeconds ? timeSeconds.value : '0') || 0;
      totalTimeSec = h * 3600 + m * 60 + s;

      if (totalTimeSec <= 0) {
        return showError('Enter a valid time (hours, minutes, or seconds).');
      }
      if (m >= 60 || s >= 60) {
        return showError('Minutes and seconds must be less than 60.');
      }
    }

    // ── Parse pace ────────────────────────────────────────────────────────────
    var paceTotalSec = 0;

    if (currentMode === 'time' || currentMode === 'distance') {
      var pm = parseInt(paceMins ? paceMins.value : '0') || 0;
      var ps = parseInt(paceSecs ? paceSecs.value : '0') || 0;
      paceTotalSec = pm * 60 + ps;

      if (paceTotalSec <= 0) {
        return showError('Enter a valid pace (minutes per ' + (unit === 'miles' ? 'mile' : 'km') + ').');
      }
      if (ps >= 60) {
        return showError('Pace seconds must be less than 60.');
      }
      if (paceTotalSec < 120 || paceTotalSec > 1800) {
        return showError('Pace seems unrealistic. Enter a value between 2:00 and 30:00 per ' + (unit === 'miles' ? 'mile' : 'km') + '.');
      }
    }

    // ── Core calculations ─────────────────────────────────────────────────────
    var finishTimeSec   = 0;
    var pacePerMileSec  = 0;
    var pacePerKmSec    = 0;
    var totalDistanceMiles = 0;

    if (currentMode === 'time') {
      if (unit === 'miles') {
        pacePerMileSec = paceTotalSec;
        pacePerKmSec   = paceTotalSec / 1.60934;
      } else {
        pacePerKmSec   = paceTotalSec;
        pacePerMileSec = paceTotalSec * 1.60934;
      }
      finishTimeSec       = pacePerMileSec * distanceMiles;
      totalDistanceMiles  = distanceMiles;

    } else if (currentMode === 'pace') {
      finishTimeSec       = totalTimeSec;
      totalDistanceMiles  = distanceMiles;
      pacePerMileSec      = totalTimeSec / distanceMiles;
      pacePerKmSec        = pacePerMileSec / 1.60934;

    } else {
      finishTimeSec = totalTimeSec;
      if (unit === 'miles') {
        pacePerMileSec = paceTotalSec;
        pacePerKmSec   = paceTotalSec / 1.60934;
      } else {
        pacePerKmSec   = paceTotalSec;
        pacePerMileSec = paceTotalSec * 1.60934;
      }
      totalDistanceMiles  = finishTimeSec / pacePerMileSec;
      distanceMiles       = totalDistanceMiles;
    }

    var totalDistanceKm   = totalDistanceMiles * 1.60934;
    var speedMph          = 3600 / pacePerMileSec;
    var speedKph          = 3600 / pacePerKmSec;

    // ── Display results ───────────────────────────────────────────────────────
    clearError();

    if (currentMode === 'time') {
      if (resultHeroNumber) resultHeroNumber.textContent = formatTime(finishTimeSec);
      if (resultHeroLabel) resultHeroLabel.textContent  = 'Finish Time';
    } else if (currentMode === 'pace') {
      if (resultHeroNumber) resultHeroNumber.textContent = unit === 'miles'
        ? formatPace(pacePerMileSec)
        : formatPace(pacePerKmSec);
      if (resultHeroLabel) resultHeroLabel.textContent  = unit === 'miles' ? 'per Mile' : 'per Kilometer';
    } else {
      if (resultHeroNumber) resultHeroNumber.textContent = unit === 'miles'
        ? totalDistanceMiles.toFixed(2) + ' mi'
        : totalDistanceKm.toFixed(2) + ' km';
      if (resultHeroLabel) resultHeroLabel.textContent  = 'Distance Covered';
    }

    if (resultPacePerMile) resultPacePerMile.textContent = formatPace(pacePerMileSec) + ' / mile';
    if (resultPacePerKm) resultPacePerKm.textContent   = formatPace(pacePerKmSec)   + ' / km';
    if (resultSpeed) resultSpeed.textContent       = speedMph.toFixed(1) + ' mph  ·  ' + speedKph.toFixed(1) + ' km/h';

    // ── Splits table ──────────────────────────────────────────────────────────
    buildSplitsTable(totalDistanceMiles, pacePerMileSec, pacePerKmSec, unit);

    // ── Race equivalents table ────────────────────────────────────────────────
    buildRaceEquivTable(pacePerMileSec);

    if (resultsSection) resultsSection.classList.remove('hidden');

    if (typeof factoryReveal === 'function') {
      factoryReveal();
    }

    if (typeof celebratePulse === 'function') celebratePulse();

    // Track data for return-visit banner
    try {
      var data = { unit: unit };
      if (currentMode !== 'distance' && distancePreset) data.distance = distancePreset.value;
      localStorage.setItem('lastCalcVisit', JSON.stringify({
        page: '/running-pace-calculator',
        data: data,
        timestamp: Date.now()
      }));
    } catch(e) {}
  }

  // ── Splits table builder ──────────────────────────────────────────────────
  function buildSplitsTable(totalMiles, pacePerMileSec, pacePerKmSec, unit) {
    if (!splitsBody) return;
    splitsBody.innerHTML = '';

    var useKm = unit === 'km';
    var totalUnits = useKm ? totalMiles * 1.60934 : totalMiles;
    var pacePerUnit = useKm ? pacePerKmSec : pacePerMileSec;

    var maxSplits = Math.min(Math.ceil(totalUnits), 50);
    if (maxSplits < 1) maxSplits = 1;

    for (var i = 1; i <= maxSplits; i++) {
      var elapsed = i * pacePerUnit;
      var isLast  = i === Math.ceil(totalUnits);

      if (isLast && totalUnits % 1 !== 0) {
        var fraction = totalUnits % 1;
        elapsed = (i - 1) * pacePerUnit + fraction * pacePerUnit;
      }

      var tr = document.createElement('tr');
      tr.innerHTML =
        '<td style="padding:7px 10px; border-bottom:1px solid #f0f0f0;">' +
          (useKm ? 'KM ' : 'Mile ') + i +
        '</td>' +
        '<td style="padding:7px 10px; border-bottom:1px solid #f0f0f0; font-weight:600;">' +
          formatTime(elapsed) +
        '</td>' +
        '<td style="padding:7px 10px; border-bottom:1px solid #f0f0f0; color:#6b7280;">' +
          formatPace(pacePerUnit) +
        '</td>';
      splitsBody.appendChild(tr);
    }
  }

  // ── Race equivalents builder ───────────────────────────────────────────────
  var RACES = [
    { name: '1 Mile',       miles: 1.0 },
    { name: '5K',           miles: 3.10686 },
    { name: '10K',          miles: 6.21371 },
    { name: '15K',          miles: 9.32057 },
    { name: 'Half Marathon',miles: 13.10940 },
    { name: 'Marathon',     miles: 26.21875 }
  ];

  function buildRaceEquivTable(pacePerMileSec) {
    if (!raceEquivBody) return;
    raceEquivBody.innerHTML = '';
    RACES.forEach(function (race) {
      var totalSec = race.miles * pacePerMileSec;
      var tr = document.createElement('tr');
      tr.innerHTML =
        '<td style="padding:7px 10px; border-bottom:1px solid #f0f0f0;">' + race.name + '</td>' +
        '<td style="padding:7px 10px; border-bottom:1px solid #f0f0f0; font-weight:600;">' +
          formatTime(totalSec) +
        '</td>';
      raceEquivBody.appendChild(tr);
    });
  }

  // ── Helpers ────────────────────────────────────────────────────────────────
  function formatTime(totalSec) {
    totalSec = Math.round(totalSec);
    var h = Math.floor(totalSec / 3600);
    var m = Math.floor((totalSec % 3600) / 60);
    var s = totalSec % 60;
    if (h > 0) {
      return h + ':' + pad(m) + ':' + pad(s);
    }
    return m + ':' + pad(s);
  }

  function formatPace(secPerUnit) {
    var m = Math.floor(secPerUnit / 60);
    var s = Math.round(secPerUnit % 60);
    if (s === 60) { m++; s = 0; }
    return m + ':' + pad(s);
  }

  function pad(n) {
    return n < 10 ? '0' + n : '' + n;
  }

  function showError(msg) {
    var err = document.getElementById('calc-error');
    if (!err && calculateBtn) {
      err = document.createElement('p');
      err.id = 'calc-error';
      err.style.cssText = 'color:#dc2626; font-size:0.9rem; margin-top:8px;';
      calculateBtn.parentNode.insertBefore(err, calculateBtn.nextSibling);
    }
    if (err) err.textContent = msg;
    if (resultsSection) resultsSection.classList.add('hidden');
  }

  function clearError() {
    var err = document.getElementById('calc-error');
    if (err) err.textContent = '';
  }

  // ── Init ───────────────────────────────────────────────────────────────────
  updatePaceLabel();
  updateFormLayout();

  // Toggle info panel
  var toggleBtn = document.getElementById('toggle-info-btn');
  var infoPanel = document.getElementById('info-panel');
  if (toggleBtn && infoPanel) {
    toggleBtn.addEventListener('click', function() {
      infoPanel.classList.toggle('hidden');
      var icon = toggleBtn.querySelector('.toggle-icon');
      if (icon) icon.style.transform = infoPanel.classList.contains('hidden') ? '' : 'rotate(180deg)';
    });
  }
})();
