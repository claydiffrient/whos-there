import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import configureStore from './store/configureStore';
import * as Actions from './actions';

import styles from './index.css';
import Header from './components/Header';
import HomePage from './components/HomePage';

const store = configureStore();

const mapStateToProps = state => ({
  peopleList: state.peopleList
});

const mapDispatchToProps = dispatch => ({
  handleAddPerson (person) { dispatch(Actions.addPerson(person)); },
  markPresent (name) { dispatch(Actions.markPresent(name)); }
});

const ConnectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);

class Main extends Component {
  componentDidMount () {
    store.dispatch(Actions.getPeople());
  }

  render () {
    return (
      <Router>
        <div className={styles.Index}>
          <Header />
          <Route exact path="/" component={ConnectedHomePage} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>
  , document.getElementById('index_mount')
);
