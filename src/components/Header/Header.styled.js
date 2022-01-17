import styled from "styled-components";
import {STYLE_VARIABLES} from "../../constants/StyleVars";

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