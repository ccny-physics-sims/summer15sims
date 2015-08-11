var xposrand =  new Array();
var yposrand =  new Array();
var dist = new Array();
var stroke = new Array();

function setup() {
// create canvas
var cnv = createCanvas(900, 450);
 cnv.parent("start");
textSize(15)
//noStroke();
fill(30);
for (i=0; i<20;i++){
  xposrand[i]=0;
  yposrand[i]=random(1,30);
  dist[i]=yposrand[i]+113;
  console.log(dist[i]);
}
img = loadImage("STM.jpg");  // Load the image
img2 = loadImage("Example.jpg")

// create sliders
rSlider = createSlider(-25, 360, 100);
rSlider.translate(-765,25)
rSlider.parent("start");
}

function draw() {
clear();
image(img, 500, 0);
image(img2,100,250)
textFont("Georgia")
text ("I,Current",0,190)
line(65,205,65,155)
text ("X, Position",220,220)

for (i = 0; i < 20; i++){
  xpos=(i*20)+70 +xposrand[i];
  ypos=125+yposrand[i];
    fill('blue');
  ellipse(xpos,ypos,20,20)
  line(i*20 +65, dist[i]+60 , i*20 +80 , dist[i]+60)
  line(65,205,460,205)

}
var r = rSlider.value();
fill('red');
translate(r+1,0);
triangle(80,50,85, 113, 90, 50);

}
