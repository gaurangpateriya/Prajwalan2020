import './App.css';
// import 'react-toastify/dist/ReactToastify.css';
import { ConnectedRouter } from 'connected-react-router';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { push } from 'react-router-redux';
// import { Slide, ToastContainer } from 'react-toastify';

import HomePage from './components/HomePage/HomePage'
import { APP_LOAD, REDIRECT } from './constants/actionTypes';
import { store } from './store';


class App extends Component {
  componentWillMount() {
    // const token = window.localStorage.getItem('bearer');
    // if (token) {
    //   agent.setToken(token);
    // }
    // console.log('roken', token);
    // if (token === null) {
    //   // console.log('roken', token)
    //   store.dispatch(push('/login'));
    //   this.props.onRedirect('/login');
    // }

    // store.dispatch(push('/tagging/12'));
    // this.props.onLoad(token ? 1 : null, token);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.history.location !== nextProps.history.location) {
      this.props.onRedirect(nextProps.history.location);
    }
    if (nextProps.redirectTo && nextProps.redirectTo !== this.props.redirectTo) {
      store.dispatch(push(nextProps.redirectTo));
    }
  }

  render() {
    return (
      <div style={{ height: '100%' }}>

        <ConnectedRouter history={this.props.history}>
          <Switch>
            <Route path="/" component={HomePage} exact />
          </Switch>
        </ConnectedRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  appLoaded: state.common.appLoaded,
  appName: state.common.appName,
  currentUser: state.common.currentUser,
  redirectTo: state.common.redirectTo,
  apiKey: state.common.apiKey,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload, apiKey) => dispatch({
    type: APP_LOAD,
    payload,
    apiKey,
    skipTracking: true,

  }),
  onRedirect: (route) => dispatch({ type: REDIRECT, payload: route }),
  clearReducer: () => dispatch({ type: 'CLEAR' }),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
