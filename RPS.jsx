import React, {Component} from 'react';

const scores = {
  rock : 0,
  paper : 2,
  scissors : 1,
  "./img/r.png" : 0,
  "./img/p.png" : 2,
  "./img/s.png" : 1,
}

let SPEED = 1000;

const start = new Audio("./sound/start.mp3")
const win = new Audio("./sound/win.mp3")
const lose = new Audio("./sound/lose.mp3")
const draw = new Audio("./sound/draw.mp3")
const dada = new Audio("./sound/dada.mp3")
const yes = new Audio("./sound/yes.mp3")


start.oncanplaythrough = (event) => {
    var playedPromise = start.play();
    if (playedPromise) {
        playedPromise.catch((e) => {
          console.log(e)
          if (e.name === 'NotAllowedError' || e.name === 'NotSupportedError') { 
            console.log(e.name);
          }
        }).then(() => {
          console.log("playing sound !!!");
        });
    }
}



class RPS extends Component{  
  rockUrl = "./img/r.png"
  paperUrl = "./img/p.png"
  scissorsUrl = "./img/s.png"

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

  playSound = (sound) => {
    sound.currentTime = 0;
    sound.play();
  }

  onClickBtn = (choice) => {
    clearInterval(this.interval);
    // 결과 
    const myScore = scores[choice];
    const ComScore = scores[this.state.img]
    const gameScore = myScore - ComScore
    console.log(gameScore, myScore, ComScore);
    if (gameScore === 0) {
      this.setState({
        result : "다시!"
      });
      this.playSound(draw);
      this.timeout = setTimeout(()=>{
        this.interval = setInterval(this.changeHand, SPEED);
        this.playSound(start);
        console.log('setTimeout')
      }, 1000);
    } else if ([-1, 2].includes(gameScore)) {
      console.log('유저 윈')
      this.setState({
        result : "이겼다!!"
      })
      this.playSound(win);
      //돌려돌려
    } else if ([1, -2].includes(gameScore)) {
      console.log('컴퓨터 윈')
      this.setState({
        result : "졌다😥😥😥"
      })
      this.playSound(lose);
      //다시 하시겠습니까?
    }
    // 다시 시작
  }
  render() {
    const {result, img} = this.state;
    return(
      <div className="wrapper">
        <div className="motion-area">
          <img src={img} alt="rock" />
          <img className="result_draw"
          src="./img/result_draw.png" alt="draw" />
          <img className="result_lose"
          src="./img/result_lose.png" alt="draw" />
          <img className="result_win_lt"
          src="./img/result_win_lt.png" alt="draw" />
          <img className="result_win_rt"
          src="./img/result_win_rt.png" alt="draw" />
        </div>
        <div className="btn">
          <img className="btn-rock"
            src="./img/btn_rock.png" 
            alt="rock-button" 
            onClick={()=>this.onClickBtn('rock')} />
          <img className="btn-paper"
            src="./img/btn_paper.png" 
            alt="paper-button"
            onClick={()=>this.onClickBtn('paper')} />
          <img className="btn-scisscors"
            src="./img/btn_scissors.png" 
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