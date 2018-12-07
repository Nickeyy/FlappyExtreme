function Bird(){
    this.y = 200;
    this.x = 100;

    this.show = function(){
        Image(bat,this.x, this.y, 32, 32);
        
        document.write("HELLO");
    }
}