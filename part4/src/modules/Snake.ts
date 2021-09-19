interface Coordinate {
  X: number;
  Y: number;
}

class Snake{

  // 表示蛇头的元素
  headEle: HTMLElement;
  // 蛇的身体（包括蛇头）
  bodies: HTMLCollection;
  // 获取蛇的容器
  element: HTMLElement;
  // 蛇的各节身体的位置
  sectionPostion:Array<Coordinate> = [{X:0, Y:0}];

  constructor() {
    this.element = document.getElementById('snake')!;
    this.headEle = document.querySelector('#snake > div')! as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div')!;
  }

  // 获取蛇的坐标（蛇头坐标）
  get X() {
    return this.headEle.offsetLeft;
  }

  // 获取蛇的Y轴坐标
  get Y() {
    return this.headEle.offsetTop;
  }

  set X(value:number) {
    // 如果新值和旧值相同，则直接返回不再修改
    if(this.X === value) {
      return;
    }

    // X的值的合法范围，0~290
    if(value < 0 || value > 290) {
      // 进入判断，说明蛇撞墙了
      throw new Error('蛇撞墙了')
    }
    // this.headEle.style.left = value + 'px';
    // 蛇头的新位置，修改数组最后一个位置
    let obj:Coordinate = {
      X: value,
      Y: this.Y
    }
    this.bodyMove(obj)
  }

  
  set Y(value:number) {
    if(this.Y === value) {
      return;
    }
    // Y的值的合法范围，0~290
    if(value < 0 || value > 290) {
      // 进入判断，说明蛇撞墙了
      throw new Error('蛇撞墙了')
    }
    // this.headEle.style.top = value + 'px';
    // 蛇头的新位置，修改数组最后一个位置
    let obj:Coordinate = {
      X: this.X,
      Y: value
    }
    this.bodyMove(obj)
  }

  // 蛇增加身体
  addBody() {
    // 向element中添加一个div
    this.element.insertAdjacentHTML('beforeend', '<div></div>');
    let obj:Coordinate = {
      X: this.X,
      Y: this.Y
    }
    this.sectionPostion.push(obj)
  }

  // 蛇的移动
  bodyMove(head:Coordinate) {
    console.log(head)
    let sectionPostion = this.sectionPostion
    // 检查蛇头是否与原有点位重合
    sectionPostion.forEach(item => {
      if(item.X == head.X && item.Y == head.Y) {
        throw new Error('蛇咬到自己了')
      }
    })

    sectionPostion.pop();
    sectionPostion.unshift(head);

    // 当前蛇身体的元素
    let bodies = this.bodies
    for(let i=0; i<bodies.length; i++) {
      let obj = sectionPostion[i];
      let ele = bodies[i] as HTMLElement
      ele.style.left = obj.X + 'px';
      ele.style.top = obj.Y + 'px';
    }
  }
}

export default Snake;