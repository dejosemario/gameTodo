const form = document.querySelector('#form');
const input = document.querySelector('#input');
const todos = document.querySelector('#todos');

//addint an eventlistener to the form element
form.addEventListener('submit',(e)=> {
  //this helps so that the form won't submit on its own
  e.preventDefault();
  addToDo()
})

function addToDo(){
  //getting the exact valuse inside the input element
const todoText = input.value;

if(todoText){
  const todoE1 = document.createElement("li");
  todoE1.innerText = todoText;
  todos.appendChild(todoE1);
  input.value= '';
  updateLs();
  todoE1.addEventListener('click', (e)=>{
    todoE1.classList.toggle('completed');
    updateLs();
  })
  
  todoE1.addEventListener('contextmenu', (e)=>{
    todoE1.remove();
    updatels
  })
}
}
  
//creating a local storage
function updateLs(){
  const todosE1 = document.querySelectorAll('li');

  const todos = [];

  todosE1.forEach(noteE1 =>{
    todos.push({
      text: noteE1.innerText,
      completed: noteE1.classList.contains('completed'),
    })
  })  

  localStorage.setItem('todos', JSON.stringify(todos));
}