import React from 'react';
import styles from './styles.css';
import { peopleList } from '../shared/peopleShape';

/**
 * This component lists the users that will show up for selection.
 */
const PeopleList = props => (
  <ul className={styles.root}>
    {props.people.map(p => (
      <li key={p.name}>
        <button className={styles.personBtn}>{p.name}</button>
      </li>
    ))}
  </ul>
);

PeopleList.propTypes = {
  people: peopleList.isRequired
};

export default PeopleList;
