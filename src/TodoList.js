import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['React', 'Vue']
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleItemDel = this.handleItemDel.bind(this)
  }

  render() {
    const { inputValue } = this.state;
    return (
      <Fragment>
        <div>
          {/* 输入框 */}
          <label htmlFor="input">输入TODO</label>
          <input
            id="input"
            value={inputValue}
            onChange={this.handleInputChange}
            ref={(input) => {this.input = input}}
          />
          <button onClick={this.handleButtonClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }

  getTodoItem() {
    return this.state.list.map((item, idx) => {
      return (
        <TodoItem
          key={idx}
          content={item}
          index={idx}
          delItem={this.handleItemDel}/>
      )
    })
  }
  // 使用ES6的箭头函数就不需要在JSX中使用.bind(this)
  handleInputChange(e) {
    const value = this.input.value
    this.setState(() => ({
      inputValue: value
    }))
  }
  handleButtonClick() {
    if (this.state.inputValue) {
      this.setState((prev) => ({
        list: [...prev.list, prev.inputValue],
        inputValue: ''
      }))
    }
  }
  handleItemDel(idx) {
    this.setState((prev) => {
      const newList = [...prev.list]
      newList.splice(idx, 1)
      return {
        list: [...newList],
      }
    })
  }
}

export default TodoList;
