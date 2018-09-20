//Alexis Framness
//mimi

function setup() {
  createCanvas (1000,800);
}
function draw() {
  //background color
  background ('#c8f1f9')

//sandbox for mimi
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
push();
//deleting Stroke
noStroke();
//color of rectanglt
fill ('pink');
//creating rectangle
rect(378, 430,45, 45);
//end of tongue
pop()

//creating tongue end
push();
//deleting Stroke
noStroke();
//color of tongue end
fill ('pink');
//creating circle
ellipse(400, 470, 47,46);
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

}
