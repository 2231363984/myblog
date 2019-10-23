import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Loading from '../common/Loading.jsx';
import {siteRouter} from '../Config/siteConfig.jsx';
import Home from '../Components/Home/home.jsx';

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
                <Loading visiable={this.state.loading} />
                <Router>
                    <div>
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
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}
export default RouterComment;