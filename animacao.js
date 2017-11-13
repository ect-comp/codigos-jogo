var anima; 
var imgsAndando = [];
var contFrame = 0; 

function preload() {
  for (i = 0; i < 20; i++) {
    imgsAndando[i] = loadImage("imagens/Andando("+i+").png");
  }
}

function setup() {
  frameRate(30); 
  createCanvas(400,600); 
}

function draw() {
  background(0); 
  
  anima = imgsAndando[contFrame];
  image( anima, 0, 50);
  contFrame++;
  if ( contFrame > 19 ) {
     contFrame = 0;  
  }
}
