const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground , Body1 ,ball;

function setup(){
    var canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var Body1_property ={
        restitution : 1.0 
    }
    var ball_property ={
        restitution : 1.5 
    }

    ground = Bodies.rectangle(800,587,1600,40,ground_options);
    World.add(world,ground);

    Body1 = Bodies.circle(200,100,5 , Body1_property);
    World.add(world,Body1);

    ball = Bodies.circle(600,100,10,ball_property)
    World.add(world,ball);
    // console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1600,20);
    ellipseMode(RADIUS);
    strokeWeight(4);
    stroke("white");
    ellipse(Body1.position.x ,Body1.position.y , 10 ,10);
    stroke("green");
    ellipse(ball.position.x,ball.position.y,20,20);
}