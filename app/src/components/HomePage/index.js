import React from 'react';
import PeopleList from '../PeopleList';

export default function () {
  return (
    <div>
      <p>Click (or tap) someone{"'"}s name to mark them as present on today{"'"}s date</p>
      <PeopleList people={[]} />
    </div>
  );
}
