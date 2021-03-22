const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var universe, galaxy;

var boxy;
var ground, ground1;
var bouncy;
var bgi;

function preload(){
bgi = loadImage("sprites/bg.png")

}

function setup() {
  createCanvas(1200,600);
  universe = Matter.Engine.create();
  galaxy = universe.world;

  
//ground
  ground = new Ground(600,height-10,width,40);
  ground.color = "brown";
  ground2 = new Ground(200,395,400,350);
  ground2.color = "brown";

  
//tier one
  boxy = new Box(700,545,70,70);
  boxy2 = new Box(900,545,70,70);
  pig1 = new Pig(800,545);
  log = new Log(800,500,300,PI/2);
//tier two
  boxy3 = new Box(700,455,70,70);
  boxy4 = new Box(900,455,70,70);
  pig2 = new Pig(800,455);
  log2 = new Log(800,410,300,PI/2);

//tier 3
  boxy5 = new Box(800,365,70,70);
  log3 = new Log(740,310,130,PI/4);
  log4 = new Log(860,310,130,-PI/4);

//bird
  bird = new AngryBird(100,370);
}

function draw() {

  background(bgi);

//ground 
  ground.display();
  ground2.display();

//tier 1
  boxy.display();
  boxy2.display();
  pig1.display();
  log.display();

//tier 2
  boxy3.display();
  boxy4.display();
  pig2.display();
  log2.display();

//tier 3
  boxy5.display();
  log3.display();
  log4.display();

//angry bird
  bird.display();



  
  Matter.Engine.update(universe);
  
}