import axios from 'axios';
import { createAction } from 'redux-actions';

export const addPerson = createAction('ADD_PERSON', (person) => {
  if (Array.isArray(person)) {
    return person;
  }
  return [person];
});

export const removePerson = createAction('REMOVE_PERSON');

export const markPresent = createAction('MARK_PRESENT');
