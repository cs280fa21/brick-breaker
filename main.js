import Ball from "./model/Ball.js";
import Paddle from "./model/Paddle.js";
import "./style.css";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const ball = new Ball(
  canvas.width / 2,
  canvas.height - 30,
  10,
  10,
  "#0095DD",
  2,
  -2
);

const paddle = new Paddle(
  (canvas.width - 10) / 2,
  canvas.height - 10,
  75,
  10,
  "#0095DD"
);

let isGameOver = false;
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ball.draw(ctx);
  ball.move();
  isGameOver = !ball.bounce(canvas.width, canvas.height);

  paddle.draw(ctx);
  paddle.move(canvas.width);

  ball.colides(paddle);

  if (!isGameOver) {
    window.requestAnimationFrame(draw);
  } else {
    window.alert("Game over!");
  }
}

draw();
