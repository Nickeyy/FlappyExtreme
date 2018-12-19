function Coin(){

    this.x = 100;
    this.y = random(50,900);


    this.show = function(){
        image(coinimg,this.x,this.y,48,48);
    }

    this.hits = function(bird){
        if(bird.y == coin.y && bird.x == this.x){
            alert("LUELUELUE");
        }
    }

}