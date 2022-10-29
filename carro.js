//Codigos dos carros

//Variaveis do Carro 1
let xCarro1 = 600;
let yCarro1 = 40;
let velocidadeCarro1 = 3.5;

//Variaveis do Carro 2
let xCarro2 = 600;
let yCarro2 = 96;
let velocidadeCarro2 = 5;

//Variaveis do Carro 3
let xCarro3 = 600;
let yCarro3 = 146;
let velocidadeCarro3 = 6;

function mostraCarro() {
  image(imagemCarro, xCarro1, yCarro1, 40, 30);
  image(imagemCarro2, xCarro2, yCarro2, 40, 30);
  image(imagemCarro3, xCarro3, yCarro3, 40, 30);
}

function movimentaCarro() {
  xCarro1 -= velocidadeCarro1;
  xCarro2 -= velocidadeCarro2;
  xCarro3 -= velocidadeCarro3;
}

