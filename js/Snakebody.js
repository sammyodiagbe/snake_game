export default class Snake {
  constructor() {
    this.snakes = [
      { x: 160, y: 150 },
      { x: 120, y: 150 },
      { x: 80, y: 150 },
      { x: 40, y: 150 },
    ];

    this.movingDirection = 1;

    this.initializeKeyEvents();
    this.generateFood();
  }

  initializeKeyEvents() {
    window.addEventListener("keydown", (event) => {
      if (event.key == "ArrowRight") {
        // console.log(this.snakes);
        // if the snake is going to the left then don't allow it go to the right
        if (this.movingDirection == 0 || this.snakes[0].x + 40 == 800) return;
        this.updatePos();
        // console.log(this.snakes);

        this.snakes[0].x += 40;
        this.movingDirection = 1;
      }

      if (event.key == "ArrowLeft") {
        // if the snk
        if (this.movingDirection == 1 || this.snakes[0].x <= 0) return;
        this.updatePos();
        this.snakes[0].x -= 40;
        this.movingDirection = 0;
      }

      if (event.key == "ArrowUp") {
        // if the snake is going up already
        if (this.movingDirection == 3 || this.snakes[0].y < 0) return;
        this.updatePos();
        this.snakes[0].y -= 40;
        this.movingDirection = 2;
      }

      if (event.key == "ArrowDown") {
        // if the snake is going up already then don't allow the snake go down
        if (this.movingDirection == 2 || this.snakes[0].y + 40 == 800) return;
        this.updatePos();
        this.snakes[0].y += 40;
        this.movingDirection = 3;
      }
    });
  }

  generateFood() {
    const MAX = 761; // 801
    const MIN = 40;
    // generate food in a random position between the screen and while also keeping into account all location of the snake body
    let randomXPosition = this.generateRandomNumber(MIN, MAX);
    let randomYPosition = this.generateRandomNumber(MIN, MAX);

    // create a function that checks to see if the food is in the position of any of the snakes body
    let inSnakeBody = this.checkFoodPosition(randomXPosition, randomYPosition);
    while (inSnakeBody) {
      randomXPosition = this.generateRandomNumber(MIN, MAX);
      randomYPosition = this.generateRandomNumber(MIN, MAX);

      inSnakeBody = this.checkFoodPosition(randomXPosition, randomYPosition);
    }

    return { randomXPosition, randomYPosition };
  }

  generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  checkFoodPosition(positionX, positionY) {
    for (const coordinate of this.snakes) {
      const { x: snakeBodyX, y: snakeBodyY } = coordinate;
      if (
        (positionX >= snakeBodyX && positionX <= snakeBodyX + 40) ||
        (positionY >= snakeBodyY && positionY <= snakeBodyY + 40)
      ) {
        return true;
      }
    }
    return false;
  }

  updatePos() {
    for (let index = this.snakes.length - 2; index >= 0; index--) {
      this.snakes[index + 1] = { ...this.snakes[index] };
    }
    // console.log(arrCopy);
  }
  draw(context) {
    for (const cor of this.snakes) {
      context.fillRect(cor.x, cor.y, 40, 40);
    }

    // this.generateFood();
  }
}
