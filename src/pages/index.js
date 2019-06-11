import React from "react"
import { graphql } from "gatsby"
import "../styles/index.scss"
import Layout from "../components/layout"

// const IndexPage = () => (
//   <Layout>
//     <h1>Hello, I'm Paul!</h1>
//     <p>I completed my Bachelors of Science in Computer Engineering from San Diego State University on December 2018. 
//       I am currently seeking full-time employment as a Software Engineer. I am currently interested in doing full stack development as it will utilize
//       my creativeness from my digital art background and solid programming skills to create a well-designed product.</p>
//   </Layout>
// )

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
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
        </Layout>
    )
}

export default IndexPage