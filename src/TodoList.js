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
        <Fragment key={idx}>
          <TodoItem content={item} index={idx} delItem={this.handleItemDel}/>
        </Fragment>
      )
    })
  }
  // 使用ES6的箭头函数就不需要在JSX中使用.bind(this)
  handleInputChange(e) {
    let value = e.target.value
    this.setState(() =>({
      inputValue: value
    }))
  }
  handleButtonClick() {
    this.setState((prev) => ({
      list: [...prev.list, prev.inputValue],
      inputValue: ''
    }))
  }
  handleItemDel(idx) {
    const { list } = this.state;
    const newList = [...list]
    newList.splice(idx, 1)
    this.setState(() => ({
      list: [...newList],
    }))
  }
}

export default TodoList;
