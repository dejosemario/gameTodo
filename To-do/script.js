const form = document.querySelector("#form");
const input = document.querySelector("#input");
const todosUl = document.querySelector("#todos");
// let todos = [];

//getting my item from local storage
let list;
let todoData = localStorage.getItem("todos");
list = JSON.parse(todoData);
list.forEach((item) => {
  addToDo(item);  
});
//addint an eventlistener to the form element
form.addEventListener("submit", (e) => {
  //this helps so that the form won't submit on its own
  e.preventDefault();
  addToDo();
});

function addToDo(todoList) {
  //getting the exact valuse inside the input element
  let todoText = input.value;
  if(todoList){
    todoText = todoList.text
  }

  if (todoText) {
    const todoE1 = document.createElement("li");
    //checks for completed list and adds.
    if(todoList && todoList.completed){
      todoE1.classList.add('completed');
    }
    todoE1.innerText = todoText;
    todosUl.appendChild(todoE1);
    input.value = "";
    updateLs();
    todoE1.addEventListener("click", (e) => {      
        todoE1.classList.toggle("completed");          
      updateLs();
    });

    todoE1.addEventListener("contextmenu", (e) => {
      todoE1.remove();
      updatels();
    });
  }
}

//creating a local storage
function updateLs() {
  const todosE1 = document.querySelectorAll("li");
  const todos = [];
  todosE1.forEach((todo) => {
    todos.push({
      text: todo.innerText,
      completed: todo.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
