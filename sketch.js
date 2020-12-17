const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ball;
var box1;

function setup(){
  var canvas = createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;
 /*
  var ground_options = {
    isStatic : true
  }*/
/*
  var ball_options = {
    restitution : 1.0
  }*/

  //ground = Bodies.rectangle(200,100,50,50,ground_options);
  //World.add(world,ground);

  //ball = Bodies.circle(200, 100, 20, ball_options);
  //World.add(world, ball);

  box1 = new Box(200,300, 50, 50);
  box2 = new Box(240, 100, 50, 100);
  ground = new Ground(200, height,400, 20);
  
}

function draw(){
  background(0);

  Engine.update(engine);

  //rectMode(CENTER);
  //rect(ground.position.x, ground.position.y, 50, 50);

  //ellipseMode(RADIUS);
  //ellipse(ball.position.x, ball.position.y, 20, 20);

  box1.display();
  box2.display();
  ground.display();
}