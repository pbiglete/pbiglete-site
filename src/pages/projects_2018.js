import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import Link from 'gatsby-link'
import Layout from "../components/layout"
import projectsStyles from "./projects.module.scss"
import Head from '../components/head'
import "../styles/index.scss"


const Projects2019Page = () => (
  <StaticQuery
  query={graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/"}, 
                                frontmatter:{ year: {eq: "2018"}}}, 
      sort: {fields: [frontmatter___date, frontmatter___title], order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            datelocation
            description
          }
          fields {
            slug
          }
        }
      }
    }
   }  
  `} 
  
  render={data => (
    <Layout>
    <Head title="PROJECTS" />
    <h1>Projects</h1>
    <hr></hr>
        <ul className={projectsStyles.navList}>
            <li>
                <Link className={projectsStyles.navItem} activeClassName={projectsStyles.activeNavItem} to="/projects_2019">
                    2019
                </Link>
            </li>
            <li>
                <Link className={projectsStyles.navItem} activeClassName={projectsStyles.activeNavItem} to="/projects_2018">
                    2018
                </Link>
            </li>
            <li>
                <Link className={projectsStyles.navItem} activeClassName={projectsStyles.activeNavItem} to="/projects">
                    ALL
                </Link>
            </li>
        </ul>
    <hr></hr>
    <ol className={projectsStyles.projects}>
    {data.allMarkdownRemark.edges.map((edge) => {
        return (
          <li className={projectsStyles.project}>
            <Link to={`/projects/${edge.node.fields.slug}`}>
            <h2>{edge.node.frontmatter.title}</h2>
            <h3>{edge.node.frontmatter.datelocation}</h3>
            <p>{edge.node.frontmatter.description}</p>
            </Link>
          </li>
        )
    })}
    </ol>
    </Layout>
  )}
/>

)

export default Projects2019Page;