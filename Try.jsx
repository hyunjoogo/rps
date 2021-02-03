import React, {Component } from 'react';

class Try extends Component {
  render() {
    return(
      <li>{this.props._try.try}차 시도 결과 : {this.props._try.result}  </li>
    )
  }
}
export default Try;