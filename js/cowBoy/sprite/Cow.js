import Sprite, {scaleFactor, screenHeight} from "./Sprite";
import Player from "./Player";

export default class Cow extends Player{
    constructor() {
        super("images/cow.png");
        this.colNr=8
        this.y=screenHeight/2
        this.frameTime=3

    }

    onImgMeasure()
    {
        this.width=this.img.width/this.colNr
        this.height=this.img.height/4
    }
    move() {

        this.changeToNextFrame()
        super.move();
        if(this.row!=3)
        {
            if(this.speedY>this.getTabSpeed()/3&&this.speedY<this.getMaxSpeed()/3)
            {
                this.row=0
            }else if(this.speedY>0)
            {
                this.row=1
            }else
            {
                this.row=2
            }
        }

    }

    draw(ctx) {
        let {img, col, row, width, height, x, y,colNr} = this
        ctx.drawImage(img, col * width, row * height,
            width,height,
            x, y, width*scaleFactor, height*scaleFactor)
    }
    tab()
    {
        this.speedY=this.getTabSpeed()
        this.y+=this.getPosTabIncrease()
    }

}