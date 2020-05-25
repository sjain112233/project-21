var wall,thickness;
var speed, weight ,bullet ;


function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 5);
  wall=createSprite(1200 ,200 ,thickness ,height/2);
  speed=random(44,83);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.velocityX = speed;
  bullet.collide(wall);
  bullet.shapeColor=(255);
  wall.shapeColor=(230,230,230);
}

function draw() {
  background(0);  
  
  if(hasCollided(bullet,wall)){
   
   damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  
   bullet.velocityX=0;

  if(damage>10){
    bullet.shapeColor=(255,0,0);
  }

  if(damage<10){
    bullet.shapeColor=(0,255,0);
  }

  }

  drawSprites();

}

function hasCollided(lBullet,lWall){
  bulletRightEdge=lBullet.x+lBullet.width
  wallLeftEdge=lWall.x
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}