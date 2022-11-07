//Codigos dos carros
let yCarros = [40,96,150];
let velocidadeCarros = [3.5, 5, 6];


//Variaveis do Carro 1
let xCarro1 = 600;


//Variaveis do Carro 2
let xCarro2 = 600;


//Variaveis do Carro 3
let xCarro3 = 600;


function mostraCarro() {
  image(imagemCarro, xCarro1, yCarros[0], 40, 30);
  image(imagemCarro2, xCarro2, yCarros[1], 40, 30);
  image(imagemCarro3, xCarro3, yCarros[2],40, 30);
  
}

function movimentaCarro() {
  xCarro1 -= velocidadeCarros[0];
  xCarro2 -= velocidadeCarros[1];
  xCarro3 -= velocidadeCarros[2];
}

function voltaPosicaoInicial(){
    if (xCarro1< -50){
      xCarro1 = 600;
    }
   
    if (xCarro2< -50){
      xCarro2 = 600;
    }
    
    if (xCarro3< -50){
      xCarro3 = 600;
    }
  }
