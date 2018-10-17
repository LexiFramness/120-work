

let ball = {};
ball.width = 20;
ball.x = 5;
ball.y = 5;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

function setup() {
    createCanvas(windowWidth, windowHeight); //changed height from 400
    background('rgb(200, 192, 58)'); //changed background color from 255

}
 framrate (17) // set framerate


function draw() {

    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
    }


    fill('rgb(70,99,256)'); // changed fill from 255
    noStroke() //removed stroke
    ellipse(ball.x, ball.y, ball.width, ball.width);
}

function mousePressed() {
    ball.scale_x = map(mouseX, 0, width, 0.9, 15);
    ball.scale_y = map(mouseY, 0, height, 0.9, 15);
}
