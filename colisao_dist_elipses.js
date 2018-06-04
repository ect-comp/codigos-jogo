var x, y;
var raio = 70; 
var corBranco = true; 
var colisao = false; 
var dx; 
var dy; 
var raioJ = 20;


function setup() {
 createCanvas(400,400);
 x = 100; 
 y = 100;
  
 xInimigo = 200; 
 yInimigo = 100; 
 
 dx = 8
 dy = 10 

 frameRate(30); 
}


function draw() {
 background(0); 
 
 x=x+dx;
 y=y+dy; 

 if ( x > 400) {
   dx = -dx;   
 }
 if ( y > 400) {
   dy = - dy;   //
 }
 if ( x < 0 ) {
   dx = -dx;   
 }
 if ( y < 0 ) {
    dy = -dy;  
 }
 
 if ( dist(x,y,xInimigo,yInimigo) < raio+raioJ ) {
     if ( colisao == false) { 
       corBranco = ! corBranco;      
       colisao = true; 
     }
 }
 else {
    colisao = false;  
 }
 
 if ( corBranco ) {
   fill(255);
 }
 else {
   fill(255,0,0);
 }
 
 ellipse(xInimigo, yInimigo, 2*raio, 2*raio); 
 
 fill(230,230,0);
 ellipse(x,y,2*raioJ,2*raioJ); 
  
}
