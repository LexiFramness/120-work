//Alexis Framness
// Week 12


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
