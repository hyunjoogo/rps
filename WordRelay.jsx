import React, { useState }from 'react';

const WordRelay = () => {
  const [word, changeWord] = useState("김현주");
  const [value, changeValue] = useState("");
  const [result, changeResult] = useState("");


const handelSubmit = (e) => {
  e.preventDefault();
  if (word[word.length -1] === value[0]) {
    changeResult('딩동댕');
    changeWord(value);
    changeValue("");
  } else {
    changeResult('땡');
    changeValue("");
  }
}

    return (
      <div>
        <h1>끝말잇기!</h1>
        <form onSubmit={(e) => handelSubmit(e)}>
          <label>
            <p>시작 단어 : {word}</p>
            <input 
              value={value} 
              type="text" 
              onChange={
                (e)=> changeValue(e.target.value)
                } />
          </label>
          <input type="submit" value="제출" />
        </form>
        <div>{result}</div>
      </div>
    )
}

export default WordRelay;