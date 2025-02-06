function 어레이(...rest) {
  console.log(rest);
  return rest;
}

var newArray = 어레이(1, 2, 3, 4, 5);
console.log(newArray);

//findMax
var numbers = [2, 3, 4, 5, 6, 1, 3, 2, 5, 5, 4, 6, 7];

function findMax(...rest) {
  let max = 0;
  const len = rest.length;
  for (let i = 0; i < len; i++) {
    if (max < rest[i]) {
      max = rest[i];
    }
  }
  return max;
}

console.log(findMax(...numbers));

//sortAlpha

const string = 'justin';
function sortAlpha(...rest) {
  console.log(rest.sort());
}

sortAlpha(...string);

//countChar
function countChar(...rest) {
  const result = {};
  //1.글자 분석 -> 여기에 a는 몇갠지 b는 몇갠지 (반복문 활용)
  rest.forEach((chars) => {
    if (result[chars] > 0) {
      //객체에 값을 넣어야하니
      result[chars] = result[chars] + 1;
    } else {
      //없다면 값을 추가한다
      result[chars] = 1;
    }
  });
  console.log(result);
  return result;
}

countChar(...'aabbadgfasfd');
