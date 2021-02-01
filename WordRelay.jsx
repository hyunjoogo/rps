const React = require('react');
const { Component } = React

class WordRelay extends Component {
  state= {
    word : "김현주",
    value : "",
    result: "",
  }

  handelChange = (e) => {
    this.setState({value:e.target.value});
  }

  handelSubmit = (e) => {
    e.preventDefault();
    const _word = this.state.word
    const _value = this.state.value
    if(_word[_word.length -1] === _value[0]) {
      this.setState({
        result: "딩동댕", 
        word:_value , 
        value:""
      })
      this.input.focus();
    } else {
      this.setState({
        result: "땡",
        value:"",
      });
      this.input.focus();
    }
  }

  onRefInput = (c) => {
    this.input = c;
  }
  render() {
    return (
      <div>
        <h1>끝말잇기!</h1>
        <form onSubmit={this.handelSubmit}>
          <label>
            <p>시작 단어 : {this.state.word}</p>
            <input ref={this.onRefInput} value={this.state.value} type="text" onChange={this.handelChange} />
          </label>
          <input type="submit" value="제출" />
        </form>
        <div>{this.state.result}</div>
      </div>
    )
  }
}

module.exports = WordRelay;