// 引入其他的类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制器，控制其他的所有类
class GameControl {
  // 定义三个属性
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel

  // 创建一个属性类存储蛇的移动方向（也就是按键的方向）
  direction: string = 'Right';

  // 创建一个属性用来记录游戏是否结束
  isLive:Boolean = true;

  constructor() {
    this.snake = new Snake;
    this.food = new Food;
    this.scorePanel = new ScorePanel;

  }

  // 游戏的初始化方法，调用后游戏即开始
  init() {
    // 绑定键盘按下的事件
    document.addEventListener('keydown', this.keydownHandler.bind(this));
    // 调用run方法
    this.run();
  }

  // 创建一个键盘按下的响应函数
  keydownHandler(event: KeyboardEvent) {
    console.log(event.key)
    let key = event.key
    // 统一direction属性
    let direction = '';
    switch(key) {
      case 'ArrowUp' || 'Up':
        direction = 'Up'
        break;
      case 'ArrowDown' || 'Down':
        direction = 'Down'
        break;
      case 'ArrowLeft' || 'Left':
        direction = 'Left'
        break;
      case 'ArrowRight' || 'Right':
        direction = 'Right'
        break;
    }
    // 当前允许的方向
    let allowDirection:Array<string> = [];
    if(this.direction == '') {
      allowDirection = ['Up', 'Down', 'Left', 'Right']
    }
    if(this.direction == 'Up') {
      allowDirection = ['Left', 'Right']
    }
    if(this.direction == 'Down') {
      allowDirection = ['Left', 'Right']
    }
    if(this.direction == 'Left') {
      allowDirection = ['Up', 'Down']
    }
    if(this.direction == 'Right') {
      allowDirection = ['Up', 'Down']
    }

    console.log(this.direction)
    if(allowDirection.indexOf(direction) > -1) {
      this.direction = direction
    }

  }

  // 创建一个控制蛇移动的方法
  run() {
    /**
     * 根据方向（this.direction)来使蛇的位置改变
     * 向上 top
     * 向下 top增加
     * 向左 left 减少
     * 向右 left 增加
     */
    // 获取蛇现在的坐标
    let X = this.snake.X;
    let Y = this.snake.Y;
    // 更具按键的方向来修改X,Y的值
    switch(this.direction) {
      case 'Up':
        Y -= 10;
        break;
      case 'Down':
        Y += 10;
        break;
      case 'Left':
        X -= 10;
        break;
      case 'Right':
        X += 10;
        break;
    }
    // 检查蛇是否吃到了食物
    this.checkEat(X, Y)

    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (e:any) {
      // 进入到catch，说明出现了异常，游戏结束
      alert(e.message)
      this.isLive = false
    }
    
    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
  }

  // 定义一个方法，用来检查蛇是否吃到食物
  checkEat(X:number, Y:number):void {
    if( X === this.food.X && Y === this.food.Y ) {
      console.log('吃到食物了')
      // 食物的位置进行重置
      this.food.change();
      // 分数增加
      this.scorePanel.addScore();
      // 蛇要增加一节
      this.snake.addBody();
    }
  }

}


export default GameControl