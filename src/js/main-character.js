import { ImageSource, Sound, Resource, Loader, Actor, Vector, Input, } from 'excalibur'
import { Resources, ResourceLoader } from './resources.js'

//is er niet door de bground en collision doet ook kut.

export class mainCharacter extends Actor{

    constructor() {
        super({
          width: Resources.MainCharacter.width / 4,
          height: Resources.MainCharacter.height / 4,
        });
        this.isMovingRight = false;
        this.isMovingLeft = false;
        this.speed = 50;
        this.gravity = 800;
      }
    
      onInitialize() {
        this.graphics.use(Resources.MainCharacter.toSprite());
        this.pos = new Vector(400, 300);
        this.scale = new Vector(0.7, 0.7);
        this.vel.y = 0;
      }
    
      moveRight() {
        this.vel.x = this.speed;
      }
    
      moveLeft() {
        this.vel.x = -this.speed;
      }
    
      stopMovement() {
        this.vel.x = 0;
      }
    
      update(engine, delta) {
        this.vel.y += this.gravity * delta;
    
        if (engine.input.keyboard.wasPressed(Input.Keys.D)) {
          this.isMovingRight = true;
          this.moveRight();
        }
    
        if (engine.input.keyboard.wasReleased(Input.Keys.D)) {
          this.isMovingRight = false;
          if (!this.isMovingLeft) {
            this.stopMovement();
          }
        }
    
        if (engine.input.keyboard.wasPressed(Input.Keys.A)) {
          this.isMovingLeft = true;
          this.moveLeft();
        }
    
        if (engine.input.keyboard.wasReleased(Input.Keys.A)) {
          this.isMovingLeft = false;
          if (!this.isMovingRight) {
            this.stopMovement();
          }
        }
    
        if (this.isMovingRight && engine.input.keyboard.isHeld(Input.Keys.D)) {
          this.moveRight();
        }
    
        if (this.isMovingLeft && engine.input.keyboard.isHeld(Input.Keys.A)) {
          this.moveLeft();
        }
      }
    }