class Parent{
    constructor(x,y,w,h,angle){
        var jasonStructure={isStatic:false , friction:2}
    
        this.body =Matter.Bodies.rectangle(x,y,w,h,jasonStructure) ;
        Matter.World.add(galaxy,this.body);
        this.color="teal";
        this.width = w;
        this.height = h;
        this.image = loadImage("sprites/base.png");
    } 
    display(){
      imageMode(CENTER);
      var color = this.color;
      var position = this.body.position;
      push();
      translate(position.x,position.y);
      rotate(this.body.angle);
      fill(color);
      image(this.image,0 , 0 , this.width , this.height);
      pop();
    }
    }    
      