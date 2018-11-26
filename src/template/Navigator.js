import React, { Component } from "react";
import App from "../App";
import SideBar from "./Sidebar";

const AppRouter = DrawerNavigator(
  {
    Home: { screen: App }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default AppRouter;