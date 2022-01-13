import styled from "styled-components";

const STYLE_VARIABLES = {
  textColor: "#4d4d4d",
  headerColor: "rgba(175, 47, 47, 0.15)",
  lineHeight: "1.4rem",
  containerBackgroundColor: "#fff",
  bodyColor: "#f5f5f5",
  completedColor: "#d9d9d9",
  deleteButtonTextColor: "#cc9a9a",
  deleteButtonTextColorHovered: "#af5b5e",
}

export const Container = styled.main`
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
  background-color: ${STYLE_VARIABLES.containerBackgroundColor};
  color: ${STYLE_VARIABLES.textColor};
  line-height: ${STYLE_VARIABLES.lineHeight};
`

export const Main = styled.section`
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
  
`

export const Heading = styled.header` 
    width: 100%;
    text-align: center;
    font: 100px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 100;
    color: ${STYLE_VARIABLES.headerColor};
`

export const Form = styled.form`
  width: 100%;
  max-height: 60px;
  height: 100%;

  position:relative;

    a {
      position: absolute;
      width: 40px;
      height: 40px;
      top: 0;
      left: 0;
      bottom: 0;
      margin: auto 0;
      z-index: 1;

      cursor: pointer;
      text-align: center;
    }
`

export const TextInput = styled.input`
  width: 100%;
  padding: 16px 16px 16px 60px;

  font-size: 24px;

  box-sizing: border-box;
  border: none;
  
  opacity: 30%;
  &:focus {
    opacity: 100%;
  }
`

export const TodoList = styled.ul`
  border-top: 1px solid #e6e6e6;
`

export const TodoItem = styled.li`
  border-bottom: 1px solid #e6e6e6;

  &.completed {
    color: ${STYLE_VARIABLES.completedColor};
    text-decoration: line-through;
  }
  
`;

export const TodoItemDiv = styled.div`
  align-items: center;
  font-size: 24px;
  position: relative;

    input {
      

      position: absolute;

      border: none;
      width: 40px;
      height: 40px;
      top: 0;
      bottom: 0;
      margin: auto 0;
    }

    label {
      padding: 15px 15px 15px 60px;
      display: block;
      word-break: break-all;
    }
    
    
    .todo__button {
      ${'' /* display: none; */}
      position: absolute;
      
      top: 0;
      right: 10px;
      bottom: 0;

      border: none;
      background: none;
      width: 40px;
      height: 40px;
      margin: auto 0;

      color: ${STYLE_VARIABLES.deleteButtonTextColor};
      font-size: 30px;
      transition: color 0.2s ease-out;
    }

      .todo__button:hover {
        color: ${STYLE_VARIABLES.deleteButtonTextColorHovered};
      }
`;

export const FooterStyle = styled.footer`
  background-color: #b2b2b2;
  display: flex;
  justify-content: space-between;

  button {
    border: none;
    background: none;
  }
    button:hover {
      color: red;
    }

  .filters {
    display: flex;
  }
  
  .filters__button {

  }
`