import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class List extends Component {
  static propTypes = {
    todoList: PropTypes.array.isRequired,
    toggleChecked: PropTypes.func,
    removeItem: PropTypes.func
  }

  state = {
    hoverItemId: 0,
  }

  handleMouseIn = (id) => {
    return () => {
      this.setState({
        hoverItemId: id,
      })
    }
  }

  handleMouseLeave = () => {
    this.setState({
      hoverItemId: 0,
    })
  }

  handleRemove = (id) => {
    const { removeItem } = this.props
    return () => {
      const rst = window.confirm('确认删除吗？')
      if (rst) {
        removeItem(id)
      }
    }
  }

  render() {
    const { todoList, toggleChecked } = this.props
    const { hoverItemId } = this.state
    return (
      <ul className="list">
        {todoList.map((item) => (
          <li
            key={item.id}
            className={item.done ? 'is-done' : ''}
            onMouseEnter={this.handleMouseIn(item.id)}
            onMouseLeave={this.handleMouseLeave}
            style={{
              backgroundColor: item.id === hoverItemId ? '#8afaa6' : '',
            }}
          >
            <div className="left">
              <input
                type="checkbox"
                className="checkbox"
                checked={item.done}
                onChange={toggleChecked(item.id)}
              />
              <span>{item.content}</span>
            </div>
            <div className="right">
              <button
                style={{
                  display: item.id === hoverItemId ? 'inline-block' : 'none',
                }}
                onClick={this.handleRemove(item.id)}
              >
                删除
              </button>
            </div>
          </li>
        ))}
      </ul>
    )
  }
}
