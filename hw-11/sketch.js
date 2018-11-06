//Alexis Framness
// Week 11


// create a variables for balls
let ball;
let balls = [];
let num_of_balls = 25;


function setup() {
    // createCanvas the fills window
    createCanvas(windowWidth, windowHeight);

    // create a new ball object of class type "Ball"
    ball = new Ball (random(windowWidth), random(windowHeight), 50,color(random(255), random(255), random(255)));

    for (let i = 0; i < num_of_balls; i++) {
        balls.push( new Ball() );
    }
}

function draw() {
    background(0);
    // call the ball's methods
    ball.frame();

  }

// Ball Class Definition
class Ball {
    constructor(x, y, size, color) {
        this.color = color;
        this.size = size;
        this.rad = this.size / 4;
        this.posX = random(width);
        this.posY = random(height);
        this.deltaX = random(-4, 4);
        this.deltaY = random(-4, 4);
    }

    frame() {
      this.display();
      this.move();
      this.edgeCheck();
    }

    display() {
        push();
        // remove the balls outer stroke
        noStroke();
        // set the balls fill color
        fill(this.color);
        // set the position of the ball
        translate(this.posX, this.posY);
        ellipse(0, 0, this.size);
        pop();
    }

    move() {
        this.posX += this.deltaX;
        this.posY += this.deltaY;
    }

    edgeCheck() {
        // check if the ball has hit a vertical wall (left or right walls)
        if (this.posX + this.rad >= width || this.posX - this.rad <= 0) {
            this.deltaX *= -1;
        }
        // check if the ball has hit a horizontal wall (top or bottom walls)
        if (this.posY + this.rad >= height || this.posY - this.rad <= 0) {
            this.deltaY *= -1;
        }
    }
}
