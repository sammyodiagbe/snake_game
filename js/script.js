// import Tile from "./Tile.js";

import Tile from "./Tile.js";
import SnakeBody from "./Snakebody.js";

const WORLD_WIDTH = window.innerWidth;
const WORLD_HEIGHT = window.innerHeight;
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

canvas.width = WORLD_WIDTH;
canvas.height = WORLD_HEIGHT;

const tile = new Tile(40, 100);

let head = new SnakeBody(100, 40, null, null);
let body1 = new SnakeBody(head.x, head.y, head);
let body2 = new SnakeBody(body1.x, body1.y, body1);
let body3 = new SnakeBody(body2.x, body2.y, body2);

body1.child = body2;
body2.child = body3;
head.child = body1;
let snakes = [head, body1, body2, body3];

console.log(snakes);

window.addEventListener("keydown", (event) => {
  if (event.key == "ArrowRight") {
    if (snakes.length > 1) {
      for (let x = 0; x < snakes.length; x++) {
        if (snakes[x].child == null) break;
        snakes[x].child.changeCor(snakes[x].x, snakes[x].y);
      }
    }
    head.moveRight(40);
    console.log(snakes);
  }
  if (event.key == "ArrowUp") {
    if (snakes.length > 1) {
      for (let x = 0; x < snakes.length; x++) {
        if (x + 1 == snakes.length) break;
        snakes[x].child.changeCor(snakes[x].x, snakes[x].y);
      }
    }
    head.moveUp(40);
    console.log(snakes);
  }
  if (event.key == "ArrowDown") {
    if (snakes.length > 1) {
      for (let x = 0; x < snakes.length; x++) {
        if (x + 1 == snakes.length) break;
        snakes[x].child.changeCor(snakes[x].x, snakes[x].y);
      }
    }
    head.moveDown(40);
    console.log(snakes);
  }
  if (event.key == "ArrowLeft") {
    if (snakes.length > 1) {
      for (let x = 0; x < snakes.length; x++) {
        if (x + 1 == snakes.length) break;
        snakes[x].child.changeCor(snakes[x].pCor.x, snakes[x].pCor.y);
      }
    }
    head.moveLeft(40);
    console.log(snakes);
  }
});

function draw() {
  context.clearRect(0, 0, WORLD_WIDTH, WORLD_HEIGHT);
  for (let snake of snakes) {
    snake.draw(context);
  }
  tile.draw(context);
}

function update() {
  draw();
  requestAnimationFrame(update);
}

update();
