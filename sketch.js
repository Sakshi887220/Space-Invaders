var gameState = "story";

var background;
var backgroundImg;

var logo, logoImg;

var button1,button1Img;
var button2, button2Img;
var button3,button3Img; 
var playButton,playButtonImg

var skip, skipImg;

var text, textImg;
var text2,text2Img;
var text3,text3Img;
var text4,text4Img;
var text5,text5Img;
var text6,text6Img;
var text7,text7Img;
var text8,text8Img;
var text9,text9Img;

var spaceShip;
var spaceShipImg;

var enemy1,enemy2,enemy3,enemy4;
var enemy1Img,enemy2Img,enemy3Img,enemy4Img;
var play_btn_flag=true;

var boss;
var bossImg;

function preload(){
  
  backgroundImg = loadImage("Images/background3.png");
  
  textImg = loadImage("Images/text.png");
  text2Img = loadImage("Images/text2.png");
  text3Img = loadImage("Images/text3.png");
  text4Img = loadImage("Images/text4.png");
  text5Img = loadImage("Images/text5.png");
  text6Img = loadImage("Images/text6.png");
  text7Img = loadImage("Images/text7.png");
  text8Img = loadImage("Images/text8.png");
  text9Img = loadImage("Images/text9.png");
  
  logoImg = loadImage("Images/logo.png");
  
  button1Img = loadImage("Images/button1.png");
  button2Img = loadImage("Images/button2.png");
  button3Img = loadImage("Images/button3.png");

  skipImg = loadImage("Images/skip.png");

  playButtonImg = loadAnimation("Images/playButton1.png");
  playButtonImg1 = loadAnimation("Images/playButton2.png");

  //spaceShipImg = loadImage("Images/spaceship.png");
  //enemy1Img = loadImage("Images/enemy3.png");
  //enemy2Img = loadImage("Images/enemy4.png");
  //enemy3Img = loadImage("Images/enemy5.png");
  //enemy4Img = loadImage("Images/enemy6.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  background = createSprite(width/2, height/2, width, height);
  background.addImage(backgroundImg);
  background.velocityY = -9;
  background.scale = 5;

  logo = createSprite(width/2, height/2 - 200, 400, 400);
  logo.addImage(logoImg);
  logo.scale = 2
  logo.visible=false;

  text = createSprite(width/2, height/2, 80, 80);
  text.addImage(textImg);
 
  text.scale = 4;
  text.visible=false;

  text2 = createSprite(width/2, height/2, 80, 80)
  text2.addImage(text2Img);
  //text2.lifetime = 100;
  text2.scale = 4
  text2.visible=false;

  text3 = createSprite(width/2, height/2, 80, 80)
  text3.addImage(text3Img);
 // text3.lifetime = 100;
  text3.scale = 4
  text3.visible=false;

  text4 = createSprite(width/2, height/2, 80, 80)
  text4.addImage(text4Img);
  //text4.lifetime = 100;
  text4.scale = 4
  text4.visible=false;

  text5 = createSprite(width/2, height/2, 80, 80)
  text5.addImage(text5Img);
  //text5.lifetime = 100;
  text5.scale = 4
  text5.visible=false;

  text6 = createSprite(width/2, height/2, 80, 80)
  text6.addImage(text6Img);
  //text6.lifetime = 100;
  text6.scale = 4
  text6.visible=false;

  text7 = createSprite(width/2, height/2, 80, 80)
  text7.addImage(text7Img);
  //text7.lifetime = 100;
  text7.scale = 4
  text7.visible=false;

  text8 = createSprite(width/2, height/2, 80, 80)
  text8.addImage(text8Img);
  //text8.lifetime = 100;
  text8.scale = 4
  text8.visible=false;

  button1 = createSprite(width/2 - 110, height/2 + 80, 30, 30)
  button1.addImage(button1Img);
  button1Img.scale = 2
  button1.visible=false


  button2 = createSprite(width/2, height/2 + 20, 30, 30)
  button2.addImage(button2Img);
  button2Img.scale = 2
  button2.visible=false;
    
  button3 = createSprite(width/2 + 110, height/2 + 80, 30, 30)
  button3.addImage(button3Img);
  button3Img.scale = 2
  button3.visible=false;
  

  skip = createSprite(width/2 + 550, height/2 + 250, 30, 30)
  skip.addImage(skipImg);
  

  

  //spaceShip = createSprite(600, 200);
  //spaceShip.addImage(spaceShipImg)

  //enemy1 = createSprite(500, 200);
  //enemy1.addImage(enemy1Img);

  //enemy2 = createSprite(400, 200);
  //enemy2.addImage(enemy2Img);

  //enemy3 = createSprite(700, 200);
  //enemy3.addImage(enemy3Img);

  //enemy4 = createSprite(800, 200);
  //enemy4.addImage(enemy4Img)

}

function draw() {
  if(background.y < 0){
    background.y = background.width/2;
  }

  console.log(frameCount);

  if(gameState === "story"){
    if(frameCount < 40){
      
      text.visible=true;
      text.lifetime = 100;
    }
    if(frameCount > 165 && frameCount < 260){

      text2.visible=true;
     text2.lifetime = 100;

    }
    if(frameCount > 380 && frameCount < 500){
      text3.visible=true;
      text3.lifetime = 100;
    }
    if(frameCount > 620 && frameCount < 740){
      text4.visible=true;
       text4.lifetime = 100;
    }
    if(frameCount > 860 && frameCount < 980){
      text5.visible=true;
      text5.lifetime = 100;
    }
    if(frameCount > 1100 && frameCount < 1220){
      text6.visible=true;
      text6.lifetime = 100;
    }
    if(frameCount > 1340 && frameCount < 1460){
      text7.visible=true;
      text7.lifetime = 100;
    }
    if(frameCount > 1580 && frameCount < 1700){
      text8.visible=true;
      text8.lifetime = 100;
    }

    
   
    if(text.lifetime===0&&text2.lifetime===0&& text3.lifetime===0&&text4.lifetime===0&&text5.lifetime===0&&text6.lifetime===0&&text7.lifetime===0&&text8.lifetime===0){
      gameState="serve";
    }
    if(mousePressedOver(skip)){
      text.lifetime=0;
      text2.lifetime=0;
      text3.lifetime=0;
      text4.lifetime=0;
      text5.lifetime=0;
      text6.lifetime=0;
      text7.lifetime=0;
      text8.lifetime=0;
      gameState = "serve";
    }
  }  
    if(gameState==="serve"){
    
      skip.visible=false;
      button1.visible=true;
      button2.visible=true;
      button3.visible=true;
      logo.visible=true;
    if(mousePressedOver(button1)|| mousePressedOver(button2)|| mousePressedOver(button3)){
      gameState = "wait";
    
  }
  }

  if(gameState === "wait"){
    button1.visible = false;
    button2.visible = false;
    button3.visible = false;
    logo.visible=true;
    skip.visible=false;
    logo.visible = false;
    text9 = createSprite(width/2, height/2 + 10, 10, 10)
    text9.addImage(text9Img)
    text9.scale = 2;
    playButton = createSprite(width/2, height/2 + 220, 10,10);
    playButton.scale = 0.2;
    if(play_btn_flag)
    {
    playButton.addAnimation("play",playButtonImg);
    playButton.addAnimation("play1",playButtonImg1);
    }
   
    if(mousePressedOver(playButton) && play_btn_flag){

     playButton.changeAnimation("play1")
     play_btn_flag = false
    }
    
  }
  drawSprites();
}