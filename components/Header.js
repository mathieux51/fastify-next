import { Fragment } from "react"
import styled, { css } from "styled-components"

import Link from "./Link"

const Nav = styled.nav.attrs({ className: "" })`
  border-bottom: 1px solid ${({ theme }) => theme.g86};
  margin: 15px 20px;
`
const A = styled.a.attrs({
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
const Button = styled(A).attrs({
  as: "button"
})`
  height: 70px;
`

const StyledLink = ({ href, txt }) => (
  <Link href={href}>
    <li>
      <A>{txt}</A>
    </li>
  </Link>
)

const List = () => (
  <Ul>
    <StyledLink href="/" txt="home" />
    <StyledLink href="/feature-tv" txt="features / tv" />
    <StyledLink href="/documentaries" txt="documentary" />
    <StyledLink href="/music-videos" txt="music videos" />
    <StyledLink href="/experimental" txt="experimental" />
    <StyledLink href="/photography" txt="photography" />
    <StyledLink href="/contact" txt="contact" />
    <StyledLink href="/resume" txt="resume" />
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
  className: "m0 ttu f12 ta-c fw400"
})`
  letter-spacing: 5px;
  margin-bottom: 15px;
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
