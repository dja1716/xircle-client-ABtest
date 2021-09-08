import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

interface Colors {
  StrongBlue: string;
  MidBlue: string;
  LightBlue: string;
  BareBlue: string;
  Black: string;
  MidGray: string;
  LightGray: string;
  BareGray: string;
}

export const GlobalStyles = createGlobalStyle`
    ${reset}
   p, a, span, h3, h4, div {
     font-family: "Spoqa Han Sans Neo", "Spoqa Han Sans JP", sans-serif;
     font-color: "#12121D";
   }
`;

export const colors: Colors = {
  StrongBlue: "#1C43B7",
  MidBlue: "#18A0FB",
  LightBlue: "#DBEDFF",
  BareBlue: "#F8FAFD",
  Black: "#12121D",
  MidGray: "#6F7789",
  LightGray: "#A7B0C0",
  BareGray: "#C4CBD8",
};

export const AppContainer = styled.div`
  width: 375px;
  min-height: 100vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
`;

export const Container = styled.div`
  width: 100%;
`;
