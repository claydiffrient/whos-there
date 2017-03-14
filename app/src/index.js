import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './index.css';
import Header from './Header';


const Test = () => (
  <Router>
    <div className={styles.Index}>
      <Header />
      This is a test
    </div>
  </Router>
);

ReactDOM.render(<Test />, document.getElementById('index_mount'));
