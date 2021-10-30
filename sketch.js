var tieFighter, x_Wing, tieFighter_Vader, tieSound, x_WingSound, deathStarImage
var bg 

var tie1, tie3, vaderTie, luke_X_wing

function preload(){
deathStarImage = loadImage("deathStarImage.png")
tieFighter_Vader = loadImage("tieVader.png")
tieFighter = loadImage("tieFighter.png")
x_Wing = loadImage("X-wing.png")
//tieSound = loadSound("tieFighterSound.mp3")
//x_WingSound = loadSound("xWingSound.mp3")

}




function setup() {
  createCanvas(400, 800);
  bg=createSprite(200,200)
  bg.addImage(deathStarImage)
  bg.scale=2
 
  tie1 = createSprite(150, 750)
  tie1.addImage(tieFighter)
  tie1.scale=0.1

  vaderTie = createSprite(205, 750)
  vaderTie.addImage(tieFighter_Vader)
  vaderTie.scale=0.05
  
  tie3 = createSprite(255, 750)
  tie3.addImage(tieFighter)
  tie3.scale=0.1
 
  luke_X_wing = createSprite(205, 590)
	luke_X_wing.addImage(x_Wing)
  luke_X_wing.scale=0.05
	
	luke_X_wing.rotation = 180
  luke_X_wing.rotateToDeirection = true
	
}


function draw() {
  background("grey");  
  if(keyDown("RIGHT_ARROW")){
    luke_X_wing.x+=5
  }
 
  if(keyDown("LEFT_ARROW")){
    luke_X_wing.x-=5
  }

  bg.velocityY=1

  drawSprites();
 
}


