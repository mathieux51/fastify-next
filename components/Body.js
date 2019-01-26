import React, { Fragment } from "react"
import styled from "styled-components"

import { ProjectConsumer } from "./ProjectContext"
import Link from "./Link"

const Main = styled.main`
  margin: 33px 20px;
`

const Ul = styled.ul.attrs({ className: "m0 p0" })``

const AspectRatio = styled.div.attrs({ className: "w100 relative" })`
  padding-top: 17.5%;
  height: 0;
  overflow: hidden;
`

const Row = styled.div.attrs({ className: "absolute t0 l0 w100 h100 flex" })``

const Figure = styled.figure.attrs({
  className: "flex-1 h100 relative flex jc-c ai-c pointer"
})`
  margin: 1px;
  &:hover {
    background: ${({ theme }) => theme.g60};
    opacity: 0.7;
    transition: opacity 0.14s ease-out;
    & > figcaption {
      display: inherit;
    }
  }
`

const Title = styled.figcaption.attrs({
  className: "fw300 ff-futura-pt f14 ttu ta-c"
})`
  display: none;
  color: ${({ theme }) => theme.fgs};
  line-height: 1.6em;
  letter-spacing: 0.6em;
`
const Img = styled.img.attrs({
  className: "absolute t0 r0 b0 l0 w100 h100 cover z-1"
})``

const List = () => (
  <ProjectConsumer>
    {projects => (
      <Ul>
        <AspectRatio>
          <Row>
            {projects.map(project => (
              <Link href="/" key={project.description}>
                <Figure>
                  <Title>{project.title}</Title>
                  <Img src={project.thumbnail} alt={project.title} />
                </Figure>
              </Link>
            ))}
          </Row>
        </AspectRatio>
      </Ul>
    )}
  </ProjectConsumer>
)

export default () => (
  <Main>
    <List />
  </Main>
)
