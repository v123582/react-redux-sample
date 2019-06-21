export const SET_DATA = 'SET_DATA';

export function setData(data) {
  console.log('===== 5 =====')
  return {
    type: SET_DATA,
    data,
  };
}