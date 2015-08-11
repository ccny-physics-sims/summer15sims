var bg;
var img;
function setup() {
 // create canvas
 createCanvas(720, 400);

 textSize(15)



 //noStroke();


 // create sliders
 rSlider = createSlider(50, 420, 40);
 rSlider.translate(-710, 20)
 bg = loadImage("surface.jpg");
}


function draw() {
  background(bg);
var r = rSlider.value();
push();
fill(204);

if(r<150)
{
translate(r+1,sin(frameCount*1.20));
}

else if(150<=r && r<290)
{
  translate(r+1,-25+sin(frameCount*1.20));
}

else if(290<=r && r<450)
{
  translate(r,10+sin(frameCount*1.20));
}

//triangle(80,50,90, 115, 90, 50);
beginShape();
vertex(20, 70);//top 3 points
vertex(80, 70);
vertex(90, 70);

vertex(90, 80);

vertex(85, 110); //middle point
vertex(80,80)
vertex(20, 80);
endShape(CLOSE);
//translate(r+1,0);
push();
fill(255);
noStroke();

rect(112, 285, 370, 60);
translate(r+1,0);
pop();



}
