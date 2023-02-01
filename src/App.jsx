import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Component } from 'react'

class App extends Component{
  constructor(props){
    super(props)
     this.state= {
      count: 0
     }
  }
  decrementNumber = () => {
    this.setState({count: this.state.count - 1})
 }

  render() {
     return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Microsoft</h1>
      <div className="card">
        <p>count {this.state.count}</p>
        <button onClick={() => {this.setState({count: this.state.count + 1})}}>
          Increment
        </button>
        <button onClick={this.decrementNumber}>
          Decrement
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
  }
 
}

export default App
