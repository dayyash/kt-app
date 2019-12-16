import React from "react";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";
import { withTranslation } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import styles from "../AdminButton/styles";

const Client = ({ classes, t }) => {
  const onClick = () => {
    navigate("client");
  };

  return (
    <React.Fragment>
      <Button
        className={classes.clientButton}
        onClick={onClick}
      >
        {t("home-page.button.client")}
      </Button>
    </React.Fragment>
  );
};

Client.propTypes = {
  classes: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

export default withStyles(styles)(withTranslation()(Client));
