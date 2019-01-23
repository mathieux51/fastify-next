import Link from "next/link"
import styled, { css } from "styled-components"

const Nav = styled.nav.attrs({ className: "" })`
  border-bottom: 1px solid ${({ theme }) => theme.g86};
  margin: 0 20px;
  padding: 15px 0;
`
const A = styled.a.attrs({
  className: "ff-futura f16 ttu tdn ta-c w100 d"
})`
  letter-spacing: 1px;
  line-height: 2.5em;
  color: ${({ theme }) => theme.g60};
`

const Ul = styled.ul.attrs({ className: "fxd-c m0 p0" })``
const Button = styled(A).attrs({
  as: "button"
})`
  height: 70px;
`

const StyledLink = ({ href, txt }) => (
  <Link prefetch href={href} as={process.env.BACKEND_URL + href}>
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

export default class extends React.PureComponent {
  state = {
    isOpen: false
  }

  handleOnClick = () => this.setState({ isOpen: !this.state.isOpen })

  render() {
    const { isOpen } = this.state
    return (
      <Nav>
        {isOpen && <List />}
        <Button onClick={this.handleOnClick}>Menu</Button>
      </Nav>
    )
  }
}
