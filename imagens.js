let imagemDaEstada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

function preload() {
  imagemDaEstada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");

}

function movimentaAtor1() {
  if (keyIsDown(UP_ARROW)) {
    yAtor1 -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yAtor1 += 3;
  }
}