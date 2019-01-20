import React, { Fragment } from "react"
import styled, { ThemeProvider } from "styled-components"
import Header from "../components/Header"
import Head from "../components/Head"
import Body from "../components/Body"
import GlobalStyle from "../components/GlobalStyle"
import theme from "../theme"

export default class extends React.PureComponent {
  async componentDidMount() {
    if (sessionStorage.fontsLoadedFoutWithClass) {
      document.documentElement.className += " fonts-loaded"
      return
    }
    if ("fonts" in document) {
      await Promise.all([
        document.fonts.load("italic 100 1em proxima-nova"),
        document.fonts.load("italic 300 1em futura-pt"),
        document.fonts.load("italic 400 1em futura-pt"),
        document.fonts.load("italic 700 1em futura-pt"),
        document.fonts.load("italic 700 1em proxima-nova"),
        document.fonts.load("normal 100 1em proxima-nova"),
        document.fonts.load("normal 300 1em futura-pt"),
        document.fonts.load("normal 300 1em proxima-nova"),
        document.fonts.load("normal 400 1em futura-pt"),
        document.fonts.load("normal 400 1em proxima-nova"),
        document.fonts.load("normal 700 1em futura-pt"),
        document.fonts.load("normal 700 1em proxima-nova")
      ])
      document.documentElement.className += " fonts-loaded"
      sessionStorage.fontsLoadedFoutWithClass = true
    }
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle whiteColor />
          <Head />
          <Header />
          <Body />
        </Fragment>
      </ThemeProvider>
    )
  }
}
