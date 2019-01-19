import React, { Fragment } from "react"
import styled, { ThemeProvider } from "styled-components"
import Header from "../components/Header"
import Head from "../components/Head"
import GlobalStyle from "../components/GlobalStyle"
import FontFaces from "../components/FontFaces"

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

const theme = {}

export default () => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle whiteColor />
      <FontFaces />
      <Head />
      <Header />
      <Title>My page</Title>
    </Fragment>
  </ThemeProvider>
)
