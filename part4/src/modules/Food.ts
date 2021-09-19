
// 定义类
class Food {
  // 定义一个食物表示食物所对应的元素
  element: HTMLElement;

  constructor() {
    // 加!,这东西不会为null
    // 获取页面中的food元素并将其赋值给element
    this.element = document.getElementById('food')!;
  }

  // 定义一个获取食物X轴坐标的方法
  get X() {
    return this.element.offsetLeft;
  }

  get Y() {
    return this.element.offsetTop;
  }

  change() {
    // 食物的位置，最小是0，最大是290.间隔10，移动一次是一格
    let randomX = Math.round(Math.random() * 29) * 10;
    let randomY = Math.round(Math.random() * 29) * 10;
    this.element.style.left = randomX + 'px';
    this.element.style.top = randomY + 'px';
  }
}

export default Food;