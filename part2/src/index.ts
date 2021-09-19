import { hi } from './m1'

function sum(a:number, b:number) {
  return a + b;
}


var obj = {name: '顺悟空', age: 10};

console.log(obj)

obj.age = 18;
console.log(obj)
console.log(sum(123, 456));

console.log('hahah')

console.log(hi)

let fn = (a:number, b:number) => a + b;

fn(123, 456);
fn(88, 22);

console.log(Promise);