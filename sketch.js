var ground, groundI, ground2;
var monkey , running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score, survivalTime=0;
var banana, bananaI, rock, rockI;
var bananaG, rockG;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");       
  groundI = loadImage("ground.png");
  bananaI = loadImage("banana.png");
  rockI = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);

  ground2 = createSprite(0,350,800,10);
  ground2.visible = false;
  
  monkey = createSprite(60,315,5,5);
  monkey.addAnimation("run",monkey_running);
  monkey.scale = 0.12;
  
  bananaG = new Group();
  rockG = new Group();  
}


function draw() {
  background("white");
  textSize(20);
  fill("black");
  survivalTime = survivalTime + Math.round(getFrameRate()/60);  
  text("SurvivalTime: "+ survivalTime,125,50);
    
  if(keyDown("space")  && monkey.y > 308){
    monkey.velocityY = -20;
  }

   monkey.velocityY = monkey.velocityY +0.8;  
   monkey.collide(ground2);
    
  spawnBanana();
  spawnRocks();
  drawSprites();
}

function spawnBanana(){
  if(frameCount%80===0){
    a=Math.round(random(120,200));
    banana = createSprite(400,a,5,5);
    banana.addImage(bananaI);
    banana.scale = 0.1;
    
    banana.velocityX = -3;
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth +1;
    
    banana.lifetime = 140;
    bananaG.add(banana);
  }
}

function spawnRocks(){
  if(frameCount%300===0){
    rock = createSprite(400,325,5,5);
    rock.addImage(rockI);
    rock.scale = 0.1;
    
    rock.velocityX = -5;
    
    rock.lifetime = 80 ;
    rockG.add(rock);
  }
}
