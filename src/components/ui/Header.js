import React, { useState } from 'react'
import { AppBar, Typography } from '@mui/material'
import { Toolbar } from '@mui/material'
import { useScrollTrigger } from '@mui/material'
import { Tabs } from '@mui/material'
import { Tab } from '@mui/material'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

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
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar sx={{ margin: 1.5 }}>
          <Button component={Link} to="/">
            <Typography variant="h6" color="secondary">
              Virtual Gatherings
            </Typography>
          </Button>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            sx={{ marginLeft: 'auto' }}
          >
            <Tab
              component={Link}
              to="/"
              sx={{
                fontFamily: 'Cardo',
                fontSize: '.9rem',
              }}
              label="Home"
            />
            <Tab
              component={Link}
              to="/about-virtual-gatherings"
              sx={{
                fontFamily: 'Cardo',
                fontSize: '.9rem',
              }}
              label="About Us"
            />
            <Tab
              component={Link}
              to="/contact-virtual-gatherings"
              sx={{
                fontFamily: 'Cardo',
                fontSize: '.9rem',
              }}
              label="Contact Us"
            />
            <Tab
              component={Link}
              to="/learn-more"
              sx={{
                fontFamily: 'Cardo',
                fontSize: '.9rem',
              }}
              label="Learn More"
            />
            <Tab
              component={Link}
              to="/games-information-resources-for-patients-living-with-dementia-and-alzheimers"
              sx={{
                fontFamily: 'Cardo',
                fontSize: '.9rem',
              }}
              label="Resources"
            />
            <Tab
              component={Link}
              to="/online-meetings"
              sx={{
                fontFamily: 'Cardo',
                fontSize: '.9rem',
              }}
              label="Our Services"
            />
            <Tab
              component={Link}
              to="/friends-working-with-patients-living-with-dementia-and-alzheimers"
              sx={{
                fontFamily: 'Cardo',
                fontSize: '.9rem',
              }}
              label="Our Friends"
            />
          </Tabs>
          <Button
            component={Link}
            to="/signup"
            sx={{
              borderRadius: '15px',
              marginLeft: '3px',
              marginRight: '1px',
              fontFamily: 'Cardo',
              fontSize: '1rem',
              textTransform: 'none',
              padding: '3px',
              height: '45px',
              color: 'white',
            }}
            variant="contained"
            color="secondary"
          >
            Sign Up
          </Button>
          <Button
            component={Link}
            to="/login"
            sx={{
              borderRadius: '15px',
              marginLeft: '3px',
              marginRight: '1px',
              fontFamily: 'Cardo',
              fontSize: '1rem',
              textTransform: 'none',
              padding: '3px',
              height: '45px',
              color: 'white',
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
