import Sprite, {screenHeight, screenWidth} from "./Sprite";
import Background from "./Background";

export default class Frontground extends Background{

    constructor() {
        super("images/fg.png");
    }
    // draw(ctx) {
    //     let factor=screenHeight/this.img.height
    //     ctx.drawImage(this.img,this.x,0,this.x+screenWidth/factor,this.img.height,0,0,screenWidth,screenHeight)
    // }
}