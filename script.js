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
    if (nav.classList.contains('open')) {
      menuBtn.innerHTML = '&times;'; // Change to X
      menuBtn.style.transform = 'rotate(90deg)';
    } else {
      menuBtn.innerHTML = '&#9776;'; // Back to hamburger
      menuBtn.style.transform = 'rotate(0deg)';
    }
  });

  // Close menu if clicking outside (optional but helpful trick overall)
  document.addEventListener('click', function(e) {
     if(!nav.contains(e.target) && !menuBtn.contains(e.target)) {
         nav.classList.remove('open');
         menuBtn.innerHTML = '&#9776;';
         menuBtn.style.transform = 'rotate(0deg)';
     }
  });
}
