import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? "white" : "black")};
    font-family: ${props => props.theme.fontFamily};
  }
  
  .flex {
    display: flex;
  }
  .flex-1 {
    flex: 1;
  }

`
