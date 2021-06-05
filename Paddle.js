class Paddle {
  constructor(x, y, width, height, type) {
    var options = {
      isStatic: false,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);

    this.width = width;
    this.height = height;
    this.type = type;
    if (this.type == "left") {
      this.image = loadImage("images/15.png");
    } else {
      this.image = loadImage("images/16.png");
    }
  }

  display() {
    var pos = this.body.position;

    image(this.image, pos.x, pos.y, this.width, this.height);
  }
}
