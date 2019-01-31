import Link from "next/link"
import styled from "styled-components"

export default ({ href, className, children }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
)
