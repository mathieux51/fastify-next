import Link from "next/link"
import styled from "styled-components"

const Nav = styled.nav.attrs({ className: "" })`
  border-bottom: 1px solid ${({ theme }) => theme.g86};
  margin: 0 20px;
  padding: 15px 0;
`
const Ul = styled.ul.attrs({ className: "" })``
const Li = styled.li.attrs({ className: "" })``
const Button = styled.button.attrs({
  className: "w100 f16 ff-futura-pt ttu"
})`
  color: ${({ theme }) => theme.g60};
  height: 70px;
`

const List = () => (
  <Ul>
    <Li>
      <Link prefetch href="/">
        <a>Home</a>
      </Link>
    </Li>
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
