import React, {Component} from 'react';


const rockUrl = "./src/img/r.png"
const paperUrl = "./src/img/p.png"
const scissorsUrl = "./src/img/s.png"

const scores = {
  rock : 0,
  paper : 2,
  scissors : 1,

  
}

class RPS extends Component{  
  state = {
    img : rockUrl,
    score : "",
    result : "",
  }
  
  interval;

  componentDidMount() {
  this.interval = setInterval(()=>{
    const {img} = this.state;
    if (img === rockUrl) {
      this.setState({
        img: paperUrl
      })
    } else if (img === paperUrl) {
      this.setState({
        img: scissorsUrl
      })
    } else if (img === scissorsUrl) {
      this.setState({
        img: rockUrl
      })
    }
  }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onClickBtn = (choice) => {
    clearInterval(this.interval);
    // 결과 
    const myScore = scores[choice];
    const ComScore = scores[this.state.img]
    console.log(this.state.img)
    console.log(ComScore)
    console.log(myScore);
    // 다시 시작
  }
  render() {
    const {result, score, img} = this.state;
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
        <div>{result}</div>
        <div>현재 {score} 점</div>
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