var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var balls, ball1, ball2, ball3, ball4;

var  ball1_img, ball2_img, ball3_img, ball4_img;

function preload(){
  ball1_img = loadImage("../images/ball.jpg");
  ball2_img = loadImage("../images/ball.jpg");
  ball3_img = loadImage("../images/ball2.jpg");
  ball4_img = loadImage("../images/ball2.jpg");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
}
