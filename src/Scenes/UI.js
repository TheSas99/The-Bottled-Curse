import 'phaser';

export default class UIScene extends Phaser.Scene {
  constructor () {
    super({ key: 'UI', active: true });
  }

  init () {
    this.coinsCollected = 0;
  }

  create () {
    // create score text
    this.scoreText = this.add.text(10, 12, `Score:${this.coinsCollected}`, { fontSize: '30px', fill: '#fff', fontFamily: "VT323" });

    // create health text
    this.healthText = this.add.text(10, 50, `Health:10`, { fontSize: '30px', fill: '#fff', fontFamily: "VT323" });

    //create control text
    this.controlText = this.add.text(window.innerWidth/2.5,window.innerHeight/1.0625, `Arrow keys/Left-Stick: Walk, Space bar/A: Shoot`, { fontSize: '18px', fontFamily: "VT323", fill: '#fff', align: 'center' });

    // get a reference to the game scene
    this.gameScene = this.scene.get('Game');

    // listen for events from that scene
    this.gameScene.events.on('coinCollected', () => {
      this.coinsCollected++;
      this.scoreText.setText(`Score: ${this.coinsCollected}`);
    });

    this.gameScene.events.on('loseHealth', (health) => {
      this.healthText.setText(`Health: ${health}`);
    });

    this.gameScene.events.on('newGame', () => {
      this.coinsCollected = 0;
      this.scoreText.setText(`Score: ${this.coinsCollected}`);
      this.healthText.setText(`Health: 10`);
    });
  }
};
