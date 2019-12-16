import React from "react";
import PropTypes from "prop-types";
import { CheckInInput, CheckInButton } from "../../components";
import { withStyles } from "@material-ui/core";
import styles from "../HomePage/style";

class Client extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.container}>
          <CheckInInput />
          <div className={classes.adminButton}>
            <CheckInButton />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Client.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Client);
