function setup() {
    canvas = createCanvas(700, 600);
    canvas.position(110, 225);
    camerafeed = createCapture(VIDEO);
    camerafeed.hide();
}

function draw() {
    image(camerafeed, 0, 50, 400, 300);

    fill(35, 145, 245);
  stroke(35, 145, 245);
  square(0, 340, 60, 10);
  square(340, 340, 60, 10);
  square(340, 60, 60, 10);
  square(0, 60, 60, 10);

  fill(167, 55, 201);
  stroke(167, 55, 201);
  circle(200, 50, 40);
  circle(200, 340, 40);

  fill(247, 204, 0);
  stroke(247, 204, 0);
  circle(0, 200, 40);
  circle(400, 200, 40);
  circle(0, 230, 40);
  circle(400, 230, 40);
}

function take_snapshot() {
    save("Something.jpeg");
}