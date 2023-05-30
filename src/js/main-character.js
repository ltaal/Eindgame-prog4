import { ImageSource, Sound, Resource, Loader, Actor, Vector } from 'excalibur'
import { Resources, ResourceLoader } from './resources.js'



export class mainCharacter extends Actor{

    constructor() {
        super({width:Resources.MainCharacter.width/4, height:Resources.MainCharacter.height/4})
    }

    onInitialize() {
        this.graphics.use(Resources.MainCharacter.toSprite())
        this.pos = new Vector(400, 300)
        this.vel = new Vector(-10,0)
}


}