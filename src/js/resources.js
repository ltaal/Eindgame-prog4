import { ImageSource, Sound, Resource, Loader } from 'excalibur'

import backgroundImage from '../images/bg.png'
import mainCharacterImage from '../images/main-character.png'

const Resources = {
    MainCharacter: new ImageSource(mainCharacterImage),
    background: new ImageSource(backgroundImage)
}
const ResourceLoader = new Loader([Resources.MainCharacter , Resources.background])

export { Resources, ResourceLoader }