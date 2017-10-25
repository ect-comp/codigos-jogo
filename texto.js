var vidas = 3; 
var pontos = 0;  

function setup() {
  createCanvas(400,400);

}

function draw() {
  background(0); 
  textSize(32);
  fill(135,206,235);
  text("Vidas: "+vidas, 10, 60);
  text("Pontos: "+pontos, 10, 90);;
  
}