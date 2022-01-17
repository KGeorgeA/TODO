import styled from "styled-components";
import { STYLE_VARIABLES } from "../../constants/StyleVars";

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
`;

export const Main = styled.section`
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
  position:relative;
  background-color: white;
`;