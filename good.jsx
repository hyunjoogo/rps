import React, {useEffect, useState, useRef, useCallback} from 'react';


const scores = {
  rock: 0,
  paper: 2,
  scissors: 1,
  './img/r.png': 0,
  './img/p.png': 2,
  './img/s.png': 1,
};
let SPEED = 1000;

const start = new Audio('./sound/start.mp3');
const win = new Audio('./sound/win.mp3');
const lose = new Audio('./sound/lose.mp3');
const draw = new Audio('./sound/draw.mp3');

const RPS = () => {
  const rockUrl = './img/r.png';
  const paperUrl = './img/p.png';
  const scissorsUrl = './img/s.png';

  const [playing, setPlaying] = useState(true);
  const [img, setImg] = useState(rockUrl);
  const [result, setResult] = useState('');
  const interval = useRef();

  const changeHand = useCallback(() => {
    console.log(img);
    if (img === rockUrl) {
      setImg(paperUrl);
    } else if (img === paperUrl) {
      setImg(scissorsUrl);
    } else if (img === scissorsUrl) {
      setImg(rockUrl);
    }
  }, [img]);

  useEffect(() => {
    if (playing) {
      interval.current = setInterval(changeHand, SPEED);
    }
    return () => {
      clearInterval(interval.current);
    };
  }, [changeHand, playing]);
  const playSound = (sound) => {
    sound.currentTime = 0;
    sound.play();
  };
  const onClickBtn = (choice) => {
    clearInterval(interval.current);
    const myScore = scores[choice];
    const ComScore = scores[img];
    const gameScore = myScore - ComScore;
    if (gameScore === 0) {
      setPlaying(false);
      setResult('비겼다!');
      playSound(draw);
      setTimeout(() => {
        playSound(start)
        setPlaying(true);
      }, 1000);
    } else if ([-1, 2].includes(gameScore)) {
      setResult('이겼다!!');
      // playSound(win);
    } else if ([1, -2].includes(gameScore)) {
      setResult('졌다😥😥😥');
      // playSound(lose);
    }
  };
  return (
    <div className="wrapper">
      <div className="motion-area">
        <img src={img} alt="rock" />
        <img className="result_draw" src="./img/result_draw.png" alt="draw" />
        <img className="result_lose" src="./img/result_lose.png" alt="draw" />
        <img
          className="result_win_lt"
          src="./img/result_win_lt.png"
          alt="draw"
        />
        <img
          className="result_win_rt"
          src="./img/result_win_rt.png"
          alt="draw"
        />
      </div>
      <div className="btn">
        <img
          className="btn-rock"
          src="./img/btn_rock.png"
          alt="rock-button"
          onClick={() => onClickBtn('rock')}
        />
        <img
          className="btn-paper"
          src="./img/btn_paper.png"
          alt="paper-button"
          onClick={() => onClickBtn('paper')}
        />
        <img
          className="btn-scisscors"
          src="./img/btn_scissors.png"
          alt="scissors-button"
          onClick={() => onClickBtn('scissors')}
        />
      </div>
      <div>한국도박문제 관리센터 : 전화상담 국번없이 1336 (24시간)</div>
      <div>{result}</div>
    </div>
  );
};
export default RPS;