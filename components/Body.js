import React from "react"
import styled from "styled-components"

import { ProjectConsumer } from "./ProjectContext"
import Link from "./Link"

const Title = styled.h1`
  font-size: 50px;
`

const Main = styled.main`
  margin: 33px 20px;
`

const AspectRatio = styled.div.attrs({ className: "w100 relative" })`
  padding-top: 17.5%;
  height: 0;
  overflow: hidden;
`

const Row = styled.div.attrs({ className: "absolute t0 l0 w100 h100 flex" })``

const Column = styled.div.attrs({
  className: "flex-1 h100"
})`
  background: gold;
  margin: 1px;
`

const Ul = styled.ul.attrs({ className: "m0 p0" })``

// <Link href="/">
// </Link>

const List = () => (
  <Ul>
    <AspectRatio>
      <Row>
        <Column>Column 1</Column>
        <Column>Column 2</Column>
      </Row>
    </AspectRatio>
  </Ul>
)

export default () => (
  <Main>
    <ProjectConsumer>
      {projects => console.log(projects) || <List />}
    </ProjectConsumer>
  </Main>
)
