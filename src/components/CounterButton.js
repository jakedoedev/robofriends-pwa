import React from 'react';

class CounterButton extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count){
      return true;
    }
    return false;
  }

  updateCount = () => {
    this.setState(state => {
      return { count: state.count + 1}
    });
  }

  render() {
    return (
      <button id="counter" className="f6 link dim ba bw2 ph3 pv2 mb2 dib purple" color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    )
  }
}

export default CounterButton;