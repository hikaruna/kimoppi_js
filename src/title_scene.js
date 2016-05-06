module.exports = {

  define: function(options) {
    options = (options || {});
    var className = options.className || 'TitleScene';
    var phina = options.phina || require('phina.js');
    phina.define(className, this.klass);
  },

  klass: {
      superClass: 'DisplayScene',

      init: function() {
        var titleLabel, startButton;

        this.superInit();

        this.backgroundColor = 'hsl(200, 80%, 64%)'

        titleLabel = Label('We are the きもっぴ').addChildTo(this);
        titleLabel.x = this.gridX.center(); // x 座標
        titleLabel.y = this.gridY.center(); // y 座標
        titleLabel.fill = 'white'; // 塗りつぶし色

        startButton = Button().addChildTo(this);
        startButton.text = 'スタート';
        startButton.x = this.gridX.center(); // x 座標
        startButton.y = this.height - 200; // y 座標
        startButton.on('push', function() {
          this.exit();
        }.bind(this));
    }
  },
}
