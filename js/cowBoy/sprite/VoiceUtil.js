

export default class VoiceUtil {
    constructor()
    {
       this.ctx= wx.createInnerAudioContext()
    }

    playTab()
    {
            this.ctx.src='audio/cow.wav'
            this.ctx.play()
    }
    playCoin()
    {
        this.ctx.src='audio/coin.mp3'
        this.ctx.play()
    }
    playCrash()
    {
        this.ctx.src='audio/crash.wav'
        this.ctx.play()
    }
    playPass()
    {
        this.ctx.src='audio/pass.mp3'
        this.ctx.play()
    }
    
}