import React from "react"
import db from "../db"

let ProjectContext
const { Provider, Consumer } = (ProjectContext = React.createContext())
// Context.Consumer, Context.Provider

class ProjectProvider extends React.Component {
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
    return (
      <Provider value={this.state.projects}>{this.props.children}</Provider>
    )
  }
}

export { ProjectProvider, Consumer as ProjectConsumer, ProjectContext }
