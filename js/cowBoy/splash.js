import basePage from "./basePage";

const screenWidth    = window.innerWidth
const screenHeight   = window.innerHeight
const playPos=[169/720.0, 515/1280, 384/720.0, 184/1280.0]
let bg,play
export default class splash extends basePage{

    constructor(ctx,canvas) {
        super(ctx,canvas);
        bg = wx.createImage()
        bg.src= 'images/splash.png'
        play = wx.createImage()
        play.src= 'images/play_button.png'
    }
    render() {
        super.render();
       let that= this.canvasCtx
        setInterval((res)=>{
            that.drawImage(bg,0,0,this.canvas.width,this.canvas.height)
            that.drawImage(play,screenWidth*playPos[0],screenHeight*playPos[1],screenWidth*playPos[2],screenHeight*playPos[3])
        },16)
    }
   touch(type, res) {
        //touch start
       if (res.changedTouches.length > 0) {
           let {pageX,pageY}=res.changedTouches[0]
           if(type==0)
           {
               if(this.isPlay(pageX,pageY))
               {
                   console.log('xu','play-----'+pageX+":"+pageY)
                   this.callBack(1)
               }
           }
       }

   }

   isPlay(x,y)
   {
        if(x>screenWidth*playPos[0]
            && x<screenWidth*playPos[0]+screenWidth*playPos[2]
            &&y>screenHeight*playPos[1]
            &&y<screenHeight*playPos[1]+screenHeight*playPos[3])
        {
            return true
        }
        return false
   }
}