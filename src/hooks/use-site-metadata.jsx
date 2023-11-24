import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query FetchMetadata{
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
          type
          keywords
        }
      }
    }
  `)

  return data.site.siteMetadata
}