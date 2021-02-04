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
  timeout;
  startTime;
  endTime;

  onClickScreen = () => {
    const {result, status, message} = this.state
    if(status=== "ready") {
      this.setState({
        status : "start",
        message: "초록색 화면이 나오면 클릭하세요."
      })
      this.timeout = setTimeout(()=>{
        this.setState({
          status : "now",
          message : "클릭!!"
        });
        this.startTime = new Date();
      }, getTime())
    } else if(status === "start") {
      clearTimeout(this.timeout);
      this.setState({
        status : "ready",
        message: "이런 성급하시군요. 초록색이 된 후 클릭하세요. 클릭하시면 다시 시작합니다."
      })
    } else if(status === "now") {
      this.endTime = new Date();
      this.setState((prevState) => {
        return {
          status: "ready",
          message: "클릭해서 시작하세요!",
          result: [...prevState.result, this.endTime - this.startTime],
        }
      });
    }


  }

  render() {
    const {result, status, message} = this.state
    return (
      <section>
        <div 
          id="screen"
          className={status} 
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