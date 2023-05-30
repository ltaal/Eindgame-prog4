import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { mainCharacter} from './main-character.js'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        let Sjaak = new mainCharacter()
            this.add(Sjaak)

    }
}

new Game()
