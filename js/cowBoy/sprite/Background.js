import Sprite from "./Sprite";

export default class Background extends Sprite{

    constructor() {
        super("images/bg.png");
    }
    draw(ctx) {
        ctx.drawImage(this.img,0,0,200,200,200,200,300,300)
    }
}