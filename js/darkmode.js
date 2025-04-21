// Toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  
  body.classList.toggle('dark-mode');
  
  const themeToggle = document.getElementById('themeToggle');
  if (body.classList.contains('dark-mode')) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('darkMode', 'disabled');
  }
}

// Set initial theme dari localStorage
function checkDarkMode() {
  const darkModeStatus = localStorage.getItem('darkMode');
  const themeToggle = document.getElementById('themeToggle');
  
  if (darkModeStatus === 'enabled') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
}

// Buat tombol toggle saat DOM loaded
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.createElement('button');
  themeToggle.className = 'theme-toggle';
  themeToggle.id = 'themeToggle';
  themeToggle.setAttribute('aria-label', 'Toggle Dark Mode');
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  
  document.body.appendChild(themeToggle);
  
  themeToggle.addEventListener('click', toggleDarkMode);
  
  checkDarkMode();
  
  // Check preferensi sistem
  if (!localStorage.getItem('darkMode')) {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDarkScheme.matches) {
      document.body.classList.add('dark-mode');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem('darkMode', 'enabled');
    }
  }
});