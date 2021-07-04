
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
var options = {
	restitution :0.3,
	isStatic:false,
	friction:0,
	density:1.2
}

	//Create the Bodies Here.
var ball_options = {
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}

ball = Bodies.circle(260,100,20,options)
World.add(world,ball)

groundObj = new ground(width/2,670,width,20);
leftSide = new ground(1100,600,20,120,)
rightSide = new ground(1350,600,20,120);

groundObj2 = new ground2(width/2,670,width,20);
leftSide = new ground2(1100,600,20,120,)
rightSide = new ground2(1350,600,20,120);

groundObj3 = new ground3(width/2,670,width,20);
leftSide = new ground3(1100,600,20,120,)
rightSide = new ground3(1350,600,20,120);

groundObj4 = new ground4(width/2,670,width,20);
leftSide = new ground4(1100,600,20,120,)
rightSide = new ground4(1350,600,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)
  groundObj.display();
  leftSide.display();
  rightSide.display();

  groundObj2.display();
  leftSide.display();
  rightSide.display();

  groundObj3.display();
  leftSide.display();
  rightSide.display();

  groundObj4.display();
  leftSide.display();
  rightSide.display();

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:85});
	}
}
  drawSprites();
 
}



