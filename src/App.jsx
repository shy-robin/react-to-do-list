import React, { Component } from 'react'
import Header from './components/header'
import List from './components/list'
import Footer from './components/footer'
import { nanoid } from 'nanoid'
import './App.css'

class App extends Component {
  state = {
    todoList: [
      {
        id: nanoid(),
        content: 'game',
        done: false,
      },
      {
        id: nanoid(),
        content: 'sport',
        done: true,
      },
      {
        id: nanoid(),
        content: 'code',
        done: false,
      },
    ],
  }

  addTodoList = (content) => {
    this.setState({
      todoList: [
        {
          id: nanoid(),
          content,
          done: false,
        },
        ...this.state.todoList,
      ],
    })
  }

  toggleChecked = (id) => {
    return () => {
      this.setState({
        todoList: this.state.todoList.map((item) => {
          if (item.id === id) {
            item.done = !item.done
          }
          return item
        }),
      })
    }
  }

  removeItem = (id) => {
    const { todoList } = this.state
    const newTodoList = todoList.filter((item) => item.id !== id)
    this.setState({
      todoList: newTodoList,
    })
  }

  toggleSelectAll = () => {
    const { todoList } = this.state
    let newTodoList
    if (todoList.some(item => !item.done)) {
      newTodoList = todoList.map(i => {
        i.done = true
        return i
      })
    } else {
      newTodoList = todoList.map(i => {
        i.done = false
        return i
      })
    }
    this.setState({
      todoList: newTodoList
    })
  }

  clearDone = () => {
    const { todoList } = this.state
    const newTodoList = todoList.filter(item => !item.done)
    this.setState({
      todoList: newTodoList
    })
  }

  render() {
    const { todoList } = this.state
    return (
      <div className="App">
        <Header addTodoList={this.addTodoList} />
        <List
          todoList={todoList}
          toggleChecked={this.toggleChecked}
          removeItem={this.removeItem}
        />
        <Footer
          allNum={todoList.length}
          doneNum={todoList.filter((item) => item.done).length}
          toggleSelectAll={this.toggleSelectAll}
          clearDone={this.clearDone}
        />
      </div>
    )
  }
}

export default App
