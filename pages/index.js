import React, { Fragment } from "react"
import styled, { ThemeProvider } from "styled-components"
import Header from "../components/Header"
import GlobalStyle from "../components/GlobalStyle"
import FontFaces from "../components/FontFaces"

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default () => (
  <ThemeProvider theme={{ fontFamily: "Helvetica Neue" }}>
    <Fragment>
      <GlobalStyle whiteColor />
      <FontFaces />
      <Header />
      <Title>My page</Title>
    </Fragment>
  </ThemeProvider>
)
