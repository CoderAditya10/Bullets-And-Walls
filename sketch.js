var bullet;
var wall;
var State = 0;
var speed, weight, thickness;
var damage;

function setup() {

  speed = random(223, 321);
  weight = random(30,52);
  thickness = random(22,83);

  createCanvas(1200,400);
  bullet = createSprite(50, 200, 30, 10);
  bullet.shapeColor = color('white');

  wall = createSprite(1000, 200, thickness, 150);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background('black');  
  drawSprites();
if(State == 0){
    bullet.velocityX = speed;
  }
  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX = 0;
    State = 1;
  }
if(State == 1){
  damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
  if(damage < 10){
    bullet.shapeColor = color('green');
    wall.shapeColor = color('green')
  }
  if(damage > 10){
    bullet.shapeColor = color('red');
    wall.shapeColor  = color('red')
  }
}
}