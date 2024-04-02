const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterOption = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

// Event Listener
todoButton.addEventListener('click', addToDo);
document.addEventListener('DOMContentLoaded', getTodos);
todoList.addEventListener('click', deleteTodo);
filterOption.addEventListener('click', filterTodo);

// Saving Task to Local Storage
function saveLocalToDos (todo){
    let todos;

    if (localStorage.getItem('todos') === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}


// Adding new task
function addToDo (e){

    // Prevent form submission
    e.preventDefault();

    // Create a new todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // Create a new list item for the task
    const newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value;

    // Save the task to local storage
    saveLocalToDos(todoInput.value);

    // Add classes and append the new list item to the tododiv
    newToDo.classList.add('todo-item');
    todoDiv.appendChild(newToDo);
    todoInput.value="";

    // Create a button to mark the task as complete
    const completeButton = document.createElement('button');
    completeButton.innerHTML = `<i class="fas fa-check"></i>`;
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);

    // Create a button to delete a task
    const trashButton = document.createElement('button');
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    // Append the tododiv to todolist
    todoList.appendChild(todoDiv);

}

// Function will load  task from Local Storage when the page is loaded.
function getTodos() {
    // Function to filter tasks based on completion status
    function filterTodo(e) {
        const todos = todoList.childNodes;
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
                case "uncompleted":
                    if (!todo.classList.contains("completed")) {
                        todo.style.display = "flex";
                    } else {
                        todo.style.display = "none";
                    }
            }
        });
    }

    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach(function (todo) {
        // Create todo div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        // Create list item for the task
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
        todoInput.value = "";

        // Create complete button
        const completedButton = document.createElement("button");
        completedButton.innerHTML = `<i class="fas fa-check"></i>`;
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);

        // Create delete button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);

        // Append todo div to the todo list
        todoList.appendChild(todoDiv);
    });
}

// 
function deleteTodo(e) {
    const item = e.target;
  
    if (item.classList[0] === "trash-btn") {
      // If the delete button is clicked, remove the task from the list
      const todo = item.parentElement;
      todo.classList.add("fall");
      removeLocalTodos(todo);
      todo.addEventListener("transitionend", e => {
        todo.remove();
      });
    }
  
    if (item.classList[0] === "complete-btn") {
      // If the complete button is clicked, toggle the completed class
      const todo = item.parentElement;
      todo.classList.toggle("completed");
    }
  }


// Function to remove tasks from localStorage
function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
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
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
      }                                                             
    });
  }
