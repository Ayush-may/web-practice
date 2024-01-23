class Circle{
    constructor(x,y,dx,dy,radius,ctx){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.ctx = ctx;
        this.gravity = 2;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = 'white';
        this.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        this.ctx.fill();
    }

    update(){
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }

}