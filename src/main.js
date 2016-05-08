window.onload = function(){
  require('enchant.js');
  enchant();
  var game = new Core(320, 320);
  game.preload("assets/images/chara1.png");

  game.on('load', function(){
    var Bear = require('bear');
    var bear = new Bear();

    game.rootScene.on('touchstart', function(e) {
      bear.walkTo(e.x, e.y);
    });

    game.rootScene.addChild(bear);
  });

  game.debug();
};
