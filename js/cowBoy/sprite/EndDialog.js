import Sprite, {screenHeight, screenWidth} from "./Sprite";

export default class EndDialog extends Sprite{

    constructor() {
        super();
        this.score=0
    }
    draw(ctx) {
        let w=screenWidth*3/4
        let h=screenHeight*3/4
        ctx.fillStyle  = "#000"
        ctx.fillRect((screenWidth-w)/2,(screenHeight-h)/2,w,h)
        ctx.font = "20px Arial"
        ctx.fillStyle  = "#fff"
        let text1='你的得分:'+this.score
        let text2='你的最高得分:'+this.score
        let text1Width=ctx.measureText(text1).width
        let text2Width=ctx.measureText(text2).width
        let y1=(screenHeight-h)/2+40
        ctx.fillText(text1,(screenWidth-text1Width)/2,y1)
        ctx.fillText(text2,(screenWidth-text2Width)/2,y1+40)



    }

    setScore(score)
    {
        this.score=score
    }
}