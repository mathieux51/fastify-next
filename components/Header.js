import { Fragment } from "react"
import styled, { css } from "styled-components"

import { media } from "helpers"
import Link from "./Link"

const Container = styled.div.attrs({ className: "flex" })`
  flex-direction: column;
  ${media.desktop`
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.g86};  
  `}
`

const Nav = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.g86};
  ${media.desktop`
    display: flex;
    align-items: center;
    border: 0;
    overflow-x: scroll;
  `}
`
const StyledLink = styled(Link).attrs({
  className: "ff-futura-pt ttu tdn ta-c w100"
})`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;

  letter-spacing: 1px;
  line-height: 2.5em;
  color: ${({ theme }) => theme.g60};
  font-size: 16px;
  ${media.desktop`
    font-size: 12px;
  `}
`

const Title = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.g86};
  padding: 25px 0;
  ${media.desktop`
    padding: 0 0 8px;
    order: -1;
    border: 0;
        
  `}
`

const Ul = styled.ul.attrs({ className: "m0 p0" })`
  padding-bottom: 15px;
  display: ${({ isOpen }) => (!isOpen ? "none" : "inherit")};
  ${media.desktop`
    display: flex;
    padding: 0;
    border: 0;
    & > li {
      margin-right: 28px;
    }
    & > li:last-child {
      margin-right: 0;
    }
  `}
`
const Button = styled(StyledLink).attrs({
  as: "button"
})`
  height: 70px;
  ${media.desktop`
    display: none;
  `}
`

const ListItem = ({ href, txt }) => (
  <li>
    <StyledLink href={href}>{txt}</StyledLink>
  </li>
)

const List = ({ isOpen }) => (
  <Ul isOpen={isOpen}>
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

const H1 = styled.h1.attrs({
  className: "ff-futura-pt m0 f31 fw300 ttu"
})`
  letter-spacing: 0.096rem;
  color: ${({ theme }) => theme.g13};
  text-align: center;
  ${media.desktop`
    text-align: inherit;
  `}
`

const H2 = styled.h2.attrs({
  className: "ttu f12 ta-c fw400"
})`
  color: ${({ theme }) => theme.g78};
  letter-spacing: 0.416rem;
  margin: 12px 0 0;
`

export default class extends React.PureComponent {
  state = {
    isOpen: false
  }

  handleOnClick = () => this.setState({ isOpen: !this.state.isOpen })

  render() {
    const { isOpen } = this.state
    return (
      <Container>
        <Nav id="nav">
          {<List isOpen={isOpen} />}
          <Button onClick={this.handleOnClick}>Menu</Button>
        </Nav>
        <Title>
          <H1>Léo Lefèvre</H1>
          <H2>Cinematographer</H2>
        </Title>
      </Container>
    )
  }
}
