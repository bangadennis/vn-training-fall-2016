import React, {
  Component,
  PropTypes
} from "react";
import AppBar from "material-ui/AppBar";
import MenuItem from "material-ui/MenuItem";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import { white } from "material-ui/styles/colors";

class AppNavMenu extends Component {
  render() {
    return (
      <IconMenu
        {...this.props}
        iconButtonElement={
          <IconButton><MoreVertIcon color={white}/></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh"/>
        <MenuItem primaryText="Help"/>
        <MenuItem primaryText="Sign out"/>
      </IconMenu>
    )
  }
}

export default class AppNav extends Component {
  render() {
    return (
      <div>
        <AppBar title="My AppBar"
                iconElementRight={<AppNavMenu/>}/>
      </div>
    )
  }
}