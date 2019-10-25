import React from 'react';
import { Row, Icon, Col, Button, Typography, Tag } from "antd";
import './MyListItem.css';
const { Title, Paragraph } = Typography;

export default class MyListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOnFocus: false
        }
    }
    handleMouseOver = () => {
        this.setState({
            isOnFocus: true
        })
    }
    handleMouseOut = () => {
        this.setState({
            isOnFocus: false
        })

    }
    render() {
        return (
            <React.Fragment>
                <Row onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    <Col span={6} style={{ overflow: "hidden" }}>
                        <img
                            className={this.state.isOnFocus ? 'image-scale my-image' : "my-image"}
                            alt="pic"
                            style={{ width: "100%" }}
                            src={this.props.imageSrc}
                        />
                    </Col>
                    <Col span={17} offset={1}>
                        <Row type="flex" align="middle">
                        <Tag color="green" className="my-list-tag">{this.props.TagName}</Tag>
                            <Title level={3}>
                                {this.props.title}
                            </Title>
                        </Row>
                        <Row>
                            <Paragraph ellipsis={{ rows: 3, expandable: false }}>
                                {this.props.description}
                            </Paragraph>
                        </Row>
                        <Row type="flex" align="middle">
                            <Col span={18} className="my-list-iconarray">
                                <div className="my-list-icon">
                                    <Icon type="calendar" />
                                    <span> {this.props.createTime}</span>
                                </div>
                                <div className="my-list-icon">
                                    <Icon type="fire" />
                                    <span> {this.props.fireNumber}</span>
                                </div>
                                <div className="my-list-icon">
                                    <Icon type="like" />
                                    <span> {this.props.likeNumber}</span>
                                </div>
                                <div className="my-list-icon">
                                    <Icon type="message" />
                                    <span> {this.props.messageNumber}</span>
                                </div>
                            </Col>
                            <Col span={6}>
                                <Button size={"large"}>阅读详情</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}