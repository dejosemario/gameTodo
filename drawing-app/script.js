const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

//added an event listener to the canvas in other to get the property of the x and y axis when clicked.
c.addEventListener('click', (e)=>{
  // console.log(e);
  let x = e.offsetX;
  let y = e.offsetY;
  drawCircle(x,y);
})

//created the drawCircle function to be used in creating the path of the circle
function drawCircle(x,y){
  ctx.beginPath();
  ctx.arc(x, y, 40, 0, 2 * Math.PI);
  ctx.stroke();
}