import { ImageSource, Sound, Resource, Loader, Actor, Vector, Input, } from 'excalibur'
import { Resources, ResourceLoader } from './resources.js'



export class bGround extends Actor{

    constructor() {
        super({
          width: Resources.bGround.width / 4,
          height: Resources.bGround.height / 4,
        });
      } 

      onInitialize() {
        this.graphics.use(Resources.backGround.toSprite());
        this.pos = new Vector(740 , 780);
        this.scale = new Vector(1.03 , 1.15);
      }

}