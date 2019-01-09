function Pipe(){
this.gap = 125;
this.top = random(200,666);
this.bottom = (height-this.top) -this.gap;


this.x= width;
this.w = 70;
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
    this.drawHalf();
    /*image(pipePic2,this.x, 0, this.w, this.top);
    image(pipePic,this.x, height-this.bottom, this.w, this.bottom);*/
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

this.drawHalf = function(){
    let howManyNeeded = 0;
    let peakRatio = pipePic.height / pipePic.width;
    let bodyRatio = pipebody.height / pipebody.width;

    howManyNeeded = Math.round(height / (this.w * bodyRatio));

    for (let i=0; i < howManyNeeded; i++){
        let offset = this.top * (i * bodyRatio + peakRatio);
        image(pipebody, pipePic,this.x, height-this.bottom, this.w, this.bottom);
    }
    image(pipePic,this.x, height-this.bottom, this.w, this.bottom);
    image(pipePic2,this.x, 0, this.w, this.top);
}

}