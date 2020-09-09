
const screenWidth    = window.innerWidth
const screenHeight   = window.innerHeight
const adapterW=720
const adapterH=1280
export default class Sprite {
    constructor(res) {
        this.height=0
        this.width=0  // 宽高
        this.img = wx.createImage()
        this.img.src = res
        this.img.onload=((res)=>{
            this.width=this.img.width/adapterW*screenWidth
            this.height=this.img.height/adapterH*screenHeight
        })
        this.x = 0 //坐标
        this.y = 0

        this.speedX=0
        this.speedY=0  //速度



        this.col=0
        this.row=0
        this.colNr=1
    }

    draw(ctx) {
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    }

    move() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}