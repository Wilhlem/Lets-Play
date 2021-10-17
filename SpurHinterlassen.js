let shapes = []

let mybg = {
  h: 0,
  s: 100,
  l: 50
}

function setup() {
  createCanvas(400, 400)
  colorMode(HSL, 360, 100, 100)
  blendMode(DIFFERENCE)
  fillColor = color(150, 50, 150, 0.85)

  // Zwei Objekte in den Array «pushen».
  shapes.push({
    x: random() * width,
    y: random() * height,
    dirX: 1,
    dirY: 1,
    hF: random()360,
    hS: random()360
  })

  shapes.push({
    x: random() * width,
    y: random() * height,
    dirX: 1,
    dirY: 1,
    hF: random()360,
    hS: random()360
  })
  // Dies könntest du auch mit einem Loop machen.
}


function draw() {

  // Loop durch den Array
  for (let i = 0; i < shapes.length; i += 1) {
    // Varible mit einzelnem Element aus dem Array 
    let currentShape = shapes[i]

    // Background color
    mybg.h = (mybg.h + 0.1) % 360
    background(color(mybg.h, mybg.s, mybg.l));

    // Einen Kreis zeichnen
    // stroke();
    push()
      fill(color(currentShape.hF, 100, 50));
      stroke(color(currentShape.hS, 100, 50));
      ellipse(currentShape.x, currentShape.y, 10)
    pop()

    // Werte im Objekt ändern
    if (currentShape.x > 350) {
      currentShape.dirX = -random()
    }
    if (currentShape.x < 50) {
      currentShape.dirX = random()
    }
    if (currentShape.y > 350) {
      currentShape.dirY = -random()
    }
    if (currentShape.y < 50) {
      currentShape.dirY = random()
    }

    currentShape.x += currentShape.dirX 
    currentShape.y += currentShape.dirY

    currentShape.hF = (currentShape.hF + 1) % 360
    currentShape.hS = (currentShape.hS + 1) % 360

  }


}