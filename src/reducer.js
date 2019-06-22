import * as actions from './actions';
import { combineReducers } from 'redux';

function TaskReducer(state = {todoItems: []}, action) {
  switch (action.type) {
    case actions.CREATE: {
      return { ...state, todoItems: [...state.todoItems, action.data] };
    }

    case actions.REMOVE: {
      state.todoItems.filter((d, i) => i != action.data)
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