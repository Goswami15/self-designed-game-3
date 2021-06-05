class Ball {
  constructor() {
    var options = {
      isStatic: true,
    };
    this.body = Bodies.circle(200, 200, 14, options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    ellipseMode(RADIUS);
    fill("blue");
    ellipse(pos.x, pos.y, 14, 14);
  }
}
