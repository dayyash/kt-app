import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styles from "../AdminButton/styles";

const CheckInInput = ({ classes, t }) => {
  return (
    <React.Fragment>
      <form className={classes.checkInInput} noValidate autoComplete="off">
        <TextField id="first-name" label={t("client-page.label.first-name")} variant="outlined" />
        <TextField id="last-name" label={t("client-page.label.last-name")} variant="outlined" />
        <TextField id="time-in" label={t("client-page.label.time-in")} variant="outlined" />
      </form>
    </React.Fragment>
  );
};

CheckInInput.propTypes = {
  classes: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

export default withStyles(styles)(withTranslation()(CheckInInput));
