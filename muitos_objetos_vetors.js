var vx = []; 
var vy = [];
var vdx = []
var vdy = []
var vtam = [];
var qt = 30; 
var vcorR = []; 
var vcorG = [];
var vcorB = [];
var tamArea; 

function setup() {
  frameRate(30);
  tamArea = 600; 
  createCanvas(tamArea,tamArea);
  for ( i = 0; i < qt; i++) { 
    vx[i] = random(0,tamArea); 
    vy[i] = random(0,tamArea);
    vtam[i] = random(5,15);
    vdx[i] = random(-6,6);
    vdy[i] = random(-6,6);
    vcorR[i] = random(0,255);
    vcorG[i] = random(0,255);
    vcorB[i] = random(0,255);
  }
  
}

function draw() {
  background(0); 
  
  for ( i = 0; i < qt; i++) {
    fill(vcorR[i], vcorG[i], vcorB[i]);
    vx[i] = vx[i] + vdx[i];
    vy[i] = vy[i] + vdy[i]; 
    if ( vx[i] > width || vx[i] < 0 ) {
       vdx[i] = -vdx[i]; 
       vcorR[i] = random(0,255);
       vcorG[i] = random(0,255);
       vcorB[i] = random(0,255);
    }
    if ( vy[i] > height || vy[i] < 0 ) {
       vdy[i] = -vdy[i]; 
      
    }
    
    ellipse(vx[i],vy[i],vtam[i],vtam[i]); 
  }
  
}
