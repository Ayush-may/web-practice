class Enemy{
    constructor(windowWidth,windowHeight,dx,dy,radius,level,ctx){
        this.x = windowWidth;
        this.y = (windowHeight * Math.random());
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.level = level;
        this.ctx = ctx;
    }

    draw(){
        this.ctx.beginPath();
        this.ctx.fillStyle = 'red';
        this.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        this.ctx.fill();
    }

    update(){
        this.x -= this.dx;
        this.draw();
    }

}