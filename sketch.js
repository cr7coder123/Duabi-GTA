var playerIMG, playerAn, player, moveNum;
var inCar=false;
var carType="player"

function preload() {
  playerIMG = loadImage("../Images/player.png");
  playerAn = loadAnimation("../Images/playerMove1.png", "../Images/playerMove2.png");
  
  ferrariIMG=loadImage("./Images/Ferrari.png")

  dubaiIMG=loadImage("../Images/Dubai.png")

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
      moveWorld(-moveNum, 0);
      if (inCar===true){
        ferrari.x=player.x
        ferrari.rotation=90
      } else{
      ferrari.x -= moveNum;
      carType="player"
      }
    } else if (keyDown("left") || keyDown("a")) {
      player.rotation = -90; 
      moveWorld(moveNum, 0);
      if (inCar===true){
        ferrari.x=player.x
        ferrari.rotation=-90
      } else{
      ferrari.x += moveNum; 
      carType="player"
      } 
    } else if (keyDown("up") || keyDown("w")) {
      player.rotation = 0;  
      moveWorld(0, moveNum);
      if (inCar===true){
        ferrari.y=player.y
        ferrari.rotation=0
      } else{
      ferrari.y += moveNum;
      carType="player"
      }
    } else if (keyDown("down") || keyDown("s")) {
      player.rotation = 180; 
      moveWorld(0, -moveNum);
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

  drawMiniMap(moveNum);


  text(moveNum,20, windowHeight-20)
  text(carType, 20, windowHeight-50)
}


function moveWorld(dx, dy) {
  Sea.x += dx;
  Sea.y += dy;
  JumRoad.x += dx;
  JumRoad.y += dy;
  WaslRoad.x += dx;
  WaslRoad.y += dy;
  ZayedRoad.x += dx;
  ZayedRoad.y += dy;
  EmiratesRoad.x += dx;
  EmiratesRoad.y += dy;
  SweihanRoad.x += dx;
  SweihanRoad.y += dy;
  SultanRoad.x += dx;
  SultanRoad.y += dy;
  street1.x += dx;
  street1.y += dy;
  street2.x += dx;
  street2.y += dy;
  street3.x += dx;
  street3.y += dy;
  street4.x += dx;
  street4.y += dy;
  street5.x += dx;
  street5.y += dy;
  street6.x += dx;
  street6.y += dy;
  street7.x += dx;
  street7.y += dy;
  street8.x += dx;
  street8.y += dy;
  street9.x += dx;
  street9.y += dy;
  street10.x += dx;
  street10.y += dy;
}
function drawMiniMap() {
  // Mini-map dimensions and position
  let mapWidth = 200; // Width of the mini-map
  let mapHeight = 150; // Height of the mini-map
  let mapX = width - mapWidth - 20; // Mini-map's top-left X position
  let mapY = height - mapHeight - 20; // Mini-map's top-left Y position

  // Scaling factors to fit the real-world map into the mini-map
  let scaleX = mapWidth / 48500; // Scale for X axis based on world width
  let scaleY = mapHeight / 30000; // Scale for Y axis based on world height

  // Draw mini-map background
  fill(200, 200, 200, 150); // Semi-transparent gray
  rect(mapX, mapY, mapWidth, mapHeight);

  // Draw roads on the mini-map
  drawMiniRoad(JumRoad, mapX, mapY, scaleX, scaleY);
  drawMiniRoad(WaslRoad, mapX, mapY, scaleX, scaleY);
  drawMiniRoad(ZayedRoad, mapX, mapY, scaleX, scaleY);
  drawMiniRoad(EmiratesRoad, mapX, mapY, scaleX, scaleY);
  drawMiniRoad(SweihanRoad, mapX, mapY, scaleX, scaleY);
  drawMiniRoad(SultanRoad, mapX, mapY, scaleX, scaleY);

  // Draw the streets
  for (let road of [street1, street2, street3, street4, street5, street6, street7, street8, street9, street10]) {
    drawMiniRoad(road, mapX, mapY, scaleX, scaleY);
  }

  // Draw the player on the mini-map
  fill(255, 0, 0); // Red for the player
  let playerMiniX = mapX + player.x * scaleX;
  let playerMiniY = mapY + player.y * scaleY;
  ellipse(playerMiniX, playerMiniY, 5, 5); // Small dot for the player

  // Draw the car if the player is in it
  if (inCar) {
    fill(0, 0, 255); // Blue for the car
    let carMiniX = mapX + ferrari.x * scaleX;
    let carMiniY = mapY + ferrari.y * scaleY;
    ellipse(carMiniX, carMiniY, 5, 5); // Small dot for the car
  }
}

// Helper function to draw roads on the mini-map
function drawMiniRoad(road, mapX, mapY, scaleX, scaleY) {
  let roadMiniX = mapX + road.x * scaleX;
  let roadMiniY = mapY + road.y * scaleY;
  let roadMiniWidth = road.width * scaleX;
  let roadMiniHeight = road.height * scaleY;

  // Draw the road only if it's inside the mini-map boundaries
  if (
    roadMiniX + roadMiniWidth > mapX && // Road is partially or fully within mini-map X bounds
    roadMiniX < mapX + 200 && // Road is partially or fully within mini-map X bounds
    roadMiniY + roadMiniHeight > mapY && // Road is partially or fully within mini-map Y bounds
    roadMiniY < mapY + 150 // Road is partially or fully within mini-map Y bounds
  ) {
    rect(roadMiniX, roadMiniY, roadMiniWidth, roadMiniHeight);
  }
}
