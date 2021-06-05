const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boundary1, boundary2, boundary3, boundary4;
var bumper1, bumper2, bumper3, bumper4, bumper5;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10;
var engine, world;
var dome;

var ball;

var stopper1, stopper2, stopper3, stopper4;

var paddl1, paddle2;

var cpoint1, cpoint2;
const PATHS = {
  DOME: [
    0, 0, 0, 250, 19, 250, 20, 231.9, 25.7, 196.1, 36.9, 161.7, 53.3, 129.5,
    74.6, 100.2, 100.2, 74.6, 129.5, 53.3, 161.7, 36.9, 196.1, 25.7, 231.9, 20,
    268.1, 20, 303.9, 25.7, 338.3, 36.9, 370.5, 53.3, 399.8, 74.6, 425.4, 100.2,
    446.7, 129.5, 463.1, 161.7, 474.3, 196.1, 480, 231.9, 480, 250, 500, 250,
    500, 0, 0, 0,
  ],
  DOME_VERTICES:
    "0 0 0 250 19 250 20 231.9 25.7 196.1 36.9 161.7 53.3 129.5 74.6 100.2 100.2 74.6 129.5 53.3 161.7 36.9 196.1 25.7 231.9 20 268.1 20 303.9 25.7 338.3 36.9 370.5 53.3 399.8 74.6 425.4 100.2 446.7 129.5 463.1 161.7 474.3 196.1 480 231.9 480 250 500 250 500 0 0 0",
  DROP_LEFT: "0 0 20 0 70 100 20 150 0 150 0 0",
  DROP_RIGHT: "50 0 68 0 68 150 50 150 0 100 50 0",
  APRON_LEFT: "0 0 180 120 0 120 0 0",
  APRON_RIGHT: "180 0 180 120 0 120 180 0",
};
function preload() {
  var a = loadImage("images/1.png");
  var c = loadImage("images/3.png");
  var d = loadImage("images/4.png");
  var e = loadImage("images/5.png");
  var f = loadImage("images/6.png");
  var g = loadImage("images/7.png");
  var h = loadImage("images/8.png");
  var i = loadImage("images/9.png");
  var j = loadImage("images/10.png");
  var k = loadImage("images/11.png");
  var l = loadImage("images/12.png");
  var m = loadImage("images/13.png");
  var n = loadImage("images/14.jpg");
  var o = loadImage("images/15.png");
}

function setup() {
  createCanvas(500, 800);

  engine = Engine.create();
  world = engine.world;

  boundary1 = new Boundary(250, -30, 500, 100);
  boundary2 = new Boundary(250, 830, 500, 100);
  boundary3 = new Boundary(-30, 400, 100, 800);
  boundary4 = new Boundary(530, 400, 100, 800);
  bumper1 = new Bumper(105, 250);
  bumper2 = new Bumper(225, 250);
  bumper3 = new Bumper(345, 250);
  bumper4 = new Bumper(165, 340);
  bumper5 = new Bumper(285, 340);

  wall1 = new Wall(140, 140, 20, 40, "#15aabf");
  wall2 = new Wall(225, 140, 20, 40, "#15aabf");
  wall3 = new Wall(310, 140, 20, 40, "#15aabf");
  wall4 = new Wall(440, 520, 20, 560, "#495057");

  wall5 = new Wall(120, 510, 20, 120, "#15aabf");
  wall6 = new Wall(330, 510, 20, 120, "#15aabf");

  wall7 = new Wall(60, 529, 20, 160, "#15aabf");
  wall8 = new Wall(390, 529, 20, 160, "#15aabf");

  wall9 = new Wall(93, 624, 20, 98, "#15aabf", -0.96);
  wall10 = new Wall(357, 624, 20, 98, "#15aabf", 0.96);

  // dome = new Path(239, 86, PATHS.DOME_VERTICES);

  ball = new Ball();

  stopper1 = new Stopper(160, 591);
  stopper2 = new Stopper(140, 743);
  stopper3 = new Stopper(290, 591);
  stopper4 = new Stopper(310, 743);

  paddle1 = new Paddle(170, 660, 80, 30, "left");
  paddle2 = new Paddle(280, 660, 80, 30, "right");
  cpoint2 = new ConstraintPoint(paddle2.body, { x: 110, y: 660 }, 1, 0);
  cpoint1 = new ConstraintPoint(paddle1.body, { x: 300, y: 660 }, 1, 0);
}

function draw() {
  background(0);
  Engine.update(engine);
  boundary1.display();
  boundary2.display();
  boundary3.display();
  boundary4.display();

  bumper1.display();
  bumper2.display();
  bumper3.display();
  bumper4.display();
  bumper5.display();

  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();

  //dome.display();

  ball.display();

  paddle1.display();
  paddle2.display();
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    Matter.Body.setAngularVelocity(paddle2.body, -0.5);
  }

  if (keyCode === RIGHT_ARROW) {
    Matter.Body.setAngularVelocity(paddle1.body, 0.5);
  }
}
