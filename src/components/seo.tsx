/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import favicon16 from '../images/favicon-16.png'
import favicon32 from '../images/favicon-32.png'
import favicon64 from '../images/favicon-64.png'
import favicon152 from '../images/favicon-152.png'

interface Props {
  description?: string
  lang?: string
  meta?: Array<{ name: string; content: string }>
  keywords?: string[]
  title?: string
}

const SEO: React.SFC<Props> = ({
  description,
  lang = 'en',
  meta = [],
  keywords = [],
  title,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || 'Utility Simulator'}
      titleTemplate={`%s`}
      link={[
        { rel: 'icon', type: 'image/png', href: favicon64 },
        { rel: 'icon', type: 'image/png', href: favicon32 },
        { rel: 'icon', type: 'image/png', href: favicon16 },
        { rel: 'apple-touch-icon', type: 'image/png', href: favicon152 },
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

export default SEO
