import React, { Fragment } from "react"
import styled, { ThemeProvider } from "styled-components"
import { ProjectProvider } from "../components/ProjectContext"
import Header from "../components/Header"
import Head from "components/Head"
import Body from "components/Body"
import Footer from "components/Footer"
import GlobalStyle from "components/GlobalStyle"
import theme from "style/theme"

import db from "./db"
console.log(db)

export default () => (
  <ProjectProvider projects={db.projects}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Head />
        <Header />
        <Body />
        <Footer />
      </Fragment>
    </ThemeProvider>
  </ProjectProvider>
)
