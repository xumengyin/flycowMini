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