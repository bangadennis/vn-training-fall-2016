import React, {
  Component,
  PropTypes
} from "react";
import Header from "./Header";
import ButtonCounter from "./ButtonCounter";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header title="Title 1"/>
        <Header title="Title 2"/>
        <ButtonCounter />
      </div>
    )
  }
}