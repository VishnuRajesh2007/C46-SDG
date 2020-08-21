class Rope{
    constructor(bodyA,pointB){
    var option={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.0,
       length:player.body.y
    }
    this.rope=Constraint.create(option);
    World.add(world,this.rope);
    this.pointB=pointB;
    }
    display(){
        strokeWeight(4);
        stroke(255);
       line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y) ;
    }
    fly(){
    this.rope.bodyA=null;

    }
    attach(){
    this.rope.bodyA=player.body;
    }
    }