const formSubmit = document.getElementById("input-form");
const inputTask = document.querySelector(".input-task");
const newTask = document.querySelector(".task");

formSubmit.addEventListener("submit", allFunction);

function allFunction(e) {
  e.preventDefault();
  if (!inputTask.value) {
    alert("Please Insert A New Task !");
  }

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("content");
  newTask.appendChild(taskDiv);

  const newTaskInput = document.createElement("input");
  newTaskInput.type = "text";
  newTaskInput.value = inputTask.value;
  newTaskInput.setAttribute("readonly", "readonly");
  taskDiv.appendChild(newTaskInput);

  const inputAction = document.createElement("div");
  inputAction.classList.add("action");

  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("edit");
  inputAction.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("delete");
  inputAction.appendChild(deleteBtn);
  taskDiv.appendChild(inputAction);

  editBtn.addEventListener("click", () => {
    if (editBtn.innerHTML.toLowerCase() === "edit") {
      newTaskInput.removeAttribute("readonly");
      editBtn.innerHTML = "Save";
      newTaskInput.focus();
    } else {
      editBtn.innerHTML = "Edit";
      newTaskInput.setAttribute("readonly", "readonly");
    }
  });

  deleteBtn.addEventListener("click", () => {
    newTask.removeChild(taskDiv);
  });

  inputTask.value = "";
}
