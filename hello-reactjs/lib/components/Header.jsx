import React, {
  Component,
  PropTypes
} from "react";

export default class Main extends Component {
  static defaultProps = {};

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return <h2>{this.props.title}</h2>;
  }
}