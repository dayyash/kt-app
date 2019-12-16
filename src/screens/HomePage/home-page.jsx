import React from "react";
import PropTypes from "prop-types";
import { AdminButton, ClientButton } from "../../components";
import { withStyles } from "@material-ui/core";
import styles from "./style.js";

class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.container}>
          <div className={classes.adminButton}>
            <AdminButton />
          </div>
          <ClientButton />
        </div>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
