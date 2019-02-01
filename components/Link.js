import Link from "next/link"

export default ({ href, className, children }) => (
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
)
