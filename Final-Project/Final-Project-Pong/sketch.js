//Alexis Framness
// Final Project
var pongSound
var button
// pre load sound for game
function preload(){
    pongSound = loadSound("assets/sound/beep.mp3");
}

function setup() {
      // createCanvas the fills window
      createCanvas(windowWidth, windowHeight);
      resetSketch();
    }
function resetSketch(){
  window.alert("Use Right and Left Arrow keys to move paddle")
  button createButton("reset");
  button.mousePressed(resetSketch);
}

function draw() {
      background(0);

      // Ball bounces off walls
    	xBall += xBallChange;
    	yBall += yBallChange;
    	if (xBall < diameter/2 ||
          xBall > windowWidth - 0.5*diameter) {
    		xBallChange *= -1;
      }
    	if (yBall < diameter/2 ||
          yBall > windowHeight - diameter) {
        yBallChange *= -1;
    	}

      // Check for collision with paddle
      if ((xBall > xPaddle &&
          xBall < xPaddle + paddleWidth) &&
          (yBall + (diameter/2) >= yPaddle)) {
        xBallChange *= -1;
        yBallChange *= -1;
        score++;
        pongSound.play();
      }
      // Draw ball
    	fill(255, 0, 255);
    	noStroke();
    	ellipse(xBall, yBall, diameter, diameter);

      // Update the paddle location on screen
      if (!started) {
        xPaddle = windowWidth / 2;
        yPaddle = windowHeight - 100;
        started = true;
      }

      // Draw paddle
      fill('green');
      noStroke();
      rect(xPaddle, yPaddle, paddleWidth, paddleHeight);

      // Draw score
      fill(0, 255, 255);
      textSize(35);
    	text("Score: " + score, 20, 30);
    }
      // controls movement of the paddle across the screen
    function keyPressed() {
      if (keyCode === LEFT_ARROW) {
        xPaddle -= 50;
      } else if (keyCode === RIGHT_ARROW) {
        xPaddle += 50;
      }
    }
