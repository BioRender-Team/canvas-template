function draw(ctx) {
  // clear the canvas
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // center the canvas
  ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);

  // styles
  ctx.strokeStyle = "#333";
  ctx.lineWidth = 1;

  drawFractal(ctx, 3, -200, 0, 200, 0, "triangle");
}

function rotateCanvasAroundPoint(ctx, x, y, angle) {
  ctx.translate(x, y);
  ctx.rotate((angle * Math.PI) / 180);
  ctx.translate(-x, -y);
}

function drawTriangle(ctx, x1, y1, x2, y2, angle) {
  const lineLength = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  const sideLength = Math.sqrt((lineLength * lineLength) / 2);

  rotateCanvasAroundPoint(ctx, x1 + lineLength / 2, y1, angle);

  // drawLine(ctx, x1, y1, x2, y2);

  // rotate around first point, draw first side
  rotateCanvasAroundPoint(ctx, x1, y1, -45);
  drawLine(ctx, x1, y1, x1 + sideLength, y1);
  rotateCanvasAroundPoint(ctx, x1, y1, 45);

  // rotate around last point, draw second side
  rotateCanvasAroundPoint(ctx, x2, y2, 45);
  drawLine(ctx, x2 - sideLength, y2, x2, y2);
  rotateCanvasAroundPoint(ctx, x2, y2, -45);

  rotateCanvasAroundPoint(ctx, x1 + lineLength / 2, y1, -angle);
}

function drawLine(ctx, x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function drawFractal(ctx, n, x1, y1, x2, y2, type = "line", angle = 0) {
  if (type === "line") {
    drawLine(ctx, x1, y1, x2, y2);
  } else {
    drawTriangle(ctx, x1, y1, x2, y2, angle);
  }

  if (n > 0) {
    const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    drawFractal(
      ctx,
      n - 1,
      x1,
      y1 + 40,
      x1 + (x2 - x1) / 3 - (0.1 * (x2 - x1)) / 3,
      y2 + 40,
      type
    );

    drawFractal(
      ctx,
      n - 1,
      x1 + (x2 - x1) / 3 - (0.1 * (x2 - x1)) / 3,
      y1 + 40,
      x1 + (2 * (x2 - x1)) / 3 - (0.1 * (x2 - x1)) / 3,
      y2 + 40,
      type
    );

    drawFractal(
      ctx,
      n - 1,
      x1 + (2 * (x2 - x1)) / 3 - (0.1 * (x2 - x1)) / 3,
      y1 + 40,
      x2,
      y2 + 40,
      type
    );
  }
}

// Some biolerplate to draw on the fullscreen canvas

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

function onResize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  draw(context);
}

window.addEventListener("load", onResize);
window.addEventListener("resize", onResize);
