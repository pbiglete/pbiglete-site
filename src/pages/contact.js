import React from 'react'
import Link from 'gatsby-link'
import Layout from "../components/layout"
import "../styles/index.scss"

// const ContactPage = () => (
//     <Layout>
//       <div>
//         <h1>CONTACT.</h1>
//       </div>
//     </Layout>
//   )
  
//   export default ContactPage;
  
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
              <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
          </Layout>
      )
  }
  
  export default ContactPage
