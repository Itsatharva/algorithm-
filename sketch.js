var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 80, 30);
  fixedRect = createSprite(600, 400, 50, 80);
  movingRect.shapeColor = ("Green");
  fixedRect.shapeColor = ("Green"); 
  fixedRect.debug = true;
  movingRect.debug = true;
}
function draw() {
  background(255,255,255); 
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2 
    || fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 
    || movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    || fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
     movingRect.shapeColor = ("Red");
     fixedRect.shapeColor = ("Red");
  }
  else{
      movingRect.shapeColor = ("Green");
      fixedRect.shapeColor = ("Green");
  }

  drawSprites();
}