var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var mouse = {
    x:undefined,
    y:undefined
}

window.addEventListener('mousemove',(event)=>{
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('resize',(event)=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
});

function init(){
    var dx = (Math.random() - 0.5) * 10;
    var dy = (Math.random() - 0.5) * 10;
    var x = Math.random() * (innerWidth - radius*2) + radius;
    var y = Math.random() * (innerHeight - radius*2) + radius;
    var radius = 10;
    var randomColor = ['blue','red','black','yellow','tomato','yellowgreen'];
    var cnt = Math.floor(Math.random() * 6);
    var color = randomColor[cnt];
    circleArray.push(new Circle(x,y,dx,dy,radius,color));    
}

function Circle(x,y,dx,dy,radius,color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;

    this.draw = function() {
        c.fillStyle = `${color}`;
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        // c.stroke();        
        c.fill();
    }

    this.update = function(){
        if(this.y+this.radius > innerHeight || this.y-this.radius < 0){
            this.dy = -this.dy;
        }
    
        if(this.x+this.radius> innerWidth || this.x-this.radius < 0){
            this.dx = -this.dx;
        }
    
        this.y += this.dy;
        this.x += this.dx; 
        
        this.draw();
        
       if( mouse.x - this.x < 100 && 
            mouse.x - this.x > -100 &&
            mouse.y - this.y < 100 &&
            mouse.y - this .y > -100
        ){
            if(this.radius < 50){this.radius +=10;}
       }
       else{
            if(this.radius > 0){this.radius -=5;}
       }

    }
}

// var circle = new Cirlce(100,100,5,5,30);

var dx = (Math.random() - 0.5) * 100;
var dy = (Math.random() - 0.5) * 100;
var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var radius = 30;

var circleArray = [];

for(i=0;i<1000;i++){
    var dx = (Math.random() - 0.5) * 10;
    var dy = (Math.random() - 0.5) * 10;
    var x = Math.random() * (innerWidth - radius*2) + radius;
    var y = Math.random() * (innerHeight - radius*2) + radius;
    var radius = 10;
    var randomColor = ['blue','red','black','yellow','tomato','yellowgreen'];
    var cnt = Math.floor(Math.random() * 6);
    var color = randomColor[cnt];
    circleArray.push(new Circle(x,y,dx,dy,radius,color));
}

console.log(circleArray)


function  animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);

    for(var i=0;i<circleArray.length;i++){
        circleArray[i].update();
    }
}

animate();