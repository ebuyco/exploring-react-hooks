import React, { useState } from 'react';
import logoedit from '../assets/logoreact-01.svg';
import { Button, Footer, Text, Wrapper, Logo, Ul, Li} from './Elements';

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
            <Logo src={logoedit} alt="logoedit" />
            <Text
            type="text"
            placeholders="Todo"
            onChange={inputChangeHandler}
            value={todoState.userInput} 
            />
            <Button primary
             type="button"
             onClick={todoAddHandler}
             >Add</Button>
               <Ul>
            {todoState.todoList.map(todo => 
                <Li
                 key={todo}
                >{todo}</Li>
              )}
            </Ul>   
            </Wrapper>
          
            <Footer />    
        </React.Fragment>
    );
};

  

 
export default todo;

