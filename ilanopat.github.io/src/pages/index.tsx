import React from "react"
import SEO from "../components/seo"
import { Typography, Paper, Grid, ThemeProvider } from "@material-ui/core"
import Layout from "../components/layout"

const IndexPage = () => {
return (
  <Layout>
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
  </Layout>
)}

export default IndexPage
