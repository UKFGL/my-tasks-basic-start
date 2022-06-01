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
let tasks = JSON.parse(localStorage.getItem("savedTasks")) ?? [];
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
  let tasksStr = "";

  for (let i = 0; i < tasks.length; i++) {
    tasksStr += "<li>" + tasks[i] + "</li>"
  }

  tasksEl.innerHTML = tasksStr;
}

function addTask() {
  // Prompt user for a new task
  let newTask = prompt("What's your next task?");

  // Add task to tasks array
  tasks.push(newTask);
  saveTasks();

  // Display all tasks to show changes
  displayTasks();

}

function removeTask() {
  // Prompt user for task to remove
  let choosenTask = prompt("Enter number of task you wish to remove");

  // Remove task from task array (if it exists)
  tasks.splice(choosenTask - 1, 1);
  saveTasks();

  // Display all tasks to show changes
  displayTasks();
}

function clearAll() {
  // Clear all tasks
  let confirmation = prompt("Are you sure you want to clear your list? Enter 'yes' & press ok to clear list.");

  if (confirmation === "yes") {
    tasks = [];
  } 

  displayTasks();
}

function saveTasks() {
  // Save tasks to localStorage
  localStorage.setItem("savedTasks", JSON.stringify(tasks));
}