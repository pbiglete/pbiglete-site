/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import Header from "./header" 
import Menu from "./menu"
import "../styles/index.scss"
import menuStyles from "./menu.module.scss"
import layoutStyles from "./layout.module.scss"


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
        <Header siteTitle={data.site.siteMetadata.title} /> 
        <Menu />
        <main>{children}</main>
        <hr></hr>
          <div className={layoutStyles.iconBar}>
              <a href="https://www.linkedin.com/in/paul-jerrold-biglete-44220a183/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FontAwesomeIcon className={layoutStyles.icon} icon={faLinkedin} />
              </a>
              <a href="https://github.com/pbiglete" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FontAwesomeIcon className={layoutStyles.icon} icon={faGithub} />
              </a>
              <a href="mailto: pbiglete@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
                <FontAwesomeIcon className={layoutStyles.icon} icon={faEnvelope} />
              </a>
          </div>
        </div>
              <footer className={layoutStyles.footer}>
                © {new Date().getFullYear()}, Created by Paul Jerrold Biglete. - Version 1.0.0
              </footer>
       </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
