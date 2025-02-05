const array = ['one', 'two'];
var string = 'hi';

console.log(...array);
console.log(...string);

//배열 (문자열배열) 합치기 혹은 복사 기능  (독립적인 완전한 복사)
const spreadedString = [...string];
console.log(spreadedString[1]);

//배열이나 객체는 레퍼런스 객체라서 마구마구 복사하면 안됌 (독립성이 없음)
var obj1 = { a: 3, b: 1 };

var ob2 = { a: 2, ...obj1 };

console.log(ob2);
