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
  return array;
}

class NumberBaseball extends Component {
  state = {
    result: "",
    value: "",
    answer : getNumber(),
    try : [],
  };

  onChangeInput = (e) => {
    // console.log(e.target.value)
    this.setState({value : e.target.value});
  };

  onSubmitForm = (e) => {
    e.preventDefalut();
  };
  

tries = [
  { try : "1", result: "3052" },
  { try : "2", result: "3024" },
]

  render() {
  return (
    <div>
      <h1>숫자 게임</h1>
      <p>{this.state.answer}</p>
      <p>{this.state.result}</p>
      <form onSubmit={this.onSubmitForm}>
      <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        <input type="submit" />
      </form>
      <p>시도 : {this.state.try.length} </p>
      <ul>
        {this.tries.map((_try) => {
          return (<Try key={_try.try} _try={_try} />)
        })}
      </ul>
    </div>
  )}
}  

export default NumberBaseball;