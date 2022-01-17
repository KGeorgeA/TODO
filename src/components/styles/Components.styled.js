import styled from "styled-components";

const STYLE_VARIABLES = {
  textColor: "#4d4d4d",
  headerColor: "rgba(175, 47, 47, 0.15)",
  lineHeight: "1.4rem",
  containerBackgroundColor: "#f5f5f5",
  bodyColor: "#f5f5f5",
  completedColor: "#d9d9d9",
  deleteButtonTextColor: "#cc9a9a",
  deleteButtonTextColorHovered: "#af5b5e",
}

export const Container = styled.main`
  box-sizing: border-box;
  max-width: 550px;
  width: 100%;
  margin: 0 auto;
  background-color: ${STYLE_VARIABLES.containerBackgroundColor};
  color: ${STYLE_VARIABLES.textColor};
  line-height: ${STYLE_VARIABLES.lineHeight};

  @media screen and (max-width: 676px) {
    max-width: 350px;
    width: 100%;
    padding: 0 10px
  }
`

export const Main = styled.section`
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
  position:relative;
  background-color: white;
`

export const Heading = styled.header` 
  background-color: #f5f5f5;
  width: 100%;
  text-align: center;
  font: 100px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 100;
  color: ${STYLE_VARIABLES.headerColor};
  @media screen and (max-width: 676px) {
    font-size: 50px;
  }
`

export const Form = styled.form`
  width: 100%;
  max-height: 60px;
  height: 100%;
`

export const Input = styled.input`
  width: 100%;
  padding: 16px 16px 16px 60px;

  font-size: 24px;

  box-sizing: border-box;
  border: none;
  
  opacity: 30%;
  &:focus {
    opacity: 100%;
  }

  @media screen and (max-width: 676px) {
    font-size: 14px;
  }
`

export const TodoList = styled.ul`
  border-top: 1px solid #e6e6e6;
`

export const TodoItemS = styled.li`
  border-bottom: 1px solid #e6e6e6;

  &:last-child {
    border-bottom: none;
  }
  
  &.completed {
    color: ${STYLE_VARIABLES.completedColor};
    text-decoration: line-through;
  }
  height: 100%

  @media screen and (max-width: 676px) {
    max-height: 40px;
  }
`;

export const TodoItemDiv = styled.div`
  align-items: center;
  font-size: 24px;
  position: relative;


    :hover {
      button.todo__button {
        display: block;
      }
    }

    .todo__checkbox_custom {
      position: absolute;
      
      background-image: ${props => props.checked ? "url('https://www.freeiconspng.com/uploads/black-checkmark-png-4.png')" : "white"};
      background-repeat: none;
      background-size: 30px 30px;

      width: 30px;
      height: 30px;

      border: 1px solid black;
      border-radius: 100%;
      
      opacity: 0.3;

      top: 0;
      left: 5px;
      bottom: 0;
      margin: auto 0;
    }

    input.todo__checkbox {

      position: absolute;
      
      opacity: 0;
      border: none;
      
      width: 40px;
      height: 40px;
      
      top: 0;
      bottom: 0;
      margin: auto 0;
      z-index: 1;
    }

    label {
      padding: 15px 15px 15px 60px;
      display: block;
      word-break: break-all;
    }
    
    button.todo__button {
      display: none;
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
    
    @media screen and (max-width: 676px) {
      font-size: 14px;

      :hover {
        display: none;
      }

      button.todo__button {
        display: block;
      }
      
      .todo__checkbox_custom {
        background-size: 15px 15px;

        width: 15px;
        height: 15px;

      }
      
      input.todo__checkbox {

      }

      label {
        padding: 5px 5px 5px 30px;
      }

      .todo__button:hover {
        display:none;
      }
    }
`;

export const CompleteAll = styled.div`
  position: absolute;
  
  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  margin: 10px 0;

  input {

    position: absolute;
    
    opacity: 0;
    border: none;
    
    width: 40px;
    height: 40px;
    
    top: 0;
    bottom: 0;
    margin: auto 0;
    z-index: 1;
  }

  label {
    display: ${props => props.isEmpty ? "block" : "none"};
    width: 40px;
    height: 40px;

    opacity: 0.3;
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg');
    background-size: 40px 40px;
    background-repeat: none;
  }
`;

export const FooterStyle = styled.footer`
  
  background-color: white;
  position: relative;
  padding: 0 10px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #777;
  border-top: 1px solid #e6e6e6;
  font-size: 14px;

  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);


  &:before {
    padding-bottom: 100px;
    z-index: -2;
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgb(0 0 0 / 20%), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgb(0 0 0 / 20%);
  }

  button {
    border: none;
    background: none;
    color: #777;
  }

  .filters__button {
    
    &.filters__button_selected {
      border-radius: 3px;
      border: 1px solid rgba(200,200,200, 50%);
    }

    &:hover {
      border-radius: 3px;
      border: 1px solid rgba(200,200,200, 50%);
    }
  }

  .filters {
    display: flex;
    flex-wrap: wrap;
  }

  .footer__button {
    &:hover {
      text-decoration: underline
    }
  }

  @media screen and (max-width: 676px) {
    .footer__amount {
      text-align: center;
      line-height: 15px;
      padding: 0 5px;
    }

    .footer__list.filters {
      padding: 0 5px;
      justify-content: space-around;
      flex-wrap: nowrap;
      width: 200px;
      margin: 0 auto;
    }
    
    .footer__button {
      &:hover {
        display: none;
      }
    }

    .footer:before {
      display: none;
    }
  }
`