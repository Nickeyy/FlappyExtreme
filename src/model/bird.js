function Bird(){
    this.y = 420;
    this.x = 100;

    this.gravity = 0.6;
    this.liftup = 19;
    this.velocity =0;

    this.show = function(){

        image(bat,this.x, this.y, 50, 50);
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