import React, { Component } from 'react';
import { connect } from 'react-redux'

class Todolist extends Component {
  render() {
    return (
      <div>
        <div>
          <input 
            type="text" 
            value={ this.props.inputValue }
            onChange={ this.props.changeInputValue }
          />
          <button onClick={ this.props.handleClick }>Submit</button>
        </div>
        <ul>
          { this.props.list.map((item, index) => (
            <li onClick={ () => { this.props.handleDelete(index) } } key={ index }>{ item }</li>
          )) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e){
      const action = {
        type: 'change_input_val',
        value: e.target.value
      }
      dispatch(action);
    },
    handleClick(){
      const action = {
        type: 'add_item',
      }
      dispatch(action);
    },
    handleDelete(index){
      const action = {
        type: 'delete_item',
        index: index
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);