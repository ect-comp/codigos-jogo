var tamBloco = 40; 
var imgParede; 

var x , y; 

function preload() {
  //imgParede = loadImage("tijolo.png"); 
}

cenario = [ 
  ['#','#','#','#','#'], 
  ['#','v','#','v','#'],
  ['#','v','v','v','#'],
  ['#','v','v','v','#'],
  ['#','v','v','v','#'],
  ['#','#','#','#','#']

]; 


function pacMan(posPacX, posPacY) {
  stroke(250,250,5); 
  strokeWeight(3); 
  fill(230,230,0);
  arc(posPacX+2, posPacY+2, tamBloco -6, tamBloco-6, PI/6,TWO_PI - PI/6, PIE);
  strokeWeight(1); 
  fill(0,0,0);
  ellipse(posPacX,posPacY-(tamBloco)/5,tamBloco/6, tamBloco/6);    
}

function colisao(px, py) {
  posColuna = Math.floor( px / tamBloco ); 
  posLinha = Math.floor( py / tamBloco );
  if ( cenario[posLinha][posColuna] == '#' ) {
     return true;     
  }
  else {
     return false;  
  }
  
}

function setup() {
 createCanvas(400,400);
 x = 100; 
 y = 100; 
}

function draw() {
  background(0); 
  
  
  for ( i = 0; i < cenario.length; i++ ) { 
    for ( j = 0; j < cenario[0].length; j++ ) {  
      if ( cenario[i][j] == '#' ) {
        //image(imgParede,j*tamBloco,i*tamBloco); 
        fill(100,100,255);
        rect(j*tamBloco,i*tamBloco,tamBloco,tamBloco); 
      }
    }
  }
  
   if (keyIsDown(LEFT_ARROW)) {
     if ( ! colisao( x - 4 - tamBloco/2, y ) ) {
       x = x - 4;       
     }
   }
   if ( keyIsDown(RIGHT_ARROW)) { 
     if ( ! colisao( x + 4, y ) ) {
       x = x + 4;       
     } 
   }
   
   pacMan(x,y); 
   
}