const array = ['one', 'two'];
var string = 'hi';

console.log(...array);
console.log(...string);

//배열 (문자열배열) 합치기 혹은 복사 기능  (독립적인 완전한 복사)
const spreadedString = [...string];
console.log(spreadedString[1]);

//배열이나 객체는 레퍼런스 객체라서 마구마구 복사하면 안됌 (독립성이 없음)
var obj1 = { a: 3, b: 1 };

//속성 겹치게 deepcopy하면 뒤에 온 녀석이 이김!
var ob2 = { a: 2, ...obj1 };
console.log(ob2);

// 함수가 3개의 매개변수를 받아서 더해주는 함수가 있다고 가정
function plus(a, b, c) {
  console.log(a + b + c);
}

//근데 내가 만약 이 배열 세 값들을 넣고싶다고 가정한다면 일일히 넣어야겠는데 귀찮다
const arr = [10, 20, 30];
//spread는 대괄호를 제거하는 녀석이라 했다.
//배열을 껍질벗겨서 넣어준다면?
plus(...arr);

//apply
const person1 = {
  hi: function () {
    console.log(this.name + '안녕');
  },
};

const person2 = {
  name: '팔협지',
};

//내가 person1 객체의 hi라는 함수를 너무 잘 만들었음.. 그래서 person2에도 쓰고싶음
person1.hi.apply(person2);
