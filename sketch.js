
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var roof1
var bob1
var string1

function preload(){
 
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof1=new roof(400,250, 600, 50)
	bob1=new bob(400,500,100)
    string1=new string(bob1.body,{x: 400, y: 250})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  

  roof1.display()
  bob1.display()
  string1.display()
  drawSprites();
 
}

function keyPressed(){
if(keyCode===LEFT_ARROW){
	Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-250, y:-250})
}
}




