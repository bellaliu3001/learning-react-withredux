import React from 'react';
import { Input, Button, List } from 'antd';

// stateless component
const TodolistUI = (props) => {
  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
      <div>
        <Input 
          value={props.inputValue} 
          placeholder="todo info" 
          style={{width: "300px", marginRight: "10px"}}
          onChange={props.handleInputChange}
        />
        <Button 
          type="primary"
          onClick={props.handleBtnClick}
        >Add Todo Item</Button>
      </div>
      <List
        style={{ width: "300px", marginTop: "10px" }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={(e) => {props.handleItemDelete(e, index)}}>
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}

export default TodolistUI;
