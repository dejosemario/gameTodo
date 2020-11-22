//selecting the documents
const addNote = document.querySelector('#add');
addNote.addEventListener('click', ()=>{
  addNewNote();
})

//adding new note
function addNewNote(){
  const note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = `
    <div class="notes">
    <div class="tools">
      <button class="edit"><i class="fas fa-edit"></i></button>
      <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main hidden"></div>
    <textarea></textarea>    
    </div> 
  `
const notesE1 = note.querySelector('.notes')
const editBtn = note.querySelector('.edit');
const delBtn = note.querySelector('.delete');

const main = notesE1.querySelector('.main');
const textArea = notesE1.querySelector('textarea');

const addNote = document.querySelector('#add');

//toggling between main and textarea
editBtn.addEventListener('click', ()=>{
  main.classList.toggle('hidden');
  textArea.classList.toggle('hidden');
})

//deleting the todo note
delBtn.addEventListener('click',()=> {
  note.remove();
})

textArea.addEventListener('input', (e)=>{
  const {value} = e.target;
  main.innerHTML = marked(value);
})
editBtn.addEventListener('click', ()=>{
  main.classList.toggle('hidden');
  textArea.classList.toggle('hidden');
})

textArea.addEventListener('input', (e)=>{
  const {value} = e.target;
  main.innerHTML = marked(value);
})
  document.body.appendChild(note)
}


