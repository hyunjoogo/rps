import React, {Component} from 'react';
import Try from './Try'

function getNumber() {
  const randomNumber = Math.random();
  return Math.floor( randomNumber * 10000 )
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
      <p>{this.state.result}</p>
      <form onSubmit={this.onSubmitForm}>
      <input maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        <input type="submit" />
      </form>
      <p>시도 : {this.state.try.length} </p>
      <ul>
        {this.tries.map((_try) => {
          // console.log(_try.try)
          return (<Try key={_try.try} _try={_try} />) // index는 바꿔야할듯
        })}
      </ul>
    </div>
  )}
}  

export default NumberBaseball;