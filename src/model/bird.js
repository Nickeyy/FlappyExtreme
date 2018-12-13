function Bird(){
    this.y = height/2;
    this.x = 64;

    this.gravity = 0.6;
    this.liftup = 19;
    this.velocity =0;

    this.show = function(){

        fill(255,105,180);
        ellipse(this.x, this.y, 32, 32);
    }

    this.up = function(){
        this.velocity -= this.liftup;
    }

    this.update = function(){
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;

        if(this.y > height){
            window.location.replace("../view/gameover.view.html");
            this.y = height;
            this.velocity = 0;
        }
        if(this.y < 0){
            this.y = 0;
            this.velocity = 0;
        }
    }
}