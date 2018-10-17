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

let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

let fillChangeR = 1;
let fillChangeB = 1;
let fillChangeG = 1;
let fillMapR = 1;
let fillMapB = 1;
let fillMapG = 1;
let xR = 0;
let yR = 255;
let xB = 0;
let yB = 255;
let xG = 0;
let yG = 255;

//setup canvas
function setup(){

createCanvas(windowWidth, windowHeight);
//random generator for background.
let red = floor( random(256) );
let green = floor( random(256) );
let blue = floor( random(256) );
background( red, green, blue );
frameRate(20);

}

//drawing Algorithmic Sketch
function draw(){
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

//spinner
fill(random(255), random(255), random(255));
stroke(fillChangeR,fillChangeG)
push();
translate(700, 100);
rotate(radians(frameCount));
rect(0, 0, 300, 20);
pop();


// create ball 1
ball.x += ball.delta_x * ball.scale_x;
ball.y += ball.delta_y * ball.scale_y;


if (ball.x >= width || ball.x <= 0) {
    ball.delta_x = -1 * ball.delta_x;
}

if (ball.y >= height || ball.y <= 0) {
    ball.delta_y = -1 * ball.delta_y;
}

fillChangeR = frameCount % 250;
fillChangeB = frameCount % 200;
fillChangeG = frameCount % 150;
fillMapR = map(fillChangeR, 0, 249, xR, yR);
fillMapB = map(fillChangeB, 0, 199, xB, yB);
fillMapG = map(fillChangeG, 0, 149, xG, yG);

fill(fillMapR, fillMapB, fillMapG);
noStroke();
ellipse(ball.x, ball.y, ball.width, ball.width);

if(fillMapR > 254){
    xR = 255
    yR = 0
}
else if(fillMapR < 1){
    xR = 0
    yR = 255
}

if(fillMapB > 254){
    xB = 255
    yB = 0
}
else if(fillMapB < 1){
        xB = 0
        yB = 255
}

if(fillMapG > 254){
    xG = 255
    yG = 0
}
else if(fillMapG < 1){
        xG = 0
        yG = 255
}

}
