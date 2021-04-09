var R1,R2

function setup() {
  createCanvas(800,400);
 R1= createSprite(400, 200, 50, 50);
 R2= createSprite(700, 200, 50, 50);
}

function draw() {
  background("black");  
  R1.x=mouseX;
  R1.y=mouseY;
  R1.shapeColor="green";
  R2.shapeColor="green";
  

  if (R1.x-R2.x<R1.width/2+R2.width/2 && R2.x-R1.x<R2.width/2+R1.width/2 && R1.y-R2.y<R1.height/2+R2.height/2 && R2.y-R1.y<R2.height/2+R1.height/2){
  R2.shapeColor="red";
  R1.shapeColor="red";

  }

  else{
    R1.shapeColor="green";
    R2.shapeColor="green";
  }
  drawSprites();
}