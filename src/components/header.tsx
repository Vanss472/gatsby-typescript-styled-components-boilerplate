import React from "react"
import * as H from "./styled"

type HeaderProps = {
  siteTitle: string
}

const Header: React.FunctionComponent<HeaderProps> = ({ siteTitle }: HeaderProps) => (
  <H.Container>
    <H.Inner>
      <H.Heading>
        <H.HeadingLink to="/">{siteTitle}</H.HeadingLink>
      </H.Heading>
    </H.Inner>
  </H.Container>
)

export default Header
