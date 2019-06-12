import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'


export const query = graphql`
query (
    $slug: String!
  ) {
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter {
        title
      }
      html
    }
  }
`
const Project = (props) => {
    return (
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title}/>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
        </Layout>
    )
}

export default Project