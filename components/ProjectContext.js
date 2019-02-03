import React from "react"

let ProjectContext
const { Provider, Consumer } = (ProjectContext = React.createContext())

class ProjectProvider extends React.Component {
  state = {
    projects: this.props.projects
  }

  render() {
    const { projects } = this.state
    return <Provider value={projects}>{this.props.children}</Provider>
  }
}

export { ProjectProvider, Consumer as ProjectConsumer, ProjectContext }
