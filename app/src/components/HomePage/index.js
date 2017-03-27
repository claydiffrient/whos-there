import React from 'react';
import PeopleList from '../PeopleList';
import { peopleList } from '../shared/peopleShape';

export default function HomePage (props) {
  return (
    <div>
      <p>Click (or tap) someone{"'"}s name to mark them as present on today{"'"}s date</p>
      <PeopleList
        people={props.peopleList.data}
        onPersonClick={props.markPresent}
      />
    </div>
  );
}

HomePage.propTypes = {
  markPresent: React.PropTypes.func.isRequired,
  peopleList: React.PropTypes.shape({
    data: peopleList
  }).isRequired
};
