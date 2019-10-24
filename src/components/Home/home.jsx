import React from 'react';
import { List } from 'antd';
import './home.css';

const { Item } = List;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }
  render() {
    return (
      <React.Fragment>
        <List>
          <Item>11</Item>
        </List>
      </React.Fragment>
    );
  }
}