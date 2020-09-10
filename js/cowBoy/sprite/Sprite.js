export const screenWidth = window.innerWidth
export const screenHeight = window.innerHeight
export const adapterW = 720
export const adapterH = 1280
export const scaleFactor = screenHeight / adapterH
export default class Sprite {
    constructor(res) {
        this.height = 0
        this.width = 0  // 宽高
        this.img = wx.createImage()
        this.img.src = res
        this.img.onload = ((res) => {
            this.width = this.img.width
            this.height = this.img.height
            //有的图片需要切割
            this.onImgMeasure()
        })
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
}