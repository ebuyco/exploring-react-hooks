import styled from 'styled-components';


 const Button = styled.button`
    background: ${props => props.primary ? "rebeccapurple" : "white"};
    color: ${props => props.primary ? "white" : "rebeccapurple"};
    // background-color: #5362E4; 
    width: 10%;
    color: #ffffff;
    cursor: pointer;
    padding: 0.9em;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    border-radius: 0.2rem;
   
`;

export default Button;
