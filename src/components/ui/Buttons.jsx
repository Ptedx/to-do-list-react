import styled from "styled-components";

export const Button = styled.button`
    background-color: ${(props)=> props.bg ? props.bg : 'lightgreen'};
    color: ${(props)=>props.bg === 'rgb(183, 59, 59)' ? 'white' : 'black'};
    height: 40px;
    width: 100px;
    border-radius: 5px;
`