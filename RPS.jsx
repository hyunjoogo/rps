import React, {Component} from 'react';

class RPS extends Component{
  state = {
    img : "./src/img/r.png",
    score : "",
    result : "",
  }

  onClickBtn = (item) => {

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
            onClick={()=>onClickBtn('rock')} />
          <img 
            src="./src/img/btn_paper.png" 
            alt="paper-button"
            onClick={()=>onClickBtn('paper')} />
          <img 
            src="./src/img/btn_scissors.png" 
            alt="scissors-button"
            onClick={()=>onClickBtn('scissors')} />
        </div>
        <div>{result}</div>
        <div>현재 {score} 점</div>
      </div>
    )
  }
}

export default RPS;