export const hi = '你好';

class meinv {
  
  private age:number;
  private hight:number;
  private xiaowei:Array<number>;
  private tuiwei:Array<number>;

  constructor(age:number, hight:number, xiaowei:Array<number>, tuiwei:Array<number>){
    this.age = age;
    this.hight  = hight;
    this.xiaowei = xiaowei;
    this.tuiwei = tuiwei
  }

  eat() {
    return "吃饭了"
  }

}