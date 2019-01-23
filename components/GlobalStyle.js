import { createGlobalStyle } from 'styled-components'
import FontFaces from './FontFaces'
import { normalize } from 'polished'

export default createGlobalStyle`
  ${FontFaces}
  ${normalize()}
  body {
    color: ${({ theme }) => theme.g38};
		font-family: sans-serif;
    background: ${({ theme }) => theme.bg}
  }
	.fonts-loaded body {
		font-family: proxima-nova, sans-serif;
	}

  .fonts-loaded .ff-futura-pt {
    font-family: futura-pt, sans-serif;
  }

  /* Reset */
  button {
    border: 0;
    padding: 0;
    background: transparent;
  }

  .flex {
    display: flex;
  }
  .fxd-c {
    flex-direction: column;
  }
  .flex-1 {
    flex: 1;
  }
  .w100 {
    width: 100%;
  }
  .h100 {
    height: 100%;
  }
  /* font-size */
  .f12 {
    font-size: 12px;
  }
  .f16 {
    font-size: 16px;
  }
  .f31 {
    font-size: 31px;
  }

  .fw300 {
    font-weight: 300;
  }
  .fw400 {
    font-weight: 400;
  }

  /* Text */
  .ttu {
    text-transform: uppercase;
  }
  .tdn {
    text-decoration: none;
  }
  .ta-c {
    text-align: center;
  }
  /* margin/padding */
  .m0 {
    margin: 0;
  }
  .p0 {
    padding: 0;
  }
  /* display */
  .d {
    display: block;
  }
`
