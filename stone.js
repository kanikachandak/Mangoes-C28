class Stone
{
    constructor(x, y)
    {
        var options= {
            isStatic: false,
            restiution:0,
            density:1.2,
            friction:1
        };
        this.body=Bodies.circle(x,y,40,options);
        this.radius=40;
        this.img=loadImage("Sprites/stone.png");
        World.add(world,this.body)
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.img, 0, 0, 40, 40);
        pop();
    }
}