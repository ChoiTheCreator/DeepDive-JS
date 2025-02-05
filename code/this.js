const people = {
  name: '손흥민',
  sayHi: function () {
    return `안녕 나는 ${this.name}`;
  },
};

console.log(people.sayHi());

//객체 내 데이터 전부 더해주는 메소드
const obj = {
  data: [1, 2, 3, 4, 5],
  sum: function sum() {
    let result = 0;
    this.data.forEach((args) => (result += args));
    return result;
  },
};

console.log(obj.sum());

//settimeout 적용
function hi() {
  console.log('hi');
}

setTimeout(() => {
  hi();
}, 3000);
