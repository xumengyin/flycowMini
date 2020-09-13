import Sprite, {scaleFactor, screenWidth} from "./Sprite";
import {getStatusBar} from "../Utils";

export default class PauseBtn extends Sprite{

    constructor() {
        super("images/pause_button.png");
    }
    draw(ctx) {
        ctx.drawImage(this.img,0,0,this.width,this.height,this.x,this.y,this.width*scaleFactor,this.height*scaleFactor)
    }
    move() {
        this.x=screenWidth-this.width*scaleFactor
        this.y=getStatusBar()+30
    }

    isInPauseArea(x,y)
    {
        if(x>this.x&&x<this.x+this.width*scaleFactor
        &&y>this.y&&this.y<this.height*scaleFactor)
        {
            return true
        }
        return false
    }

}