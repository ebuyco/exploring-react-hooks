import React, { Component } from 'react';
import logoedit from './editlogo.png';
import './App.css';
import Todo from './components/Todo';
class App extends Component {
  render(){
    return(
      <div className="App">
        <img style={logo} src={logoedit} alt="logoedit" />
          <Todo />
      </div>
    )
  }

}

const logo = {
  width: '100%',
  maxWidth: '20%',
  height: '100%',
  margin: '0 auto',
  
}

export default App;
