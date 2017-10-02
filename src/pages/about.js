import React from "react"
import PrimaryButton from "../lib/components/PrimaryButton";


const AboutPage = ({ data }) => (
  <div>
    <PrimaryButton text={'Default'} />
    <h1>
      About {data.site.siteMetadata.title}
    </h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
  </div>
)

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
export default AboutPage
