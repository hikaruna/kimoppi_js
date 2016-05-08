import 'enchant.js'

export default class Bear extends enchant.Sprite {
  constructor() {
    super();
    this.initialize();
  }
  initialize() {
    super.initialize(32, 32);
    this.image = enchant.Core.instance.assets["assets/images/chara1.png"];
    this.x = 0;
    this.y = 0;
    this.frame = 5;
  }
  walkTo(x, y) {
    this.tl.clear();
    this.tl.repeat(function(){
      this.frame = this.age % 2 + 5;
    }, 30).and().moveTo(x, y, 30);
  }
}
