/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import './layout.css'
import '../styles/main.scss'
import Container from 'reactstrap/lib/Container'
import GreenGovernanceLogo from '../images/green-governance-logo-transparent.svg'
import { DiGithubAlt } from 'react-icons/di'
import Navbar from 'reactstrap/lib/Navbar'
import NavbarBrand from 'reactstrap/lib/NavbarBrand'
import Alert from 'reactstrap/lib/Alert'

const Layout: React.SFC<{
  showAlphaWarning?: boolean
  children?: React.ReactNode
}> = ({ children, showAlphaWarning }) => (
  <div className="layout d-flex min-vh-100 flex-column">
    <div>
      <Navbar light color="light">
        <Container>
          <NavbarBrand>Utility Simulator</NavbarBrand>
        </Container>
      </Navbar>
      {showAlphaWarning && (
        <Alert color="danger">
          <Container>
            <b>Warning!</b> This software is in a pre-alpha state. Please report
            any issues or learn how to contribute on{' '}
            <a href="https://github.com/greengovernance/utility-simulator">
              GitHub
            </a>
            .
          </Container>
        </Alert>
      )}
    </div>
    <Container className="flex-grow-1 mt-3">
      <main>{children}</main>
    </Container>
    <footer className="mt-3">
      <div className="text-muted">Sponsored by:</div>
      <a href="https://greengovernance.org">
        <GreenGovernanceLogo alt="Green Governance" className="sponsor-logo" />
      </a>
      <div className="icons">
        <a href="https://github.com/greengovernance/utility-simulator">
          <DiGithubAlt />
        </a>
      </div>
    </footer>
  </div>
)

export default Layout
