/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

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
        <div className={menuStyles.horLine}>
            <br></br>
        </div>
        <Menu />
        <main>{children}</main>
        </div>
              <footer>
                © {new Date().getFullYear()}, Created by Paul Jerrold Biglete.
              </footer>
       </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
