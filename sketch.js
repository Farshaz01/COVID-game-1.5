var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var carImg1, carImg2, carImg3, carImg4, trackImg, GroundImg, welcomeImg;

var virus, virusImg, mask, maskImg, sanitizer, sanitizerImg;

function preload() {
  carImg1 = loadImage("images/car1.png");
  carImg2 = loadImage("images/car2.png");
  carImg3 = loadImage("images/car3.png");
  carImg4 = loadImage("images/car4.png");
  trackImg = loadImage("images/track.jpg");  
  GroundImg = loadImage("images/track.png");
  welcomeImg = loadImage("images/Welcome.jpg");
  virusImg = loadImage("images/corona.png");
  maskImg = loadImage("images/mask.png");
  sanitizerImg = loadImage("images/sanitizer.png");
}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight - 30);
  console.log(displayHeight)
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(welcomeImg)
  // if(gameState === 0) {
  //   game.start();
  // }
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }
}
