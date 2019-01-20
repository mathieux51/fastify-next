import Link from "next/link"
import styled from "styled-components"

const Nav = styled.nav.attrs({ className: "" })`
  height: 70px;
  border-bottom: 1px solid ${({ theme }) => theme.g86};
  margin: 0 20px;
  padding: 15px 0;
`
const Ul = styled.ul.attrs({ className: "flex" })``
const Li = styled.ul.attrs({ className: "flex-1" })``
const Button = styled.button.attrs({
  className: "w100 h100 f16 ff-futura-pt ttu"
})`
  color: ${({ theme }) => theme.g60};
`

const List = (
  <Ul>
    <Li>
      <Link prefetch href="/">
        <a>Home</a>
      </Link>
    </Li>
    <Li>
      <Link prefetch href="/about">
        <a>About</a>
      </Link>
    </Li>
    <Li>
      <Link prefetch href="/contact">
        <a>Contact</a>
      </Link>
    </Li>
  </Ul>
)

export default () => (
  <Nav>
    <Button>Menu</Button>
  </Nav>
)
