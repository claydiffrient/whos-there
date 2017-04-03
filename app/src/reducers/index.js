import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import defaultState from '../store/defaultState';
import * as Actions from '../actions';

const peopleList = handleActions({
  [Actions.addPerson]: (state, action) => (
    Object.assign({}, state, {
      data: state.data.concat(action.payload)
    })
  ),
  [Actions.markPresent]: (state, action) => (
    Object.assign({}, state, {
      data: state.data.filter(person => person.name !== action.payload)
    })
  ),
  [Actions.markPresentCommit]: state => (
    Object.assign({}, state) // Do something more official here perhaps?
  ),
  [Actions.markPresentRollback]: (state, action) => (
    Object.assign({}, state, {
      data: state.data.concat([{ name: action.meta.person }])
    })
  )
}, defaultState);

// const peopleList = (state = defaultState, action) => {
//   switch (action.type) {
//     case Actions.ADD_PERSON:
//       return Object.assign({}, state, {
//         data: state.data.concat(action.payload)
//       });
//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  peopleList
});

export default rootReducer;
