import React, {Component } from 'react';

class Try extends Component {
  render() {
    return(
      <li>{this.props._try.try} : {this.props._try.result}  </li>
    )
  }
}
export default Try;