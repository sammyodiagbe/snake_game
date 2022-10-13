export default class Snake {
  constructor() {
    this.snakes = [
      { x: 160, y: 150 },
      { x: 120, y: 150 },
      { x: 80, y: 150 },
      { x: 40, y: 150 },
    ];

    this.initializeKeyEvents();
  }

  initializeKeyEvents() {
    window.addEventListener("keydown", (event) => {
      if (event.key == "ArrowRight") {
        // console.log(this.snakes);
        this.updatePos();
        // console.log(this.snakes);
        this.snakes[0].x += 40;
      }
    });
  }

  generateFood() {
    //
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
  }
}
