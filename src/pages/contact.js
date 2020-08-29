import React from 'react'
import Layout from "../components/layout"
import "../styles/index.scss"
import Head from '../components/head'
import { graphql } from 'gatsby'
 
  export const query = graphql`
  query {
      markdownRemark (
        fields: {
          slug: {
            eq: "contact"
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
  const ContactPage = (props) => {
      return (
          <Layout>
              <Head title="CONTACT" />
              <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
          </Layout>
      )
  }
  
  export default ContactPage
