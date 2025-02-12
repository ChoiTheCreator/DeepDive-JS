//자바스크립트도 객체지향인데요 (자동기계)
// this : 기계에서 새로 생성되는 object -> 이게 인스턴스임
//우리의 기계 (object 생성기계가) 생성자임 (constructor)
function product(name, price) {
  (this.name = name),
    (this.price = price),
    (this.tax = function (num) {
      console.log('부가세임 ' + (this.price * 0.1 + num));
    });
}

var product1 = new product('shirts', 50000);
var product2 = new product('pants', 60000);

product1.tax(10);
product2.tax(20);

//arr.sort(), arr.map() 이런게 다 가능한 이유가 arr의 부모의 유전자에 저런 내장함수가 있는거임!
function 기계() {
  this.name = 'Kim';
  this.age = 15;
}
기계.prototype.gender = '남';
기계.prototype.speakLoud = function () {
  console.log('크게 말하기!!!!');
};
var 학생1 = new 기계();

//내가 새로 만든 프로토타입 (유전자  이름 젠더)
console.log(학생1.gender);

//프로토타입은 객체 형태로만 잘 만들어주면 돼 (그러므로 함수타입도 만들어줘도 괜찮겠지.)
학생1.speakLoud();

//__proto__ 강제유전자 등록가능함. (강제 유전자 주입)

var 부모 = { name: 'Kim' };
var 자식 = {};

자식.__proto__ = 부모;
console.log(자식.name);
//prototype chaining-> 만물의 어머니 확인하기  콘솔가서 proto 속성 확인해보셈

//연습문제

// var 학생2 = { name: 'Kim', age: 20 };
// var 학생3 = { name: 'Park', age: 21 };
// var 학생4 = { name: 'Lee', age: 22 };

function student(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log('hi 나는' + this.name + '임');
  };
}

//기계로 뽑을때 인스턴스 뽑을때 new 쓰셈
var 학생4 = new student('강아지', 20);
학생4.sayHi();

var arr = [1, 2, 3];

//arr에 있는 3이란 값을 제거하는 유용한 함수를 만들어보자. 이 함수는 모든 array에 추가할거임

//프로토타입(유전자)에 추가한 메서드는 this를 무조건 넣어야한다 는 아님
//그러나, 인스턴스와 관련한 메서드 아래와 같은 remove3
Array.prototype.remove3 = function () {
  this.forEach((args, index) => {
    if (args === 3) {
      //원본 유지
      this.splice(index, 1);
    }
  });
};

arr.remove3();

console.log(arr); //[1,2]
