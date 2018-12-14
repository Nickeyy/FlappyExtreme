var pipes = [];
var bird;
var bg;
var bat;
var bgx=0;
var parallax = 0.8;
var canvas; 
var pipePic;
var pipePic2;
var bgMusic;
var score = 0;
var maxscore = 0;


function preload() {
    bg = loadImage('../../res/backGroundGame.jpg');
    bat = loadImage('../../res/bird/main.png');
    pipePic = loadImage('../../res/pipe/sharp_wood.png');
    pipePic2 = loadImage('../../res/pipe/sharp_wood2.png');
    soundFormats('mp3', 'ogg');
    bgMusic = loadSound('../../res/bgMusic.mp3'); 
}

function setup(){

    bird = new Bird();
    pipes.push(new Pipe());
    canvas = createCanvas(700, 920);
    canvas.class('canvas-bg');
    bgMusic.setVolume(0.2);
    bgMusic.play(); 

}   

function draw(){
   
    background(0);
    image(bg,bgx,0,bg.width,height);

    for(var i = pipes.length-1; i >= 0; i--){
        pipes[i].show();
        pipes[i].update();

        if(pipes[i].hits(bird)){
            console.log("HIT");
        }
        if(pipes[i].pass(bird)){
            score++;
        }

        if(pipes[i].offscreen()){
            pipes.splice(i, 1);
        }
    }
    bird.update();
    bird.show();


    if (frameCount % 140 ==0){
        pipes.push(new Pipe());
    }
    showScores();

    function showScores(){
        textSize(32);
        fill(255); 
        text('score: ' + score,1,32);
        text('record: ' + maxscore,1,64);
    }
}

function keyPressed(){
    if(key == ' '){
        bird.up();
    }
}
