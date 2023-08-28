const addTaskBtn = document.querySelector("#add-task-btn");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
addTaskBtn.disabled = true;

const taskarray = [];

const addTask = () => {
  const task = taskInput.value;
  if (task === "") {
    alert("Please enter a task");
  } else {
    if (taskarray.includes(task)) {
      alert("Task already exists");
    } else {
      taskarray.push(task);
      taskInput.value = "";
      reloadTasks();
    }
  }
};

addTaskBtn.onclick = () => {
  addTaskBtn.disabled = true;
  addTask()
}

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTaskBtn.click();
  }
  event.target.value !== "" ? addTaskBtn.disabled = false : addTaskBtn.disabled = true;
});

taskInput.addEventListener("keyup", (event) => {
  event.target.value !== "" ? addTaskBtn.disabled = false : addTaskBtn.disabled = true;
});

function reloadTasks() {
  taskList.innerHTML = "";
  for (let i = 0; i < taskarray.length; i++) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    const span = document.createElement("span");
    span.innerHTML = `Task ${i + 1}: ${taskarray[i]}`;
    span.classList.add("mx-2");
    const delBtn = document.createElement("button");
    delBtn.classList.add("btn", "btn-danger", "btn-sm", "float-right");
    delBtn.innerHTML = "Delete";
    delBtn.onclick = () => {
      taskarray.splice(i, 1);
      reloadTasks();
    };
    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  }
}