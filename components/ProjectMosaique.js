import React from "react"
import { groupBy2 } from "../helpers"
import styled from "styled-components"

import { ProjectConsumer } from "./ProjectContext"
import Link from "./Link"

const AspectRatio = styled.div.attrs({ className: "w100 relative" })`
  padding-top: 17.5%;
  height: 0;
  overflow: hidden;
`
const Row = styled.div.attrs({ className: "absolute t0 l0 w100 h100 flex" })``

const Title = styled.h3.attrs({
  className: "fw300 ff-futura-pt f14 ttu ta-c z1"
})`
  display: none;
  color: ${({ theme }) => theme.fgs};
  line-height: 1.6em;
  letter-spacing: 0.6em;
`

const StyledLink = styled(Link).attrs({
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

const ProjectMosaique = ({ projects }) => (
  <ul className="m0 p0">
    {groupBy2(projects).map((p, i) => (
      <AspectRatio key={`AspectRatio-${i}`}>
        <Row>
          {p.map((project, j) => (
            <StyledLink
              // innerAs={project.href}
              href={`/projects?name=${project.href}`}
              key={`Col-${j}`}
            >
              <Title>{project.title}</Title>
              <img
                src={project.thumbnail}
                alt={project.title}
                className="absolute t0 r0 b0 l0 w100 h100 cover"
              />
            </StyledLink>
          ))}
        </Row>
      </AspectRatio>
    ))}
  </ul>
)

const ProjectMosaiqueWithContext = () => (
  <ProjectConsumer>
    {projects => <ProjectMosaique projects={projects} />}
  </ProjectConsumer>
)

export default ProjectMosaiqueWithContext
