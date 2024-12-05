let c = 0;
let points = 1000;
let pointin = 0;
let rad = 400;
let listo = true;
let allPoints = [];

function setup() {
  const canvas = createCanvas(400, 400);
  canvas.parent('canvas-container');
  frameRate(60);
}

function drawPoint() {
  const randomX = random(width);
  const randomY = random(height);
  const distance = sqrt((randomX - width / 2) ** 2 + (randomY - height / 2) ** 2);
  const isInside = distance <= rad / 2;
  allPoints.push({ x: randomX, y: randomY, inside: isInside });
}

function draw() {
  background(52);
  noFill();
  stroke('black');
  strokeWeight(2);
  rect(0, 0, width, height);
  ellipse(width / 2, height / 2, rad);

  noStroke();
  allPoints.forEach(point => {
    fill(point.inside ? 'green' : 'red');
    ellipse(point.x, point.y, 6, 6);
  });

  const batchSize = max(1, floor(points / 100));
  for (let i = 0; i < batchSize && c < points; i++) {
    drawPoint();
    c++;
    if (allPoints[allPoints.length - 1]?.inside) {
      pointin++;
    }
  }

  if (c >= points) {
    const pi = 4 * (pointin / points);
    textSize(18);
    fill(255);
    text(
      `Approximation of π with ${points} points:\n${pi.toFixed(6)}`,
      20,
      height / 2
    );
    noLoop();
  }
}

const pointsSlider = document.getElementById("points-slider");
const pointsValue = document.getElementById("points-value");

pointsSlider.addEventListener("input", () => {
  points = parseInt(pointsSlider.value);
  pointsValue.textContent = `Points: ${points}`;
});

const restartButton = document.getElementById("restart-btn");
restartButton.addEventListener("click", () => {
  c = 0;
  pointin = 0;
  allPoints = [];
  listo = true;
  loop();
  clear();
});
