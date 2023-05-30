import { ImageSource, Sound, Resource, Loader } from 'excalibur'

import mainCharacterImage from '../images/main-character.png'

const Resources = {
    MainCharacter: new ImageSource(mainCharacterImage)
}
const ResourceLoader = new Loader([Resources.MainCharacter])

export { Resources, ResourceLoader }