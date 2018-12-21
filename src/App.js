import React, { Component } from 'react';
import { Global } from './components/Elements'
import './App.css';
import Todo from './components/Todo';
class App extends Component {
  render(){
    return(
      <div className="App">
          <Global/>
          <Todo />
      </div>
    )
  }

}



export default App;
