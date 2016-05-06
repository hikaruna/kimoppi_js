var phina = require('phina.js');
phina.globalize();
require('main_scene');

phina.main(function() {
  var app = GameApp({
    startLabel: 'main',
  });
  app.run();
});
