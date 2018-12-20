import React, { useState } from 'react';
import logoedit from '../assets/logoreact-01.svg';
import Wrapper from 'Elements/Wrapper';
import Button from 'Elements/Button';

const todo = props => {
    //    const [todoName, setTodoName] = useState('');
    //    const [todoList, setTodoList] = useState([]);

        const [todoState, setTodoState] = useState({userInput: '', todoList: [] });

       const inputChangeHandler = event => {
            setTodoState({
                userInput: event.target.value,
                todoList: todoState.todoList});
       };

       const todoAddHandler = () => {
               setTodoState({
                 userInput: todoState.userInput,
                 todoList: todoState.todoList.concat(todoState.userInput)});
       };

    return(
        <React.Fragment>
            <Wrapper>
            <img style={logo} src={logoedit} alt="logoedit" />
            <input style={text} 
            type="text" 
            placeholders="Todo"
            onChange={inputChangeHandler}
            value={todoState.userInput} 
            />
            <Button
             type="button"
             onClick={todoAddHandler}
             >Add</Button>
               <ul 
               style={ulStyle}
               >
            {todoState.todoList.map(todo => 
                <li 
                style={liStyle}
                key={todo}
                >{todo}</li>
              )}
            </ul>
            </Wrapper>
              
        </React.Fragment>
    );
};





const text = {
    padding: '0.8em',
    color: '#555555',
    width: '60%',
    fontSize: '1rem'
}

const logo = {
    width: '100%',
    maxWidth: '25%',
    height: '100%',
    textAlign: 'center',
    paddingBottom: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto'
    
  }

  const ulStyle = {
      color: '#ffffff',
      listStyle: 'none'

  }

  const liStyle = {
        color: '#ffffff',
        listStyle: 'none',
        fontWeight: '400',
        fontSize: '1rem'


  }
export default todo;

