var playerIMG, playerAn, player, moveNum;
var inCar=false;
var carType="player"

function preload() {
  playerIMG = loadImage("./Images/player.png");
  playerAn = loadAnimation("./Images/playerMove1.png", "./Images/playerMove2.png");
  
  ferrariIMG=loadImage("./Images/Ferrari.png")
  civicIMG=loadImage("./Images/Civic.png")

  homeIMG=loadImage("./Images/Home.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //Arabian Gulf
  Sea=createSprite(10000,-30500, 68500, 60000)
  Sea.shapeColor="#2176a8"

  //Jumeirah Road
  JumRoad=createSprite(0, 200, 20000, 300);

  //Al Wasl Road
  WaslRoad=createSprite(0,1325,20000, 200);

  //Sheikh Zayed Road
  ZayedRoad=createSprite(-15000,2500,50000, 400);

  //Emirates Road
  EmiratesRoad=createSprite(-15000,7850,50000, 400);

  //Dubai Streets
  street1=createSprite(-9900, 10050, 200, 20000);
  street2=createSprite(-7700, 10050, 200, 20000);
  street3=createSprite(-5500, 10050, 200, 20000);
  street4=createSprite(-3300, 10050, 200, 20000);
  street5=createSprite(-1100, 10050, 200, 20000);
  street6=createSprite(1100,  10050,  200,  20000);
  street7=createSprite(3300,  10050,  200,  20000);
  street8=createSprite(5500,  10050,  200,  20000);
  street9=createSprite(7700,  10050,  200,  20000);
  street10=createSprite(9900, 10050, 200, 20000);
  //vertical
  street20=createSprite(0, 19950, 20000, 300)

  //Abu Dhabi
  //SweihanRoad
  SweihanRoad=createSprite(-40150, -6000, 300, 28100);

  //Sheikh Zayed Bin Sultan Road
  SultanRoad=createSprite(-24850, -8800, 300, 22500);


  //Dubai Streets
  //horizontal
  street11=createSprite(-32500, -20000, 15600, 300);
  street12=createSprite(-32500, -17000, 15600, 300);
  street13=createSprite(-32500, -14000, 15600, 300);
  street14=createSprite(-32500, -11000, 15600, 300);
  street15=createSprite(-32500, -8000, 15600, 300);
  street16=createSprite(-32500, -5000, 15600, 300);
  street17=createSprite(-32500, -2000, 15600, 300);
  street18=createSprite(-32500, 1000, 15600, 300);
  //vertical
  street19=createSprite(-32500, -8800, 300, 22500);

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
  street11.x += dx;
  street11.y += dy;
  street12.x += dx;
  street12.y += dy;
  street13.x += dx;
  street13.y += dy;
  street14.x += dx;
  street14.y += dy;
  street15.x += dx;
  street15.y += dy;
  street16.x += dx;
  street16.y += dy;
  street17.x += dx;
  street17.y += dy;
  street18.x += dx;
  street18.y += dy;
  street19.x += dx;
  street19.y += dy;
  street20.x += dx;
  street20.y += dy;
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
  fill(215, 198, 175, 150); // Semi-transparent gray
  rect(mapX, mapY, mapWidth, mapHeight);

  //Sea
  drawMini(Sea,mapX-38, mapY-75, scaleX, scaleY, "#2176a8")

  // Draw roads on the mini-map
  drawMini(JumRoad, mapX+59, mapY+75, scaleX, scaleY, "black");
  drawMini(WaslRoad, mapX+59, mapY+75, scaleX, scaleY, "black");
  drawMini(ZayedRoad, mapX-3, mapY+75, scaleX, scaleY, "black");
  drawMini(EmiratesRoad, mapX-3, mapY+75, scaleX, scaleY, "black");
  drawMini(SweihanRoad, mapX+100, mapY+5, scaleX, scaleY, "black");
  drawMini(SultanRoad, mapX+100, mapY+20, scaleX, scaleY, "black");

  // Dubai Streets
  for (let vDubaiRoad of [street1, street2, street3, street4, street5, street6, street7, street8, street9, street10]) {
    drawMini(vDubaiRoad, mapX+100, mapY+27, scaleX, scaleY, "black");
  }
  for (let hDubaiRoad of [street20]) {
    drawMini(hDubaiRoad, mapX+59.5, mapY+76, scaleX, scaleY, "black");
  }

  //Abu DHabi horizontal
  for (let hAbuRoad of [street11, street12, street13, street14, street15, street16, street17, street18]) {
    drawMini(hAbuRoad, mapX+68.5, mapY+75, scaleX, scaleY, "black");
  }

  //veritical
  for (let vAbuRoad of [street19]){
    drawMini(vAbuRoad, mapX+100, mapY+20, scaleX, scaleY, "black");
  }

  // Draw the player on the mini-map
  fill(0, 0, 255); // Red for the player
  let playerMiniX = mapX+100 + player.x * scaleX;
  let playerMiniY = mapY+75 + player.y * scaleY;
  ellipse(playerMiniX, playerMiniY, 5, 5); // Small dot for the player

  // Draw the car if the player is in it
  if (inCar) {
    fill(255, 0, 0); // Blue for the car
    let carMiniX = mapX+100 + ferrari.x * scaleX;
    let carMiniY = mapY+75 + ferrari.y * scaleY;
    ellipse(carMiniX, carMiniY, 5, 5); // Small dot for the car
  }
}

// Helper function to draw roads on the mini-map
function drawMini(object, mapX, mapY, scaleX, scaleY, colour) {
  let MiniX = mapX + object.x * scaleX;
  let MiniY = mapY + object.y * scaleY;
  let MiniWidth = object.width * scaleX;
  let MiniHeight = object.height * scaleY;

  fill(colour)
  stroke(colour)
  rect(MiniX, MiniY, MiniWidth, MiniHeight);
  
}
