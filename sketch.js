var trex;
var iGround;

function preload(){
  trexImg = loadImage("trex1.png");
  oImg = loadImage("obstacle.png");
  bgImg = loadImage("background.jpg");
}

function setup(){
  canvas=createCanvas(windowWidth,windowHeight);

  bg = createSprite(windowWidth-450,windowHeight/2,windowWidth+100,windowHeight);
  bg.addImage("scenery",bgImg);
  bg.scale=3;
  
  trex = createSprite(windowWidth/2,windowHeight/2+200,20,20);
  trex.velocityX = 10;
  trex.addImage("running",trexImg);
  trex.scale=0.7;
  
  
  

  o1 = createSprite(windowWidth/2+800,550,10,10);
  o1.addImage("di",oImg);
  o1.scale=0.3
  
  /*o2 = createSprite(8000,550,10,10);
  o3 = createSprite(2000,550,10,10);
  o4 = createSprite(5000,550,10,10);
  o5 = createSprite(10000,550,10,10);
  o6 = createSprite(1500,550,10,10);
*/
  //iGround = createSprite(windowWidth/2,windowHeight/2+250,100000000000,10);
  iGround = createSprite(windowWidth/2+200,windowHeight/2+250,windowWidth+2000,10);
  iGround.shapeColor="yellow"; 
  
  
}

function draw(){
  background("black");
  //edges = createEdgeSprites();
  trex.collide(iGround);
  o1.collide(iGround);

  camera.position.x = trex.x;

  //iGround.visible=false;

  if(trex.x-o1.x>650){
    o1.x = trex.x+650
  }

  /*if(trex.x-o2.x>650){
    o2.x = trex.x+650
  }

  if(trex.x-o3.x>650){
    o3.x = trex.x+650
  }

  if(trex.x-o4.x>650){
    o4.x = trex.x+650
  }

  if(trex.x-o5.x>650){
    o5.x = trex.x+650
  }

  if(trex.x-o6.x>650){
    o6.x = trex.x+650
  }
*/
  if(keyDown("space")&& trex.y>500){
    trex.velocityY=-20;
  }
  trex.velocityY=trex.velocityY+0.8;

  //if(trex.isTouching(o1)||trex.isTouching(o2)||trex.isTouching(o3)||trex.isTouching(o4)||trex.isTouching(o5)||trex.isTouching(o6)){
   
  if(trex.x-bg.x>500){
    bg.x = trex.x+windowWidth-700;
  }

  if(trex.x-iGround.x>800){ iGround.x = trex.x + windowWidth-300};
  


  drawSprites();

  if(trex.isTouching(o1)){ 
    textSize(50);
      text("Game Over!",trex.x,windowHeight/2);
      trex.velocityX=0;
      trex.velocityY=0;
     
  
      
    }
}
