function Coin(){

    this.x = 100;
    this.y = random(50,900);

    this.got_em = false;

    this.show = function(){
        image(coinimg,this.x,this.y,48,48);
    }

    this.hit = function(bird){
 
        if(bird.x == this.x && bird.y > this.y && bird.y < this.y + 5){
            this.got_em = true;
            return true;
        }
        else{
            this.got_em = false;
            return false;
        }

    }

}