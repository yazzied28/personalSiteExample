var dot = {
  x: 50,
  y: 50,
  diameter: 25,
  color: {
    r: 10,
    g: 100,
    b: 255
  }
}

function setup() {
  //Draw a canvas
  createCanvas(window.innerWidth, window.innerHeight);
  background(255, 0);
}

function draw() {
  dot.color.r = random(100, 255);
  dot.color.b = random(100, 255);

  //noStroke();

  fill(dot.color.r, dot.color.g, dot.color.b);
  ellipse(dot.x, dot.y, dot.diameter, dot.diameter);

  dot.x = random(0, width);
  //Math.random() gives us a number from 0 to 1.
  dot.y = Math.random() * height;
}
