// Info dropdown toggle
var infoBtn = document.getElementById('infoBtn');
var dropdownMenu = document.getElementById('dropdownMenu');

if (infoBtn && dropdownMenu) {
  infoBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    infoBtn.classList.toggle('open');
    dropdownMenu.classList.toggle('open');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function () {
    infoBtn.classList.remove('open');
    dropdownMenu.classList.remove('open');
  });
}

// Mobile hamburger menu
var menuBtn = document.getElementById('menuBtn');
var nav = document.querySelector('.nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', function () {
    nav.classList.toggle('open');
  });
}
