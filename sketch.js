
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbin1=new dustbin(1005,635,200,15)
	dustbin2=new dustbin(910,577,15,100)
	dustbin3=new dustbin(1100,577,15,100)
	paperObject=new paper(200,450,20);
	groundObject=new ground(width/2,670,width,20);
	//Create a Ground
	

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  paperObject.display();
  groundObject.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:45,y:-45});
    
  	}
}





