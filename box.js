class Box{
    constructor(x,y,width,height){
       var ball_options ={
            restitution: 1.0
        }
    
       this.body= Bodies.rectangle(x,y,width,height,ball_options);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill ("white");
        stroke ("teal");
        strokeWeight(3);
        angleMode(RADIANS);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop ();
    }
}