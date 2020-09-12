import {isEmpty} from "../Utils";

export const screenWidth = window.innerWidth
export const screenHeight = window.innerHeight
export const adapterW = 720
export const adapterH = 1280
export const scaleFactor = screenHeight / adapterH
export default class Sprite {
    constructor(res) {
        this.height = 0
        this.width = 0  // 宽高
        if (!isEmpty(res))
        {
            console.log("xuxu","Sprite res"+res)
            this.img = wx.createImage()
            this.img.src = res
            this.img.onload = ((res) => {
                this.width = this.img.width
                this.height = this.img.height
                console.log(res)
                console.log("xuxu","onload res"+res+"width:"+this.img.width+"height:"+this.img.height)
                //有的图片需要切割
                this.onImgMeasure()
            })
            this.img.onerror=((res)=>{
                console.log("xuxu",'xuxu on error'+res.message)
                console.log(res)
            })
        }
        this.x = 0 //坐标
        this.y = 0

        this.speedX = 0
        this.speedY = 0  //速度


        this.col = 0
        this.row = 0
        this.colNr = 1
        //帧计数
        this.frameTimeCounter = 0
        this.frameTime = 0
    }

    changeToNextFrame() {
        this.frameTimeCounter++
        if (this.frameTimeCounter > this.frameTime) {
            this.col = (this.col + 1) % this.colNr
            this.frameTimeCounter = 0
        }
    }

    onImgMeasure() {

    }

    draw(ctx) {
        if(this.width==0||this.height==0)
        {
            return
        }
    }

    move() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    setSpeedX(speed) {
        this.speedX = speed
    }

    setSpeedY(speed) {
        this.speedY = speed
    }
    //通过障碍
    isPassed()
    {
        return true
    }
    isOutOfRange()
    {
        return this.x+this.width*scaleFactor<0
    }

    isTouchEdge()
    {
        return this.isTouchGround()||this.isTouchSky()
    }
    isTouchGround()
    {
        return this.y+this.height*scaleFactor>canvas.height
    }
    isTouchSky()
    {
        return this.y<0
    }
    isColliding(sprite)
    {
        if(this.x+this.getCollisionTolerance()<sprite.x+sprite.width*scaleFactor
        &&this.x+this.width*scaleFactor>sprite.x+this.getCollisionTolerance()
        &&this.y+this.getCollisionTolerance()<sprite.y+sprite.height*scaleFactor
            &&this.y+this.height*scaleFactor>sprite.y+this.getCollisionTolerance()
        )
        {
            return true
        }
        return false
    }
    //图片边缘有透明
    getCollisionTolerance()
    {
        //先这样定吧
        return canvas.height/50
    }
    onCollision()
    {

    }
    reset()
    {

    }
}