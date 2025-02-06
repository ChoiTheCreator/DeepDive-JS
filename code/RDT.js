var 이름1 = { name: '김' };

function 변경(obj) {
  obj = { name: 'park' };
}

변경(이름1);
console.log(이름1);
