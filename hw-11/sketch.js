//Alexis Framness
// Week 11


// create a variables for balls
let ball = [];

function setup() {
    // createCanvas the fills window
    createCanvas(windowWidth, windowHeight);

    // create a new ball object of class type "Ball"
    ball = new Ball (random(windowWidth), random(windowHeight), 50,color(random(255), random(255), random(255)));

    for (let i = 0; i < 33; i++) {
        ball[i] = new Ball(random(windowWidth), random(windowHeight), 50,color(random(255), random(255), random(255))) ;
    }
}

function draw() {
    background(0);
    // call the ball's methods
    for( i = 0; i < 33; i++ ){
    ball[i].frame();
    }

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
//create frame containing methods for looping in Draw
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
//moves ball across screen
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
