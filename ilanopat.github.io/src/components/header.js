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
    <Grid
    container
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Grid item>
        <Typography variant="h3">
          <Link
            to="/"
            style={{
              color: themeMode === 'light'? 'black':'white',
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </Typography>
      </Grid>
      <Grid item>
        <Button size="small" onClick={handleThemeChange}>
          {themeMode==='light'?(<Moon width={30} />):<Sun width={30}/> }
        </Button>
      </Grid>
    </Grid>
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
