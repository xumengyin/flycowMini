import Sprite, {scaleFactor} from "./Sprite";
import PowerUp from "./PowerUp";

export default class Coin extends PowerUp{

    constructor() {
        super("images/coin.png");
        this.frameTime = 1;
        this.colNr=12
    }


    onImgMeasure() {
        this.width=this.img.width/this.colNr
        this.height=this.img.height
    }

    draw(ctx) {
        //super.draw(ctx);
        let {img, col, row, width, height, x, y} = this
        ctx.drawImage(img, col * width, row * height,
            width,height,
            x, y, width*scaleFactor, height*scaleFactor)
    }
    onCollision() {
        super.onCollision();
    }
    move() {
        this.changeToNextFrame()
        super.move();
    }
}