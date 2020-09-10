import basePage from "./basePage";
import Tutorial from "./sprite/Tutorial";
import Background from "./sprite/Background";
import Frontground from "./sprite/Frontground";
import PauseBtn from "./sprite/PauseBtn";
import Cow from "./sprite/Cow";
import Spider from "./sprite/Spider";

const status_start = 0
const status_play = 1
const status_fail = 2
let isPause = false
let curStatus = status_start
let backGround, frontground, pauseBtn, cow, spider, tip

let obstacles = [] //障碍物
let PowerUps = []  //金币
export default class GamePage extends basePage {

    constructor(ctx, canvas) {
        super(ctx, canvas);
        this.init()
    }

    init() {
        tip = new Tutorial()
        backGround = new Background()
        frontground = new Frontground()
        pauseBtn = new PauseBtn()
        cow = new Cow()
        spider = new Spider()
    }

    render() {
        this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        if (curStatus == status_start) {
            this.drawTip()
        } else if (curStatus == status_play) {
            this.drawMain()
        } else if (curStatus == status_fail) {

        }
    }

    switchStatus(state)
    {
        curStatus=state
    }
    touch(type, res) {

        if (res.changedTouches.length > 0) {
            let {pageX, pageY} = res.changedTouches[0]
            if (type == 0) {
                if (curStatus == status_start) {
                    if (tip.isInArea(pageX,pageY)) {
                        this.switchStatus(status_play)
                    }
                }else if(curStatus==status_play)
                {
                    //点击暂停按钮
                    if(pauseBtn.isInPauseArea(pageX,pageY))
                    {

                    }else
                    {
                        cow.tab()
                    }
                }
            }
        }

    }

    drawMain() {
        this.move()
        backGround.draw(this.canvasCtx)
        frontground.draw(this.canvasCtx)
        pauseBtn.draw(this.canvasCtx)
        cow.draw(this.canvasCtx)
    }
    move()
    {
        backGround.setSpeedX(-this.getSpeedX()/2)
        frontground.setSpeedX(-this.getSpeedX()*4/3)
        cow.move()
        pauseBtn.move()
        backGround.move()
        frontground.move()

    }
    drawTip() {
        //backGround.move()
        backGround.draw(this.canvasCtx)
        frontground.draw(this.canvasCtx)
        cow.draw(this.canvasCtx)
        tip.move()
        tip.draw(this.canvasCtx)
        console.log("xu", 'draw')
    }

    getSpeedX()
    {
        let defaultSpeed=this.canvas.width/45
        let speedIncrease=this.canvas.width/600
        let speed=defaultSpeed+speedIncrease
        return Math.min(speed,defaultSpeed*2)
    }
}