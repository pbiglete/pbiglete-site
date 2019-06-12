import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Head from '../components/head'

const NotFoundPage = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>Page Not Found: 404</h1>
      <p>Are you lost? Come back <Link to="/">Home</Link>!</p>
    </Layout>
  )
}

export default NotFoundPage
