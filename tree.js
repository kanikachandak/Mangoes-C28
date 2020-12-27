class Tree
{
    constructor(x, y, width, height)
    {
        this.img=loadImage("Sprites/tree.png");
        this.posX=x;
        this.posY=y;
        this.width=width;
        this.height=height;
    }
    display()
    {
        imageMode(CENTER);
        image(this.img, this.posX, this.posY, this.width, this.height);
    }
}