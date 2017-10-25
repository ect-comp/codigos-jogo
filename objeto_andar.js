var x, y; 

function setup() {
  createCanvas(400,400);
  x = 200; 
  y = 200; 
}

function draw() {
  background(0); 
  
  rect(x,y, 20, 20 );
  
  x = x + 1; 
  y = y + 2;
  
}