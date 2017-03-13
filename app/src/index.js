import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';

const Test = () => (
  <div className={styles.root}>
    This is a test
  </div>
)

ReactDOM.render(<Test />, document.getElementById('index_mount'));
