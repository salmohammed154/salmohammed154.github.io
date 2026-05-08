  const toggleBtn = document.getElementById("themeToggle");
  const body = document.body;
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
  } else {
    body.classList.add("light-theme"); 
  }
  toggleBtn.onclick = function() {
    if (body.classList.contains("light-theme")) {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark-theme");
      toggleBtn.innerHTML = '<i class="fa-regular fa-sun"></i>';
    } else {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
      localStorage.setItem("theme", "light-theme");
      toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>'; 
    }
  };
