# Explicando texto.js
##### Nesse código aprenderemos como funciona a função text.
##### Esse código contém duas funções: setup e draw.

```javascript
  var vidas = 3; 
  var pontos = 0;  
```

Primeiramente, criamos duas variáveis globais (*vidas, pontos*) que serão usadas como 
contadores decrescente e decrescente respectivamente.

```javascript
function setup() {
  createCanvas(400,400);

}
```

Na função *setup* apenas criámos a tela de desenho com os seus parâmetros.
A *createCanvas* cria uma tela para desenho. Se você não colocá-la no 
seu jogo por padrão o tamanho da tela será 100x100 pixels.

>createCanvas(**Largura**, **Altura**);

Informações sobre *createCanvas*: https://p5js.org/reference/#/p5/createCanvas

Explicando a função *draw* a cada linha de comando:

```javascript
  background(0);
```

Primeiro, criámos o plano de fundo(*background*).

Informações sobre *background*: https://p5js.org/reference/#/p5/background

Mais a frente, chamamos funções que vão influenciar a função *text*.

```javascript
  textSize(32);
  fill(135,206,235);
```

A *textSize* basicamente define o tamanho da fonte do texto.

>textSize(**Tamanho em pixels**);

Informações sobre *textSize*:  https://p5js.org/reference/#/p5/textSize

A *fill* como já sabemos define a cor do preenchimento do objeto/texto que será criado posteriormente.

>fill(**Valor de Vermelho**, **Valor de Verde**, **Valor de Azul**)

Informações sobre *fill*: https://p5js.org/reference/#/p5/fill

```javascript
  text("Vidas: "+vidas, 10, 60);
  text("Pontos: "+pontos, 10, 90);
```

Finalmente, na função *text* é criada então um texto e mostrado na tela. Tem como parâmetros:

>text(**Texto para escrever**, **Coordenada X**, **Coordenada Y**);

O parâmetro **Texto para escrever** funciona basicamente como um parâmetro do alert. 

Informações sobre *text*: https://p5js.org/reference/#/p5/text







