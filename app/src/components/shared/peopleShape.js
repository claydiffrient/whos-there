import { PropTypes } from 'react';

export const peopleShape = PropTypes.shape({
  name: PropTypes.string
});

export const peopleList = PropTypes.arrayOf(peopleShape);
