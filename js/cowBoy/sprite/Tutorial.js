import Sprite from "./Sprite";

export default class Tutorial extends Sprite{

    constructor() {
        super("images/tutorial.png");
    }
    move() {
        this.x=canvas.width/2-this.width/2
        this.y=canvas.height/2-this.height/2
    }
}