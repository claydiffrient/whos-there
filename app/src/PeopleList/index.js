import React from 'react';
import styles from './styles.css';

/**
 * This component lists the users that will show up for selection.
 */
const PeopleList = props => (
  <ul className={styles.root}>
    {props.people.map(p => (
      <li key={p.name}>{p.name}</li>
    ))}
  </ul>
);

PeopleList.propTypes = {
  people: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string
    })
  ).isRequired
};

export default PeopleList;
