
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var timer = 0;
var score = 0;
var gameOver = false;
var scoreText;
var sprite;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('layer01', 'assets/Hills Layer 01.png');
    this.load.image('layer02', 'assets/Hills Layer 02.png');
    this.load.image('layer03', 'assets/Hills Layer 03.png');
    this.load.image('beer', 'assets/Beer.png');
}

function create ()
{
    this.add.image(400, 300, 'layer01').setScale(3);
    this.add.image(400, 300, 'layer02').setScale(3);
    this.add.image(400, 300, 'layer03').setScale(3);

    
    sprite = this.add.sprite(400, 300, 'beer').setInteractive().setScale(1.5);
    
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    sprite.on('pointerdown', function (pointer) {
        this.setTint(0xff0000);
    });

    sprite.on('pointerup', function (pointer) {
        this.clearTint();
        score += 10;
        this.x = Phaser.Math.Between(10,790);
        this.y = Phaser.Math.Between(60,590);

    });
}

function update ()
{
    scoreText.setText('Score: ' + score + '        Timer: ' + timer);
    if (timer < 1000) 
    {
        timer += 1
    }
    else{
        sprite.destroy()
    }

}