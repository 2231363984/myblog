import React from 'react';
import { Layout, Menu, Icon, Col, Input, Row } from 'antd';
import { siteNav } from '../../Config/siteConfig.jsx';
import { withRouter } from 'react-router-dom';
import './mylayout.css';

const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { SubMenu } = Menu;
class MyLayout extends React.Component {
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
                        <Col className="my-header-flex">
                            <Col>
                                <div className="logo" />
                            </Col>
                            <Col offset={3}>
                                <Menu
                                    mode="horizontal"
                                    style={{ lineHeight: '63px', borderBottom: "0px" }}
                                >
                                    {this.renderMenu(siteNav)}
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
                        <Col className={'in-my-content'} >
                            <Row gutter={[16, 0]}>
                                <Col span={18} className={'my-left-content'}>
                                    <Col>
                                        {this.props.children}
                                    </Col>
                                </Col>
                                <Col span={6} className={'my-right-content'}>
                                    123
                    </Col>

                            </Row>


                        </Col>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </React.Fragment>
        );
    }
}
export default withRouter(MyLayout)