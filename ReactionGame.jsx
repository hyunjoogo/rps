import React, {Component} from 'react';

// function getTime() {
//   const randomTime = (Math.floor(Math.random() * 3) + 2) * 1000
//   console.log(randomTime)
//   return randomTime;
// }
// color : "#b8dff8", 하늘색 / #E83828 (빨강) / #008000 (초록)

class ReactionGame extends Component {
  state = {
    status : "ready", // start , now, end
    // time : getTime(), // 일단 2초로 설정
    message : "클릭해서 시작하세요.",
    result : [],

  }

  onClickScreen = () => {

  }

  render() {
    return (
      <section>
        <div 
          id="screen"
          className={this.state.status} 
          style={{}}
          onClick={this.onClickScreen}>
          {this.state.message}
        </div>
        {this.state.result.length === 0
            ? null
            : <div> 평균시간 : {this.state.result.reduce((a, c)=> a+c) / this.state.result.length} ms</div>
        }
        
      </section>
    )
  }
}

export default ReactionGame;