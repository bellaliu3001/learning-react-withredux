import React, { Component } from 'react';
import { Input, Button, List } from 'antd';

export default class TodolistUI extends Component {
  render() {
    return (
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <div>
          <Input 
            value={this.props.inputValue} 
            placeholder="todo info" 
            style={{width: "300px", marginRight: "10px"}}
            onChange={this.props.handleInputChange}
          />
          <Button 
            type="primary"
            onClick={this.props.handleBtnClick}
          >Add Todo Item</Button>
        </div>
        <List
          style={{ width: "300px", marginTop: "10px" }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={(e) => {this.props.handleItemDelete(e, index)}}>
              {item}
            </List.Item>
          )}
        />
      </div>
    )
  }
}
