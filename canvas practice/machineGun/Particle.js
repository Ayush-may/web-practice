class Particle{
    constructor(x,y,radius,dx,dy,ctx){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.ctx = ctx;
        this.alpha = 1;
    }

    draw(){
        this.ctx.save();
        this.ctx.globalAlpha = `${this.alpha}`;
        this.ctx.beginPath();
        this.ctx.fillStyle = 'white';
        this.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        this.ctx.fill();
        this.ctx.restore();
    }

    update(){
        this.x += this.dx;
        this.y += this.dy;
        this.alpha -= 0.01;
        this.draw();
    }
}