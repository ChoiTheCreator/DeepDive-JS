setTimeout(function () {
  console.log(1);
}, 1000);
setTimeout(function () {
  console.log(2);
}, 2000);
setTimeout(function () {
  console.log(3);
}, 3000);
setTimeout(function () {
  console.log(4);
}, 4000);
setTimeout(function () {
  console.log(5);
}, 5000);

//위에거를 이렇게 바꿨는데 문제가될까?
for (let i = 1; i < 6; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
