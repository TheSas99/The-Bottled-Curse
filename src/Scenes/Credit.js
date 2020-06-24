import 'phaser';

class creditScene extends Phaser.Scene {
    constructor () {
        super({ key: 'creditScene'});
    }

    create () {
        let video = this.add.video(window.innerWidth/ 2, window.innerHeight/ 2, 'credit');
        video.play(true);

    }
}
export default creditScene
