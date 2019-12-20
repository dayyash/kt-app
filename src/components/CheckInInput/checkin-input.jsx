import React from "react";
import PropTypes from "prop-types";
import { CheckInButton } from "../../components";
import { withTranslation } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styles from "../AdminButton/styles";

class CheckInInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientInfo: {
        firstName: "",
        lastName: "",
        timeStamp: new Date(),
        status: "Waiting"
      }
    };
  }

  onChange = event => {
    event.preventDefault();
    const { clientInfo } = this.state;

    clientInfo[event.target.name] = event.target.value;
    this.setState({
      ...clientInfo
    });
  };

  render() {
    const { classes, t } = this.props;

    return (
      <React.Fragment>
        <form className={classes.checkInInput} noValidate autoComplete="off">
          <div>
            <TextField
              name="firstName"
              label={t("label.first-name")}
              value={this.state.clientInfo.firstName}
              onChange={this.onChange}
              variant="filled"
            />
          </div>
          <div>
            <TextField
              name="lastName"
              label={t("label.last-name")}
              value={this.state.clientInfo.lastName}
              onChange={this.onChange}
              variant="filled"
            />
          </div>
          <div>
            <CheckInButton clientInfo={this.state.clientInfo} />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

CheckInInput.propTypes = {
  classes: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

export default withStyles(styles)(withTranslation()(CheckInInput));
