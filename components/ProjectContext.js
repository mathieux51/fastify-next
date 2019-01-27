import React from "react"
import db from "../db"

let ProjectContext
const { Provider, Consumer } = (ProjectContext = React.createContext())

class ProjectProvider extends React.PureComponent {
  state = {
    projects: db.projects
  }

  // handleLogin = Project => {
  //   this.setState({ currentProject: Project })
  // }

  // handleLogout = () => {
  //   this.setState({ currentProject: null })
  // }

  //value = {
  //   projects: this.state.projects
  //   // onLogin: this.handleLogin,
  //   // onLogout: this.handleLogout
  // }
  render() {
    const { projects } = this.state
    return <Provider value={projects}>{this.props.children}</Provider>
  }
}

export { ProjectProvider, Consumer as ProjectConsumer, ProjectContext }
