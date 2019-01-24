import React, { Fragment } from "react"
import styled, { ThemeProvider } from "styled-components"
import Header from "../components/Header"
import Head from "../components/Head"
import Body from "../components/Body"
import GlobalStyle from "../components/GlobalStyle"
import theme from "../theme"

export default class extends React.PureComponent {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          <Head />
          <Header />
          <Body />
        </Fragment>
      </ThemeProvider>
    )
  }
}
