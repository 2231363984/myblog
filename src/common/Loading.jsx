import React, { Component } from 'react';
import { Spin } from 'antd';
import './css/common.css'

export default class Loading extends Component {
    state = {
        visiable: false
    };
    componentDidMount() {

    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.visiable !== this.props.visiable && this.props.visiable === true) {
            this.timer = setTimeout(() => {
                this.setState({
                    visiable: true
                });
            }, this.props.delay);
        } else if (prevProps.visiable !== this.props.visiable && this.props.visiable === false) {
            clearTimeout(this.timer);
            this.setState({ visiable: false })
        }
    }

    render() {
        if (this.state.visiable) {
            return <React.Fragment>
                <div className={'my-loading-warp'}>
                    <div className={'my-loading-mask'}></div>
                    <div className={'my-loading-spin'}>
                        <Spin size="large" tip={"loading..."} />
                    </div>
                </div>
            </React.Fragment>
        }

        return null;
    }


}
