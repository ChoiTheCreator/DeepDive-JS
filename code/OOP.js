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
학생1.speakLoud();
