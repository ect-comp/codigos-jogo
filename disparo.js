// identifica o estado do disparo: false, não está acontecendo um disparo
// e true quando está acontecendo  
var disparo = false; 
var xd, yd; // coordendas do disparo
var xj, yj; // coordendas do jogador
  

// os códigos de "setup" só executam uma vez 
function setup() {
  createCanvas(640, 480);
  xj = 50;
  xd = xj; 
  
  yj = 340; 
  yd = yj; 
}

// os códigos de "draw" executam constantemente 
function draw() { 
  // Tratamento das teclas 
  if (keyIsDown(CONTROL) && (! disparo) ){ 
    disparo = true; 
    xd = xj;
    yd = yj;     
  }
  // movimentação do disparo 
  // se o disparo estiver ativo 
  if (disparo) {
    // movimenta o disparo / tiro 
    xd = xd +5;
    // se o disparo sumir na tela 
    if (xd > width) {
      // habilida a ocorrência de um novo disparo 
      disparo = false; 
    }
  }
  
  // limpa o cenário 
  background(50); 
  
  // --------------- Desenha o cenário -----------------
  // desenha jogador 
  ellipse(xj, yj, 20, 50);
  // desenha disparo 
  // se o disparo estiver ativo 
  if (disparo) {
    // desenha a elipse / disparo 
    ellipse(xd,yd,8,8);
    
  }
}
