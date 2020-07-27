import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Sample extends Component {
  setRandomColor = () => {
    const { store } = this.props;
    const color = [
      Math.floor((Math.random() * 55) + 200),
      Math.floor((Math.random() * 55) + 200),
      Math.floor((Math.random() * 55) + 200)
    ];

    store.setColor(color);
  }

  increaseNumber = () => {
    const { store } = this.props;
    store.increase();
  }

  decreaseNumber = () => {
    const { store } = this.props;
    store.decrease();
  }

  render() {
    return (
        <div>          
          <button type="button" onClick={this.increaseNumber}>+1</button>
          <button type="button" onClick={this.decreaseNumber}>-1</button>
          <button type="button" onClick={this.setRandomColor}>Random Color</button>
        </div>
    );
  }
}

export default Sample;