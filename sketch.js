const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world,ground,btn;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  ground = new Ground(200,390,400,20);
  let ball_options = {
     restitution : 0.9
  }

  ball = Bodies.circle(200,200,30,ball_options);
  World.add(world,ball);

  btn = createImg("push.png");
  btn.position(50,300);
  btn.size(50,50);
  btn.mouseClicked(force);


  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show();


  ellipse(ball.position.x,ball.position.y,30);

}

function force(){
  Matter.body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.05});
}