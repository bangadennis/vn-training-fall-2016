import React, {
  Component,
  PropTypes
} from "react";

export default class Main extends Component {
  constructor(props) {
    super( props );
    this.onIncrement = this.onIncrement.bind( this );
  }

  state = {
    counter: 0
  };

  onIncrement() {
    this.setState( {
      counter: this.state.counter + 1
    } )
  }

  onDecrement = () => {
    this.setState( {
      counter: this.state.counter - 1
    } )
  };

  render() {
    return (
      <div>
        <input type="text" value={this.state.counter}/>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    )
  }
}