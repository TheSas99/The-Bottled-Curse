import 'phaser';
let cursors;

export default class TitleScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Title'})
    }

    preload() {
        this.load.image('bg', 'assets/images/background.jpg');
        this.load.audio('intro', 'assets/bgm/intro.mp3');
        this.levels = {
            1: 'level1',
            2: 'level2',
            3: 'level3'
        };
    }

    create() {
        let bg = this.add.image(0, 0, 'bg');
        bg.setOrigin(0, 0);

        let titleText = this.add.text(window.innerWidth/ 4,300, "The Bottled Curse", {fontSize: 140, fontFamily: "VT323"});

        let start = this.add.text(window.innerWidth/ 2.6,550, "Press Space to Start", {fontSize: 60, fontFamily: "VT323"});

        // Load the start
        this.tweens.add({
            targets: start,
            alpha: 0,
            duration: 1200,
            repeat: -1,
            yoyo: true
        });

        let music = this.sound.add('intro');

        // Play the background music
        music.play();

        // Go to the next scene after the right input
        cursors = this.input.keyboard.createCursorKeys();

    };

    update() {
        // Fade out and start next scene
        if(cursors.space.isDown) {
            console.log('Next scene');
            this.cameras.main.fade(1000, 0, 0, 0, false, function(camera, progress) {
                if(progress > 0.99){
                    this.scene.stop('Title');
                    this.scene.start('Game', { level: 1, newGame: true, levels: this.levels });
                    this.sound.pauseAll()
                }
            })
        }
    }
};