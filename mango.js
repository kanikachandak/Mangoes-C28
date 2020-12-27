class Mango 
{
    constructor(x, y, width, height)
    {
        var options= {isStatic:true, friction:1};
        this.body=Bodies.circle(x, y, 10, options);
        this.radius=10;
        this.width=width;
        this.height=height;
        this.img=loadImage("Sprites/mango.png");
        World.add(world, this.body);
    }
    display()
    {
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.img, 0, 0, this.width, this.height);
        pop()
    }
}