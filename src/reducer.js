import * as actions from './actions';
import { combineReducers } from 'redux';

function TaskReducer(state = {todoItems: []}, action) {
  switch (action.type) {
    case actions.CREATE: {
      return { ...state, todoItems: [...state.todoItems, action.data] };
    }
    default: {
      return state;
    }
  }
}

const reducer = combineReducers({
  TaskReducer,
});

export default reducer;