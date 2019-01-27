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

const Title = styled.h3.attrs({
  className: "fw300 ff-futura-pt f14 ttu ta-c"
})`
  display: none;
  color: ${({ theme }) => theme.fgs};
  line-height: 1.6em;
  letter-spacing: 0.6em;
`

const Col = styled(Link).attrs({
  className: "flex-1 h100 relative flex jc-c ai-c"
})`
  margin: 1px;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.g60};
    opacity: 0.7;
    transition: opacity 0.14s ease-out;
    & > ${Title} {
      display: inherit;
    }
  }
`

const Img = styled.img.attrs({
  className: "absolute t0 r0 b0 l0 w100 h100 cover z-1"
})``

const groupBy2 = arr => {
  const formatted = []
  while (arr.length > 0) formatted.push(arr.splice(0, 2))
  return formatted
}

const List = () => (
  <ProjectConsumer>
    {projects => (
      <Ul>
        {groupBy2(projects).map((p, i) => (
          <AspectRatio key={`AspectRatio-${i}`}>
            <Row>
              {p.map((project, j) => (
                <Col href={project.href} key={`Col-${j}`}>
                  <Title>{project.title}</Title>
                  <Img src={project.thumbnail} alt={project.title} />
                </Col>
              ))}
            </Row>
          </AspectRatio>
        ))}
      </Ul>
    )}
  </ProjectConsumer>
)

export default () => (
  <Main>
    <List />
  </Main>
)
