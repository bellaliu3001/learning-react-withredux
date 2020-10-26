import React, { Component } from 'react';
import 'antd/dist/antd.css'; 

import store from './store/index';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, initListAction } from './store/actionCreators'
import TodolistUI from './TodolistUI';
import axios from 'axios';

export default class Todolist extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }
  componentDidMount() {
    axios.get('/api/todolist').then((res) => {
      const action = initListAction(res.data);
      store.dispatch(action);
    })
  }
  handleStoreChange = (e) => {
    this.setState(store.getState());
  }
  handleInputChange = (e) => {
    // create an action to communicate with store
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  handleBtnClick = (e) => {
    const action = getAddItemAction();
    store.dispatch(action);
  }
  handleItemDelete = (e, index) => {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
  render() {
    return (
      <TodolistUI 
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        list={this.state.list}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }
}
