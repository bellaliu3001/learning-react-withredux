const defaultState = {
  inputValue: '',
  list: []
};
// reducer can only receive state, but it can not modify it
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch(action.type){
    case 'change_input_val':
      newState.inputValue = action.value;
      return newState;
    case 'add_todo_item':
      // const newState = JSON.parse(JSON.stringify(state));
      newState.list.push(newState.inputValue);
      newState.inputValue = '';
      return newState;
    case 'delete_todo_item':
      newState.list.splice(action.index, 1);
      return newState;
  }
  return state;
}