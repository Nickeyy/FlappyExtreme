var pipes = [];
var bird;
var bg;
var bat;
var y=0;

function preload() {

}

function setup(){

    bird = new Bird();
    pipes.push(new Pipe());
   
   // bat = loadImage("../../res/bird/main.png");
    //bg = loadImage("../../res/backGroundGame.jpg");
   

}   

function draw(){
  
    //alert('3');
    createCanvas(700, 920);
  
   //background(bg);

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