import React from 'react';
import ReactDOM from 'react-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

// this component rendering will be derive by observable
@observer 
class Counter extends React.Component {
  // mobx plz record this value count
  @observable count = 0;
  
  render() {
    return(
      <div> 
        Counter: {this.count}<br />
        <button onClick={() => this.handleDes()}>-</button>
        <button onClick={() => this.handleInc()}>+</button>
      </div>
    );
  }
  handleDes() {

    this.count--;
  }
  handleInc() {
    this.count++
  }
};

ReactDOM.render(
  <Counter />
  , document.querySelector('.container'));
