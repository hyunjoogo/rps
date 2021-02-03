import React, {useState} from 'react';
import Try from './Try'

const getNumber = () => {
  const candidate = [1,2,3,4,5,6,7,8,9];
  const array = []
  for (let i=0; i <4; i+=1) {
    const chosen = 
    candidate.splice(Math.floor(Math.random() * (9-i)),1)[0];
    array.push(chosen);
  }
  console.log(array)
  return array;
}

const NumberBaseball = () => {
  const [end, changeEnd] = useState(false);
  const [result, changeResult] = useState("");
  const [value, changeValue] = useState("");
  const [answer, changeAnswer] = useState(getNumber());
  const [tries, changeTries] = useState([]);

  const onChangeInput = (e) => {
    changeValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (value.length !== 4) {
      changeResult("다시 확인해주세요😊");
      return;
    }
    if (value === answer.join("")) {
      changeResult("Hooooom Run 🎉🎉🎉");
      changeTries((prevTries) => {
        return [...prevTries, {try: value, result: "홈런"}]});
      changeValue("");
      changeEnd(true);
    } else {
      const userArray = value.split('').map((v) => parseInt(v)); // 사용자 입력 배열
      let strike = 0;
      let ball =0;
      if (tries.length >=9) {
        changeResult(`OUT!!!😥 숫자는 ${answer.join("")}`);
        changeTries((prevTries) => ([...prevTries, {try: value, result: `${strike} Strike, ${ball} Ball`}]));
        changeValue("");
        changeEnd(true);
      } else {
        for (let i=0; i <4; i+=1) {
          if (answer[i] === userArray[i]){ // 자리 , 숫자 같을 때
            strike++;
          } else if (answer.includes(userArray[i])) { // 숫자 같고 자리 다를 때
            ball++;
          }}
        changeResult(`${strike} Strike, ${ball} Ball`);
        changeTries((prevTries) => ([...prevTries, {try: value, result: `${strike} Strike, ${ball} Ball`}]));
        changeValue("");
      }
    }
    };

    const resetGame= () => {
      changeEnd(false);
      changeResult("");
      changeValue("");
      changeAnswer(getNumber());
      changeTries([]);
    }
  return (
    <div>
      <h1>숫자 게임</h1>
      <span> {end ? "다시하기 버튼을 눌러주세요" : "숫자 1~9 / 중복X / 4자리"} </span>
      <p>결과 : {result}</p>
      <form onSubmit={onSubmitForm}>
      <input type="number" disabled={end} value={value} onChange={onChangeInput} placeholder="4자리 숫자를 입력하세요" />
        <input type="submit" disabled={end} />
      </form>
      <br />
      <button disabled={!end} onClick={resetGame}>다시하기</button>
      <p>시도 : {tries.length} </p>
      <ul>
        {tries.map((_try,index) => {
          return (<Try key={index} tryInfo={_try} />)
        })}
      </ul>
    </div>
  )
}


  export default NumberBaseball;