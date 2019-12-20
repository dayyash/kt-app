import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "react-i18next";
import {
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Table,
  TableBody
} from "@material-ui/core";
import MockClientList from "../../mocks/clientList";

const WaitingListTable = ({ clientInfoList, t }) => {
  clientInfoList = MockClientList;
  return (
    <React.Fragment>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t("label.first-name")}</TableCell>
              <TableCell>{t("label.last-name")}</TableCell>
              <TableCell>{t("label.time-in")}</TableCell>
              <TableCell>{t("label.status")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientInfoList.map(row => (
              <TableRow key={clientInfoList.firstName}>
                <TableCell component="th" scope="row">
                  {clientInfoList.firstName}
                </TableCell>
                <TableCell align="right">{clientInfoList.lastName}</TableCell>
                <TableCell align="right">{clientInfoList.timeStamp}</TableCell>
                <TableCell align="right">{clientInfoList.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

WaitingListTable.propTypes = {
  clientInfoList: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired
};

export default withTranslation()(WaitingListTable);
