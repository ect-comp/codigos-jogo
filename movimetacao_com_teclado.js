var x = 15; 

function setup() {
  createCanvas(400, 400);
  frameRate(30); 
}

function draw() {
  background(200);
  
  ellipse(x,60,30,30); 
  if ( keyIsDown(RIGHT_ARROW) ) 
  {
  	x = x + 3;
  }
}
