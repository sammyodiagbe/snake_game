import Snake from "./Snakebody.js";

const WORLD_WIDTH = 800;
const WORLD_HEIGHT = 800;
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

canvas.width = WORLD_WIDTH;
canvas.height = WORLD_HEIGHT;

const snake = new Snake();

function draw() {
  context.clearRect(0, 0, WORLD_WIDTH, WORLD_HEIGHT);
  snake.draw(context);
}

function update() {
  draw();
  requestAnimationFrame(update);
}

update();
