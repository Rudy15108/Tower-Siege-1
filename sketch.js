const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(450,390);
  stand1 = new Stand(390,300,250,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  stand2 = new Stand(700,200,200,10);
   //level one
   Block1 = new Block(610,175,30,40);
   Block2 = new Block(640,175,30,40);
   Block3 = new Block(670,175,30,40);
   Block4 = new Block(700,175,30,40);
   Block5 = new Block(730,175,30,40);
   Block6 = new Block(760,175,30,40);
   Block7 = new Block(790,175,30,40);
   //level two
   Block8 = new Block(640,135,30,40);
   Block9 = new Block(670,135,30,40);
   Block10 = new Block(700,135,30,40);
   Block11 = new Block(730,135,30,40);
   Block12 = new Block(760,135,30,40);
   //level three
   Block13 = new Block(670,95,30,40);
   Block14 = new Block(700,95,30,40);
   Block15 = new Block(730,95,30,40);
   //top
   Block16 = new Block(700,55,30,40);

   ball = Bodies.circle(50,200,20);
   World.add(world,ball);

   sling = new Chain(this.ball,{x:150, y:160});
}
function draw() {
  background(247,56,56); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  imageMode(CENTER);
  image(polygon_img,ball.position.x,ball.position.y,40,40);

  sling.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  Block1.display();
  Block7.display();
  Block8.display();
  Block12.display();
  Block13.display();
  Block15.display();
  Block16.display();

  fill("pink");
  Block2.display();
  Block6.display();
  Block9.display();
  Block11.display();
  Block14.display();

  fill("turquoise");
  Block3.display();
  Block5.display();
  Block10.display();
  
  fill("grey");
  Block4.display();
}

function mouseDragged () {
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased () {
  sling.fly();
}
