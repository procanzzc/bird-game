function Birds(Option){
    this.ctx = Option.ctx;
    this.canvasX = Option.canvasX;
    this.canvasY = Option.canvasY;
    this.birdImg = Option.birdImg;

    this.endtime = 0;
    this.g = 0.0003;
    this.birdX = 0;
    this.birdY = 0;
    this.birdmaxangle = 40;
    this.birdmaxspeed = 0.4;
    this.birdindex = 0;
    this.birdspeed = 0;
    this.birdWidth = this.birdImg.width/3;
    this.birdHeight = this.birdImg.height;
}
Birds.prototype = {
   drawBirds:function(offsetTime){
        //设置小鸟的下落速度   
        //先计算之后再++
         this.birdX = this.birdWidth*this.birdindex; 
         this.birdindex ++;
        //需要清除重复的绘制
        var distanceY = this.birdspeed*offsetTime + this.g*offsetTime * offsetTime /2;
        //速度是越来越快的， 所以需要加上前面的速度基线
        this.birdspeed = this.birdspeed + this.g*offsetTime;
        if(this.birdindex>2){
            this.birdindex = 0;
        }
        //做偏移的是画布而不是小鸟
        this.canvasY += distanceY;
        //旋转头部的小鸟
        var curangle = this.birdmaxangle/this.birdmaxspeed * this.birdspeed;
        if(curangle>=45){
            curangle = 45;
        }
    
        //移动的是虚拟的画布,所以需要重新设定画布的原点
        //重新设置画布的圆点需要偏移画布
        this.ctx.save();
        this.ctx.translate(this.canvasX+this.birdWidth/2,this.canvasY+this.birdHeight/2);
        this.ctx.rotate(Math.PI/180*curangle);
        //重新绘制的时候参照的是小鸟在虚拟画布中的位置
        this.ctx.drawImage(this.birdImg,this.birdX,this.birdY,this.birdWidth,this.birdHeight,-this.birdWidth/2,-this.birdHeight/2,this.birdWidth,this.birdHeight);
        this.ctx.restore();
   }
}