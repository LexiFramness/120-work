//Alexis Framness
// Final Project
//sound Variable
var soundFile;

//preload sound to ensure playing with game
function preload() {
    soundFormats('ogg', 'mp3',);
    soundFile = loadSound('./assests/beep.mp3');
  }

function setup() {
      // createCanvas the fills window
      createCanvas(windowWidth, windowHeight);
      soundFile.setVolume(0.5);
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

      // Check for collision with paddle & play sound
      if ((xBall > xPaddle &&
          xBall < xPaddle + paddleWidth) &&
          (yBall + (diameter/2) >= yPaddle)) {
        xBallChange *= -1;
        yBallChange *= -1;
        score++;
        soundFile.play();
      }

      // Draw ball
    	fill(255, 0, 255);
    	noStroke();
    	ellipse(xBall, yBall, diameter, diameter);

      // Update paddle location
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
      textSize(24);
    	text("Score: " + score, 10, 25);
    }

    function keyPressed() {
      if (keyCode === LEFT_ARROW) {
        xPaddle -= 50;
      } else if (keyCode === RIGHT_ARROW) {
        xPaddle += 50;
      }
    }
