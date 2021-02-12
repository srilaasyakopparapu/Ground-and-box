const Engine = Matter.Engine
const World = Matter.World 
const Bodies = Matter.Bodies 
var engine, world 
var object1
var ball
var box1
var box2, ground1


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new box(400, 200, 20, 30)
  box2 = new box(300, 100, 30, 30)
  ground1 = new ground(400, 380, 800, 20)
}

function draw() {
  background("blue"); 
  Engine.update(engine)
  box1.display()
  box2.display()
  ground1.display()
  drawSprites();
}