  
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
}


function draw() {
  background(255);
  //write a condition for infinte scrolling tower
  if(tower.y > ){
      tower.y = 300
    } 
  
  if (gameState === "play") {

     // write a code to move left when left arrow is pressed    
    if(keyDown("")){
        ghost.x = ghost.x - 3;

    }

    // write a code to move right when right arrow is pressed
    if(keyDown("")){
  
          ghost.x = ghost.x + 3;      
    }

    // write a code to move up when space bar is pressed
    if(keyDown("")){
  
         ghost.velocityY = -10;  
    }
  
    ghost.velocityY = ghost.velocityY + 0.8;
      
    spawnDoors();

     if(climbersGroup.isTouching(ghost)){
      ghost.velocityY = 0;
    }
    //write a condition to check invisibleBlockGroup collide with ghost. 
    //Destroy the ghost and change gamestate to end.
    if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
      ghost.
      gameState = ""
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnDoors()
 {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    
    //add the random function to spwan doors, climers and invisibleBlock randomly
    
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    //change the depth of the ghost and door 
    ghost.depth = door.depth;
    ghost.depth =1;
    
    //assign lifetime for the  door, climber and invisible block

    .lifetime = 800;
    .lifetime = 800;
    .lifetime = 800;

    //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacles are door, climber and invisible block
    
    doorsGroup.add();
    invisibleBlock.debug = true;
    climbersGroup.add();
    invisibleBlockGroup.add();
  }
}

