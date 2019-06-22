export const CREATE = 'CREATE';
export const REMOVE = 'REMOVE';

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
