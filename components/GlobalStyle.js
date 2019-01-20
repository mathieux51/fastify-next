import { createGlobalStyle } from "styled-components"
import FontFaces from "./FontFaces"

export default createGlobalStyle`
  ${FontFaces}
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
