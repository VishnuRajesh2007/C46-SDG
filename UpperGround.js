class UpperGround{

constructor(){
var properties={
    isStatic:true
}
this.body=Bodies.rectangle(0,10,displayWidth-75,10,properties);
World.add(world,this.body);
this.width=displayWidth-3;
this.height=10;
}
display(){
var pos=this.body.position;
var w =this.width;
var h =this.height
fill(255,0,0);
rect(pos.x,pos.y,w,h)

}

}