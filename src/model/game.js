var bird;


function preload(){
    bat = loadimage('../../res/bird/frame-6.png');
}

function setup(){
    bird= new Bird();
}

function draw(){
    bird.show();
}
