import React, { useState } from 'react';

const todo = props => {
       const [todoName, setTodoName] = useState('');
        
       const inputChangeHandler = event => {
            setTodoName(event.target.value)
       };

    return(
        <React.Fragment>
            <div style={wrapper}>
            <input style={text} 
            type="text" 
            placeholders="Todo"
            onChange={inputChangeHandler}
            value={todoName} 
            />
            <button style={btn} type="button">Add</button>
            <ul />
            </div>
           
        </React.Fragment>
    );
};


const btn = {
    backgroundColor: '#2e2e2e', 
    width: '10%',
    color: '#ffffff',
    cursor: 'pointer',
    padding: '0.8em',
    fontSize: '1rem'

}

const wrapper = {
    margin: '0 auto',
    textAlign: 'center',
    fontSize: '1.rem',
    marginTop: '2rem',
    backgroundColor: '#f2f2f2',
    width: '70%',
    padding: '4rem'
}

const text = {
    padding: '0.8em',
    color: '#555555',
    width: '60%',
    fontSize: '1rem'
}
export default todo;

