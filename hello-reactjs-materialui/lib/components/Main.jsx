import React, {
  Component,
  PropTypes
} from "react";
import "./base.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import {
  Card,
  CardHeader
} from "material-ui/Card";
import AppNav from "./AppNav";

export default class Main extends React.Component {
  static defaultProps = {};

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme( lightBaseTheme )}>
        <div>
          <AppNav />
          <div>
            <Card>
              <CardHeader
                title="Title" subtitle="Subtitle"
              />
            </Card>
            <Card>
              <CardHeader
                title="Title" subtitle="Subtitle"
              />
            </Card>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}