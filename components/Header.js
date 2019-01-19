import Link from "next/link"
import styled from "styled-components"

const Ul = styled.ul.attrs({ className: "flex" })``
const Li = styled.ul.attrs({ className: "flex-1" })``

export default () => (
  <nav>
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
  </nav>
)
