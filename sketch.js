var one
var two

function setup() {
  createCanvas(400,400);
  
  one = createSprite(200,200,40,15);
 
  two = createSprite(300,100,40,15);
}

function draw() {
  background(0);  

  one.x = World.mouseX;
  one.y = World.mouseY;

  console.log(one.x- two.x);

  if (one.x - two.x === one.width/2+ two.width/2||two.x - one.x === one.width/2+ two.width/2||one.y - two.y === one.height/2+ two.height/2||two.y - one.y === one.height/2+ two.height/2){
    one.shapeColor = "green";
    two.shapeColor = "green";
  }else{one.shapeColor= "red";
        two.shapeColor= "yellow";}




  drawSprites();
}