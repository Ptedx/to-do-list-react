import styled from "styled-components"

const Fields = styled.input`
    border-color: #80808053;
`

export const Field = (props)=>{
    return(
        <Fields 
        placeholder={props.ph} 
        value = {props.vl} 
        onChange = {props.oc}>
        </Fields>
    )
}
