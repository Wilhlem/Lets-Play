let xBall;
let yBall;
let xSpeed = 2;
let ySpeed = 5;
let score = 0;
let d = 20;

let mybg = {
  h: 0,
  s: 100,
  l: 50
} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  xBall = random(0,width);
  yBall = random(0,height); 
  colorMode(HSL, 360, 100, 100);
  blendMode(SUBTRACT);
}

function draw() {
  // Background
  mybg.h = (mybg.h + 0.01) % 360;
  background(color(mybg.h, mybg.s, mybg.l));
  fill(color(mybg.h+180, mybg.s, mybg.l))
  noStroke();
  circle(xBall, yBall ,d)
  
  // Score
  textSize(48);
  textFont('Breitkopf FrakturUNZ1L');
  text("Score: " + score, 15, 45);

  // Cursor


  
  // function CURSOR
  function cursor(){
    beginShape();
    rect(mouseX, windowHeight-50, 100, 10);
    triangle(mouseX,windowHeight-40, mouseX+10,windowHeight-40, mouseX+5,windowHeight-60);
    triangle(mouseX+90,windowHeight-40, mouseX+100,windowHeight-40, mouseX+95,windowHeight-60);
    endShape(CLOSE);
  }


  
  //Heart
  if (mouseIsPressed) {
    //fill(color(mybg.h180, mybg.s, mybg.l))
    heart (xBall, yBall-d/2, (3/2) * d)
  }else{
    circle (xBall, yBall, d);
  }

  //Function HEART
  function heart (x,y,size){
    beginShape();
     vertex(x,y);
     bezierVertex(x - size/3, y - size/3, x - size, y + size/10, x, y + size);
     bezierVertex(x + size, y + size/10, x + size/3, y - size/3, x, y);
     endShape(CLOSE);
   }

   xBall += xSpeed;
   yBall += ySpeed; 
 
   // Bounce off Cursor
 function cursor() {
   if ((xBall > mouseX || xBall < mouseX + 90) || (yBall + 10 >= 375)) {
     xSpeed *= -1;
     ySpeed *= -1;
     score++;
   }
 

  /*
   // Cursor BOTTOM
  rect(mouseX,windowHeight-50, 100, 10);
  triangle(mouseX,windowHeight-40, mouseX+10,windowHeight-40, mouseX+5,windowHeight-60);
  triangle(mouseX+90,windowHeight-40, mouseX+100,windowHeight-40, mouseX+95,windowHeight-60);

  // Cursor TOP
  rect(mouseX,80, 100, 10);
  triangle(mouseX,80, mouseX+10,80, mouseX+5,100);
  triangle(mouseX+90,80, mouseX+100,80, mouseX+95,100);

   //BALL
  if (mouseIsPressed) {
    fill(color(mybg.h, mybg.s, mybg.l))
    //strokeWeight(5)
    circle(xBall, yBall, d/2);
  }else{
    noStroke()
    circle(xBall, yBall, d);
  }
  //triangle = (xBall,yBall,xBall+d,yBall,xBall+d/2,yBall+d)
  
  
  //Bouncing
  if(xBall > windowWidth-d/2 || xBall < d/2){
    xSpeed *= -1;
    console.log(xSpeed);
  } 

  if(yBall > windowHeight-d/2 || yBall < d/2){
    ySpeed *= -1;
    console.log(ySpeed);
  }
  
  // Colliding 
  /*if(xBall >= mouseX+10 || xBall <= mouseX+90){
    xSpeed *= -1;
    //console.log(xSpeed);
  } 

  if(yBall > windowHeight-60 || yBall < 100){
    ySpeed *= -1;
    //console.log(ySpeed);
  } */

}
