hrAngle=map(hr,0,60,0,360)
mnAngle=map(mn,0,60,0,360)
scAngle=map(sc,0,60,0,360);
function setup() {
  hr=hour();
  mn=minuite();
  sc=second();
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  angleMode(DEGREES);
  push();
  rotate(hrAngle);
  strokeWeight(255,0,0);
  line(0,0,100,0);
  push();
  rotate(mnAngle);
  strokeWeight(255,0,0);
  line(0,0,100,0);
  push();
  rotate(scAngle);
  strokeWeight(255,0,0);
  line(0,0,100,0);

}
function hour(){
text('Current hour:\n' + h, 5, 50);
}
function minute(){
text('Current minute: \n' + m, 5, 50);
}
function second(){
text('Current second: \n' + s, 5, 50);
}
