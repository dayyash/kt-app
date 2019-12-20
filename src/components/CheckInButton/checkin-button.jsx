import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import styles from "../AdminButton/styles";
import { connect } from "react-redux";
import CLIENT_ACTION_TYPES from "../../redux-saga/actionTypes/Client";

const CheckInButton = ({
  clientInfo,
  classes,
  t,
  saveClientInfo,
  client_info
}) => {
  const onClick = () => {
    saveClientInfo(clientInfo);
  };

  return (
    <React.Fragment>

      <Button className={classes.checkInButton} onClick={onClick}>
        {t("client-page.button.submit")}
      </Button>
    </React.Fragment>
  );
};

CheckInButton.propTypes = {
  classes: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
  saveClientInfo: PropTypes.func.isRequired,
  client_info: PropTypes.object.isRequired
};

const mapStateToProps = ({ client }) => ({
  client_info: client.client_info
});

const mapDispatchToProps = dispatch => ({
  saveClientInfo: payload =>
    dispatch({
      type: CLIENT_ACTION_TYPES.CLIENT_INFO,
      payload
    })
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(withTranslation()(CheckInButton))
);
