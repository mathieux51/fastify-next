import React from "react"
import { withRouter } from "next/router"
import styled from "styled-components"

import Video from "components/Video"
import { ProjectConsumer } from "components/ProjectContext"
import { media } from "helpers"

const Container = styled.div.attrs({ className: "flex" })`
  margin-top: 50px;
  flex-direction: column;
  ${media.desktop`
    flex-direction: row;
  `}
`
const RessourceContainer = styled.div``
const TextContainer = styled.div`
  margin: 17px;
  ${media.desktop`
    margin: 0 17px 0 32px;
  `}
`

const Img = styled.img.attrs({ className: "cover w100" })`
  margin-top: 30px;
`

const Projects = props => {
  const [cur] = props.projects.filter(p => p.href === props.router.query.name)
  console.log("cur", cur)
  return (
    <Container>
      <RessourceContainer>
        {cur.videos &&
          cur.videos.map(v => (
            <Video type={v.type} videoId={v.videoId} key={v.videoId} />
          ))}
        <Img src={cur.thumbnail} />
        {cur.photos && cur.photos.map(p => <Img src={p} />)}
      </RessourceContainer>
      <TextContainer>{cur.description}</TextContainer>
    </Container>
  )
}

export default withRouter(props => (
  <ProjectConsumer>
    {projects => <Projects {...props} projects={projects} />}
  </ProjectConsumer>
))
