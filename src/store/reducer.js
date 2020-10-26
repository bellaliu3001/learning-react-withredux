import { CHANGE_INPUT_VAL, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST } from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
};
// reducer can only receive state, but it can not modify it
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch(action.type){
    case CHANGE_INPUT_VAL:
      newState.inputValue = action.value;
      return newState;
    case ADD_TODO_ITEM:
      // const newState = JSON.parse(JSON.stringify(state));
      newState.list.push(newState.inputValue);
      newState.inputValue = '';
      return newState;
    case DELETE_TODO_ITEM:
      newState.list.splice(action.index, 1);
      return newState;
    case INIT_LIST:
      newState.list = action.data;
      return newState;
  }
  return state;
}