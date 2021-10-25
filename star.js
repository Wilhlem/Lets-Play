function setup() {
    createCanvas(500, 500);
    colorMode(HSL)
    fill (180,100,50)
    noStroke()
  }
  
  function draw() {
    background(300,100,50);
  
    push();
    translate(width * 0.2, height * 0.2);
    rotate(frameCount / 100.0);
    star(0, 0, 5, 70, 70);
    pop();
  
    push();
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / 50.0);
    star(0, 0, 70, 150, 120);
    pop();
  
    push();
    translate(width * 0.8, height * 0.8);
    rotate(frameCount / -100.0);
    star(0, 0, 30, 70, 70);
    pop();
  }
  
  function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }