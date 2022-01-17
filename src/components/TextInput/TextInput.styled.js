import styled from "styled-components"

export const FormDiv = styled.div`
    position: relative;
    width: 100%;
    max-height: 60px;
    height: 100%;
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
`;