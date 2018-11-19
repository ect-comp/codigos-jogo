

var x = [], y = [];
var quantidade = 30; 

function setup() {
  createCanvas(400, 400);
  for (var i=0; i <quantidade; i++) { 
  	x[i] = random(0,400);
  	y[i] = -random(0,400); 
  }
  
}

function draw() {
  background(0);
  fill(200);
  for (var i=0; i<quantidade; i++) {
  	ellipse(x[i], y[i], 15, 15);
  	y[i]=y[i]+4; 
    if ( y[i] > 400 ){ 
      x[i] =  random(0,400);
      y[i] = -random(0,400);
    }
  }

  
}
