import React from "react";
import { Router } from "@reach/router";
import { HomePage, AdminPage, ClientPage } from "../screens/index";

const Navigation = () => (
  <Router>
    <HomePage path="/" />
    <HomePage path="home" />
    <AdminPage path="admin" />
    <ClientPage path="client" />
  </Router>
);

export default Navigation;
