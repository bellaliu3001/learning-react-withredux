import React, { Component } from 'react';
import 'antd/dist/antd.css'; 
import { Input, Button, List } from 'antd';
import store from './store/index';

export default class Todolist extends Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }
  handleStoreChange = (e) => {
    this.setState(store.getState());
  }
  handleInputChange = (e) => {
    // create an action to communicate with store
    const action = {
      type: 'change_input_val',
      value: e.target.value
    }
    store.dispatch(action);
  }
  handleBtnClick = (e) => {
    const action = {
      type: 'add_todo_item',
    }
    store.dispatch(action);
  }
  handleItemDelete = (e, index) => {
    const action = {
      type: 'delete_todo_item',
      index: index
    }
    store.dispatch(action);
  }
  render() {
    return (
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <div>
          <Input 
            value={this.state.inputValue} 
            placeholder="todo info" 
            style={{width: "300px", marginRight: "10px"}}
            onChange={this.handleInputChange}
          />
          <Button 
            type="primary"
            onClick={this.handleBtnClick}
          >Add Todo Item</Button>
        </div>
        <List
          style={{ width: "300px", marginTop: "10px" }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={(e) => {this.handleItemDelete(e, index)}}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}
