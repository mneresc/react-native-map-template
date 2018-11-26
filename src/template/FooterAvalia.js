"use strict";
import React, { Component } from "React";
import {
  Button,
  Text,
  Left,
  Title,
  Right,
  Col,
  Row,
  Content,
  Icon
} from "native-base";
import styles from "../styles/styles";

export default class FooterAvalia extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedButtom: 5 };
  }
/**
 * 
 * @param {indice que indica quantos KM foram seleciona} index 
 */
  atualizarConsultaDistancia(index) {
    this.setState({ selectedButtom: index });
  }
  render() {
    return (
      <Row>
      <Col>
      <Button transparent>
            <Icon
              name="menu"
              size={25}
              style={{ paddingLeft: 5, paddingRight: 10 }}
            />
      </Button>
      </Col>
    </Row>
    );
  }
}
