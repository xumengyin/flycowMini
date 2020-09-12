import Sprite, {scaleFactor} from "./Sprite";

export default class PowerUp extends Sprite{

    constructor(res) {
        super(res);
    }
    init()
    {
        this.x = canvas.width* 4/5;
        this.y = 0 - this.height*scaleFactor;
        //this.speedX = - view.getSpeedX();
        //this.speedY = (int) (view.getSpeedX() * (Math.random() + 0.5));
        this.speedY = Math.abs(this.speedX)*(Math.random()+0.5)
    }
    setSpeedX(speed) {
        super.setSpeedX(speed);
        this.init()
    }
}