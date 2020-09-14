import Splash from './splash'
import GamePage from "./GamePage";

const screenWidth    = window.innerWidth
const screenHeight   = window.innerHeight
let splash
let gamePage
let ctx   = canvas.getContext('2d')
let that
export default class cowMain {

    callBack =function(type){
        that.switchPage(type)
    }
    constructor() {
        this.aniId    = 0
        ctx = canvas.getContext('2d')
        splash = new Splash(ctx,canvas)
        splash.setChangeCallBack(this.callBack)
        gamePage = new GamePage(ctx,canvas)
        gamePage.setChangeCallBack(this.callBack)
        this.curPage=splash
        that=this
        this.switchPage(0)

        wx.onTouchStart((res)=>{
            console.log("xu",'onTouchStart'+res.touches)
            console.log("xu",'onTouchStart'+res.changedTouches)
            this.curPage.touch(0,res)

        })
        wx.onTouchEnd((res)=>{
            console.log("xu",'onTouchEnd'+res.touches)
            console.log("xu",'onTouchEnd'+res.changedTouches)
            this.curPage.touch(1,res)
        })
        this.loop=this.loopF.bind(this)
        // 清除上一局的动画
        window.cancelAnimationFrame(this.aniId);
        wx.setPreferredFramesPerSecond(25)
        this.aniId = window.requestAnimationFrame(this.loop)
        wx.showShareMenu()
        wx.onShareAppMessage(function () {
            // 用户点击了“转发”按钮
            return {
                title: '来吧牛仔,一起来闯关拯救公主吧！'
            }
        })
    }


    loopF()
    {
        this.renderAll()
        this.aniId = window.requestAnimationFrame(this.loop)
    }
    renderAll()
    {
        this.curPage.render()
    }
    switchPage(index) {
        if (index == 0) {
            this.curPage=splash
        }else if(index==1)
        {
            this.curPage=gamePage
        }else
        {
            this.curPage=gamePage
        }
        this.curPage.render()
    }

}