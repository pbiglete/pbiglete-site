import { Link } from "gatsby"
import logo from '../images/my_logo_proper.png'
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.scss" //Loading styles for a specifc component
import menuStyles from "./menu.module.scss"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.logo}>
      <img src={logo} alt="Logo"/>
    </div>
      <h1>
        <Link className={headerStyles.title}>
          {siteTitle}
        </Link>
        <p className={headerStyles.subHeaderTitle}>an aspiring software engineer</p>
      </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
