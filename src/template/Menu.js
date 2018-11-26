import React, { Component } from 'react';
import { Drawer } from 'native-base';
import SideBar from './Sidebar';
​
export default class DrawerExample extends Component {
    render() {
      closeDrawer = () => {
        this._drawer._root.close()
      };
      openDrawer = () => {
        this._drawer._root.open()
      };
        return (
            <Drawer
              ref={(ref) => { this._drawer = ref; }}
              content={<SideBar navigator={this._navigator} />}
              onClose={() => this.closeDrawer()}
            >
          </Drawer>
        );
    }
}