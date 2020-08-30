import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import {useTheme} from './ThemeProvider';
import {Button, Grid, Typography} from '@material-ui/core';
import Sun from './icons/Sun';
import Moon from './icons/Moon';

const Header = ({ siteTitle }) => {
  
  const { themeMode, handleThemeChange } = useTheme();

  return(
    <>
    <Grid
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          <Typography variant="h3">{siteTitle}</Typography>
        </Link>
        <Button size="small" onClick={handleThemeChange}>
          {themeMode==='light'?(<Moon width={30} />):<Sun width={30}/> }
        </Button>
    </Grid>
    </>)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
