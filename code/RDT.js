var 이름1 = { name: '김' };

function 변경(obj) {
  obj = { name: 'park' };
}

변경(이름1);
//파라미터(매개변수 작동 원리)

//변경 (이름)을 위 함수 obj 매개변수를 통해서 주고있다 그쵸? 
//변수가 영어로 var이죠?
//저 말은 변경 (var obj = 이름1) 이란 뜻임
//obj 근데 var obj - {name : 'park'}했다>
//obj ---> name :park 겠네>

//이름1 화살표 바뀐곳 있나요?  없죠 그러면
//바뀌지않을까? 이름1은 name 김을 가리키고 있는 화살표.
console.log(이름1);
