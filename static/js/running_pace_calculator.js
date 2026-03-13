document.addEventListener('DOMContentLoaded', function () {

  // ── DOM refs ────────────────────────────────────────────────────────────────
  var modeButtons      = document.querySelectorAll('.pace-mode-btn');
  var modeDesc         = document.getElementById('mode-description');
  var calculateBtn     = document.getElementById('calculate-btn');
  var resultsSection   = document.getElementById('results-section');

  // Shared inputs
  var unitSelect       = document.getElementById('unit-select');

  // Row visibility handles
  var rowDistance      = document.getElementById('row-distance');
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
  modeButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      modeButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      currentMode = btn.dataset.mode;
      updateFormLayout();
      resultsSection.classList.add('hidden');
    });
  });

  function updateFormLayout() {
    var descriptions = {
      'time':     'Enter your distance and pace to calculate your finish time.',
      'pace':     'Enter your distance and goal finish time to calculate the pace you need.',
      'distance': 'Enter your pace and how long you ran to calculate the distance covered.'
    };
    modeDesc.textContent = descriptions[currentMode];

    // Show/hide rows based on mode
    if (currentMode === 'time') {
      // Need: distance + pace → output time
      rowDistance.classList.remove('hidden');
      rowTime.classList.add('hidden');
      rowPace.classList.remove('hidden');
    } else if (currentMode === 'pace') {
      // Need: distance + time → output pace
      rowDistance.classList.remove('hidden');
      rowTime.classList.remove('hidden');
      rowPace.classList.add('hidden');
    } else {
      // Need: pace + time → output distance
      rowDistance.classList.add('hidden');
      rowTime.classList.remove('hidden');
      rowPace.classList.remove('hidden');
    }
  }

  // ── Distance preset ──────────────────────────────────────────────────────────
  distancePreset.addEventListener('change', function () {
    if (distancePreset.value === 'custom') {
      rowCustomDist.classList.remove('hidden');
    } else {
      rowCustomDist.classList.add('hidden');
    }
  });

  // ── Unit toggle — update pace label ─────────────────────────────────────────
  unitSelect.addEventListener('change', updatePaceLabel);

  function updatePaceLabel() {
    var label = unitSelect.value === 'miles' ? 'min/mile' : 'min/km';
    paceUnitLabel.textContent = label;
  }

  // ── Calculate ────────────────────────────────────────────────────────────────
  calculateBtn.addEventListener('click', runCalculation);

  function runCalculation() {
    var unit = unitSelect.value; // 'miles' | 'km'

    // ── Parse distance ────────────────────────────────────────────────────────
    var distanceMiles = 0;

    if (currentMode !== 'distance') {
      var preset = distancePreset.value;
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
        var rawDist = parseFloat(distanceCustom.value);
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
      var h  = parseInt(timeHours.value)   || 0;
      var m  = parseInt(timeMinutes.value) || 0;
      var s  = parseInt(timeSeconds.value) || 0;
      totalTimeSec = h * 3600 + m * 60 + s;

      if (totalTimeSec <= 0) {
        return showError('Enter a valid time (hours, minutes, or seconds).');
      }
      // Sanity: minutes & seconds must be < 60
      if (m >= 60 || s >= 60) {
        return showError('Minutes and seconds must be less than 60.');
      }
    }

    // ── Parse pace ────────────────────────────────────────────────────────────
    var paceTotalSec = 0; // seconds per mile (or per km, depending on unit)

    if (currentMode === 'time' || currentMode === 'distance') {
      var pm = parseInt(paceMins.value) || 0;
      var ps = parseInt(paceSecs.value) || 0;
      paceTotalSec = pm * 60 + ps;

      if (paceTotalSec <= 0) {
        return showError('Enter a valid pace (minutes per ' + (unit === 'miles' ? 'mile' : 'km') + ').');
      }
      if (ps >= 60) {
        return showError('Pace seconds must be less than 60.');
      }
      // Sanity: pace should be between 2:00 and 30:00 per mile/km
      if (paceTotalSec < 120 || paceTotalSec > 1800) {
        return showError('Pace seems unrealistic. Enter a value between 2:00 and 30:00 per ' + (unit === 'miles' ? 'mile' : 'km') + '.');
      }
    }

    // ── Core calculations ─────────────────────────────────────────────────────
    var finishTimeSec   = 0;  // total finish time in seconds
    var pacePerMileSec  = 0;  // seconds per mile
    var pacePerKmSec    = 0;  // seconds per km
    var totalDistanceMiles = 0;

    if (currentMode === 'time') {
      // distance + pace → time
      // If user entered pace in km, convert to per-mile first
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
      // distance + time → pace
      finishTimeSec       = totalTimeSec;
      totalDistanceMiles  = distanceMiles;
      pacePerMileSec      = totalTimeSec / distanceMiles;
      pacePerKmSec        = pacePerMileSec / 1.60934;

    } else {
      // pace + time → distance
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
      resultHeroNumber.textContent = formatTime(finishTimeSec);
      resultHeroLabel.textContent  = 'Finish Time';
    } else if (currentMode === 'pace') {
      resultHeroNumber.textContent = unit === 'miles'
        ? formatPace(pacePerMileSec)
        : formatPace(pacePerKmSec);
      resultHeroLabel.textContent  = unit === 'miles' ? 'per Mile' : 'per Kilometer';
    } else {
      resultHeroNumber.textContent = unit === 'miles'
        ? totalDistanceMiles.toFixed(2) + ' mi'
        : totalDistanceKm.toFixed(2) + ' km';
      resultHeroLabel.textContent  = 'Distance Covered';
    }

    resultPacePerMile.textContent = formatPace(pacePerMileSec) + ' / mile';
    resultPacePerKm.textContent   = formatPace(pacePerKmSec)   + ' / km';
    resultSpeed.textContent       = speedMph.toFixed(1) + ' mph  ·  ' + speedKph.toFixed(1) + ' km/h';

    // ── Splits table ──────────────────────────────────────────────────────────
    buildSplitsTable(totalDistanceMiles, pacePerMileSec, pacePerKmSec, unit);

    // ── Race equivalents table ────────────────────────────────────────────────
    buildRaceEquivTable(pacePerMileSec);

    resultsSection.classList.remove('hidden');

    if (typeof celebratePulse === 'function') celebratePulse();

    // Track data for return-visit banner
    try {
      var data = { unit: unit };
      if (currentMode !== 'distance') data.distance = distancePreset.value;
      localStorage.setItem('lastCalcVisit', JSON.stringify({
        page: '/running-pace-calculator',
        data: data,
        timestamp: Date.now()
      }));
    } catch(e) {}
  }

  // ── Splits table builder ──────────────────────────────────────────────────
  function buildSplitsTable(totalMiles, pacePerMileSec, pacePerKmSec, unit) {
    splitsBody.innerHTML = '';

    var useKm = unit === 'km';
    var totalUnits = useKm ? totalMiles * 1.60934 : totalMiles;
    var pacePerUnit = useKm ? pacePerKmSec : pacePerMileSec;

    // Up to 42 splits for marathon; cap at 50
    var maxSplits = Math.min(Math.ceil(totalUnits), 50);
    if (maxSplits < 1) maxSplits = 1;

    for (var i = 1; i <= maxSplits; i++) {
      var elapsed = i * pacePerUnit;
      var isLast  = i === Math.ceil(totalUnits);

      // Last split may be fractional
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
    if (!err) {
      err = document.createElement('p');
      err.id = 'calc-error';
      err.style.cssText = 'color:#dc2626; font-size:0.9rem; margin-top:8px;';
      calculateBtn.parentNode.insertBefore(err, calculateBtn.nextSibling);
    }
    err.textContent = msg;
    resultsSection.classList.add('hidden');
  }

  function clearError() {
    var err = document.getElementById('calc-error');
    if (err) err.textContent = '';
  }

  // ── Init ───────────────────────────────────────────────────────────────────
  updatePaceLabel();
  updateFormLayout();
});
