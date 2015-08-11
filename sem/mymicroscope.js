var x, y;
var onoff;
var beamon = false;
var thesamples = new Array();
var img;
var whichone = 0;
var changesample;
var r;
var yyy;
var xxx;
function setup() {
  createCanvas(900, 900);
  onoff = createButton("turn on");
  onoff.addClass("sim-button");
  onoff.mouseClicked(turnonoff);
  onoff.position(120,330);
  changesample = createButton("Change Sample");
  chagesample.addClass("sim-button");
  changesample.mouseClicked(changethesample);
  changesample.position(500,790)
  thesamples[0]= loadImage("2keV_50kx_002__1.jpg");
  thesamples[1] = loadImage("30keV_2kx_016_2.jpg");
  thesamples[2] = loadImage("ant_3.jpg");
  thesamples[3] = loadImage("circles__4.jpg");
  thesamples[4] = loadImage("FAT_004__5.jpg");
  thesamples[5] = loadImage("FAT_008__6.jpg");
  thesamples[6] = loadImage("FAT_009__7.jpg");
  thesamples[7] = loadImage("nanoRods_102__8.jpg");
  thesamples[8] = loadImage("Pillars_002__9.jpg");

  //rSlider = createSlider(0, 1, 0);
  //rSlider.position(510, 775)

}
function draw() {
  background("white");
  if (beamon){
image(thesamples[whichone], width/2 , height/3, thesamples[whichone].width, thesamples[whichone].height);
//var r = rSlider.value()
 //filter(BLUR,r);
}
if (!beamon){
  //var r = rSlider.value()
//   filter(BLUR,r);
}
{stroke("black");
fill("black");
rect(120, 55, 60, 60);
fill("black");
triangle(120, 115, 180, 115, 150, 150);
noFill();
rect(450, 300, 228, 164)}
{stroke(200);
fill(200);
rect(100, 175, 15, 50);
fill(200);
rect(100, 300, 15, 50);
fill(200);
rect(185, 175, 15, 50);
fill(200);
rect(185, 300, 15, 50)
}
{stroke(30);
fill(30);
rect(118, 400, 60, 10)
}
{stroke(70);
fill(70);
ellipse(210, 355, 10, 20)
fill(70)
quad(210, 345, 210, 365, 300, 405, 300, 315)
}
{noFill();
beginShape();
vertex(300, 360);
bezierVertex(380, 300, 380, 375, 450, 375);
endShape();
}
if (beamon){
  {stroke("blue");
  fill("white");
  beginShape();
  vertex(150, 150);
  vertex(185, 200);
  vertex(150, 250);
  vertex(185, 325);
  vertex(150, 400);
  endShape();
beginShape();
vertex(150, 150);
vertex(115, 200);
vertex(150, 250);
vertex(115, 325);
vertex(150, 400);
endShape()
}
stroke("blue");
fill("blue");
ellipse(150, 398, 1.5, 1.5);
fill("blue");
ellipse(154, 395, 1.5, 1.5);
fill("blue");
ellipse(158, 392, 1.5, 1.5);
fill("blue");
ellipse(162, 389, 1.5, 1.5);
 fill("blue");
 ellipse(166, 386, 1.5, 1.5);
 fill("blue");
 ellipse(170, 383, 1.5, 1.5);
 fill("blue");
 ellipse(174, 380, 1.5, 1.5);
 fill("blue");
 ellipse(178, 377, 1.5, 1.5);
 fill("blue");
 ellipse(182, 374, 1.5, 1.5);
 fill("blue");
 ellipse(186, 371, 1.5, 1.5);
 fill("blue");
 ellipse(190, 368, 1.5, 1.5);
 fill("blue");
 ellipse(194, 365, 1.5, 1.5);
 fill("blue");
 ellipse(198, 362, 1.5, 1.5);
 fill("blue");
 ellipse(202, 359, 1.5, 1.5);
}
if (!beamon){}
}
  function turnonoff() {
   if (!beamon){
     beamon = true;

     onoff.html("turn off");
     return
   }
   if (beamon){
     beamon = false;
     onoff.html("turn on");
     return
   }
 }
function changethesample() {
if (whichone == 8) {
  whichone = 0
}
else {
  whichone = (whichone + 1);
}
}
