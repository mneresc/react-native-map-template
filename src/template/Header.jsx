"use strict";
import React, { Component } from "React";
import { Platform } from "react-native";

import {
  Container,
  Button,
  Text,
  Header,
  Left,
  Body,
  Title,
  Right,
  Content,
  Footer,
  FooterTab,
  Drawer
} from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
// import Menu from "./src/template/Menu";

const instruction = Platform.select({
  android: "Você está no android"
});

export default class HeaderContent extends Component {
  closeDrawer = () => {
    this._drawer._root.close();
  };
  openDrawer = () => {
    this._drawer._root.open();
  };

  render() {
    return (
        <div>
            Teste
        </div>
    );
  }
}
