// snake body
const SNAKE_WIDTH = 40;
const SNAKE_HEIGHT = 40;
export default class SnakeBody {
  constructor(x, y, parent, child) {
    this.x = x;
    this.y = y;
    this.parent = parent;
    this.child = child;
    this.pCor = { x: 0, y: 0 };
  }

  draw(context) {
    context.fillRect(this.x, this.y, SNAKE_WIDTH, SNAKE_HEIGHT);
  }

  moveRight(velocity) {
    this.pCor.x = this.x;
    this.child.x = this.x;
    this.x += velocity;
  }

  moveDown(velocity) {
    this.pCor.y = this.y;
    this.y += velocity;
  }

  moveLeft(velocity) {
    this.pCor.x = this.x;
    this.x -= velocity;
  }

  moveUp(velocity) {
    this.pCor.y = this.y;
    this.y -= velocity;
  }

  changeCor(x, y) {
    this.pCor.x = this.x;
    this.pCor.y = this.y;
    this.x = x;
    this.y = y;
  }
}
