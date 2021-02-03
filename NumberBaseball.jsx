import React, {Component} from 'react';
import Try from './Try'

function getNumber() {
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

class NumberBaseball extends Component {
  state = {
    end: false,
    result: "", // 이번 결과
    value: "", // 사용자 입력값
    answer : getNumber(), // ex [1,3,5,7]
    tries : [], // 몇번째 시도인지, 이전 결과값들
  };

  onChangeInput = (e) => {
    this.setState({value : e.target.value});
  };
  
  onSubmitForm = (e) => {
    e.preventDefault();
    // 숫자 아닐 때 경과 넣어줘야 함
    if (this.state.value === this.state.answer.join("")) {
      this.setState({
        result : "Hooooom Run 🎉🎉🎉",
        tries: [...this.state.tries, {try: this.state.value, result: "홈런"}],
        value:"",
        end: true
      })
    } else {
      const userArray = this.state.value.split('').map((v) => parseInt(v)); // 사용자 입력 배열
      let strike = 0;
      let ball =0;
      if (this.state.tries.length >=9) {
        this.setState({
          result : `OUT!!!😥 숫자는 ${this.state.answer.join("")}`,
          tries: [...this.state.tries, {try: this.state.value, result: `${strike} Strike, ${ball} Ball`}],
          value:"",
          end: true
        })
      } else {
        for (let i=0; i <4; i+=1) {
          if (this.state.answer[i] === userArray[i]){ // 자리 , 숫자 같을 때
            strike++;
          } else if (this.state.answer.includes(userArray[i])) { // 숫자 같고 자리 다를 때
            ball++;
          }}
        this.setState({
          result : `${strike} Strike, ${ball} Ball`,
          tries: [...this.state.tries, {try: this.state.value, result: `${strike} Strike, ${ball} Ball`}],
          value:"",
        })
      }
    }
    };
    resetGame= () => {
      this.setState({
        end: false,
        result: "",
        value: "",
        answer : getNumber(),
        tries : [], 
      })
    }


  render() {
  return (
    <div>
      <h1>숫자 게임</h1>

      <p>결과 : {this.state.result}</p>
      <form onSubmit={this.onSubmitForm}>
      <input disabled={this.state.end} maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        <input type="submit" disabled={this.state.end} />
      </form>
      <br />
      <button disabled={!this.state.end} onClick={this.resetGame}>다시하기</button>
      <p>시도 : {this.state.tries.length} </p>
      <ul>
        {this.state.tries.map((_try,index) => {
          return (<Try key={index} _try={_try} />)
        })}
      </ul>
    </div>
  )}
}  

export default NumberBaseball;