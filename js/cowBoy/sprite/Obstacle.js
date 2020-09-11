import Sprite, {scaleFactor} from "./Sprite";
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
       // this.initPos()
    }

    isPassed() {
        return spider.isPassed()&&wood.isPassed()
    }

    draw(ctx) {
        super.draw(ctx);
        spider.draw(ctx)
        wood.draw(ctx)
    }

    initPos()
    {
        let h=canvas.height
        let w=canvas.width
        let gap =h/4-this.speedX
        if(gap < h / 5){
            gap = h / 5;
        }
        let random=Math.random()*h*2/5
        //1024 蜘蛛图片高度
        let y1=(h/10)+random-(1024*scaleFactor)
        let y2=(h/10)+random+gap
        spider.init(w,y1)
        wood.init(w,y2)
    }
    onPass()
    {
        if(!this.isAlreadyPassed)
        {
            this.isAlreadyPassed=true
        }
    }
    isOutOfRange() {
        return spider.isOutOfRange()&&wood.isOutOfRange()
    }

    isColliding(sprite) {
        return spider.isColliding(sprite)||wood.isColliding(sprite)
    }
    move() {
        spider.move()
        wood.move()
    }
    setSpeedX(speed) {
        this.speedX=-speed
        this.initPos()
        spider.setSpeedX(speed)
        wood.setSpeedX(speed)

    }
}