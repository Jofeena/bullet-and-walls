var wall, thickness;
var bullet, speed, weight;
var lbullet, lwall;


function setup () {
  createCanvas (1600, 400);
  speed = random (223, 321);
  weight = random (30, 52);
  bullet = createSprite (900, 200, 60, 10);
  wall = createSprite (1200, 200, thickness, height/2);
  thickness = random (22, 83);
}

function draw () {
  background ("black");
  
  bullet.shapeColor = ("white");
 wall.shapeColor = (rgb(80, 80, 80));
  
 if (hasCollided(bullet, wall)) {
   bullet.velocityX = 0;
   var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

   if (damage > 10) {
     wall.shapeColor = (rgb (255, 0, 0));
   }

   if (damage < 10) {
     wall.shapeColor = (rgb (0, 255, 0));
   }
   
 }
 drawSprites ();
 
 hasCollided ();
}

function hasCollided (lbullet, lwall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge >= wallLeftEdge) {
    return  true;
  }
  return  false;
}
