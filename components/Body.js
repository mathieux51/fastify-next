import React, { Fragment } from "react"
import styled from "styled-components"
import ProjectMosaique from "./ProjectMosaique"

const Main = styled.main`
  margin: 33px 0;
`

export default () => (
  <Main id="main">
    <ProjectMosaique />
  </Main>
)
