function Sky(option){
    this.ctx = option.ctx;
    this.skyImg = option.skyImg;

    this.skywidth = this.skyImg.width/2;
    this.skyspeed = 2;
    this.skyX1 = 0;
    this.skyX2 = this.skywidth;
}

Sky.prototype = {
    constructor:Sky,
    drawSky:function(){
        this.skyX1-=this.skyspeed;
        this.skyX2-=this.skyspeed;

        if(this.skyX1<=-this.skywidth){
            //    skyX1 = skywidth;
            this.skyX1 += this.skywidth *2;
        }
        if(this.skyX2<=-this.skywidth){
            //    skyX2 = skywidth;
            this.skyX2 += this.skywidth *2;
            
        }
        this.ctx.drawImage(this.skyImg,this.skyX1,0);
        this.ctx.drawImage(this.skyImg,this.skyX2,0);
    }
}