import styled from "styled-components"

const Sel = styled.select`
    border-color: #f8f5f536;
`

export const Select = (props)=>{
    return(
        <Sel 
        value = {props.vl}
        onChange={props.oc}
        >
        {props.children}
        </Sel>
    )
    
}