import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgb(4, 208, 208);
`
 const MainDiv = styled.div`
  background-color: rgb(143, 245, 245);
  border-radius: 5px;
  width: 50%;
  min-height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
` 
const Content = styled.div`
  text-align: center;
  height: 50%;

  & > *{
    margin-bottom:5px;
  }
`

export const Container = ({children})=>{
  return(
    <MainContainer>
      <MainDiv>
        <Content>
          {children}
        </Content>
      </MainDiv>
    </MainContainer>
  )
} 