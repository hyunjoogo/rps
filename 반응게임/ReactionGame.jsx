import React, {useState, useRef} from 'react';

function getTime() {
  const randomTime = (Math.floor(Math.random() * 3) + 1) * 1000
  console.log(randomTime)
  return randomTime;
}
const ReactionGame = () => {
  const [status, setStatus] = useState("ready");
  const [message, setMessage] = useState("클릭해서 시작하세요.");
  const [result, setResult] = useState([]);
  const timeout = useRef();
  const startTime = useRef();
  const endTime = useRef();

  const onClickScreen = () => {
    if(status === "ready") {
      setStatus("start");
      setMessage("초록색 화면이 나오면 클릭하세요.");
      timeout.current = setTimeout(()=>{
        setStatus("now");
        setMessage("클릭");
        startTime.current = new Date();
      }, getTime());
    } else if(status === "start") {
      clearTimeout(timeout.current);
      setStatus("ready");
      setMessage("이런 성급하시군요. 초록색이 된 후 클릭하세요. 클릭하시면 다시 시작합니다.");
    } else if(status === "now") {
      endTime.current = new Date();
      setStatus("ready");
      setMessage("클릭해서 시작하세요!");
      setResult((prevResult) => ([...prevResult, endTime.current - startTime.current])
      )
    }
  }

  const reset = () => {
    setResult([])
  }

  const renderAverage = () => {
    return result.length === 0
      ? null
      : <div>
          <div> 평균 시간 : {result.reduce((a, c)=> a+c) / result.length} ms</div>
          <div> 이번 결과 : {endTime.current - startTime.current} ms</div>
          <button onClick = {reset}> 초기화 </button>
        </div>
  }
  return (
    <section>
      <div 
        id="screen"
        className={status} 
        onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </section>
  )
  }


export default ReactionGame;