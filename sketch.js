  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
var engine, world;
function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.World;

  platform = new Ground(400,200,150,30);
// tower () {
 //level 1
  block7 = new Box(300,275,30,40);
  block8 = new Box(330,275,30,40);
  block9 = new Box(360,275,30,40);
  block10 = new Box(390,275,30,40);
  block11 = new Box(420,275,30,40);
  block12 = new Box(450,275,30,40);
  block13 = new Box(480,275,30,40);
  
 // level 2
  block = new Box(330,235,30,40);
  block1 = new Box(360,235,30,40);
  block2 = new Box(390,235,30,40);
  block3 = new Box(420,235,30,40);
  block4 = new Box(450,235,30,40);
 // level 3
  block5 = new Box(360,195,30,40);
  block5 = new Box(390,195,30,40);
  block5 = new Box(420,195,30,40);
 //top
  block6 = new Box(390,155,30,40);
 // }
 polygon = new Bodies.circle(50,200,20);
 World.add(world,polygon);
 slingShot = new Slingshot(this.polygon,{x:100, y:200});
 imageMode (center);
 image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
 


}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  platform.display();
  block.display ();
  block1.display ();
  block2.display ();
  block3.display ();
  block4.display ();
  block5.display ();
  block6.display ();
  block7.display ();
  block8.display ();
  block9.display ();
  block10.display ();
  block11.display ();
  block12.display ();
  block13.display ();
  drawSprites();
} 