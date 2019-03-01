import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const { content, test } = this.props;
    return (
      <li
        dangerouslySetInnerHTML={{__html: test + '-' + content}}
        onClick={this.handleClick}></li>
    );
  }

  handleClick() {
    const { delItem } = this.props;
    delItem(this.props.index)
  }
}

TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  delItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'hello detault content'
}

export default TodoItem;
