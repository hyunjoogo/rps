import React, {Component} from 'react';

function getTime() {
  const randomTime = (Math.floor(Math.random() * 3) + 1) * 1000
  console.log(randomTime)
  return randomTime;
}
// color : "#b8dff8", 하늘색 / #E83828 (빨강) / #008000 (초록)

class ReactionGame extends Component {
  state = {
    status : "ready", // start , now, end
    // time : getTime(), // 일단 2초로 설정
    message : "클릭해서 시작하세요.",
    result : [],

  }

  onClickScreen = () => {
    const {result, status, message} = this.state
    if(status=== "ready") {
      this.setState({
        status : "start",
        message: "초록색 화면이 나오면 클릭하세요."
      })
      setTimeout(()=>{
        this.setState({
          status : "now",
          message : "클릭하세요!!"
        })
      }, getTime())
    } else if(status === "start") {

    } else if(status === "now") {
      this.setState({
        status: "ready",
        message: "클릭해서 시작하세요!",
        result: [],
      })
    }


  }

  render() {
    const {result, status, message} = this.state
    return (
      <section>
        <div 
          id="screen"
          className={status} 
          style={{}}
          onClick={this.onClickScreen}>
          {message}
        </div>
        {result.length === 0
            ? null
            : <div> 평균시간 : {result.reduce((a, c)=> a+c) / result.length} ms</div>
        }
        
      </section>
    )
  }
}

export default ReactionGame;