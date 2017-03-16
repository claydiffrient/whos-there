import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './index.css';
import Header from './Header';
import PeopleList from './PeopleList';


const Home = () => (
  <div>
    <h2>This is a test</h2>
  </div>
);

const Test = () => (
  <Router>
    <div className={styles.Index}>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/people" component={PeopleList} />
    </div>
  </Router>
);


ReactDOM.render(<Test />, document.getElementById('index_mount'));
