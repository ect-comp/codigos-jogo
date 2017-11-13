var tela = 1; 
var tempo = 0; 


function setup() {
  createCanvas(400,400);
  frameRate(30); 
}

function draw() {
  if ( tela == 1) {
    background(0);
    textSize(32); 
    fill(135,206,235);
    text("Tela 1", 50, 160);
    if (keyIsDown(ENTER) ) {
       tela = 2;  
    } 
  }
  if ( tela == 2) {
    tempo++; 
    background(0);
    textSize(32); 
    fill(135,206,235);
    text("Tela 2", 50, 160);
    text("Segundos: "+(Math.floor(tempo/30)), 50, 260);
    if (tempo == 121 ) {
        tela = 3; 
    }
  }
  if ( tela == 3) {
    background(0);
    textSize(32); 
    fill(135,206,235);
    text("Tela 3 - FIM", 50, 160);
    if (keyIsDown(32) ) {
       tela = 1;
       tempo = 0; 
    } 
  }
}
