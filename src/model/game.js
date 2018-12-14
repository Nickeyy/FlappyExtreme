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
let timer =5;
var start = true;
var parallax = 0.8;
var bg2;


function preload() {
    bg = loadImage('../../res/backgroundbg.png');
    bg2 = loadImage('../../res/bg2.jpg');
    bat = loadImage('../../res/bird/main.png');
    pipePic = loadImage('../../res/pipe/sharp_wood.png');
    pipePic2 = loadImage('../../res/pipe/sharp_wood2.png');
    soundFormats('mp3', 'ogg');
    bgMusic = loadSound('../../res/bgMusic.mp3'); 
}

function setup(){

    bird = new Bird();
    pipes.push(new Pipe());
    canvas = createCanvas(700, 940);
    canvas.class('canvas-bg');
    bgMusic.setVolume(0.2);
    bgMusic.play(); 

}   


function draw(){
   
    background(0);
    image(bg,bgx,0,bg.width,height);

    bgx -= pipes[0].speed * parallax;

    if (bgx <= -bg.width + width) {
        image(bg, bgx + bg.width, 0, bg.width, height);
        if (bgx <= -bg.width) {
          bgx = 0;
        }
      }

    for(var i = pipes.length-1; i >= 1; i--){
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

    if (frameCount % 140 == 0) {
        pipes.push(new Pipe());
      }
    showScores();
    function showScores(){
        textSize(32);
        fill(255); 
        text('score: ' + score,0,32);
        text('record: ' + maxscore,0,64);
    }
    bird.update();
    bird.show();
}


function keyPressed(){
    if(key == ' '){
        bird.up();
    }
}
