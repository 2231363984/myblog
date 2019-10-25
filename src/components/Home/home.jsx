import React from 'react';
import { List, Card, Row, Col, Pagination } from 'antd';
import MyListItem from '../MyListItem/MyListItem.jsx';
import { homeList } from '../../Config/requestMock.jsx';
import './home.css';

const { Item } = List;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    }

  }
  handleChange = (pageNumber) => {
    this.setState({
      current: pageNumber
    })
  }


  render() {
    return (
      <React.Fragment>
        <Row className="my-home">
          <Col span={24}>
            <Card title="最新文章" className="my-home-card" bordered={false}>
              <List>
                {
                  homeList.result.data.map((item, index) =>
                    <Item key={index} style={{padding:"20px 0px"}}>
                      <MyListItem
                        imageSrc={item.imageSrc}
                        title={item.title}
                        TagName={item.TagName}
                        description={item.description}
                        createTime={item.createTime}
                        fireNumber={item.fireNumber}
                        likeNumber={item.likeNumber}
                        messageNumber={item.messageNumber}
                      ></MyListItem>
                    </Item>
                  )
                }
              </List>
              <Row type="flex" justify="center" style={{ margin: "20px 0px" }}>
                <Pagination
                  showQuickJumper
                  defaultCurrent={1}
                  current={this.state.current}
                  pageSize={1}
                  total={homeList.result.data.length}
                  onChange={this.handleChange} />
              </Row>
            </Card>
          </Col>
        </Row>

      </React.Fragment>
    );
  }
}