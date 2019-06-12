import React from "react"
import { graphql } from "gatsby"
import "../styles/index.scss"
import Layout from "../components/layout"
import Head from '../components/head'

export const query = graphql`
query {
    markdownRemark (
      fields: {
        slug: {
          eq: "intro"
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
const IndexPage = (props) => {
    return (
        <Layout>
            <Head title="HOME" />
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
        </Layout>
    )
}

export default IndexPage