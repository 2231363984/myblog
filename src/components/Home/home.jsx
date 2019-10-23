import React from 'react';
import { Layout, Menu, Icon, Row, Col, Input } from 'antd';
import './home.css';

const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { SubMenu } = Menu;
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu
            key={item.key}
            title={<span>
              {item.type ? <Icon type={item.type} /> : null}
              <span>{item.displayName}</span>
            </span>}
            onTitleClick={this.onTitleClick}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (<Menu.Item key={item.key} title={item.displayName} onClick={() => this.menuItemClick(item.route)}>
        {item.type ? <Icon type={item.type} /> : null}
        <span>{item.displayName}</span>
      </Menu.Item>)
    }
    )
  }
  menuItemClick = (path) => {
    this.props.history.push(path);
  }

  render() {
    return (
      <React.Fragment>
        <Layout>
          <Header className="my-header">
            <Col span={18} offset={3} className="my-header-flex">
              <Col>
                <div className="logo" />
              </Col>
              <Col offset={3}>
                <Menu
                  mode="horizontal"
                  style={{ lineHeight: '63px', borderBottom: "0px" }}
                >
                  <Menu.Item key="1">nav 1</Menu.Item>
                  <Menu.Item key="2">nav 2</Menu.Item>
                  <Menu.Item key="3">nav 2</Menu.Item>
                </Menu>
              </Col>
              <Col>
                <Search
                  placeholder="input search text"
                  onSearch={value => console.log(value)}
                  style={{ width: 200 }}
                />
              </Col>
            </Col>

          </Header>
          <Content className="my-content">
            <Col span={18} offset={3} className={'in-my-content'} >
              <Row>
                <Col>111</Col>
                <Col>222</Col>
              </Row>
            </Col>

          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </React.Fragment>
    );
  }
}