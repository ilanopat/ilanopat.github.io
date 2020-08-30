import React from "react"
import Image from "../components/image"
import SEO from "../components/seo"
import { Typography, Paper, Grid } from "@material-ui/core"

const IndexPage = () => (
  <Paper style={{height:"100vh"}}>
    <SEO title="Home" />
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h4" >Hi people</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">Welcome to your new Gatsby site.</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">Now go build something great.</Typography>
      </Grid>
    </Grid>
  </Paper>
)

export default IndexPage
