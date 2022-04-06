//Projeto 23
//Data:05/04/2022
//Aluno:Matheus Henrique de Lisboa Ferreira
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var arrow;
var baseimage, playerimage, backgroundImg;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  var options = {
    isStatic: true
  };

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world,player)

  playerArcher = new PlayerArcher(340, playerBase.position.y - 112, 120, 120 );

  arrow = new PlayerArrow(playerArcher.body.position.x, playerArcher.body.position.y, 100, 30 );
}

function draw() {
  background(backgroundImg);
  
  Engine.update(engine);

  push();
  fill("brown");
  rectMode(CENTER);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  
  
  

  push();
  fill("brown");
  rectMode(CENTER);
  image(playerimage,player.position.x,player.position.y,50,180)
  pop();
  

  playerArcher.display();
  arrow.display();

  // apertar tecla espaço
  if (keyCode === 32) {
    //arrow.(playerArcher.body.angle);
    //arrow.shoot(playerArcher.angle);
    arrow.shoot(playerArcher.body.angle);
    //arrow.shoot(playerArcher);
    //arrow.shoot(0);
  }

  // Título
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
