import React, { Fragment } from "react"
import styled, { ThemeProvider } from "styled-components"
import { ProjectProvider } from "../components/ProjectContext"
import Header from "../components/Header"
import Head from "components/Head"
import Body from "components/Body"
import Footer from "components/Footer"
import GlobalStyle from "components/GlobalStyle"
import theme from "style/theme"

export default () => (
  <ThemeProvider theme={theme}>
    <ProjectProvider>
      <Fragment>
        <GlobalStyle />
        <Head />
        <Header />
        <Body />
        <Footer />
      </Fragment>
    </ProjectProvider>
  </ThemeProvider>
)
