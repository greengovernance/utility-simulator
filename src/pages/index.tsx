import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import GameContainer from '../components/game/game-container'

const IndexPage = () => (
  <Layout showAlphaWarning>
    <SEO />
    <GameContainer />
  </Layout>
)

export default IndexPage
