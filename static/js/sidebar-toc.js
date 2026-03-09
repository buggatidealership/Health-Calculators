/**
 * Sidebar Table of Contents — auto-generated from page h2 headings.
 * Only activates on desktop when the sidebar is visible.
 */
(function () {
  'use strict';

  function init() {
    var container = document.getElementById('sidebar-toc');
    if (!container) return;

    // Only build if sidebar is visible (desktop)
    if (container.offsetParent === null) return;

    var headings = document.querySelectorAll('.page-content h2[id], .page-content section[id] > h2');
    if (headings.length < 2) return;

    var title = document.createElement('p');
    title.className = 'sidebar-toc-title';
    title.textContent = 'On this page';
    container.appendChild(title);

    var list = document.createElement('ul');
    list.className = 'sidebar-toc-list';

    headings.forEach(function (h) {
      var id = h.id || (h.parentElement && h.parentElement.id);
      if (!id) return;
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + id;
      a.textContent = h.textContent.replace(/^#\s*/, '');
      a.className = 'sidebar-toc-link';
      li.appendChild(a);
      list.appendChild(li);
    });

    container.appendChild(list);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
