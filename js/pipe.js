function Pipe(option){
    this.ctx = option.ctx;
    //管道分为上下2个,管道为6个成为1组
    this.pipetopimg = option.pipetopimg;
    this.pipebottomimg = option.pipebottomimg;
    this.pipeX = option.pipeX;
    
    this.pipetopY = 0;
    this.pipebottomY = 0;
    this.pipeheight = this.pipetopimg.height;
    this.pipewidth = this.pipetopimg.width;
    this.pipeoffsetY = 150; 
    this.pipespeed = 2;

    //要先计算而不是等到第一次切换的时候才计算
    this.pipetopY = Math.random()*300-400;
    this.pipebottomY =  this.pipetopY+this.pipeheight+this.pipeoffsetY;
}

Pipe.prototype = {
    constructor : Pipe,
    drawPipe:function(){
        //图片管道的高度为420,设置管道冒头的高度至少为20,陆地的高度为110,管道与管道之间的间隙为150
        //上面管道露出的最大的高度是:600-280 = 320, 最小的高度是 20
        //则上面管道坐标范围是 -420+320 ~ -420+20 -----> -100~-400
        //下面管道的坐标是上管道坐标 pipitopY+管道自身的高度和管道之间的距离
        //Math.random 生成的数字是0~1之间,换算成-400~-100之间,
        //Math.random()*(max-min)+min
        //管道与管道之间的横向距离为2倍管道的宽度
       
        this.pipeX -= this.pipespeed;
        if(this.pipeX<-3*this.pipewidth){
            this.pipeX += 3*6*this.pipewidth;
            this.pipetopY = Math.random()*300-400;
            this.pipebottomY =  this.pipetopY+this.pipeheight+this.pipeoffsetY;
        }

        //要判断是否碰撞到管道,使用
        this.ctx.drawImage(this.pipetopimg,this.pipeX,this.pipetopY);
        this.ctx.rect(this.pipeX,this.pipetopY,this.pipewidth,this.pipeheight);
        this.ctx.drawImage(this.pipebottomimg,this.pipeX,this.pipebottomY);
        this.ctx.rect(this.pipeX,this.pipebottomY,this.pipewidth,this.pipeheight);
        

    }   
}