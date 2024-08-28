const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOptions = document.querySelector(".filter-todo");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOptions.addEventListener("change", filterTodo);

function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  if (todoInput.value === "") {
    alert("write something");
  }
  if (todoInput.value) {
    newTodo.innerText = todoInput.value;
    todoList.appendChild(todoDiv);
  }

  todoDiv.appendChild(newTodo);

  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class= "fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  const delelteButton = document.createElement("button");
  delelteButton.innerHTML = '<i class= "fas fa-trash"></i>';
  delelteButton.classList.add("trash-btn");
  todoDiv.appendChild(delelteButton);

  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
  if (item.classList[0] === "todo-item") {
    item.classList.toggle("list-expand");
    console.log("ad");
  }
}

function filterTodo(e) {
  const todos = Array.from(todoList.children);
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "pending":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
