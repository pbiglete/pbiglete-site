import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import Layout from "../components/layout"
import "../styles/index.scss"

// const ResumePage = () => (
//     <Layout>
//       <div>
//         <h2>Technical Skills</h2>
//         <p>Programming Languages: </p>
//         <p>Frameworks: </p>
//         <p>Software: </p>
//         <h2>Education</h2>
//         <p>B.S in Computer Engineering</p>
//       </div>
//     </Layout>
//   )
  
//   export default ResumePage;

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
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
        </Layout>
    )
}

export default ResumePage