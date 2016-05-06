module.exports = {

  define: function(options) {
    options = (options || {});
    var className = options.className || 'MainScene';
    var phina = options.phina || require('phina.js');
    phina.define(className, this.klass);
  },

  klass: {
      superClass: 'DisplayScene',

      init: function() {
        this.superInit();
        // 背景色を指定
        this.backgroundColor = '#444';
        // ラベルを生成
        this.label = Label('Hello, phina.js!').addChildTo(this);
        this.label.x = this.gridX.center(); // x 座標
        this.label.y = this.gridY.center(); // y 座標
        this.label.fill = 'white'; // 塗りつぶし色
    }
  },
}
