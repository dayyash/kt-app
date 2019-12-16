import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";

const CheckInButton = ({ t }) => {
  return (
    <React.Fragment>
      <button>{t("client-page.button.submit")}</button>
    </React.Fragment>
  );
};

CheckInButton.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(CheckInButton);
