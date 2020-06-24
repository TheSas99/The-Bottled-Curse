import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor (key) {
    super(key);
  }

  preload () {
    this.levels = {
      1: 'level1',
      2: 'level2',
      3: 'level3'
    };
    // load in the tilemap
    this.load.tilemapTiledJSON('level1', 'assets/tilemaps/level1.json');
    this.load.tilemapTiledJSON('level2', 'assets/tilemaps/level2.json');
    this.load.tilemapTiledJSON('level3', 'assets/tilemaps/level3.json');
    // load in the spritesheet
    this.load.spritesheet('RPGpack_sheet', 'assets/images/RPGpack_sheet.png', { frameWidth: 64, frameHeight: 64 });
    // load in our character spritesheet
    this.load.spritesheet('characters', 'assets/images/roguelikeChar_transparent.png', { frameWidth: 17, frameHeight: 17 });
    // load our portal sprite
    this.load.image('portal', 'assets/images/raft.png');
    // load in our coin sprite
    this.load.image('coin', 'assets/images/coin_01.png');
    // load in our bullet sprite
    this.load.image('bullet', 'assets/images/ballBlack_04.png');
    // load in our audio assets
    this.load.audio('defeated', 'assets/audio/Defeat.mp3');
    this.load.audio('won', 'assets/audio/Victory.mp3');
    this.load.audio('level', 'assets/audio/LevelMusic.wav');
    this.load.audio('gun', 'assets/audio/gunSound.wav');
    // load in our video asset
    this.load.video('credit', 'assets/video/Credit.mp4');
    // load in our Title BG
    this.load.image('bg', 'assets/images/background.jpg');
    // load in our Title Intromusic
    this.load.audio('intro', 'assets/bgm/intro.wav');
  }

  create () {
    this.scene.start('Title');
  }
};
