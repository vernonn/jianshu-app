import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const { content } = this.props;
    return (
      <li
        dangerouslySetInnerHTML={{__html: content}}
        onClick={this.handleClick}></li>
    );
  }

  handleClick() {
    const { delItem } = this.props;
    delItem(this.props.index)
  }
}

export default TodoItem;
