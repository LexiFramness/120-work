//Alexis Framness
//mimi function
let xPosArr = [950, 1050,850];
let yPos = 0;


let ball = {};
ball.width = 50;
ball.x = 5;
ball.y = 5;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;

function setup() {
  createCanvas (windowWidth,windowHeight);

}

function draw() {
  //background color
  background ('#c8f1f9');
  drawMimi();
  noCursor();
  drawBall();
  drawArray();
}

function drawArray(){
  fill(random(255), random(255), random(255));
  for( let idx = 0; idx < xPosArr.length; idx++ ) {
        // draw some boxes!
        rect( xPosArr[idx], yPos, 20, 40 );
    }

    yPos = (yPos + 1) % windowHeight;
}

function drawBall(){
  ball.x += ball.delta_x * ball.scale_x;
  ball.y += ball.delta_y * ball.scale_y;


  if (ball.x >= width || ball.x <= 0) {
      ball.delta_x = -1 * ball.delta_x;
  }
  if (ball.y >= height || ball.y <= 0) {
      ball.delta_y = -1 * ball.delta_y;
  }


  fill('yellow');
  noStroke() //removed stroke
  ellipse(ball.x, ball.y, ball.width, ball.width);
}


//draw mimi
function drawMimi(){
push ();
//center canvas
translate (100,-100);
// create head sandbox
push ();
//deleting stroke
  noStroke ();
//color of circle
  fill ('white');
//creating oval
  ellipse(400, 400, 250, 250);
  //end of head sandbox
  pop()

  //create left ear
  push ();
//deleting stroke
  noStroke ();
  //color
  fill ('black');
  //create triangle
  triangle(280, 360, 310, 210, 370, 277);
  //end left ear
  pop()

  //create right ear
  push ();
//deleting stroke
  noStroke ();
  //color
  fill ('brown');
  //create triangle
  triangle(517, 350, 450, 286, 525, 237);
  //end right ear
  pop()

  // create lefteye sandbox
  push ();
  //deleting stroke
    noStroke ();
  //color of circle
    fill ('black');
  //creating oval
    ellipse(355, 360, 25, 25);
    //end of lefteye sandbox
    pop()

    // create lefteye shine sandbox
    push ();
    //deleting stroke
      noStroke ();
    //color of circle
      fill ('white');
    //creating oval
      ellipse(353, 355, 5, 5);
      //end of lefteye shine sandbox
      pop()

    // create righteye sandbox
    push ();
    //deleting stroke
      noStroke ();
    //color of circle
      fill ('black');
    //creating oval
      ellipse(440, 360, 25, 25);
      //end of righteye sandbox
      pop()

      // create righteye shine sandbox
      push ();
      //deleting stroke
        noStroke ();
      //color of circle
        fill ('white');
      //creating oval
        ellipse(437, 355, 5, 5);
        //end of righteye shine sandbox
        pop()

        //create tongue
        push ();
        //deleting Stroke
        noStroke();
        //color of rectanglt
        fill ('pink');
        //creating rectangle
        rect (378, 430,45, 45);
        //end of tongue
        pop()

        //creating tongue end
        push ();
        //deleting Stroke
        noStroke();
        //color of tongue end
        fill ('pink');
        //creating circle
        ellipse (400, 470, 47,46);
        //end of tongue end
        pop()

        //create nose sandbox
        push ();
        //deleting Stroke
        noStroke();
        //color
        fill ('gray');
        //creating oval
        ellipse (400, 430, 50,50);
        //end of nose sandbox
        pop()

        // create right nostrile sandbox
        push ();
        //deleting stroke
        noStroke ();
        //color of circle
        fill ('black');
        //creating oval
        ellipse(394, 425, 13, 11);
        //end of right nostrile sandbox
        pop()

        // create left nostrile sandbox
        push ();
        //deleting stroke
        noStroke ();
        //color of circle
        fill ('black');
        //creating oval
        ellipse(410, 425, 13, 11);
        //end of left nostrile  sandbox
        pop()

        //create right paw
        push ();
        //deleting Stroke
        noStroke ();
        //color of paw
        fill ('white');
        //creating oval
        ellipse (325, 527, 100,35);
        //end of right paw
        pop()

        //create left paw
        push ();
        //deleting Stroke
        noStroke ();
        //color of paw
        fill ('white');
        //creating oval
        ellipse (475, 527, 100,35);
        //end of left paw
        pop()

        //create right paw nail one
        push ();
        //deleting Stroke
        noStroke ();
        //color of nail
        fill ('black');
        ellipse (305, 537, 6, 8);
        //end of nail one
        pop()

        //create right paw nail two
        push ();
        //deleting Stroke
        noStroke ();
        //color of nail
        fill ('black');
        ellipse (325, 537, 6, 8);
        //end of nail two
        pop()

        //create right paw nail three
        push ();
        //deleting Stroke
        noStroke ();
        //color of nail
        fill ('black');
        ellipse (345, 537, 6, 8);
        //end of nail three
        pop()

        //create left paw nail one
        push ();
        //deleting Stroke
        noStroke ();
        //color of nail
        fill ('black');
        ellipse (475, 537, 6, 8);
        //end of nail one
        pop()

        //create left paw nail two
        push ();
        //deleting Stroke
        noStroke ();
        //color of nail
        fill ('black');
        ellipse (455, 537, 6, 8);
        //end of nail two
        pop()

        //create left paw nail three
        push ();
        //deleting Stroke
        noStroke ();
        //color of nail
        fill ('black');
        ellipse (495, 537, 6, 8);
        //end of nail three
        pop()
      }
