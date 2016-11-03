import "font-roboto/dist/styles/roboto.min.css";
import injectTapEventPlugin from "react-tap-event-plugin";
import React, {
  Component,
  PropTypes
} from "react";
import { render } from "react-dom";
import Main from "./components/Main";

injectTapEventPlugin();
render( <Main />, document.querySelector( "#root" ) );
