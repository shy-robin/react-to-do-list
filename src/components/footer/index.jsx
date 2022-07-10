import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {
  static propTypes = {
    allNum: PropTypes.number.isRequired,
    doneNum: PropTypes.number.isRequired,
    toggleSelectAll: PropTypes.func.isRequired,
    clearDone: PropTypes.func.isRequired
  }

  render() {
    const { allNum, doneNum, toggleSelectAll, clearDone } = this.props

    return (
      <div className='footer' >
        <div className="left">
          <input type="checkbox" checked={allNum === doneNum} onChange={toggleSelectAll} />
          <span>全部 {doneNum}/{allNum}</span>
        </div>
        <div className="right">
          <button onClick={clearDone}>清空已完成</button>
        </div>
      </div>
    )
  }
}
