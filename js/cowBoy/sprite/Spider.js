import Sprite, {scaleFactor} from "./Sprite";

export default class Spider extends Sprite{

    constructor(player) {
        super("images/spider_full.png");
        this.cow=player
    }
    isPassed() {
        return this.x+(this.width*scaleFactor)<this.cow.x
    }
}