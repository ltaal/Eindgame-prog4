import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Resources, ResourceLoader } from './main-character'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        const mainCharacter = new Actor()
        mainCharacter.graphics.use(Resources.mainCharacter.toSprite())
        mainCharacter.pos = new Vector(400, 300)
        mainCharacter.vel = new Vector(-10,0)
        this.add(mainCharacter)

        console.log("start de game!")
        const mainCharacter = new Actor()
        mainCharacter.graphics.use(Resources.mainCharacter.toSprite())
        mainCharacter.pos = new Vector(400, 300)
        mainCharacter.vel = new Vector(-10,0)
        this.add(mainCharacter)
    }
}

new Game()
