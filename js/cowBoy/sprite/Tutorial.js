import Sprite, {scaleFactor} from "./Sprite";

export default class Tutorial extends Sprite {

    constructor() {
        super("images/tutorial.png");
    }

    move() {
        this.x = canvas.width / 2 - this.width / 2*scaleFactor
        this.y = canvas.height / 2 - this.height / 2*scaleFactor
    }

    isInArea(x, y) {
        if (x > this.x && x < this.x+this.width
            && y > this.y
            && y < this.y+this.height) {
            return true
        }
        return false
    }
    draw(ctx) {
        ctx.drawImage(this.img,this.x,this.y,this.width*scaleFactor,this.height*scaleFactor)
    }
}