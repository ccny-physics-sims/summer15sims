var x, y;
var xx;
var xxx =100;
var yyy =100;
var onnoff;
var beamon = true;
var thesamples = new Array ();
var whichone = 0;
var changesample;

function setup() {
  // createCanvas(720, 800);
  var cnv = createCanvas(900, 450);
cnv.parent("start");
  background ("white");
  fill ("white");
  noStroke ();
  frameRate(30);
  xx= width/2
  x = width / 2;
  y = height;


onoff = createButton("Turn on");
onoff.mouseClicked(turnonoff);
onoff.position(x-33, y-120);
onoff.addClass("sim-button");

//load image
img = loadImage("tem1.png");
img2 = loadImage("tem2.png");

//line
noFill();
beginShape();
vertex(180, 20);
vertex(75, 20);
vertex(75, 80);
endShape();


//This is for Sample change button

changesample = createButton("Change Sample");
changesample.mouseClicked(changethesample);
changesample.position(670,y-120);
changesample.addClass("sim-button");
thesamples[0]= loadImage("chloroplast.png");
thesamples[1]= loadImage("zincoxide.png");
thesamples[2]= loadImage("bacteriophage.png");
thesamples[3]= loadImage("axon.png");
thesamples[4]= loadImage("leukocyte.png");


stroke(50);
fill("white");
ellipse(x, y, 50, 50);
}


//Sample Change button
function changethesample() {
if (whichone == 4) {
 whichone = 0
}
else {
 whichone = (whichone + 1);
}
}

var offset = 0;
var easing = 0.05;

function draw() {
  // noFill();
  // beginShape();
  // vertex(180, 20);
  // vertex(75, 20);
  // vertex(75, 80);
  // endShape();

  background("white");
 tint(255, 127);  // Display at half opacity
 image(img, 305 , 0);
image(img2, 40 , 0, img2.width/2, img2.height=300 );

triangle(xx+7,64,xx-1,64,xx+2.5,70);

if (beamon){
  //This is for the samples
tint (300,300);
image(thesamples[whichone], 600 , 20, thesamples[whichone].width=400, thesamples[whichone].height=300);
//x = x + random(-0.09, 0.09);

yyy = yyy + 5;
  if (yyy > 157) {
    yyy = 70;
  }

stroke (50);
fill("white");
ellipse(x+3, yyy, 1.5, 1.5);

{yyy = yyy + 5;
  if (yyy > 157) {
    yyy = 70;
  }
  stroke (50);
fill("white");
ellipse(x+3, yyy+5, 1.5, 1.5);
}

{yyy = yyy + 5;
  if (yyy > 157) {
    yyy = 70;
  }
stroke (50);
fill("white");
ellipse(x+3, yyy+10, 1.5, 1.5);
}

{yyy = yyy + 5;
  if (yyy > 157) {
    yyy = 70;
  }
 stroke (50);
fill("white");
ellipse(x+3, yyy+15, 1.5, 1.5);
}

{yyy = yyy + 5;
  if (yyy > 157) {
    yyy = 70;
  }
stroke (50);
fill("white");
ellipse(x+3, yyy+20, 1.5, 1.5);
}

{yyy = yyy + 5;
  if (yyy > 157) {
    yyy = 70;
  }
stroke (50);
fill("white");
ellipse(x+3, yyy-5, 1.5, 1.5);
}
// stroke (50);
// fill("white");
// ellipse(x+3, yyy-30, 1.5, 1.5);
//
// stroke (50);
// fill("white");
// ellipse(x+3, yyy-35, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+3, 167, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+3, 177, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+3, 187, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+3, 197, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+3, 207, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+3, 217, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+3, 227, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+3, 237, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+3, 247, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+3, 257, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+3, 267, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+3, 277, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+3, 287, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+3, 297, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+3, 307, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+3, 317, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+3, 327, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+3, 337, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+3, 347, 1.5, 1.5);

//angled....
stroke (50);
fill("white");
ellipse(x+1.3, 177, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+1, 177, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+.7, 187, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+.4, 197, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+.1, 207, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x-.2, 217, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x -.5 , 227, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x - .8, 237, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x-1.1, 247, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x-1.4, 257, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x-1.7, 267, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x -2.0, 277, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x - 2.3, 287, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x -2.6, 297, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x -2.9, 307, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x -3.1, 317, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x -3.4, 327, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x -3.7, 337, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x -4.0, 347, 1.5, 1.5);


//angle left

stroke (50);
fill("white");
ellipse(x+4, 177, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+4.7, 187, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+4.4, 197, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+5.1, 207, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+5.2, 217, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x +5.5 , 227, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+5.8, 237, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+6.1, 247, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+6.4, 257, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x+6.7, 267, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x +7.0, 277, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x +7.3, 287, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x +7.6, 297, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x +7.9, 307, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x +8.1, 317, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x +8.4, 327, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x +8.7, 337, 1.5, 1.5);

stroke (50);
fill("white");
ellipse(x +9.0, 347, 1.5, 1.5);
}


if (!beamon){}

}

//This is for the button that turns on the microscope
function turnonoff() {
  if (!beamon){
    beamon = true;
    onoff.html("Turn off");
    return

  }

  if (beamon){
    beamon = false;
    onoff.html("Turn on");
    return

  }
  }

  // Jiggling randomly on the horizontal axis
//x = x + random(-1, 1);
  // Moving up at a constant speed
//y = y + 1;

  // Reset to the bottom
//  if (y > 0) {
//    y = height;
//  }
//}

  // Displays the image at its actual size at point (0,0)
  //tint(255, 127);
  //image(img, 267, height/2, img.width/2, img.height/2);

  //  tint(255, 127);  // Display at half opacity
  //  image(img, 215 , 0);
