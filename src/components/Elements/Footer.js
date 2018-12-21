import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component{
    render(){
        return(
            
            <Footers>
                <h1>Ebuyco © 2018 . All Rights Reserved. Terms of Use Privacy Policy Site Map</h1>
            </Footers>
    
            
        )
    }
}

const Footers = styled.div`
    background-color: #00c5af;
    color: #ffffff;
    text-align: center;
    padding: 0.6rem;
    width: 100%;
    box-sizing: border-box;
    margin-top: 2vh;
    font-family: 'Montserrat-Regular', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    > h1 {
       display:flex;
       justify-content: center;
       align-items: center;
    }
`;

export default Footer;