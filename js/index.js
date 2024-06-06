function updateTime() {
  const now = new Date();
  const date = document.getElementById("current-date");
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const format = now.toLocaleDateString("en-US", options);

  date.innerText = `Today, ${format}`;
}

updateTime();

setInterval(updateTime, 1000);

// add Task
const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

function addTask() {
  if (inputBox.value === "") {
    alert("You should write down something");
  } else {
    let li = document.createElement("li");
    li.classList.add("list-group-item");

    let checkbox = document.createElement("input");
    checkbox.classList.add("form-check-input", "me-1");
    checkbox.type = "checkbox";
    checkbox.value = "";
    checkbox.setAttribute("aria-label", "...");

    let text = document.createTextNode(inputBox.value);
    li.appendChild(checkbox);
    li.appendChild(text);

    listContainer.appendChild(li);
  }
}

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

document.addEventListener("DOMContentLoaded", function () {
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeStylesheet = document.getElementById("themeStylesheet");
  const darkThemeStylesheet = document.getElementById("darkThemeStylesheet");

  // Check for saved user theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    darkThemeStylesheet.removeAttribute("disabled");
  } else {
    darkThemeStylesheet.setAttribute("disabled", "true");
  }

  themeToggleBtn.addEventListener("click", function () {
    if (darkThemeStylesheet.disabled) {
      darkThemeStylesheet.removeAttribute("disabled");
      localStorage.setItem("theme", "dark");
    } else {
      darkThemeStylesheet.setAttribute("disabled", "true");
      localStorage.setItem("theme", "light");
    }
  });
});
