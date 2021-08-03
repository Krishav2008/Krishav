
var box;

function setup(){
  createCanvas(300,300);
}
function draw(){
  
if (keyIsDown(RIGHT_ARROW)){
  background("red");

}
if (keyIsDown(LEFT_ARROW)){
  background("blue");
}
if (keyDown("up")){
  background("pink");
}
if (keyIsDown(DOWN_ARROW)){
  background("green");
}
}
