import { ImageSource, Sound, Resource, Loader, Actor } from 'excalibur'
import mainCharacterImg from '../images/main-character.png'

export class mainCharacter extends Actor{

const Resources = {
    mainCharacter: new ImageSource(mainCharacterImg)
}
const ResourceLoader = new Loader([Resources.mainCharacter])



}