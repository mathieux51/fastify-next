import React from "react"
import styled from "styled-components"

import InstagramIcon from "components/InstagramIcon"
import ImdbIcon from "components/ImdbIcon"
import VimeoIcon from "components/VimeoIcon"
import Link from "./Link"

const Footer = styled.footer.attrs({ className: "flex jc-e" })`
  margin: 33px 0 20px;
  padding-top: 50px;
  border-top: 1px solid ${({ theme }) => theme.g86};
`

const StyledInstagramIcon = styled(InstagramIcon)`
  width: 20px;
  height: 20px;
`
const StyledImdbIcon = styled(ImdbIcon)`
  width: 20px;
  height: 20px;
  margin: 0 12px;
`
const StyledVimeoIcon = styled(VimeoIcon)`
  width: 20px;
  height: 20px;
`

export default () => (
  <Footer id="footer">
    <Link href="https://www.instagram.com/leo_lefevre__/">
      <StyledInstagramIcon />
    </Link>
    <Link href="https://www.imdb.com/name/nm4030787/">
      <StyledImdbIcon />
    </Link>
    <Link href="https://vimeo.com/user9420860">
      <StyledVimeoIcon />
    </Link>
  </Footer>
)
