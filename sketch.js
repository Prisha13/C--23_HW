var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
var bottomBox, rightBox, leftBox;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	package = createSprite(width/2, 80, 10, 10);
	package.addImage(packageIMG)
	package.scale = 0.2

	helicopter = createSprite(width/2, 200, 10, 10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale = 0.6

	ground = createSprite(width/2, height-35, width, 10);
	ground.shapeColor = color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2, 200, 5, {restitution: 0.6, isStatic: true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10, {isStatic: true});
	World.add(world, ground);

	var pos = width/2 - 100;
	var yPosition = 610;

	//Create a box
	bottomBox = createSprite(pos +100, yPosition + 40, 200, 20);
	bottomBox.shapeColor = "red";

	boxBottomBody = Bodies.rectangle(pos +100, yPosition + 45- 20, 200, 20, {isStatic: true});
	World.add(world, boxBottomBody);

	rightBox = createSprite(300, 610 , 15, 100);
	rightBox.shapeColor = "red";

	rightBody = Bodies.rectangle(300, 610, 20, 100, {isStatic: true});
	World.add(world, rightBody);

	leftBox = createSprite(500, 610, 15, 100);
	leftBox.shapeColor = "red";

	leftBody = Bodies.rectangle(500, 610, 20, 100, {isStatic: true});
	World.add(world, leftBody);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

  package.x = packageBody.position.x 
  package.y = packageBody.position.y 

  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
     Matter.Body.setStatic(packageBody, false);  
  }
}