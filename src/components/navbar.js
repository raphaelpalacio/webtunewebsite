// make a simple nav bar

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
const Navbar = () => (
  <Layout>
    <SEO title="Navbar" />
    <h1>Navbar</h1>
    <p>Welcome to our Navbar page!</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
export default Navbar
