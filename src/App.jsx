import './App.css';

function App() {
  const att = ['흥민', '영희', '철수', '재석'];

  const search = (args) => {
    let ans = '';
    // att.forEach((name) => (args === name ? (ans = args) : (ans = null)));

    // console.log(ans);
    // return ans;
    const len = att.length;

    for (let i = 0; i < len; i++) {
      if (args === att[i]) {
        ans = att[i];
      }
    }

    return ans;
  };

  const avg = (arr, score) => {
    let sum = 0;
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      sum += arr[i];
    }
    const average = sum / len;
    const distance = score - average;
    console.log(average);
    console.log(distance);
    if (distance > 0) {
      return '평균이 낮아짐';
    } else {
      return '평균이 높아짐';
    }
  };

  return (
    <>
      <div> {search('흥민')}</div>
      <div> {avg([10, 20, 30, 40, 50], 40)}</div>
    </>
  );
}

export default App;
