import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {
  static propTypes = {
    addTodoList: PropTypes.func
  }

  handleKeyUp = (event) => {
    const { addTodoList } = this.props
    const { keyCode, target } = event
    if (keyCode !== 13 || !target.value) return;
    addTodoList(target.value)
    target.value = ''
  }

  render() {
    return (
      <div className='header'>
        <h2 className='title'>Todo List</h2>
        <input type='text' placeholder='请输入代办事项' className='input' onKeyUp={this.handleKeyUp} />
      </div>
    )
  }
}
