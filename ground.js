class Ground{
constructor(x,y,w,h){
    var jasonStructure={isStatic:true}

    this.body =Matter.Bodies.rectangle(x,y,w,h,jasonStructure) ;
    Matter.World.add(galaxy,this.body);
    this.color="brown";
    this.width = w;
    this.height = h;
    
} 
display(){
  rectMode(CENTER);
  push();
  fill(this.color);
  rect(this.body.position.x,this.body.position.y,this.width,this.height);
  pop();
}
}    









