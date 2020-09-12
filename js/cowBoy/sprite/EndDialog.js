import Sprite ,{screenHeight, screenWidth} from "./Sprite";
import  {getMaxP} from "../Utils";

export const reviveCoin=5

export default class EndDialog extends Sprite{

    constructor() {
        super('images/round.jpg');
        this.score=0
        //this.bhImg=wx.createIma
    }
    draw(ctx) {
        let w=screenWidth*3/4
        let h=screenHeight*3/4
        ctx.fillStyle  = "#000"
        ctx.fillRect((screenWidth-w)/2,(screenHeight-h)/2,w,h)
        ctx.font = "20px Arial"
        ctx.fillStyle  = "#fff"
        let text1='你的得分:'+this.score
        let maxP=getMaxP()
        if(!maxP)
        {
            maxP=this.score
        }
        let text2='你的最高得分:'+maxP
        let text1Width=ctx.measureText(text1).width
        let text2Width=ctx.measureText(text2).width
        let y1=(screenHeight-h)/2+40
        ctx.fillText(text1,(screenWidth-text1Width)/2,y1)
        ctx.fillText(text2,(screenWidth-text2Width)/2,y1+40)

        //绘制再来一次
        //ctx.drawImage(this.img,0,0,this.img.width,this.img.height,(screenWidth-100)/2,y1+60,100,40)

        ctx.fillStyle="#3344ff"
        this.repeatX=(screenWidth-100)/2
        this.repeatY=y1+60
        this.repeatWidth=100
        this.repeatHeight=40
        ctx.fillRect(this.repeatX,this.repeatY,this.repeatWidth,this.repeatHeight)

        //再来个框框 复活
        this.reviveWidth=160
        this.reviveX=(screenWidth-this.reviveWidth)/2
        this.reviveY=y1+120
        this.reviveHeight=40
        ctx.fillRect(this.reviveX,this.reviveY,this.reviveWidth,this.reviveHeight)
        ctx.fillStyle="#fff"
        let text3="再来一次"
        let text3Width=ctx.measureText(text3).width
        ctx.fillText(text3,(screenWidth-text3Width)/2,y1+90)
        let text4="复活需要"+this.reviveNum*reviveCoin+"金币"
        let text4Width=ctx.measureText(text4).width
        ctx.fillText(text4,(screenWidth-text4Width)/2,y1+150)

    }

    setScore(score)
    {
        this.score=score
    }

    setRevive(data)
    {
        this.reviveNum=data
    }
    isRepeat(x,y)
    {
        if(x>this.repeatX&&x<this.repeatX+this.repeatWidth
        &&y>this.repeatY&&y<this.repeatY+this.repeatHeight)
        {
            return true
        }
        return false
    }
    isRevive(x,y)
    {
        if(x>this.reviveX&&x<this.reviveX+this.reviveWidth
        &&y>this.reviveY&&y<this.reviveY+this.reviveHeight)
        {
            return true
        }
        return false
    }
}