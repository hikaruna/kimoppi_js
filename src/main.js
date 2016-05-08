import 'enchant.js'
import MainScene from 'main_scene'

window.onload = () => {
  const game = new enchant.Core(320, 320);
  game.preload("assets/images/chara1.png");
  game.on('load', () => {
    game.replaceScene(new MainScene());
  });

  game.debug();
};
