// Hover
const navItems = document.querySelectorAll(".nav-link");

navItems.forEach((navItem) => {
  navItem.addEventListener("mouseover", function () {
    if (!this.classList.contains("active")) {
      this.classList.add("active");
    }
  });

  navItem.addEventListener("mouseout", function () {
    if (!this.classList.contains("current-page")) {
      this.classList.remove("active");
    }
  });
});

const currentPageLink = document.querySelector(".nav-link.active");
if (currentPageLink) {
  currentPageLink.classList.add("current-page");
}

// Change theme
const themeToggleBtn = document.getElementById("themeToggleBtn");
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");

themeToggleBtn.addEventListener("click", function () {
  document.body.classList.toggle('dark-theme'); // Toggle dark theme class

  sunIcon.classList.toggle('d-none');
  moonIcon.classList.toggle( 'd-none' );
  
  // Update local storage based on current class presence
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});