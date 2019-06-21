export const SET_DATA = 'SET_DATA';
export const CREATE = 'CREATE';

export function setData(data) {
  console.log('===== 5 =====')
  return {
    type: SET_DATA,
    data,
  };
}

export function create(data) {
  return {
    type: CREATE,
    data,
  };
}