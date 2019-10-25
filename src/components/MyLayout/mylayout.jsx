import React from 'react';
import { Layout, Menu, Icon, Col, Input, Row, Card, List, Avatar, Button } from 'antd';
import { siteNav } from '../../Config/siteConfig.jsx';
import { withRouter } from 'react-router-dom';
import { announcement, newComment } from '../../Config/requestMock';
import './mylayout.css';

const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { SubMenu } = Menu;
class MyLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
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
                                <div className="logo" >JTM</div>
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
                            <Row gutter={[16, 0]} className="my-gutter"> 
                                <Col span={18} className={'my-left-content'}>
                                    <Col>
                                        {this.props.children}
                                    </Col>
                                </Col>
                                <Col span={6} className={'my-right-content'}>
                                    <Row className="my-announcement">
                                        <Col span={24}>
                                            <Card title="公告" size="small" bordered={false} style={{ width: "100%" }}>
                                                <p>{announcement.result.description}</p>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row className="my-new-comment">
                                        <Col span={24}>
                                            <Card title="最新评论" size="small" bordered={false} style={{ width: "100%" }}>
                                                <List
                                                    itemLayout="horizontal"
                                                    dataSource={newComment.result.data}
                                                    renderItem={item => (
                                                        <List.Item>
                                                            <List.Item.Meta
                                                                avatar={<Avatar style={{ color: '#fff', backgroundColor: item.avatar }}>{item.UserName[0]}</Avatar>}
                                                                title={<span>{item.UserName}</span>}
                                                                description={
                                                                    <div>
                                                                        <p>{item.Comment}</p>
                                                                        <p>主题: <Button type="link" style={{ padding: 0 }} onClick={() => { this.props.history.push(item.CommentUrl) }}>{item.CommentTitle}</Button></p>
                                                                    </div>
                                                                }
                                                            />
                                                        </List.Item>
                                                    )}
                                                />
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Authour is Created by JTM</Footer>
                </Layout>
            </React.Fragment >
        );
    }
}
export default withRouter(MyLayout)