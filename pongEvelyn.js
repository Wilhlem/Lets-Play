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
  mybg.h = (mybg.h + 0.1) % 360;
  background(color(mybg.h, mybg.s, mybg.l));
  fill(color(mybg.h+180, mybg.s, mybg.l))
  noStroke();
  circle(xBall, yBall ,d)

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
  
  /* Colliding 
  if(xBall >= mouseX+10 || xBall <= mouseX+90){
    xSpeed *= -1;
    //console.log(xSpeed);
  } 

  if(yBall >= 100 || yBall <= windowHeight-40){
    ySpeed *= -1;
    //console.log(ySpeed);
  } */



  // TO DO 1: Bringe den Balken dazu der Maus auf der x-Achse zu folgen.

  // TO DO 2: Schaffst du es, dass sich der Ball frei bewegt?

  // TO DO 3: Lass den Ball von den Seitenrändern abprallen (windowWidth/windowHeight)

  // TO DO 4: Lass den Ball vom Balken aprallen, falls sie sich berühren

}