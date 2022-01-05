const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg,bg2

var boy
var snowman
var sling
var snowball
var ground
var gift
var score

function preload(){
backgroundImg=loadImage("snow1.jpg")

boy=loadImage("boy.png")
bg2=loadImage("snow2.jpg")



}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
    world = engine.world;
    
//score=0
   
 
    snowman=new Snowman(width-695,height-50,120,120)
    snowman1=new Snowman(width-700,height-50,120,120)
    snowman2=new Snowman(width-900,height-50,120,120)
    snowman3=new Snowman(width-200,height-50,120,120)
    snowman4=new Snowman(width-100,height-50,120,120)

    snowball=new Snowball(width-965,height-295,50,50)
    sling=new Sling(snowball.body,{x:400, y:330})
    ground=new Ground(width-695,height-5,14000,30)
    up=new Sides(width-5,height-695,3500,2)
    rightSide=new Sides(1510,5,2,3500)
    leftSide=new Sides(5,5,2,3500)
 // SnowmanGroup=createGroup()

}

function draw() {
  background(backgroundImg)
  Engine.update(engine);
 
 
  image(boy ,360,260,200,280);
 
// SnowmanGroup.add(snowman)
 
 /* noStroke();
        textSize(35)
        fill("red")
        text("Score  " + score, width-300, 50)*/

    
 
  snowman.display()
  //snowman.score()
  snowman1.display()
  snowman2.display()
  snowman3.display()
  snowman4.display()


  sling.display()
  snowball.display()
  
  ground.display()
  leftSide.display()
 up.display()
 console.log(snowman.velocityY)
   
  /*if(SnowmanGroup.isTouching(snowman) ){
          score+1
    }*/
 
 
  
  
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(snowball.body,{x:mouseX, y:mouseY})
 
  }

  function mouseReleased(){
    sling.fly()
  }

  function keyPressed(){
    if(keyCode===32){
    Matter.Body.setPosition(snowball.body,{x:400, y:330})
    sling.attach(snowball.body)
    }
    if(keyCode===65){
      background(bg2)
          }
  }

  

 

  

 