//Alexis Framness
//Define varables

var pos_x;
var pos_y;

let myVar;
let myVar2;

myVar = 500;
myVar2 = 550;

var circle_min = 40;
var circle_max = 200;

//setup canvas
function setup(){

  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

//drawing Algorithmic Sketch
function draw(){
//random generator for background.
  let red = floor( random(256) );
  let green = floor( random(256) );
  let blue = floor( random(256) );
  background( red, green, blue );
  frameRate(10);
//remove Cursor
  noCursor();

  text("mouseX: " + floor(mouseX), myVar, 650 );
  text("mouseY: " + floor(mouseY), myVar2, 690 );

  var color = floor( random(256 % 7) );
  var circle_size = map(mouseX, 0, width, circle_min, circle_max)

  //set colors for circle filling
  var cirRed = floor( random(250));
  var cirBlue = floor( random (256));
  var cirGreen = floor( random(246));

  //Constrain function
  var leftWall = 40;
  var rightWall = width - 40;
  var xc = constrain(mouseX, leftWall, rightWall);
  //walls locations
  stroke(random (4));
  line(leftWall, 0, leftWall, height);
  line(rightWall, 0, rightWall, height);


  //circle 1
  fill(cirRed,cirBlue,cirGreen);
  stroke(color,color,color);
  strokeWeight(10);
  ellipse( xc, mouseY, circle_size);

  // circle 2
  fill(cirRed,cirBlue,cirGreen);
  stroke(color,color,color);
  strokeWeight(10);
  ellipse( xc + 200, mouseY, circle_size);

  //circle 3
  fill(cirRed,cirBlue,cirGreen);
  stroke(color,color,color);
  strokeWeight(10);
  ellipse( xc - 200, mouseY, circle_size);

  //spinner 1 upper
	fill(random(255), random(255), random(255));
	push();
	translate(400, 100);
  rotate(radians(frameCount));
	rect(0, 0, 300, 20);
	pop();

  //spinner 2 upper
	fill(random(255), random(255), random(255));
	push();
	translate(700, 100);
  rotate(radians(frameCount));
	rect(0, 0, 300, 20);
	pop();

  //spinner 3 upper
	fill(random(255), random(255), random(255));
	push();
	translate(1000, 100);
  rotate(radians(frameCount));
	rect(0, 0, 300, 20);
	pop();

  //spinner 1 lower
	fill(random(255), random(255), random(255));
	push();
	translate(400, 400);
  rotate(radians(frameCount));
	rect(0, 0, 300, 20);
	pop();

  //spinner 2 lower
	fill(random(255), random(255), random(255));
	push();
	translate(700, 400);
  rotate(radians(frameCount));
	rect(0, 0, 300, 20);
	pop();

  //spinner 3 lower
	fill(random(255), random(255), random(255));
	push();
	translate(1000, 400);
  rotate(radians(frameCount));
	rect(0, 0, 300, 20);
	pop();


}
