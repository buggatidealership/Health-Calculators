// V25 Shared JS — used by all V25 dark mode calculator templates

// Intersection observer for fade-in animations
var v25Observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.15 });

document.addEventListener('DOMContentLoaded', function() {
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(function(el) {
        v25Observer.observe(el);
    });

    // FAQ accordion toggle
    document.querySelectorAll('.faq-question').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var item = this.closest('.faq-item');
            item.classList.toggle('faq-open');
            this.setAttribute('aria-expanded', item.classList.contains('faq-open'));
        });
    });

    // Ask Pulse
    var askBtn = document.getElementById('askBtn');
    if (askBtn) {
        askBtn.addEventListener('click', function() {
            var q = document.getElementById('askInput').value.trim();
            if (!q) return;
            document.querySelector('.ask-input-wrap').style.display = 'none';
            document.querySelector('.ask-pills').style.display = 'none';
            document.getElementById('askThanks').style.display = 'block';
        });
    }

    // Ask pills
    document.querySelectorAll('.ask-pill').forEach(function(pill) {
        pill.addEventListener('click', function() {
            document.getElementById('askInput').value = this.textContent;
        });
    });

    // Copy button
    var copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            if (!window._shareText) return;
            var btn = this;
            navigator.clipboard.writeText(window._shareText).then(function() {
                btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!';
                btn.classList.add('copied');
                setTimeout(function() {
                    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy';
                    btn.classList.remove('copied');
                }, 2000);
            }).catch(function() {});
        });
    }
});

// Helper to show share buttons with text
function v25Share(text, url) {
    window._shareText = text;
    var shareRow = document.getElementById('shareRow');
    if (shareRow) shareRow.style.display = 'flex';
    var wa = document.getElementById('shareWhatsApp');
    if (wa) wa.href = 'https://wa.me/?text=' + encodeURIComponent(text);
    var tw = document.getElementById('shareTwitter');
    if (tw) tw.href = 'https://x.com/intent/tweet?text=' + encodeURIComponent(text);
}

// Helper to show hidden sections, re-observe, and scroll to results
function v25Reveal() {
    document.querySelectorAll('.hidden-section').forEach(function(el) { el.classList.remove('hidden-section'); });
    setTimeout(function() {
        document.querySelectorAll('.fade-in').forEach(function(el) { v25Observer.observe(el); });
        var resultSection = document.getElementById('result-section');
        if (resultSection) resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}
