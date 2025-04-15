// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    
    // Toggle dark mode class
    body.classList.toggle('dark-mode');
    
    // Update button icon
    const themeToggle = document.getElementById('themeToggle');
    if (body.classList.contains('dark-mode')) {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem('darkMode', 'enabled');
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem('darkMode', 'disabled');
    }
  }
  
  // Function to check and set initial theme based on localStorage
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
  
  // Create theme toggle button when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Create toggle button
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.id = 'themeToggle';
    themeToggle.setAttribute('aria-label', 'Toggle Dark Mode');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    
    // Append to body
    document.body.appendChild(themeToggle);
    
    // Add event listener
    themeToggle.addEventListener('click', toggleDarkMode);
    
    // Check initial dark mode setting
    checkDarkMode();
    
    // Check if user has system dark mode preference
    if (!localStorage.getItem('darkMode')) {
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
      if (prefersDarkScheme.matches) {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('darkMode', 'enabled');
      }
    }
  });