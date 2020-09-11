import Sprite, {adapterW, adapterH, screenWidth, screenHeight} from "./Sprite";

export default class Background extends Sprite{

    constructor(res="images/bg.png") {
        super(res);
    }
    draw(ctx) {
        super.draw(ctx)
        let factor=screenHeight/this.img.height
        if(-this.x>this.img.width)
        {
            this.x+=this.img.width
        }

        let endBitmap=Math.min(-this.x+screenWidth/factor,this.img.width)
        let endCanvas=(endBitmap+this.x)*factor+1
        ctx.drawImage(this.img,-this.x,0,endBitmap+this.x,this.img.height,0,0,endCanvas,screenHeight)
        //一张画完了 画第二章
        if(endBitmap==this.img.width)
        {
            ctx.drawImage(this.img,0,0,screenWidth/factor,this.img.height,endCanvas,0,screenWidth,screenHeight)
        }

       // console.log("xuxu",'draw back:'+screenHeight+":"+screenWidth+"this.img.width:"+this.img.width+"--xx:"+this.x)
    }
}