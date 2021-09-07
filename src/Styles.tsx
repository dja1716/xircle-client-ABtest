import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset}
   p, a, span {
     font-family: "Spoqa Han Sans Neo", "Spoqa Han Sans JP", sans-serif;
   }
`;

export const AppContainer = styled.div`
  width: 400px;
  min-height: 100vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-left: 1px solid #8c94a4;
  border-right: 1px solid #8c94a4;
`;
