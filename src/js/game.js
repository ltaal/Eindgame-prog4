import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { mainCharacter } from './main-character.js'
import { bGround } from './backGround.js'

export class Game extends Engine {

    constructor() {
        super({ width: 1530, height: 860 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        const bg = new Actor();
        bg.graphics.use(Resources.background.toSprite());
        bg.pos = new Vector( 740 , 433);
        bg.scale = new Vector(1.03 , 1.15);
        this.add(bg);


       let bground = new bGround();
        this.add(bground); // dit werkt nog niet en zorgt ervoor dat sjaak er niet is.

        let Sjaak = new mainCharacter()
        this.add(Sjaak)

    }
}

new Game()
