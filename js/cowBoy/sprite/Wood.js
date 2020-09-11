import Sprite, {scaleFactor} from "./Sprite";

export default class Wood extends Sprite{

    constructor(player) {
        super("images/log_full.png");
        this.cow=player
    }

    isPassed() {
        return this.x+(this.width*scaleFactor)<this.cow.x
    }
}