//  고양이와 강아지 object들에 기능을 하나 추가하고 싶습니다.

// 모든 고양이와 강아지 object들은 .한살먹기() 라는 함수를 사용할 수 있습니다.

// (1) 한살먹기 함수는 강아지 class로부터 생성된 오브젝트가 사용하면 콘솔창에 에러를 출력해주어야합니다.

// (2) 한살먹기 함수는 고양이 class로 부터 생성된 오브젝트가 사용하면 현재 가지고있는 age 속성에 1을 더해주는 기능을 실행해야합니다.

// 한살먹기 함수는 어떻게 만들면 좋을까요? (검색이 필요할 수 있습니다)
class dog {
  constructor(type, color) {
    this.type = type;
    this.color = color;
  }
  newAge() {
    if (this instanceof cat) {
      this.age += 1;
    }
  }
}

var 강아지1 = new dog('말티즈', 'white');
console.log(강아지1);

class cat extends dog {
  constructor(type, color, age) {
    super(type, color);
    this.age = age;
  }
}
var 고양이1 = new cat('코숏', 'white', 5);
고양이1.newAge();

console.log(고양이1);

// . getter/setter를 이용해봅시다

// 자바스크립트로 간단한 게임 기능을 가진 오브젝트를 뽑는 class를 만들고 싶습니다.

// 다음 조건에 따라 class를 만들어보세요. class 이름은 Unit이라고 합시다.

// (1) 모든 Unit의 인스턴스는 공격력, 체력 속성이 있으며 기본 공격력은 5, 기본 체력은 100으로 설정되어 있어야 합니다.

// (2) 모든 Unit의 인스턴스는 전투력을 측정해주는 battlePoint라는 getter가 있습니다.

// console.log( 인스턴스.battlePoint ) 이렇게 사용하면 현재 공격력과 체력을 더한 값을 콘솔창에 출력해주어야합니다.

// (3) 모든 Unit의 인스턴스는 heal이라는 setter가 있습니다.

// 인스턴스.heal = 50 이렇게 사용하면 체력 속성이 50 증가해야합니다.

// *인스턴스는 class로부터 새로생성되는 오브젝트를 뜻합니다.

class Unit {
  constructor() {
    this.attack = 5;
    this.heart = 100;
  }
  get getBattlePoint() {
    return this.attack + this.heartr;
  }
  set setHeal(upHeart) {
    this.heart += upHeart;
  }
}

var unit2 = new Unit();
//get set을 선언한 순간 함수가 아닌 값지정이라 봐야함
unit2.setHeal = 100;
console.log(unit2);
console.log(unit2.getBattlePoint);

// . getter/setter를 이용해봅시다2

// 다음과 같은 오브젝트가 있습니다.

var data = {
  odd: [],
  even: [],
  set inputNum(arr) {
    arr.forEach((element) => {
      if (element % 2 == 0) {
        this.even.push(element);
      } else {
        this.odd.push(element);
      }
    });
  },
  get getArr() {
    //배열 복사는 spread황
    let tmpArr = [
      ...this.even.sort((a, b) => a - b),
      ...this.odd.sort((a, b) => a - b),
    ];
    return tmpArr;
  },
};

data.inputNum = [1, 4, 5, 280, 5, 6, 6, 3, 3, 1];
console.log(data);

console.log('열드릴게요 ㅋ');
console.log(data.getArr);

// (1) data 오브젝트안에 setter 역할 함수를 하나 만들어보십시오.

// setter 함수에 1,2,3,4 이렇게 아무 자연수나 파라미터로 입력하면 홀수는 odd, 짝수는 even 이라는 속성에 array 형태로 저장되어야합니다.

// (2) data 오브젝트안에 getter 역할 함수를 하나 만들어보십시오.

// getter 함수를 사용하면 odd, even에 저장된 모든 데이터들이 숫자순으로 정렬되어 출력되어야합니다.

// 예를 들면

// data.setter함수(1,2,3,4,5) 이렇게 입력하면

// data = { odd : [1,3,5], even : [2,4] }

// 이렇게 저장이 되어야합니다.

// 빨리 위의 역할을 하는 함수 두개를 data 오브젝트 내에 만들어보십시오.

// 참고로 함수에 넣는 파라미터가 2개 이상이면 set 키워드는 못씀
