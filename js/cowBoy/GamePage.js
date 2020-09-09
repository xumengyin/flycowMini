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
       // this.canvasCtx.clearRect(this.canvas.width, this.canvas.height)
        if (curStatus == status_start) {
            this.drawTip()
        }else if(curStatus == status_play)
        {

        }else if(curStatus==status_fail)
        {

        }
    }

    touch(type, res) {

    }
    drawMain()
    {

    }
    drawTip() {
        // cow.move()
        backGround.move()
        backGround.draw(this.canvasCtx)
        tip.draw(this.canvasCtx)
    }
}