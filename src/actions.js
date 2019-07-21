export const CREATE = 'CREATE';
export const REMOVE = 'REMOVE';
export const GET_ALL = 'GET_ALL';

export function create(data) {
  return {
    type: CREATE,
    data: data,
  };
}

export function remove(i) {
  return {
    type: REMOVE,
    data: i
  };
}

export function getTasks(dispatch){
    console.log('getTasks actions')
    return fetch('http://localhost:8000/tasks')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        dispatch({
            type: GET_ALL,
            data: myJson.data
        })
      });
}