const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

let isNotClicked = true;

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
    let x = e.offsetX;
    let y = e.offsetY;
    drawCircle(x,y);
  }  
})

//created the drawCircle function to be used in creating the path of the circle
function drawCircle(x,y){
  ctx.beginPath();
  ctx.arc(x, y, 40, 0, 2 * Math.PI);
  ctx.fill();
}