import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './index.css';
import Header from './Header';
import HomePage from './HomePage';


const Main = () => (
  <Router>
    <div className={styles.Index}>
      <Header />
      <Route exact path="/" component={HomePage} />
    </div>
  </Router>
);

ReactDOM.render(<Main />, document.getElementById('index_mount'));
