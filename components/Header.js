import { Fragment } from "react"
import styled, { css } from "styled-components"

import Link from "./Link"

const Nav = styled.nav.attrs({ className: "" })`
  border-bottom: 1px solid ${({ theme }) => theme.g86};
  margin: 15px 20px;
`
const StyledLink = styled(Link).attrs({
  className: "ff-futura-pt f16 ttu tdn ta-c w100 d"
})`
  letter-spacing: 1px;
  line-height: 2.5em;
  color: ${({ theme }) => theme.g60};
`

const Ul = styled.ul.attrs({ className: "fxd-c m0 p0" })`
  border-bottom: 1px solid ${({ theme }) => theme.g86};
  padding-bottom: 15px;
`
const Button = styled(StyledLink).attrs({
  as: "button"
})`
  height: 70px;
`

const ListItem = ({ href, txt }) => (
  <li>
    <StyledLink href={href}>{txt}</StyledLink>
  </li>
)

const List = () => (
  <Ul>
    <ListItem href="/" txt="home" />
    <ListItem href="/feature-tv" txt="features / tv" />
    <ListItem href="/documentaries" txt="documentary" />
    <ListItem href="/music-videos" txt="music videos" />
    <ListItem href="/experimental" txt="experimental" />
    <ListItem href="/photography" txt="photography" />
    <ListItem href="/contact" txt="contact" />
    <ListItem href="/resume" txt="resume" />
  </Ul>
)

const Container = styled.div.attrs({
  className: ""
})`
  border-bottom: 1px solid ${({ theme }) => theme.g86};
  margin: 0 20px;
`

const H1 = styled.h1.attrs({
  className: "ff-futura-pt m0 f31 fw300 ttu ta-c"
})`
  color: ${({ theme }) => theme.g13};
`

const H2 = styled.h2.attrs({
  className: "ttu f12 ta-c fw400"
})`
  letter-spacing: 5px;
  margin: 8px 0 15px;
`

export default class extends React.PureComponent {
  state = {
    isOpen: false
  }

  handleOnClick = () => this.setState({ isOpen: !this.state.isOpen })

  render() {
    const { isOpen } = this.state
    return (
      <Fragment>
        <Nav>
          {isOpen && <List />}
          <Button onClick={this.handleOnClick}>Menu</Button>
        </Nav>
        <Container>
          <H1>Léo Lefèvre</H1>
          <H2>Cinematographer</H2>
        </Container>
      </Fragment>
    )
  }
}
