import styled from "styled-components";

const STYLE_VARIABLES = {
  textColor: "#4d4d4d",
  headerColor: "rgba(175, 47, 47, 0.15)",
  lineHeight: "1.4rem",
  containerBackgroundColor: "#fff",
  bodyColor: "#f5f5f5",
}

export const Container = styled.main`
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
  background-color: ${STYLE_VARIABLES.containerBackgroundColor};
  color: ${STYLE_VARIABLES.textColor};
  line-height: ${STYLE_VARIABLES.lineHeight};
  ${'' /* box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%); */}
`
// works not like what i wanted FIX it
export const Heading = styled.header` 
    background-color: ${STYLE_VARIABLES.bodyColor};
    width: 100%;
    text-align: center;
    font: 100px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 100;
    color: ${STYLE_VARIABLES.headerColor};
`

export const Form = styled.form`
  width: 100%;
`

export const TextInput = styled.input`
  width: 100%;
  padding: 16px 16px 16px 60px;

  box-sizing: border-box;
  border: none;
  box-shadow: inset 0 -2px 1px rgb(0,0,0 / 3%);
`

export const TodoItem = styled.li`
  
`;

export const TodoItemDiv = styled.div`
  ${'' /* display: flex; */}
  font-size: 24px;
  position: relative;

    label {
      padding: 15px 15px 15px 60px;
      display: block;
      word-break: break-all;
    }
    
    button {
      ${'' /* border: none; */}
      ${'' /* appearance: none; */}
      position: absolute;
      right: 10px;
      width: 40px;
      height: 40px;
      margin: auto 0;
      z-index: 2;
    }
`;