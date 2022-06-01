// My Tasks Basic

// HTML Elements
let goBtnEl = document.getElementById("go-btn");
let menuEl = document.getElementById("menu");
let tasksEl = document.getElementById("tasks");

// Global Variables
// let tasks = initTasks();
let tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
displayTasks();

// Go Btn - Menu Listener
goBtnEl.addEventListener("click", goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === "add") {
    addTask();
  } else if (selection === "remove") {
    removeTask();
  } else if (selection === "clear") {
    clearAll();
  }
}

function initTasks() {
  let temp = localStorage.getItem("tasks");
  if (!temp) {
    return [];
  } else {
    return JSON.parse(temp);
  }
}

function addTask() {
  let newTask = prompt("Please enter a new task:");
  tasks.push(newTask);
  saveTasks();
  displayTasks();
}

function removeTask() {
  let taskNum = prompt("Please enter number of task to remove:");
  let index = taskNum - 1;
  tasks.splice(index, 1);
  saveTasks();
  displayTasks();
}

function displayTasks() {
  let outputStr = "<ol>";
  for (let i = 0; i < tasks.length; i++) {
    outputStr += `<li>${tasks[i]}</li>`;
  }
  outputStr += "</ol>";

  tasksEl.innerHTML = outputStr;
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function clearAll() {
  tasks = [];
  saveTasks();
  displayTasks();
}
