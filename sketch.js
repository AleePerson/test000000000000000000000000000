var box;
function setup() {
  createCanvas(400,400);
  console.log("Hello World!")
  box = createSprite(100, 200, 30, 30)
}

function draw() {
  background(30);
  drawSprites();
  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x += 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    box.position.x -= 5;
  }
  if (keyIsDown(UP_ARROW)) {
    box.position.y += 5;;
  }
}




