class Box{
    constructor(x,y,width,height){

        var options = {
            'restitution' : 0.8, 
            'friction' : 0.3,
            'density' : 1.0
        }

        this.body = Bodies.rectangle(x,y,width,height, options);
        this.height = height;
        this.width = width;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("aqua");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}