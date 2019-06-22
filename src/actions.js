export const CREATE = 'CREATE';

export function create(data) {
  return {
    type: CREATE,
    data,
  };
}