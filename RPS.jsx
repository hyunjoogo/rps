import React, {Component} from 'react';

const scores = {
  rock : 0,
  paper : 2,
  scissors : 1,
  "./src/img/r.png" : 0,
  "./src/img/p.png" : 2,
  "./src/img/s.png" : 1,
}

let SPEED = 1000;

class RPS extends Component{  
  rockUrl = "./src/img/r.png"
  paperUrl = "./src/img/p.png"
  scissorsUrl = "./src/img/s.png"

  state = {
    img : this.rockUrl,
    result : "",
  }
  
  interval;
  
  changeHand = () => {
    const {img} = this.state;
    if (img === this.rockUrl) {
      this.setState({
        img: this.paperUrl
      })
    } else if (img === this.paperUrl) {
      this.setState({
        img: this.scissorsUrl
      })
    } else if (img === this.scissorsUrl) {
      this.setState({
        img: this.rockUrl
      })
    }
  }

  componentDidMount() {
  this.interval = setInterval(this.changeHand, SPEED)
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onClickBtn = (choice) => {
    clearInterval(this.interval);
    // 결과 
    const myScore = scores[choice];
    const ComScore = scores[this.state.img]
    const gameScore = myScore - ComScore
    console.log(gameScore, myScore, ComScore);
    if (gameScore === 0) {
      console.log('비김')
      this.setState({
        result : "다시!"
      })
      this.interval = setInterval(this.changeHand, SPEED)
    } else if ([-1, 2].includes(gameScore)) {
      console.log('유저 윈')
      this.setState({
        result : "이겼다!!"
      })
      //돌려돌려
    } else if ([1, -2].includes(gameScore)) {
      console.log('컴퓨터 윈')
      this.setState({
        result : "졌다😥😥😥"
      })
      //다시 하시겠습니까?
    }
    // 다시 시작
  }
  render() {
    const {result, img} = this.state;
    return(
      <div>
        <img src={img} alt="rock" />
        <div className="btn">
          <img 
            src="./src/img/btn_rock.png" 
            alt="rock-button" 
            onClick={()=>this.onClickBtn('rock')} />
          <img 
            src="./src/img/btn_paper.png" 
            alt="paper-button"
            onClick={()=>this.onClickBtn('paper')} />
          <img 
            src="./src/img/btn_scissors.png" 
            alt="scissors-button"
            onClick={()=>this.onClickBtn('scissors')} />
        </div>
        <div>한국도박문제 관리센터 : 전화상담 국번없이 1336 (24시간)</div>
        <div>{result}</div>
      </div>
    )
  }
}

export default RPS;

// const {img} = this.state;
// if (img === "./src/img/r.png") {
//   this.setState({
//     img: "./src/img/p.png"
//   })
// } else if (img === "./src/img/p.png") {
//   this.setState({
//     img: "./src/img/s.png"
//   })
// } else if (img === "./src/img/s.png") {
//   this.setState({
//     img: "./src/img/r.png"
//   })
// }