import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';


const Header = () => (
  <div className="row">
    <div className="col-xs-12">
      <ul className={`${styles.Header} row`}>
        <li className={`${styles.NavItem} col-xs-2`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`${styles.NavItem} col-xs-2`}>
          <Link to="/reports">Reports</Link>
        </li>
      </ul>
    </div>
  </div>

);

export default Header;
