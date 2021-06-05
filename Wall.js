class Wall {
  constructor(x, y, width, height, color, angle = 0) {
    var options = {
      angle: angle,
      isStatic: true,
      chamfer: { radius: 10 },
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
    this.width = width;
    this.height = height;
    this.color = color;
  }
  display() {
    var pos = this.body.position;
    fill(this.color);
    rect(pos.x, pos.y, this.width, this.height);
  }
}
