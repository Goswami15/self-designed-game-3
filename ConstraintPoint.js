class ConstraintPoint {
  constructor(body1, pointB, length, stiffness) {
    var options = {
      bodyA: body1,
      pointB: pointB,
      length: length,
      stiffness: stiffness,
    };
    this.constraint = Matter.Constraint.create(options);
    this.pointB = pointB;
    World.add(world, this.constraint);
  }
  display() {
    stroke(143, 89, 46);
    strokeWeight(4);

    var pointA = this.constraint.bodyA;
    var pointB = this.pointB;

    line(pointA.position.x, pointA.position.y, pointB.x, pointB.y);
  }
}
