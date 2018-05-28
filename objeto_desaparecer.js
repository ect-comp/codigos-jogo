var x = 0; 

function setup() {
  createCanvas(500,500); 
  frameRate(30); 
}

function draw() {
  background(50);  
  ellipse(x,200,20,20);
  x = x + 2; 
  if ( x > width ) {
    x = random(-500,-50); // gera um valor aleatório entre -500 e -50 (min e max)
    console.log(x+" "); 
  }
}
