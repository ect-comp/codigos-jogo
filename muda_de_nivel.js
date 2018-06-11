function setup() {
  createCanvas(400,400);
  frameRate(30); 
}

function draw() {
  background(0); 
  textSize(32);
  fill(135,206,235);
  text("Nível: "+nivel, 10, 60);
  text("Pontos: "+pontos, 10, 90);
   
  // incremento de pontos 
  pontos = pontos + 10; 

  if (pontos>barreiraDePontos) {
    nivel=nivel+1;
    barreiraDePontos = barreiraDePontos + 1000; 


  }

  
}
