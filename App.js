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
  Col,
  Drawer,
  Item,
  Input,
  Row,
  Fab
} from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import SideBar from "./src/template/Sidebar";
import FooterAvalia from "./src/template/FooterAvalia";
import Mapa from "./src/Maps/Map";

const instruction = Platform.select({
  android: "Você está no android"
});

export default class App extends Component {
  closeDrawer = () => {
    this._drawer._root.close();
  };
  openDrawer = () => {
    this._drawer._root.open();
  };

  render() {
    return (
      <Drawer
        ref={ref => {
          this._drawer = ref;
        }}
        content={<SideBar />}
      >
        <Container>
          <Content >
              <Button transparent style={{position:'absolute', zIndex: 998}}>
                <Icon
                  name="menu"
                  size={35}
                  style={{ color:'#009c3b',lineHeight:200}}
                  onPress={this.openDrawer.bind(this)}
                />
              </Button>

        
             
            <Mapa />
          
          </Content>
        </Container>
      </Drawer>
    );
  }
}
