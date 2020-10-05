const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball;


var box1,box2,box3,box4,box5,box6,box7


var box8,box9,box10,box11,box12;


var box13,box14,box15;


var box16;




var box17,box18,box17,box19,box20,box21,box22;


var box23,box24,box25,box26,box27;


var box28,box29,box30;

var p2ground;

var launcher;


function setup() {
	var canvas = createCanvas(1400, 700);


		
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	ground=new Ground(width/2, height-35, width,10);
	ball=new Ball(200,400,50);
	
	launcher = new  SlingShot(ball.body,{x:200,y:400});
	
	//PYRAMID-1 
	
	//LEVEL-1
	box1 = new Block(330,235,30,40);
	box2 = new Block(360,235,30,40);
	box3 = new Block(390,235,30,40);
	box4 = new Block(420,235,30,40);
	box5 = new Block(450,235,30,40);
	box6 = new Block(480,235,30,40);
	box7 = new Block(510,235,30,40);
	
	//LEVEL-2
	box8 = new Block(360,195,30,40);
	box9 = new Block(390,195,30,40);
	box10 = new Block(420,195,30,40);
	box11= new Block(450,195,30,40);
	box12 = new Block(480,195,30,40);

	//LEVEL-3
	box13 = new Block(390,155,30,40);
	box14 = new Block(420,155,30,40);
	box15 = new Block(450,155,30,40);

	//LEVEL-4
	box16 = new Block(420,115,30,40);

	p1ground = new Ground(420,245,210,10)

	p2ground = new Ground(1090,510,210,10)

	//PYRAMID-2
	//LEVEL-1
	box17 = new Block(1000,500,30,40);
	box18 = new Block(1030,500,30,40);
	box19 = new Block(1060,500,30,40);
	box20 = new Block(1090,500,30,40);
	box21 = new Block(1120,500,30,40);
	box22 = new Block(1150,500,30,40);
	box23 = new Block(1180,500,30,40);

	//LEVEL-2
	box24 = new Block(1030,460,30,40);
	box25 = new Block(1060,460,30,40);
	box26 = new Block(1090,460,30,40);
	box27 = new Block(1120,460,30,40);
	box28 = new Block(1150,460,30,40);

	//LEVEL-3
	box29 = new Block(1060,420,30,40);
	box30 = new Block(1090,420,30,40);
	box31 = new Block(1120,420,30,40);

	//LEVEL-4
	box32 = new Block(1090,380,30,40);
}


function draw() {
	background(255);
	Engine.update(engine);
  
  
  ball.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
 
  box13.display();
  box14.display();
  box15.display();

  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();

  box29.display();
  box30.display();
  box31.display();

  box32.display();

  p1ground.display();
  p2ground.display();
  
  launcher.display();
  drawSprites();
 
}

function keyPressed(){
    if(keyCode === 32){
       launcher.attach(ball.body);
    }
}


function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcher.fly();
}

