import 'phaser';

export default class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor (scene, x, y, frame) {
    super(scene, x, y, 'characters', frame);
    this.scene = scene;
    // standaard enemy health
    this.health = 5;

    // enable physics
    this.scene.physics.world.enable(this);
    // add enenies to the scene
    this.scene.add.existing(this);
    // scale our enemy
    this.setScale(4);

    // move our enemy
    this.timeEvent = this.scene.time.addEvent({
      delay: 3000,
      callback: this.move,
      loop: true,
      callbackScope: this
    });
  }

  loseHealth () {
    this.health--;
    this.tint = 0xff0000;
    if (this.health === 0) {
      this.timeEvent.destroy();
      this.scene.events.emit('coinCollected', this.coinsCollected);
      this.destroy();
    } else {
      this.scene.time.addEvent({
        delay: 200,
        callback: () => {
          this.tint = 0xffffff;
        }
      });
    }
  }

  move () {
    const randNumber = Math.floor((Math.random() * 4) + 1.5);
    switch (randNumber) {
      case 1:
        this.setVelocityX(400);
        break;
      case 2:
        this.setVelocityX(-400);
        break;
      case 3:
        this.setVelocityY(400);
        break;
      case 4:
        this.setVelocityY(-400);
        break;
      default:
        this.setVelocityX(400);
    }

    this.scene.time.addEvent({
      delay: 500,
      callback: () => {
        if (this.active) this.setVelocity(0);
      },
      callbackScope: this
    });
  }
}