var playerIMG, playerAn, player, moveNum;
var inCar=false;
var carType="player"

function preload() {
  playerIMG = loadImage("./Images/player.png");
  playerAn = loadAnimation(".Images/playerMove1.png", "./Images/playerMove2.png");
  
  ferrariIMG=loadImage("./Images/Ferrari.png")

  dubaiIMG=loadImage("./Images/Dubai.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //Arabian Gulf
  Sea=createSprite(0,-15200, 48500, 30000)
  Sea.shapeColor="#2176a8"
  

  //Jumeirah Road
  JumRoad=createSprite(0, 200, 20000, 300);

  //Al Wasl Road
  WaslRoad=createSprite(0,1325,20000, 200);

  //Sheikh Zayed Road
  ZayedRoad=createSprite(-10000,2500,40000, 400);

  //Emirates Road
  EmiratesRoad=createSprite(-10000,7850,40000, 400);

  //Dubai Streets
  street1=createSprite(-9900,4000, 200, 7300);
  street2=createSprite(-7700,4000, 200, 7300);
  street3=createSprite(-5500,4000, 200, 7300);
  street4=createSprite(-3300,4000, 200, 7300);
  street5=createSprite(-1100,4000, 200, 7300);
  street6=createSprite(1100,4000, 200, 7300);
  street7=createSprite(3300,4000, 200, 7300);
  street8=createSprite(5500,4000, 200, 7300);
  street9=createSprite(7700,4000, 200, 7300);
  street10=createSprite(9900,4000, 200, 7300);

  //Abu Dhabi
  //SweihanRoad
  SweihanRoad=createSprite(-30150, -6000, 300, 28100);

  //Sheikh Zayed Bin Sultan Road
  SultanRoad=createSprite(-24850, -6000, 300, 28100)




  //Cars
  ferrari=createSprite(120,250,10,10);
  ferrari.addImage(ferrariIMG);
  ferrari.rotation=90;
  ferrari.scale=0.2;

  // Creating the player
  player = createSprite(150, 360, 20, 20);
  player.addImage("standing", playerIMG);
  player.addAnimation("walking", playerAn);
  player.scale = 0.7;
  
}

function draw() {
  background("#c2b280");

//Speed and car type
  textSize(20)
  fill("black")

  player.x=150;
  player.y=360;
  moveNum=5

  if (inCar===true){
    moveNum=20
  }

  // For sprinting
  if (keyDown("shift")) {
    if (inCar===true){
        moveNum=100
    }else{
      moveNum = 10;
    } 
  }

  if (player.collide(Sea)){
    moveNum=1
    text("GO BACK!!!", windowWidth/2, windowHeight/2)
    textSize(20)
  }

  if (keyDown("right") || keyDown("d")) {
      player.rotation = 90; 
      //moving the roads
      Sea.x-=moveNum;
      JumRoad.x-=moveNum;
      WaslRoad.x-=moveNum;
      ZayedRoad.x-=moveNum;
      street1.x-=moveNum;
      street2.x-=moveNum;
      street3.x-=moveNum;
      street4.x-=moveNum;
      street5.x-=moveNum;
      street6.x-=moveNum;
      street7.x-=moveNum;
      street8.x-=moveNum;
      street9.x-=moveNum;
      street10.x-=moveNum;
      EmiratesRoad.x-=moveNum;
      SweihanRoad.x-=moveNum;
      SultanRoad.x-=moveNum;
      //Cars
      if (inCar===true){
        ferrari.x=player.x
        ferrari.rotation=90
      } else{
      ferrari.x -= moveNum;
      }
    } else if (keyDown("left") || keyDown("a")) {
      player.rotation = -90; 
      Sea.x+=moveNum;
      JumRoad.x+=moveNum; 
      WaslRoad.x+=moveNum;
      ZayedRoad.x+=moveNum;
      street1.x+=moveNum;
      street2.x+=moveNum;
      street3.x+=moveNum;
      street4.x+=moveNum;
      street5.x+=moveNum;
      street6.x+=moveNum;
      street7.x+=moveNum;
      street8.x+=moveNum;
      street9.x+=moveNum;
      street10.x+=moveNum;
      EmiratesRoad.x+=moveNum;
      SweihanRoad.x+=moveNum;
      SultanRoad.x+=moveNum;
      if (inCar===true){
        ferrari.x=player.x
        ferrari.rotation=-90
      } else{
      ferrari.x += moveNum; 
      } 
    } else if (keyDown("up") || keyDown("w")) {
      player.rotation = 0;  
      Sea.y+=moveNum; 
      JumRoad.y+=moveNum;
      WaslRoad.y+=moveNum;
      ZayedRoad.y+=moveNum;
      street1.y+=moveNum;
      street2.y+=moveNum;
      street3.y+=moveNum;
      street4.y+=moveNum;
      street5.y+=moveNum;
      street6.y+=moveNum;
      street7.y+=moveNum;
      street8.y+=moveNum;
      street9.y+=moveNum;
      street10.y+=moveNum;
      EmiratesRoad.y+=moveNum;
      SweihanRoad.y+=moveNum;
      SultanRoad.y+=moveNum;
      if (inCar===true){
        ferrari.y=player.y
        ferrari.rotation=0
      } else{
      ferrari.y += moveNum;
      }
    } else if (keyDown("down") || keyDown("s")) {
      player.rotation = 180; 
      Sea.y-=moveNum;
      JumRoad.y-=moveNum; 
      WaslRoad.y-=moveNum;
      ZayedRoad.y-=moveNum;
      street1.y-=moveNum;
      street2.y-=moveNum;
      street3.y-=moveNum;
      street4.y-=moveNum;
      street5.y-=moveNum;
      street6.y-=moveNum;
      street7.y-=moveNum;
      street8.y-=moveNum;
      street9.y-=moveNum;
      street10.y-=moveNum;
      EmiratesRoad.y-=moveNum;
      SweihanRoad.y-=moveNum;
      SultanRoad.y-=moveNum;
      if (inCar===true){
        ferrari.y=player.y
        ferrari.rotation=180
      } else{
        ferrari.y -= moveNum;
        carType="player"
      }
    }

    if (player.collide(ferrari)){
      carType="laFerrari"
      if (keyDown("x")){
        inCar=true;
        player.visible=false
      }
    }
    if (inCar===true&&keyDown("y")){
      inCar=false;
      player.visible=true
      player.x=150;
      player.y=360;
    }

    
   

  // Animation switching
  if (keyDown("up") || keyDown("down") || keyDown("right") || keyDown("left") || keyDown("w") || keyDown("a") || keyDown("s") || keyDown("d")) {
    player.changeAnimation("walking");
  } else {
    player.changeAnimation("standing");
  }

  drawSprites();
  text(moveNum,20, windowHeight-20)
  text(carType, 20, windowHeight-50)
}

