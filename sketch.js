const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var upperGround;
var player;
var rope;
var mouseBody;
var x1;
var gameState=0,PLAY=0,END=1
function setup(){
    var canvas = createCanvas(displayWidth-3,displayHeight-75);
    x1=0;
    engine = Engine.create();
    world = engine.world;
   // upperGround=new UpperGround();
    player=new Player(300,displayHeight/2-75,50);
    rope=new Rope(player.body,{x:x1,y:12}); 



}

function draw(){
  background(0);
  console.log(gameState);
  console.log(player.body.position.y);
  Engine.update(engine);
  if(mouseIsPressed){
   rope.attach(); 
  }
  if((player.body.position.y>displayHeight||player.body.position.y<0)&&rope.rope.bodyA===null){
   gameState=1

  }
  if(gameState===1){
  }
  stroke(255,0,0);
  strokeWeight(6);
  line(0,10,displayWidth-75,10);
    //upperGround.display();
    player.display();
   if(rope.rope.bodyA){
    rope.display();
   }
    fill(255);
    noStroke();

}

function mouseReleased(){
rope.fly();

}
function mouseDragged(){
  rope.pointB.x=mouseX
  rope.attach();
}