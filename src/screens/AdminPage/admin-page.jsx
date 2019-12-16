import React from "react";
import Icon from "@material-ui/core/Icon";
import { navigate } from "@reach/router";

class Admin extends React.Component {
  onClick = () => {
    navigate("home");
  };

  render() {
    return (
      <React.Fragment>
        <Icon className="material-icons" onClick={this.onClick}>
          arrow_back_ios
        </Icon>
      </React.Fragment>
    );
  }
}

export default Admin;
