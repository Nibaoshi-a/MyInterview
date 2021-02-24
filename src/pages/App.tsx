import React, { Component } from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

import Pictures from './Pictures/index';
import Debounce from './Debounce/index';
class App extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="1" >
        <TabPane tab="Picture" key="1">
          <Pictures/>
        </TabPane>
        <TabPane tab="Bebounce" key="2">
          <Debounce/>
        </TabPane>
      </Tabs>
    );
  }
}

export default App;
