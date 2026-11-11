/* InKind WA — small helpers. The site works without this file;
   it only adds the phone menu, auto-hides past events and fills in the year. */
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
  // 1. Phone menu button
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // 2. Close the language menu when clicking elsewhere
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.lang-menu[open]').forEach(function (d) {
      if (!d.contains(e.target)) d.removeAttribute('open');
    });
  });

  // 3. Hide events after their date.
  //    Give any event data-ends="YYYY-MM-DD" and it disappears the day after.
  //    If a list has no events left, its .no-events message shows instead.
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  document.querySelectorAll('[data-ends]').forEach(function (el) {
    var parts = el.getAttribute('data-ends').split('-');
    var end = new Date(+parts[0], +parts[1] - 1, +parts[2]);
    if (end < today) el.remove();
  });
  document.querySelectorAll('.event-list').forEach(function (list) {
    if (!list.querySelector('.event')) {
      var msg = list.querySelector('.no-events');
      if (msg) msg.style.display = 'block';
    }
  });

  // 4. Current year in the footer
  document.querySelectorAll('.year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
