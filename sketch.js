var bullet,wall,speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50,200,50,50);
  bullet.velocityX = speed;
bullet.shapeColor = "white"
wall = createSprite(1500,200,thickness,200)
wall.shapeColor = "grey"
}

function draw() {
  background("black");  
 if(hasCollided(bullet,wall)){
   bullet.velocityX = 0
   var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)
   if(damage>10){
     wall.shapeColor = "red";
     
   }
   if(damage<10){
     wall.shapeColor = "green";
   }
 }
  drawSprites();
}
function hasCollided(lBullet,lWall)
{
  if(lBullet.x + lBullet.width>=lWall.x){
    return true
  }
  return false
}