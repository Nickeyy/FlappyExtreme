
var bird;

function setup(){
    createCanvas(600, 800);
    bird = new Bird();
}

function draw(){
    background(0);
    bird.update();
    bird.show();
}

function keyPressed(){
    if(key == ' '){
        bird.up();
    }
}