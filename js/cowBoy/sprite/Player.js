import Sprite, {scaleFactor} from "./Sprite";

export default class Player extends Sprite{

    constructor(res) {
        super(res);
        this.isDead=false
        this.move()
    }
    move() {

        this.x=canvas.width/6
        if(this.speedY<0)
        {
            this.speedY=this.speedY*3/4+this.getSpeedTimeDecrease()/2
        }else
        {
            this.speedY+=this.getSpeedTimeDecrease()
        }
        let maxSpeed=this.getMaxSpeed()
        if(this.speedY>maxSpeed)
        {
            this.speedY=maxSpeed
        }
        super.move();
    }
    getSpeedTimeDecrease()
    {
        return canvas.height/320
    }
    getMaxSpeed()
    {
        return canvas.height/51.5
    }

    getTabSpeed()
    {
        return -canvas.height/16
    }
    getPosTabIncrease()
    {
        return -canvas.height/100
    }
    dead()
    {
        this.isDead=true
        this.speedY=this.getMaxSpeed()/2
    }
    revive()
    {
        this.isDead = false;
        this.row = 0;
        this.x=canvas.width/6
        this.y=canvas.height/2-this.width*scaleFactor
    }
}