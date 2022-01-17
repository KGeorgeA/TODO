import styled from "styled-components";
import { STYLE_VARIABLES } from "../../constants/StyleVars";

export const TodosItem = styled.li`
    border-bottom: 1px solid #e6e6e6;
    list-style-type: none;

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
`

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