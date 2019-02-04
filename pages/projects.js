import React from "react"
import { withRouter } from "next/router"
import styled from "styled-components"
import Plyr from "react-plyr"
// 🚧 Create a global style for this 🚧
// import "plyr/dist/plyr.css"

import { ProjectConsumer } from "components/ProjectContext"

const Container = styled.div``

const Projects = props => {
  const [cur] = props.projects.filter(p => p.href === props.router.query.name)
  return (
    <Container>
      {cur.videos &&
        cur.videos.map(v => <Plyr type={v.type} videoId={v.videoId} />)}
    </Container>
  )
}

export default withRouter(props => (
  <ProjectConsumer>
    {projects => <Projects {...props} projects={projects} />}
  </ProjectConsumer>
))
