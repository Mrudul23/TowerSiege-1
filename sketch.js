const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  box1 = new BlueBox(540,560,40,40);
  box2 = new BlueBox(580,560,40,40);
  box3 = new BlueBox(620,560,40,40);
  box4 = new BlueBox(660,560,40,40);
  box5 = new BlueBox(700,560,40,40);
  box6 = new BlueBox(740,560,40,40);

  box7 = new RedBox(560,520,40,40);
  box8 = new RedBox(600,520,40,40);
  box9 = new RedBox(640,520,40,40);
  box10 = new RedBox(680,520,40,40);
  box11 = new RedBox(720,520,40,40);

  box12 = new YellowBox(580,480,40,40);
  box13 = new YellowBox(620,480,40,40);
  box14 = new YellowBox(660,480,40,40);
  box15 = new YellowBox(700,480,40,40);

  box16 = new GreenBox(600,440,40,40);
  box17 = new GreenBox(640,440,40,40);
  box18 = new GreenBox(680,440,40,40);

  box19 = new PinkBox(620,400,40,40);
  box20 = new PinkBox(660,400,40,40);

  box21 = new GreenBox(640,360,40,40);

  box22 = new YellowBox(920,220,40,40);
  box23 = new YellowBox(960,220,40,40);
  box24 = new YellowBox(1000,220,40,40);
  box25 = new YellowBox(1040,220,40,40);
  box26 = new YellowBox(1080,220,40,40);
 
  box27 = new BlueBox(940,180,40,40);
  box28 = new BlueBox(980,180,40,40);
  box29 = new BlueBox(1020,180,40,40);
  box30 = new BlueBox(1060,180,40,40);

  box31 = new RedBox(960,140,40,40);
  box32 = new RedBox(1000,140,40,40);
  box33 = new RedBox(1040,140,40,40);
 
  
  box34 = new PinkBox(980,120,40,40);
  box35 = new PinkBox(1020,120,40,40);
 
  box36 = new GreenBox(1000,100,40,40)

  polygon = new Polygon(200,200,100);

  rope = new Rope(polygon.body,{x:300,y:200});

  ground1 = new Platform(600,590,1200,20);

  ground2 = new Platform(1000,250,250,20);
  
}

function draw() {

    if(keyDown("space")){
        Matter.Body.setPosition(polygon.body,{x:200,y:200})
        rope.attach()

    }
  background(247, 223, 178);
  Engine.update(engine);  

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
  box33.display();
 
  box34.display();
  box35.display();

  box36.display()
 
  rope.display();
  polygon.display();
  ground1.display();
  ground2.display();


  stroke("grey")
  strokeWeight(2)
  textSize(25)
  text("Drag and release the polygon (yellow hexagonal shape) to shoot the blocks",10,20)
  text("Press space to get another chance !!",10,50)
 

 
}

  function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
    rope.fly();
  }

