import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.header`
  background: peru;
  margin-bottom: 1.45rem;
`

export const Inner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

export const Heading = styled.h1`
  margin: 0;
`

export const HeadingLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-family: ${props => props.theme.font.roboto};
`
