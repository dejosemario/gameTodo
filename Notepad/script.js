//selecting the documents
const addNote = document.querySelector('#add')
addNote.addEventListener('click', ()=>{
  console.log('ljk');
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
  document.add.appendChild('note')
}

//toggling between main and textarea
editBtn.addEventListener('click', ()=>{
  main.classList.toggle('hidden');
  textArea.classList.toggle('hidden');
})

textArea.addEventListener('input', (e)=>{
  const {value} = e.target;
  main.innerHTML = marked(value);
})

