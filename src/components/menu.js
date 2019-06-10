import React from "react"
import menuStyles from "./menu.module.scss"
import { Link }  from "gatsby"


const Menu = () => (
    <nav>
        <ul className={menuStyles.navList}>
            <li>
                <Link className={menuStyles.navItem} activeClassName={menuStyles.activeNavItem} to="/">
                    HOME
                </Link>
            </li>
            <li>
                <Link className={menuStyles.navItem} activeClassName={menuStyles.activeNavItem} to="/projects">
                    PROJECTS
                </Link>
            </li>
            <li>
                <Link className={menuStyles.navItem} activeClassName={menuStyles.activeNavItem} to="/contact">
                    CONTACT
                </Link>
            </li>
        </ul>
    </nav>
)

export default Menu;