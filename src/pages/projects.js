import React from 'react'
import {graphql, StaticQuery} from 'gatsby'
import Link from 'gatsby-link'
import Layout from "../components/layout"
import "../styles/index.scss"

const ProjectsPage = () => (
  <StaticQuery
  query={graphql`
    query {
      allMarkdownRemark (filter: { fileAbsolutePath: {regex : "\/projects/"} },)
      {
        edges {
          node {
            frontmatter {
              title
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
    <h1>PROJECTS</h1>
    <ol>
    {data.allMarkdownRemark.edges.map((edge) => {
        return (
          <li>
            <Link to={`/projects/${edge.node.fields.slug}`}>
            <h2>{edge.node.frontmatter.title}</h2>
            </Link>
          </li>
        )
    })}
    </ol>
    </Layout>
  )}
/>

)

export default ProjectsPage;