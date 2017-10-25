var x, y;
var raio = 70; 
var corBranco = true; 
var trocouCor = false; 

var dx; 

var dy; 

var tamBloco = 40;
var t; 

function setup() {
 createCanvas(400,400);
 x = 100; 
 y = 100;
 
 dx = Math.random(-10,10);
 dy = Math.random(-10,10); 
 t = 0; 
 frameRate(30); 
}


function pacMan(posPacX, posPacY) {
  stroke(250,250,5); 
  strokeWeight(3); 
  fill(230,230,0);
  arc(posPacX+2, posPacY+2, tamBloco -6, tamBloco-6, PI/6,TWO_PI - PI/6, PIE);
  strokeWeight(1); 
  fill(0,0,0);
  ellipse(posPacX,posPacY-(tamBloco)/5,tamBloco/6, tamBloco/6);    
}


function draw() {
 background(0); 
 

 
 x=x+dx;
 y=y+dy; 
 
 t++; 
 if ( t > 60 ) {
   dx = random(-5,5);
   dy = random(-5,5); 
   t = 0;   
 }
 if ( x > 400) {
   x = 0;   
 }
 if ( y > 400) {
   y = 0;   
 }
 if ( x < 0 ) {
   x = 400;   
 }
 if ( y < 0 ) {
    y = 400;  
 }
 
 if ( dist(x,y,width/2,height/2) < raio+tamBloco/2 ) {
      
     if ( trocouCor == false) { 
       corBranco = ! corBranco;
       trocouCor = true; 
     }
 
 }
 else {
    trocouCor = false;  
   
 }
 
 
 if ( corBranco ) {
   fill(255);
 }
 else {
   fill(255,0,0);
 }
 
 ellipse(width/2, height/2, 2*raio, 2*raio); 
 
  
 
 pacMan(x,y) 
  
}