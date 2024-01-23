// Difficulty Button [easy,medium,hard] like this but in index form [0,1,2]
const diffBtn = document.getElementsByClassName('diff-btn');
const gameOverModal = document.getElementById('gameOverModal');
const gameStartModal = document.getElementById('gameStartModel');
const scoreSpan = document.getElementById('scoreid');
const playAgainBtn = document.getElementById('playAgainModal');
const liveSpan = document.getElementById('liveSpanId');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//decrease the value for more speed
const speed = 100;
var mouseY = undefined;
var mouseX = undefined;
var enemyTimer = undefined;
var circleTimer = undefined;
var lives = 0;
var score = 0;
var timeInterval = 1000;
var circleRadius = 5;
var enemyRadius =10;
var running = false;
var ballYPlace = undefined;
var ballYPower = 1.5;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight/2;

var circleArray = [];
var enemyArray = [];
var particleArray = [];


// Easy Mode
diffBtn[0].addEventListener('click',()=>{
    lives = 3;
    timeInterval = 1000;
    circleRadius = 6;
    enemyRadius = 5;
    gameStartModal.style.display = 'none';
    init();
});


// Medium Mode
diffBtn[1].addEventListener('click',()=>{
    lives = 2;
    timeInterval = 500;
    circleRadius = 5;
    enemyRadius = 5;
    gameStartModal.style.display = 'none';
    init();
});


// Hard Mode
diffBtn[2].addEventListener('click',()=>{
    lives = 1;
    timeInterval = 200;
    circleRadius = 3;
    enemyRadius = 3;
    gameStartModal.style.display = 'none';
    init();
});

window.addEventListener('load',(e)=>{
    mouseY = e.clientY * 50;
    mouseX = e.clientX;
    liveSpan.innerText = lives+'';
    scoreSpan.innerText = score+'';
    ballYPlace = canvas.height/2
});

window.addEventListener('resize',()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.addEventListener('mousemove',(e)=>{
    mouseY = e.clientY;
    mouseX = e.clientX;

    if(ballYPlace <= mouseY){
        ballYPower = 2;
    }
    else{
        ballYPower = 1.5;
    }
});

playAgainBtn.addEventListener('click',()=>{
    gameOverModal.style.display = 'none';
    reset();
    init();
});



function enemyTimerMethod(){
    if(running){
        enemyTimer = setInterval(() => {
            enemyArray.push(new Enemy(canvas.width+100,canvas.height,5,0,enemyRadius,Math.random()*100,ctx));
        }, timeInterval);    
    }
}

function circleTimerMethod(){
    if(running){
        circleTimer = setInterval(() => {
            circleArray.push(new Circle(0,ballYPlace,((mouseX)/speed),(((500-mouseY)/speed)*(-ballYPower)),circleRadius,ctx));
        }, 50);
    }
}

function animate(){
    if(running){
        requestAnimationFrame(animate);
        ctx.clearRect(0,0,innerWidth,innerHeight);
        // ctx.fillStyle = 'rgba(0,0,0,0.1)';
        // ctx.fillRect(0,0,canvas.width,canvas.height);

        enemyArray.forEach((element ,index)=> {
            element.update();

            if(element.x < 0 - element.radius*2){
                liveSpan.innerText = --lives+'';
                enemyArray.splice(index,1);
                clearInterval(circleTimer);
                circleTimerMethod();
            }
        });

        circleArray.forEach((element,circleIndex) => {
                element.update();
            
                if(lives <= 0){
                    document.getElementById('scoreidModal').innerText  = score+'';
                    gameOverModal.style.display = 'block';
                    running = false;
                }

                if(element.x > canvas.width){
                    circleArray.splice(circleIndex,1);
                }
            
                enemyArray.forEach((enemy,enemyIndex) => {
                    var c1 = enemy.x - element.x;
                    var c2 = enemy.y - element.y;
                    var rad = enemy.radius + element.radius;

                    if( (c1*c1 + c2*c2) < (rad*rad) ){
                        for(let i=0;i<10;i++){
                            particleArray.push( new Particle(element.x,element.y,3,Math.sin(Math.random()*5)*5,Math.cos(Math.random()*5)*5,ctx) );
                        }
                        scoreSpan.innerText = ++score+'';
                        enemyArray.splice(enemyIndex,1);
                        circleArray.splice(circleIndex,1);
                        clearInterval(enemyTimer);
                        enemyTimerMethod();
                        if(timeInterval > 200){
                            timeInterval -= 5;
                        }
                    }
                });

                if(element.y <= 0 || element.y > canvas.height){
                    element.dy *= -1;
                }
            });

            if(particleArray.length > 0){
                particleArray.forEach((particle,index) => {
                    if(particle.alpha < 0){
                        particleArray.splice(index,1);
                    }
                    particle.update();
                });
            
            }
    }
    
        
}

function init(){
    running = true;
    enemyTimerMethod();
    circleTimerMethod();
    animate();    
}

function reset(){
    clearInterval(enemyTimer);
    clearInterval(circleTimer);
    liveSpan.innerText = (lives = 3)+'';
    scoreSpan.innerText = (score = 0)+'';
    timeInterval = 1000;
    enemyArray = [];
    circleArray = [];
}

// init();