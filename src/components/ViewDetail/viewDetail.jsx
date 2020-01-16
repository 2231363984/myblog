import React from 'react';
import MdEditor from 'react-markdown-editor-lite';
import { Link } from 'react-router-dom';
import { Row, Col, Icon, Typography, Divider,Button } from 'antd';
// import MarkdownIt from 'markdown-it';
// import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-light.css';
import { detailHtml } from '../../Config/requestMock.jsx';
import './viewDetail.css';

const { Title } = Typography;

export default class ViewDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articleBaseInfo: {
        createTime: "111",
        fireNumber: "222",
        messageNumber: "333",
        classification: "444",
      
        prevArticleName: "111",
        prevArticleURL: "/detail/234",
      },
      detailHtml: detailHtml,
      like:15,
      dislike:18,
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Row className={"my-detail-row-title"}>
            <Title>11111</Title>
            <div>
              <div className="my-viewdetail-title">
                <Icon type="calendar" />
                <span> {this.state.articleBaseInfo.createTime}</span>
              </div>
              <div className="my-viewdetail-title">
                <span> 分类 : {this.state.articleBaseInfo.classification}</span>
              </div>
              <div className="my-viewdetail-title">
                <Icon type="fire" />
                <span> {this.state.articleBaseInfo.fireNumber}</span>
              </div>
              <div className="my-viewdetail-title">
                <Icon type="message" />
                <span> {this.state.articleBaseInfo.messageNumber}</span>
              </div>
            </div>
            <Divider />
          </Row>
          <MdEditor.HtmlRender
            html={this.state.detailHtml}
          />
        </Row>
        <Row>
          <div className="my-viewmodal-flex my-viewmodal-operation">
            <Button style={{fontSize:20}} type="link" icon="like" /><span style={{display:"inline-block",margin:"0px 7px"}}>({this.state.like})</span>
            <Button style={{fontSize:20}} type="link" icon="dislike" /><span style={{display:"inline-block",margin:"0px 7px"}}>({this.state.dislike})</span>
          </div>
          <div className="my-viewmodal-operation">
            {this.state.articleBaseInfo.prevArticleName ?
              <span>上一篇 : <Link to={this.state.articleBaseInfo.prevArticleURL}>{this.state.articleBaseInfo.prevArticleName}</Link></span>
              : <span>已经没有文章了</span>}
          </div>
          <div className="my-viewmodal-operation">
            {this.state.articleBaseInfo.nextArticleName ?
              <span>上一篇 : <Link to={this.state.articleBaseInfo.nextArticleURL}>{this.state.articleBaseInfo.nextArticleName}</Link></span>
              : <span>已经没有文章了</span>}
          </div>
        </Row>
        <Row>
          <div className="my-viewmodal-comment-form">
            
          </div>
        </Row>
        <Row></Row>
      </React.Fragment>
    );
  }
}