import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import Img from "gatsby-image"
import { Layout } from "@components"
import { IconGithub, IconLink } from "@components/icons"
import { HeaderSection, theme, mixins, media } from "@styles"
const { colors } = theme

const Header = styled.h1`
  display: flex;
  margin: 0;
  font-size: 100px;
  font-weight: 700;
  ${media.phablet`font-size: 90px;`}
  ${media.phone`font-size: 75px;`}
`

const Logo = styled.div``

const LinkContainer = styled.div`
  padding: 8px 12px;
  width: 130px;
  display: flex;
  justify-content: space-around;
`

const LogoLink = styled(AniLink)`
  display: block;
  color: ${colors.lightText};
  width: 42px;
  height: 42px;
  &:hover,
  &:focus {
    svg {
      fill: ${colors.white};
    }
  }
  svg {
    fill: ${colors.lightBlue};
    transition: ${theme.transition};
    user-select: none;
  }
`

const BodySection = styled.div`
  min-height: 50vh;
  height: 100%;
  background-color: white;
  color: #1e2022;
  ${mixins.sidePadding};
`

export default ({ data }) => {
  const project = data.markdownRemark
  const { date, title, github, external, tech } = project.frontmatter
  const { html } = project
  return (
    <Layout>
      <HeaderSection>
        <Header>
          {title}
          <LinkContainer>
            <Logo>
              <LogoLink to="#">
                <IconLink />
              </LogoLink>
            </Logo>
            <Logo>
              <LogoLink to="#">
                <IconGithub />
              </LogoLink>
            </Logo>
          </LinkContainer>
        </Header>
      </HeaderSection>
      <BodySection>
        <h1>Description</h1>
        <div style={{ color: "black" }}>
          <h5 dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </BodySection>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date
        title
        github
        external
        tech
      }
      html
    }
  }
`
