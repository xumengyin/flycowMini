import Sprite from "./Sprite";
import Spider from "./Spider";
import Wood from "./Wood";

let spider
let wood
//是否加分

export default class Obstacle extends Sprite {

    constructor(player) {
        super()
        spider = new Spider(player)
        wood = new Wood(player)
        this.isAlreadyPassed =false
    }

    isPassed() {
        return spider.isPassed()&&wood.isPassed()
    }

}