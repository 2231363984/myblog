import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Loading from '../common/Loading.jsx';
import { siteRouter } from '../Config/siteConfig.jsx';
import Home from '../components/Home/home.jsx';
import MyLayout from '../components/MyLayout/mylayout.jsx';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { ConfigProvider } from 'antd';

class RouterComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    showLoading = () => {
        this.setState({ loading: true });
    }

    endLoading = () => {
        this.setState({ loading: false });
    }


    render() {
        return (
            <React.Fragment>
                <ConfigProvider locale={zh_CN}>
                    <Loading visiable={this.state.loading} />
                    <Router>
                        <div>
                            <MyLayout>
                                <Switch>
                                    <Route exact path="/"
                                        render={(props) => <Home showLoading={this.showLoading} endLoading={this.endLoading} {...props} />}
                                    />
                                    {
                                        siteRouter.map(r =>
                                            r.exact ? <Route
                                                exact
                                                key={r.key}
                                                path={r.url}
                                                render={(props) => <r.component {...props} showLoading={this.showLoading} endLoading={this.endLoading} />}
                                            /> : <Route
                                                    key={r.key}
                                                    path={r.url}
                                                    render={(props) => <r.component {...props} showLoading={this.showLoading} endLoading={this.endLoading} />}
                                                />
                                        )
                                    }
                                    <Redirect to="/" />
                                </Switch>
                            </MyLayout>
                        </div>
                    </Router>
                </ConfigProvider>
            </React.Fragment>
        );
    }
}
export default RouterComment;
