
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy, boy_img;

function preload()
{
	boy_img=loadImage("Sprites/boy.png");
}

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;

	ground= new Ground();
	tree= new Tree(1000, 370, 400, 450); //x: 800-1200, y:145-595
	stone= new Stone(200,480);
	m1 = new Mango(850, 300, 40, 30);
	m2 = new Mango(1000, 200, 40, 40);
	m3 = new Mango(925, 250, 50, 50);
	m4 = new Mango(930, 320, 30, 30);
	m5 = new Mango(1000, 275, 45, 45);
	m6 = new Mango(1100, 330, 40, 40);
	m7 = new Mango(1080, 270, 50, 50);
	m8 = new Mango(1150, 300, 35, 35);
	slingshot= new Slingshot(stone.body,{x:200,y:470});

	Engine.run(engine);
  
}


function draw() {
  background(255);

  ground.display();
  tree.display();
  imageMode(CENTER);
  image(boy_img, 240, 525, 150, 200);
  stone.display();
  m2.display();
  m1.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  slingshot.display();
  detectCollission(stone, m1);
  detectCollission(stone, m2);
  detectCollission(stone, m3);
  detectCollission(stone, m4);
  detectCollission(stone, m5);
  detectCollission(stone, m6);
  detectCollission(stone, m7);
  detectCollission(stone, m8);
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased()
{
	slingshot.fly();
}
function keyPressed()
{
	if(keyCode==32)
	{
		slingshot.attach(stone.body);
	}
}
function detectCollission(obj1, obj2)
{
	var stone1 = obj1.body.position;
	var mango = obj2.body.position;
	var distance = dist(stone1.x, stone1.y, mango.x, mango.y);
	if(distance<=obj1.radius+obj2.radius) 
	{
		Matter.Body.setStatic(obj2.body, false);
	}
}




