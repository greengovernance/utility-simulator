import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Game from '../components/game/game'
import GameContainer from '../components/game/game-container'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <GameContainer />
  </Layout>
)

export default IndexPage
