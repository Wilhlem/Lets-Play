var xBall = getRandomInt;
var yBall = getRandomInt;
var xSpeed = 2;
var ySpeed = 5;
var score = 0
var d = 50

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
xBall = random(0, width)
yBall = random(0, height)
}

function draw() {
  // Background
  background(0);
  fill(255);
  circle(xBall,yBall,d)

  xBall = xBall + xSpeed
  yBall = yBall + ySpeed

  if(xBall > width - d/2   xBall < d/2){
    xSpeed = -xSpeed
  }

  if(yBall > height - d/2   yBall < d/2){
    ySpeed = -ySpeed
  }
}
  // Score
  //textSize(24);
  //text("Score: " + score, 10, 25);


  //rect(0,windowHeight-15, 90, 15);

  // TO DO 1: Bringe den Balken dazu der Maus auf der x-Achse zu folgen. 

 // xBall += xSpeed;
  //ellipse(xBall, windowHeight/2, 20, 20);
  // TO DO 2: Schaffst du es, dass sich der Ball frei bewegt?

 // if(xBall>windowWidth-10){
   // xSpeed *= -1;

  // TO DO 3: Lass den Ball von den Seitenrändern abprallen (windowWidth/windowHeight)

  // TO DO 4: Lass den Ball vom Balken aprallen, falls sie sich berühren