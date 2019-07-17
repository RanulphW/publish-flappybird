
var stateActions = { preload: preload, create: create, update: update };


var game = new Phaser.Game(790, 400, Phaser.AUTO, 'game', stateActions);
var score = 0;
var labelScore;
var player;
var pipes;
var pipes = []

function preload() {

  game.load.image("playerimg","../assets/flappy-cropped.png")
  game.load.audio("score3", "../assets/system-fault.ogg");
  game.load.audio("score2", "../assets/score.ogg");
  game.load.audio("score", "../assets/Soviet_Anthem_Instrumental_1955.ogg");
  game.load.image("pipeBlock","../assets/pipe_red.png")


}

function create() {

  game.physics.startSystem(Phaser.Physics.ARCADE);

  game.stage.setBackgroundColor("#84e3e1");
  game.add.text(0, 0, "Flappy Bird!", {font: "30px Comic Sans", fill: "#ABC123"});

  player = game.add.sprite(0 , 0, "playerimg");
  game.physics.arcade.enable(player);
  player.body.gravity.y = 150;

   game.input
    .keyboard.addKey(Phaser.Keyboard.SPACEBAR)
    .onDown.add(spaceHandler);
    game.sound.play("score");


  labelScore = game.add.text(20, 20, " ");

  var pipeInterval = 4 * Phaser.Timer.SECOND;
  game.time.events.loop(
   pipeInterval,
   generatePipe
 );
}



function update() {
  game.physics.arcade.overlap(
            player,
          pipes,
          gameOver);

}


function clickHandler(event) {
  game.sound.play("score");
}

function spaceHandler(){
  player.body.velocity.y = -110
    game.sound.play("score3");

}

function ChangeScore() {
  score = score + 1
  labelScore.setText(score.toString());

}


function addPipeBlock(x, y){
  var block = game.add.sprite(x, y, "pipeBlock");
  pipes.push(block);
  game.physics.arcade.enable(block);
  block.body.velocity.x = -100;
}

function generatePipe(){
  var gapStart = game.rnd.integerInRange(1,5);
  for(var count=0; count<8; count+=1) {
    if (count != gapStart && count != gapStart +1) {
      addPipeBlock(800, count * 50);

    }
  }
  ChangeScore()
}

function playerJump(){
  player.body.velocity.y = -150;
}

function gameOver(){
 registerScore(score);
 game.state.restart();
}
