import Sprite from "./Sprite";

export default class Player extends Sprite{

    constructor(res) {
        super(res);
        this.move()
    }
    move() {

        this.x=canvas.width/6
        if(this.speedY<0)
        {
            this.speedY=this.speedY*2/3+this.getSpeedTimeDecrease()
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
        return canvas.height/360
    }
    getMaxSpeed()
    {
        return canvas.height/80
    }

    getTabSpeed()
    {
        return -canvas.height/16
    }
    getPosTabIncrease()
    {
        return -canvas.height/100
    }
}