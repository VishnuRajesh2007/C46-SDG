class Player{

    constructor(x,y,r){
    var properties={
        isStatic:false
    }
    this.body=Bodies.circle(x,y,r,properties);
    World.add(world,this.body);
    }
    
    display(){
    var pos=this.body.position;
    var r =this.r;
    fill(255,0,0);
    ellipse(pos.x,pos.y,r)
    
    }
    
    }