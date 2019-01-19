import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? "white" : "black")};
		font-family: sans-serif;
  }
	.fonts-loaded body {
		font-family: proxima-nova, sans-serif;
	}
  
  .flex {
    display: flex;
  }
  .flex-1 {
    flex: 1;
  }

`
