import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import { Link } from "gatsby"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import Styledhero from "../components/Styledhero"
import { graphql } from "gatsby"
import Collaborate from "../components/Contact/Contact"
import SEO from "../components/SEO"

export default ({ data }) => (
  <Layout>
    <SEO
      title="Unnati"
      description="Unnati: The knowledge hub for civil aspirants"
    />
    <Styledhero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner title="Unnati">
        <h3>The Knowledge Hub For Civil Aspirants</h3>
        <Link to="/article/1" className="btn-white">
          Read Articles
        </Link>
      </Banner>
    </Styledhero>
    <About />
    <Services />
    <Collaborate title="Associate With" subtitle="Unnati" />
  </Layout>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "Header.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
