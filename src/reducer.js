import * as actions from './actions';
import { combineReducers } from 'redux';

function ProductInfo(state = {data: 0}, action) {
  switch (action.type) {
    case actions.SET_DATA: {
      console.log('===== 6 =====')
      return { ...state, data: action.data };
    }
    default: {
      return state;
    }
  }
}

const reducer = combineReducers({
  ProductInfo,
});

export default reducer;