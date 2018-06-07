// identifica o estado do pulo: false, não está acontecendo um pulo
// e true quando está acontecendo  
var pulo = false; 
var yp = 0; // coordendas do pulo
var xdo, ydo; // coordendas da origem do pulo
var contFrames = 0; 
var p1x = 280;
var py = 380;
var p2x = 380;
var raioMaior = 25; 
var linha1 = false; 
 

function colisaoAcimaDaLinha(x,y,x1,x2,yl){ 
   // verifica se está em uma altura mínima da reta 
  if (x > x1 && x < x2 && yl - y > 0 && yl - y < raioMaior) {
  	return true;     
  }
  else {
    return false;
  }
}

// os códigos de "setup" só executam uma vez 
function setup() {
	createCanvas(500, 480);
	xdo = 50;	
	ydo = 440; 
  	frameRate(30);
}
// os códigos de "draw" executam constantemente 
function draw() {
	// Tratamento das teclas 
	if (keyIsDown(RIGHT_ARROW) ){ 
		xdo = xdo + 5; 
		if ( xdo > width )
			xdo = 0; 
	}
		// Tratamento das teclas 
	if (keyIsDown(UP_ARROW) && (! pulo) ){ 
		pulo = true; 
		contFrames = 0; 
	}
	// movimentação do pulo 
	// se o pulo estiver ativo 
	if (pulo) {
		contFrames++; 
		// movimenta o pulo / tiro 
		yp = 0.5*(contFrames)*(contFrames - 30);
		// se o pulo sumir na tela 
		if (yp > 0) {
			// habilida a ocorrência de um novo pulo 
			pulo = false;
			yp = 0; 		
		}
	}
    // Checa se existe colisão acima da linha 
  if (colisaoAcimaDaLinha(xdo,ydo+yp,p1x,p2x,py) && ! linha1){
    	//pulo = false;
    	ydo = py - raioMaior+1; 
      	yp = 0; 
        linha1 = true; 
      	pulo = false;
  	}
  	if ( linha1 && (  xdo < p1x || xdo > p2x )) {
      linha1 = false; 
    }
    if ( ! linha1 ) {
      ydo = ydo + 6; 
      if (ydo > 440) {
        ydo = 440; 
      }
    }
	// limpa o cenário 
  	clear(); 
	background(50); 
	// --------------- Desenha o cenário -----------------
	// desenha jogador 
	ellipse(xdo, ydo+yp, 20, 2*raioMaior);
 	// desenha linha 
    strokeWeight(4); 
    stroke(255); 
    line(p1x,py,p2x,py); 
}
