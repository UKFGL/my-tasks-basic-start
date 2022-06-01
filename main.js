// My Tasks Basic Start Code

// 1. FIRST COMPLETE BASIC FUNCTIONALITY
// Write code for the displayTasks, addTask, removeTask and clearAll functions

// 2. THEN IMPLEMENT PERSISTENT DATA
// Add localStorage to make the data persistent (I can help with this)

// HTML Elements
let goBtnEl = document.getElementById("go-btn");
let menuEl = document.getElementById("menu");
let tasksEl = document.getElementById("tasks");

// Global Variables
let tasks = [
  "Do the first thing",
  "Do the second thing",
  "oh yea, and the third thing",
];
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

function displayTasks() {
  // Diplay all tasks by putting them in the 'tasksEl' <div>
}

function addTask() {
  // Prompt user for a new task
  // Add task to tasks array
  // Display all tasks to show changes
}

function removeTask() {
  // Prompt user for task to remove
  // Remove task from task array (if it exists)
  // Display all tasks to show changes
}

function clearAll() {
  // Clear all tasks
}
