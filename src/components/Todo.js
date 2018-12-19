import React, { useState } from 'react';
import logoedit from '../assets/logoreact-01.svg';

const todo = props => {
       const [todoName, setTodoName] = useState('');
       const [todoList, setTodoList] = useState([]);

       const inputChangeHandler = event => {
            setTodoName(event.target.value)
       };

       const todoAddHandler = () => {
                setTodoList(todoList.concat(todoName));
       };

    return(
        <React.Fragment>
            <div style={wrapper}>
            <img style={logo} src={logoedit} alt="logoedit" />
            <input style={text} 
            type="text" 
            placeholders="Todo"
            onChange={inputChangeHandler}
            value={todoName} 
            />
            <button 
            style={btn}
             type="button"
             onClick={todoAddHandler}
             >Add</button>
               <ul 
               style={ulStyle}
               >
            {todoList.map(todo => 
                <li 
                style={liStyle}
                key={todo}
                >{todo}</li>
              )}
            </ul>
            </div>
              
        </React.Fragment>
    );
};


const btn = {
    backgroundColor: '#5362E4', 
    width: '10%',
    color: '#ffffff',
    cursor: 'pointer',
    padding: '0.9em',
    fontSize: '1rem',
    borderRadius: '0.2rem'

}

const wrapper = {
    margin: '0 auto',
    textAlign: 'center',
    fontSize: '1.rem',
    marginTop: '2rem',
    background: 'linear-gradient(-150deg, #00b89e9c 0%, #0152b5 97%), repeat center',
    width: '70%',
    padding: '4rem',
    boxShadow: 'rgba(0, 0, 0, 0.15) -2px 1px 20px 0px'
}

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

