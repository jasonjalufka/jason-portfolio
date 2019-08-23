import React from "react"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import Img from "gatsby-image"
import { Layout } from "@components"
import { IconGithub, IconLink } from "@components/icons"
import { HeaderSection, theme, mixins, media } from "@styles"
const { colors, fontSizes } = theme

const Header = styled.h1`
  display: flex;
  margin: 0;
  font-size: 100px;
  font-weight: 700;
  ${mixins.headerSizing};
  /* ${media.phablet`font-size: 90px;`}
  ${media.phone`font-size: 75px;`} */
`

const TechSection = styled.div``

const TechList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  margin-top: 20px;
`

const TechListItem = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-size: ${fontSizes.small};
  color: ${colors.lightText};
  &:before {
    content: "▹";
    position: absolute;
    left: 0;
    color: ${colors.lightBlue};
    font-size: ${fontSizes.small};
    line-height: 12px;
  }
`

const Logo = styled.div`
  padding-left: 10px;
  ${media.phone`padding-left: 5px;`};
`

const LinkContainer = styled.div`
  padding: 10px 5px;
  ${media.phablet`padding: 6px 0px `};
  /* width: 130px; */
  display: flex;
  justify-content: space-around;
`

const LogoLink = styled.a`
  display: block;
  color: ${colors.white};
  width: 42px;
  height: 42px;
  ${media.tablet`width: 35px; height: 35px;`};
  ${media.thone`width: 30px; height: 30px;`};
  ${media.phablet`width: 25px; height: 25px;`};
  ${media.phone`width: 20px; height: 20px;`};
  &:hover,
  &:focus {
    svg {
      stroke-width: 1.3;
    }
  }
  svg {
    fill: rgba(0, 0, 0, 0);
    transition: ${theme.transition};
    user-select: none;
    stroke-width: 1;
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
              <LogoLink
                href={external}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <IconLink />
              </LogoLink>
            </Logo>
            <Logo>
              <LogoLink
                href={github}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <IconGithub />
              </LogoLink>
            </Logo>
          </LinkContainer>
        </Header>
        <TechSection>
          <TechList>
            {tech.map((item, i) => (
              <TechListItem key={i}>{item}</TechListItem>
            ))}
          </TechList>
        </TechSection>
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
