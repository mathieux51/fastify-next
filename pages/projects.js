import React from "react"
import { withRouter } from "next/router"

import { ProjectConsumer } from "components/ProjectContext"

const Projects = props =>
  console.log(props) || <h1>{props.router.query.name}</h1>

export default withRouter(props => (
  <ProjectConsumer>
    {projects => <Projects {...props} projects={projects} />}
  </ProjectConsumer>
))
