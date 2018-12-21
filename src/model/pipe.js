function Pipe(){

this.gap = 125;
this.top = random(355,430-(20,165));
this.bottom = random(355,430+(20,110));


this.x= width;
this.w = 55;
this.speed = 6;

this.highlight=false;
this.passed = false;

this.hits =function(bird){
    if(bird.y < this.top || bird.y > height - this.bottom){
        if(bird.x > this.x && bird.x < this.x + this.w){
            this.highlight=true;
            this.passed = true;
            return true;
        }
    }
    this.highlight=false;
    return false;
}
this.pass= function(bird){
    if(bird.x > this.x && !this.passed){
        this.passed = true;
        return true;
    }
    return false;
}

this.show = function(){
    if(this.highlight){
        window.location.replace("../view/gameover.view.php");
    }
    image(pipePic2,this.x, 0, this.w, this.top);
    image(pipePic,this.x, height-this.bottom, this.w, this.bottom);
}

this.update = function(){
    this.x -= this.speed;
}
this.offscreen = function(){
    if (this.x < -this.w){
        return true;
    }else{
        return false;
    }
}

}