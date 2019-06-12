import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import "../styles/index.scss"
import Head from '../components/head'

export const query = graphql`
query {
    markdownRemark (
      fields: {
        slug: {
          eq: "resume"
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
const ResumePage = (props) => {
    return (
        <Layout>
            <Head title="RESUME" />
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
        </Layout>
    )
}

export default ResumePage