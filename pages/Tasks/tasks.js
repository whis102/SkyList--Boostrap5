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