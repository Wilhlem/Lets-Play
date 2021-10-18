let xBall;
let yBall;

let xSpeed = 2;
let ySpeed = 5;
let score = 0
let d = 20

//let triangle = (xBall,yBall,xBall+d,yBall,xBall+d/2,yBall+d)

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

  // Cursor BOTTOM
  rect(mouseX,windowHeight-50, 100, 10);
  triangle(mouseX,windowHeight-40, mouseX+10,windowHeight-40, mouseX+5,windowHeight-60);
  triangle(mouseX+90,windowHeight-40, mouseX+100,windowHeight-40, mouseX+95,windowHeight-60);

  // Cursor TOP
  rect(mouseX,80, 100, 10);
  triangle(mouseX,80, mouseX+10,80, mouseX+5,100);
  triangle(mouseX+90,80, mouseX+100,80, mouseX+95,100);
  
  // Ball
  if (mouseIsPressed) {
    fill(color(mybg.h, mybg.s, mybg.l))
    //strokeWeight(5)
    circle(xBall, yBall, d/2);
  }else{
    noStroke()
    circle(xBall, yBall, d);
  }
  //triangle = (xBall,yBall,xBall+d,yBall,xBall+d/2,yBall+d)
 
  xBall += xSpeed;
  yBall += ySpeed; 

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


  // TO DO 1: Bringe den Balken dazu der Maus auf der x-Achse zu folgen.

  // TO DO 2: Schaffst du es, dass sich der Ball frei bewegt?

  // TO DO 3: Lass den Ball von den Seitenrändern abprallen (windowWidth/windowHeight)

  // TO DO 4: Lass den Ball vom Balken aprallen, falls sie sich berühren

}
