import React from "react"
import styled from "styled-components"

import Link from "./Link"

const Main = styled.main`
  margin: 33px 0;
`
const Title = styled.h1`
  font-size: 50px;
`
const Box = styled.div`
  outline: 1px solid gold;
  flex: 1 40;
  height: 80px;
`

const Ul = styled.ul.attrs({ className: "m0 p0" })``

const List = () => (
  <Ul>
    <Link href="/">
      <Box />
    </Link>
    <Link href="/">
      <Box />
    </Link>
  </Ul>
)

export default () => (
  <Main>
    <List />
  </Main>
)
