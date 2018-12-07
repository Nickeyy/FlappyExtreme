//export default 
    function Bird(){
    this.y = -100;
    this.x = 25;

    this.show = function(){

        fill(255);
        ellipse(this.x, this.y, 32, 32);
        //var bat = new Image();
        //bat.src='../../res/bird/frame-6.png';
        //Image(bat,this.x,this.y,20,20);
    }
}