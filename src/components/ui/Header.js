import React from 'react'
import { AppBar, Typography } from '@mui/material'
import { Toolbar } from '@mui/material'
import { useScrollTrigger } from '@mui/material'
import { Tabs } from '@mui/material'
import { Tab } from '@mui/material'
import { Button } from '@mui/material'

function ElevationScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const Header = (props) => {
  return (
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar sx={{ margin: 1.5 }}>
          <Typography variant="h4" color="secondary">
            Virtual Gatherings
          </Typography>
          <Tabs sx={{ marginLeft: 'auto' }}>
            <Tab
              sx={{
                fontFamily: 'Cardo',
                fontSize: '1rem',
                minWidth: 8,
                marginLeft: '7px',
              }}
              label="Home"
            />
            <Tab
              sx={{
                fontFamily: 'Cardo',
                fontSize: '1rem',
                minWidth: 8,
                marginLeft: '7px',
              }}
              label="About Us"
            />
            <Tab
              sx={{
                fontFamily: 'Cardo',
                fontSize: '1rem',
                minWidth: 8,
                marginLeft: '7px',
              }}
              label="Contact Us"
            />
            <Tab
              sx={{
                fontFamily: 'Cardo',
                fontSize: '1rem',
                minWidth: 8,
                marginLeft: '7px',
              }}
              label="Learn More"
            />
            <Tab
              sx={{
                fontFamily: 'Cardo',
                fontSize: '1rem',
                minWidth: 8,
                marginLeft: '7px',
              }}
              label="Resources"
            />
            <Tab
              sx={{
                fontFamily: 'Cardo',
                fontSize: '1rem',
                minWidth: 8,
                marginLeft: '7px',
              }}
              label="Our Services"
            />
            <Tab
              sx={{
                fontFamily: 'Cardo',
                fontSize: '1rem',
                minWidth: 8,
                marginLeft: '7px',
              }}
              label="Our Friends"
            />
          </Tabs>
          <Button
            sx={{
              borderRadius: '15px',
              marginLeft: '8px',
              marginRight: '2px',
              fontFamily: 'Cardo',
              fontSize: '1rem',
              textTransform: 'none',
              padding: '3px',
            }}
            variant="contained"
            color="secondary"
          >
            Sign Up
          </Button>
          <Button
            sx={{
              borderRadius: '15px',
              marginLeft: '8px',
              marginRight: '2px',
              fontFamily: 'Cardo',
              fontSize: '1rem',
              textTransform: 'none',
              padding: '3px',
            }}
            variant="contained"
            color="secondary"
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default Header
