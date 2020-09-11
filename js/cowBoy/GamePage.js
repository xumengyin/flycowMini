import basePage from "./basePage";
import Tutorial from "./sprite/Tutorial";
import Background from "./sprite/Background";
import Frontground from "./sprite/Frontground";
import PauseBtn from "./sprite/PauseBtn";
import Cow from "./sprite/Cow";
import Spider from "./sprite/Spider";
import Obstacle from "./sprite/Obstacle";
import EndDialog from "./sprite/EndDialog";

const status_start = 0
const status_play = 1
const status_pause = 2
const status_fail = 3
let isPause = false
let curStatus = status_start
let backGround, frontground, pauseBtn, cow, spider, tip

let obstacles = [] //障碍物
let powerUps = []  //金币
let points=0
let coins=0
let endDialog=new EndDialog()
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
            this.drawDead()
        }else if(curStatus==status_pause)
        {
            this.drawPic()
        }
    }

    drawDead()
    {
        if (!cow.isTouchGround()) {
            cow.move()
            this.drawPic()
        }else
        {
            this.drawPic()
            endDialog.setScore(this.points)
            endDialog.draw(this.canvasCtx)
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
                        this.switchStatus(status_pause)
                    }else
                    {
                        cow.tab()
                    }
                }else if(curStatus==status_pause)
                {
                    this.switchStatus(status_play)
                }
            }
        }

    }
    checkOutOfRange()
    {
        for (let i = 0; i < obstacles.length; i++) {

            if(obstacles[i].isOutOfRange())
            {
                obstacles.splice(i,1)
                i--
            }
        }
        for (let i = 0; i < powerUps.length; i++) {

            if(powerUps[i].isOutOfRange())
            {
                powerUps.splice(i,1)
                i--
            }
        }
    }
    createObstacle()
    {
        if(obstacles.length<1)
        {
            let o=new Obstacle(cow)
            o.setSpeedX(-this.getSpeedX())
            obstacles.push(o)
        }
    }
    checkCollision()
    {

        for (let i = 0; i < obstacles.length; i++) {
            if(obstacles[i].isColliding(cow))
            {
                obstacles[i].onCollision()
                this.gameOver()
                break
            }
        }
        for (let i = 0; i < powerUps.length; i++) {
            if(powerUps[i].isColliding(cow))
            {
                powerUps[i].onCollision()
                powerUps.splice(i,1)
                i--
            }
        }

        if(cow.isTouchEdge())
        {
            this.gameOver()
        }
    }
    gameOver()
    {
        console.log('xuxu','game over')
        cow.dead()
        this.switchStatus(status_fail)
    }
    pause()
    {
        this.switchStatus(status_pause)
    }
    checkPass()
    {
        obstacles.forEach((item)=>{
                if(item.isPassed())
                {
                    if(!item.isAlreadyPassed)
                    {
                        item.onPass()
                        //增加得分
                        //播放音效
                    }
                }
        })
    }
    drawMain() {
        this.checkPass()
        this.checkOutOfRange()
        this.checkCollision()
        this.createObstacle()
        this.move()
        this.drawPic()
    }
    drawPic()
    {
        backGround.draw(this.canvasCtx)
        frontground.draw(this.canvasCtx)
        pauseBtn.draw(this.canvasCtx)
        cow.draw(this.canvasCtx)
        obstacles.forEach((item)=>{
            item.draw(this.canvasCtx)
        })
        powerUps.forEach((item)=>{
            item.draw(this.canvasCtx)
        })
        this.drawText()

    }

    drawText()
    {
        this.canvasCtx.font='24px bold 黑体'
        this.canvasCtx.fillText('得分:'+points+'/'+"金币:"+coins,20,40)
    }
    move()
    {
        backGround.setSpeedX(-this.getSpeedX()/2)
        frontground.setSpeedX(-this.getSpeedX()*4/3)

        obstacles.forEach((item)=>{
            item.move()
        })
        powerUps.forEach((item)=>{
            item.move()
        })
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
        let defaultSpeed=this.canvas.width/60
        let speedIncrease=this.canvas.width/600
        let speed=defaultSpeed+speedIncrease
        return Math.min(speed,defaultSpeed*2)
    }
}