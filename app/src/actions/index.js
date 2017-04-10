import axios from 'axios';
import { createAction } from 'redux-actions';

export const addPerson = createAction('ADD_PERSON', (person) => {
  if (Array.isArray(person)) {
    return person;
  }
  return [person];
});

export const removePerson = createAction('REMOVE_PERSON');

export const markPresentCommit = createAction('MARK_PRESENT_COMMIT', null, person => ({ person }));
export const markPresentRollback = createAction('MARK_PRESENT_ROLLBACK', null, person => ({ person }));
export const markPresent = createAction('MARK_PRESENT', null, person => ({
  offline: {
    effect: { url: '/api/present', method: 'POST', body: { person, date: new Date() } },
    commit: markPresentCommit(person),
    rollback: markPresentRollback(person)
  }
}));


export const getPeopleCommit = createAction('GET_PEOPLE_COMMIT');
export const getPeopleRollback = createAction('GET_PEOPLE_ROLLBACK');
export const getPeople = createAction('GET_PEOPLE', null, () => ({
  offline: {
    effect: { url: '/api/persons', method: 'GET' },
    commit: getPeopleCommit(),
    rollback: getPeopleRollback()
  }
}));
