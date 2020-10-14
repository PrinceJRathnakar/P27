const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ball1=new Ball(310,500)
  ball2=new Ball(410,500)
  ball3=new Ball(500,500)
  ball4=new Ball(220,500)
  ball5=new Ball(590,500)
  
  beam=new Beam(400,100,400,30)

  //creating constrained bodies

  cball1=new ConstraintBody({x:310,y:100},ball1.body)
  cball2=new ConstraintBody({x:410,y:100},ball2.body)
  cball3=new ConstraintBody({x:500,y:100},ball3.body)
  cball4=new ConstraintBody({x:220,y:100},ball4.body)
  cball5=new ConstraintBody({x:590,y:100},ball5.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  beam.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  cball1.display();
  cball2.display();
  cball3.display();
  cball4.display();
  cball5.display();
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}