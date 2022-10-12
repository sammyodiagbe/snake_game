// import Tile from "./Tile.js";

import Tile from "./Tile.js";

const WORLD_WIDTH = window.innerWidth;
const WORLD_HEIGHT = window.innerHeight;
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

canvas.style.width = WORLD_WIDTH;
canvas.style.height = WORLD_HEIGHT;

const tile = new Tile(40, 100);

function draw() {
  context.clearRect(0, 0, WORLD_WIDTH, WORLD_HEIGHT);
  tile.draw(context);
}

function update() {
  draw();
  requestAnimationFrame(update);
}

update();
