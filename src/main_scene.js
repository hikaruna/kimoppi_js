import 'enchant.js'
import Bear from 'bear'

export default class MainScene extends enchant.Scene {
  constructor() {
    super();
    this.initialize();
  }
  initialize() {
    super.initialize();
    const bear = new Bear();
    this.on('touchstart', function(e) {
      bear.walkTo(e.x, e.y);
    });

    this.addChild(bear);
  }
}
