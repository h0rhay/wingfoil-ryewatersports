import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Learn to Wingfoil @ Ryewatersports</h1>
    <h2>More details coming soon...</h2>
    <StaticImage
      src="../images/wing-foil-duotone-fanatic-kit.jpeg"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="2 guys wing foiling"
    />
  </Layout>
)

export default IndexPage
