import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { navigate } from "@reach/router";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import styles from "./styles";

const AdminButton = ({ classes, t }) => {
  const onClick = () => {
    navigate("admin");
  };

  return (
    <React.Fragment>
      <Button className={classes.adminButton} onClick={onClick}>
        {t("home-page.button.admin")}
      </Button>
    </React.Fragment>
  );
};

AdminButton.propTypes = {
  classes: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default withStyles(styles)(withTranslation()(AdminButton));
