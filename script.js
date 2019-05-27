const tasks = [
  "buy milk",
  "eat dinner",
  "nail javascript",
  "give feedback",
  "find nemo"
];
var totalTasksCompleted = 0;
var totalPendingTasks = tasks.length - totalTasksCompleted;

// To strike-through completed tasks
let completedTask = document.querySelector("ul");
completedTask.addEventListener("click", function(event, tasks) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
  totalComplete();
  writeToElement();
});

//To add a new task to the To-Do list
let userInputData = document.querySelector("form input");
let clickInputButton = document.querySelector("form button");
clickInputButton.addEventListener("click", function() {
  if (userInputData.value === "") {
    return;
  }
  tasks.push(userInputData.value);
  addNewTask(tasks);
  userInputData.value = "";
  totalComplete();
  writeToElement();
});

//Press enter to create task
userInputData.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    clickInputButton.click();
  }
});

//Function updates list with pre-defined tasks when webpage is refreshed
function updateTaskList(tasks) {
  for (let i = 0; i < tasks.length; i++) {
    let node = document.createElement("li");
    let textnode = document.createTextNode(tasks[i]);
    node.appendChild(textnode);
    document.getElementById("todo-list").appendChild(node);
  }
}

//Update count of total number of tasks completed and pending
function totalComplete() {
  let completeTasks = document.querySelectorAll("li.done");
  console.log(completeTasks);
  totalTasksCompleted = completeTasks.length;
}

function writeToElement() {
  document.getElementById("completed").innerHTML =
    "Total completed: " + totalTasksCompleted;
  totalPendingTasks = tasks.length - totalTasksCompleted;
  document.getElementById("pending").innerHTML =
    "Total pending: " + totalPendingTasks;
}

//Function adds new task to To-Do list
function addNewTask(tasks) {
  let node = document.createElement("li");
  let textnode = document.createTextNode(tasks[tasks.length - 1]);
  node.appendChild(textnode);
  document.getElementById("todo-list").appendChild(node);
}

totalComplete();
writeToElement();
updateTaskList(tasks);
