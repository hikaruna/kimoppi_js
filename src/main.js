var phina = require('phina.js');
phina.globalize();
require('title_scene').define();
require('main_scene').define();

phina.main(function() {
  var app = GameApp();
  app.enableStats();
  app.run();
});
