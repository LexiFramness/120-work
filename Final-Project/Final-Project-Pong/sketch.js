//Alexis Framness
// Final Project
var pongSound
var lifes = 3
var started = false;
var score = 0;
//preload sound for game & show user instructions
function preload(){
    pongSound = loadSound("assets/sound/beep.mp3");
    //window.alert("Use the Right and Left Arrow keys to move paddle");
}
function resetSketch(){
  button = createButton('Start Over');
  button.position(windowWidth - 90, 30);
  button.mousePressed(resetSketch);
  score = 0;
  lifes = 3;
}
function setup() {
      // createCanvas the fills window
      createCanvas(windowWidth, windowHeight - 70);
      resetSketch();

}
function draw() {
      background('rgb(120, 110, 119)');

      // Draw ball
      fill(31, 173, 215);
      noStroke();
      ellipse(xBall, yBall, diameter, diameter);

      // Ball bounces off walls
    	xBall += xBallChange;
    	yBall += yBallChange;
    	if (xBall < diameter/2 ||
          xBall > windowWidth - 0.5*diameter) {
    		xBallChange *= -1;
      }
    	if (yBall < diameter/2 ||
          yBall > windowHeight - 80) {
        yBallChange *= -1;
        lifes = lifes -1;
    	}
      if (lifes < 0){
        resetSketch();
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
      // Check for collision with AI paddle
      if ((xBall < xPaddle2 &&
          xBall > xPaddle2 + paddleWidth2) &&
          (yBall - (diameter/2) <= yPaddle2)) {
        xBallChange *= -1;
        yBallChange *= -1;
        pongSound.play();
      }

      // Update the paddle location on screen
      if (!started) {
        xPaddle = windowWidth / 2;
        yPaddle = windowHeight - 90;
        started = true;
      }
      // Draw paddle
      fill('blue');
      noStroke();
      rect(xPaddle, yPaddle, paddleWidth, paddleHeight);
      //Draw paddle2 (AI Paddle)
      fill('green');
      noStroke();
      rect(xBall, 0 ,paddleWidth2,paddleHeight2)
      //Draw live counter
      fill(0,255, 255);
      textSize(35);
      text("Lives: " + lifes, windowWidth - 140 ,30)

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
