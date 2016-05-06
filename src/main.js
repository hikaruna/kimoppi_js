require('enchant.js');
enchant();

window.onload = function() {
  var game = new Core();
  game.onload = function () {
    game.currentScene.backgroundColor = 'red';
  };
  game.start();
};
