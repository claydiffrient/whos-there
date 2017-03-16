import React from 'react';
import styles from './styles.css';

/**
 * This component lists the users that will show up for selection.
 */
const people = [{
  name: 'Clay'
}, {
  name: 'Elias'
}, {
  name: 'Sterling'
}, {
  name: 'Andy'
}];

const PeopleList = props => (
  <ul className={styles.root}>
    {people.map(p => ( //I changed this from props.people.map to people.map, because I didn't understand how to make the former work
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
