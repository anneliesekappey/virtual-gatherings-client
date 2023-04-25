import React from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@mui/material'
import { Hidden } from '@mui/material'
import { FacebookOutlined } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'

const Footer = (props) => {
  return (
    <footer>
      <Hidden mdDown>
        <Grid
          container
          sx={{
            backgroundColor: '#7A9E9F',
            height: '200px',
            marginTop: '30px',
          }}
        >
          <Grid item margin="3em">
            <Grid container direction="column" spacing={2}>
              <Grid
                component={Link}
                onClick={() => props.setValue(0)}
                to="/"
                item
                sx={{
                  color: 'white',
                  fontFamily: 'Cardo',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item margin="3em">
            <Grid container direction="column" spacing={2}>
              <Grid
                component={Link}
                onClick={() => {
                  props.setValue(1)
                  props.setSelectedIndex(0)
                }}
                to="/about-virtual-gatherings"
                item
                sx={{
                  color: 'white',
                  fontFamily: 'Cardo',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
              >
                About Us
              </Grid>
              <Grid
                component={Link}
                onClick={() => {
                  props.setValue(1)
                  props.setSelectedIndex(1)
                }}
                to="/learn-more"
                item
                sx={{
                  color: 'white',
                  fontFamily: 'Cardo',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
              >
                Learn More
              </Grid>
              <Grid
                component={Link}
                onClick={() => {
                  props.setValue(1)
                  props.setSelectedIndex(2)
                }}
                to="/friends-working-with-patients-living-with-dementia-and-alzheimers"
                item
                sx={{
                  color: 'white',
                  fontFamily: 'Cardo',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
              >
                Our Friends
              </Grid>
            </Grid>
          </Grid>
          <Grid item margin="3em">
            <Grid container direction="column" spacing={2}>
              <Grid
                component={Link}
                onClick={() => props.setValue(4)}
                to="/online-meetings"
                item
                sx={{
                  color: 'white',
                  fontFamily: 'Cardo',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
              >
                Our Services
              </Grid>
              <Grid
                component={Link}
                onClick={() => props.setValue(5)}
                to="/games-information-resources-for-patients-living-with-dementia-and-alzheimers"
                item
                sx={{
                  color: 'white',
                  fontFamily: 'Cardo',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
              >
                Resources
              </Grid>
            </Grid>
          </Grid>
          <Grid item margin="3em">
            <Grid container direction="column" spacing={2}>
              <Grid
                component={Link}
                onClick={() => props.setValue(6)}
                to="/contact-virtual-gatherings"
                item
                sx={{
                  color: 'white',
                  fontFamily: 'Cardo',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                }}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="flex-end"
            spacing={1}
            position="absolute"
            sx={{ marginTop: '8em', right: '1.5em' }}
          >
            <Grid
              item
              component={'a'}
              href="http://www.facebook.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FacebookOutlined
                sx={{ height: '2em', width: '2em', color: 'white' }}
              />
            </Grid>
            <Grid
              item
              component={'a'}
              href="http://www.instagram.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Instagram sx={{ height: '2em', width: '2em', color: 'white' }} />
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </footer>
  )
}

export default Footer
