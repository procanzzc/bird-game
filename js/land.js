function Land(option){
    this.ctx = option.ctx;
    this.landimg = option.landimg;
    this.landY = option.landY;
    this.landX = option.landX;

    this.landspeed = 2;
    this.landwidth = this.landimg.width;
    this.landheight = this.landimg.height;
    
}
Land.prototype = {
    constructor:Land,
    drawLand:function(){
        //for循环不做在构造函数里,应该由用户决定
        this.landX -= this.landspeed;
        if(this.landX<-this.landwidth){
            this.landX += this.landwidth*4;
        }
        this.ctx.drawImage(this.landimg,this.landX,this.landY,this.landwidth,this.landheight);   
       
    }
}