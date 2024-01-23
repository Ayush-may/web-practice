const gravityBar = document.getElementById('gravityBar');
const frictionBar = document.getElementById('frictionBar');
var friction = Number(frictionBar.value);
var gravity = Number(gravityBar.value);
document.getElementById('gravityCountText').value = gravity;
document.getElementById('frictionCountText').value = friction;

frictionBar.addEventListener('input',()=>{
    friction = Number(frictionBar.value);
    document.getElementById('frictionCountText').value = friction;
});

gravityBar.addEventListener('input',()=>{
    gravity = Number(gravityBar.value);
    document.getElementById('gravityCountText').value = gravity;
});

class Circle{
    constructor(c,mouse,radius,color,velocity){
        this.c = c;
        this.x = mouse.x;
        this.y = mouse.y;
        this.radius = radius;
        this.color = color;
        this.velocity =  velocity;
        this.alpha = 1;
        // this.gravity = gravity;
        // this.friction = friction;
    }

    draw(){
        this.c.save();
        // this.c.globalAlpha = `${this.alpha}`;
        this.c.beginPath();
        this.c.fillStyle = `${this.color}`;
        this.c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        this.c.fill();
        this.c.closePath();
        this.c.restore();
    }

    update(){
        this.draw();
        this.velocity.x *= friction;
        this.velocity.y *= friction;
        this.velocity.y += gravity;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= 0.003;
    }

}