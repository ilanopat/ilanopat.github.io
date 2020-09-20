/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Sun from './icons/Sun';
import Moon from './icons/Moon';
import {Button, Grid} from '@material-ui/core';

import Header from "./Header"
import Footer from "./Footer"
import Nav from "./Nav"
import {useTheme} from './ThemeProvider';

const Layout = ({ children }) => {
  
  const { themeMode,handleThemeChange } = useTheme();

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const menu=[{
    link:"/blog/",
    name:"Blog"
  },{
    link:"/about/",
    name:"About"
  }];

  return (
    <Grid container style={{
      display:'flex',
      flexDirection:'column',
      alignItems: 'center',
      fontFamily:'avenir',
    }}>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      {/* <Nav menu={menu}/> */}
      {/* <Grid item>
        <Button size="small" onClick={handleThemeChange}>
          {themeMode==='light'?(<Moon width={30} />):<Sun width={30}/> }
        </Button>
      </Grid> */}

      <Grid item
        style={{
          margin: `50px auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </Grid>
      {/* <Footer/> */}
    </Grid>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
