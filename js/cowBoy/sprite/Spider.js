import Sprite, {scaleFactor} from "./Sprite";

export default class Spider extends Sprite{

    constructor(player) {
        super("images/spider_full.png");
        this.cow=player
    }
    isPassed() {
        return this.x+(this.width*scaleFactor)<this.cow.x
    }

    init(x,y)
    {
        this.x=x
        this.y=y
    }

    draw(ctx) {
        super.draw(ctx);
        ctx.drawImage(this.img,this.x,this.y,this.width*scaleFactor,this.height*scaleFactor)
    }
}