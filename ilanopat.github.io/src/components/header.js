import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import {useTheme} from './ThemeProvider';
import { Grid, Typography} from '@material-ui/core';

const Header = ({ siteTitle }) => {
  
  const { themeMode } = useTheme();

  return(
      <Grid item xs={12}>
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
    )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
