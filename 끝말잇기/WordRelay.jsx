import React, { useState, useRef } from 'react';

const WordRelay = () => {
  const [word, changeWord] = useState("김현주");
  const [value, changeValue] = useState("");
  const [result, changeResult] = useState("");
  const inputRef = useRef(null);


const handelSubmit = (e) => {
  e.preventDefault();
  if (word[word.length -1] === value[0]) {
    changeResult('딩동댕');
    changeWord(value);
    changeValue("");
    inputRef.current.focus();
  } else {
    changeResult('땡');
    changeValue("");
    inputRef.current.focus();
  }
}

    return (
      <div>
        <h1>끝말잇기!</h1>
        <form onSubmit={handelSubmit}>
          <label>
            <p>시작 단어 : {word}</p>
            <input 
              ref={inputRef}
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