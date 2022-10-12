export default class Tile {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.tileHeight = 100;
    this.tileWidth = 100;
  }

  draw(context) {
    context.fillRect(this.x, this.y, this.tileWidth, this.tileHeight);
  }
}
