const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var world,engine
var ground,ball
function setup() {
  createCanvas(600,600);

  engine= Engine.create();
  world=  engine.world

  var groundoptions ={
    isStatic:true
  }
  var balloptions ={
    restitution:1.0
  }
  ground= Bodies.rectangle(300,570,600,20,groundoptions);
  World.add(world,ground);
  ball = Bodies.circle(200,250,20,balloptions);
  World.add(world,ball);
}

function draw() {
  background(10,10,10);
  Engine.update(engine)
  fill("red");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,20); 
  fill("blue"); 
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}