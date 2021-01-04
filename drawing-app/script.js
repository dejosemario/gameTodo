const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

const add = document.getElementById('addittion');
const size = document.getElementById('numTally');
const reduce = document.getElementById('reduction');

let isNotClicked = true;
let sizeE1 = 30;

//creating a way to show when the mouse hasn't been clicked
c.addEventListener('mouseup', ()=>{
  isNotClicked = true;
})

//creating a way to show when the mouse has been clicked
c.addEventListener('mousedown', ()=>{
  isNotClicked = false;
})

//added an event listener to the canvas in other to get the property of the x and y axis when clicked.
c.addEventListener('mousemove', (e)=>{
  if(!isNotClicked){
    const x = e.offsetX;
    const y = e.offsetY;
    drawCircle(x,y);
  }  
})

//created the drawCircle function to be used in creating the path of the circle
function drawCircle(x,y){
  ctx.beginPath();
  ctx.arc(x, y, 40, 0, 2 * Math.PI);
  ctx.fill();
}



//added a listner to the increase the mouse cursor when clicked
add.addEventListener('click', ()=>{
  sizeChange()
  if(sizeE1 < 50){
    sizeE1  += 5
  }
})

//addedd an event listner to the reduce button to reduce the size of the mouse cursor for drawing when clicked.
reduce.addEventListener('click', ()=>{
  sizeChange()
  if(sizeE1 > 5){
    sizeE1  -= 5
  }
})

//creating a fun. to change the innerText of the size div.
function sizeChange(){
  size.innerText = sizeE1
}

sizeChange();

function drawCircle(x,y){
  ctx.beginPath();
  ctx.arc(x, y, sizeE1, 0, 2 * Math.PI);
  ctx.fill();
}

