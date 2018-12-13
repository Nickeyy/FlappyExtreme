var pipes = [];
var bird;
var bg;
var bat;
var bgx=0;
var canvas; 


function preload() {
    bg = loadImage('../../res/backGroundGame.jpg');
    bat = loadImage('../../res/bird/main.png');
}

function setup(){

    bird = new Bird();
    pipes.push(new Pipe());
    canvas = createCanvas(520, 923);
    canvas.class('canvas-bg'); 

}   

function draw(){
   
    background(0);
    image(bg,bgx,0,bg.width,height);
    bgX -= pipes[0].speed * parallax;

    // this handles the "infinite loop" by checking if the right
    // edge of the image would be on the screen, if it is draw a
    // second copy of the image right next to it
    // once the second image gets to the 0 point, we can reset bgX to
    // 0 and go back to drawing just one image.
    /*if (bgX <= -bgImg.width + width) {
      image(bgImg, bgX + bgImg.width, 0, bgImg.width, height);
      if (bgX <= -bgImg.width) {
        bgX = 0;
      }
    }*/

    for(var i = pipes.length-1; i >= 0; i--){
        pipes[i].show();
        pipes[i].update();

        if(pipes[i].hits(bird)){
            console.log("HIT");
        }

        if(pipes[i].offscreen()){
            pipes.splice(i, 1);
        }
    }
    bird.update();
    bird.show();


    if (frameCount % 120 ==0){
        pipes.push(new Pipe());
    }
}

function keyPressed(){
    if(key == ' '){
        bird.up();
    }
}