import React, { useState, useEffect } from 'react'
import { AppBar, Typography } from '@mui/material'
import { Toolbar } from '@mui/material'
import { useScrollTrigger } from '@mui/material'
import { Tabs } from '@mui/material'
import { Tab } from '@mui/material'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { Menu } from '@mui/material'
import { MenuItem } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@emotion/react'
import { SwipeableDrawer } from '@mui/material'
import { IconButton } from '@mui/material'
import { DensityMedium } from '@mui/icons-material'
import { List } from '@mui/material'
import { ListItem } from '@mui/material'
import { ListItemText } from '@mui/material'

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
  const theme = useTheme()
  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  const [value, setValue] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [openDrawer, setOpenDrawer] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpen(true)
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null)
    setOpen(false)
    setSelectedIndex(i)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpen(false)
  }

  const aboutMenuOptions = [
    {
      name: 'About Us',
      link: '/about-virtual-gatherings',
    },
    {
      name: 'Learn More',
      link: '/learn-more',
    },
    {
      name: 'Our Friends',
      link: '/friends-working-with-patients-living-with-dementia-and-alzheimers',
    },
  ]

  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        if (value !== 0) {
          setValue(0)
        }
        break
      case '/about-virtual-gatherings':
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(0)
        }
        break
      case '/learn-more':
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(1)
        }
        break
      case '/friends-working-with-patients-living-with-dementia-and-alzheimers':
        if (value !== 1) {
          setValue(1)
          setSelectedIndex(2)
        }
        break
      case '/online-meetings':
        if (value !== 2) {
          setValue(2)
        }
        break
      case '/games-information-resources-for-patients-living-with-dementia-and-alzheimers':
        if (value !== 3) {
          setValue(3)
        }
        break
      case '/contact-virtual-gatherings':
        if (value !== 4) {
          setValue(4)
        }
        break
      case '/signup':
        if (value !== 5) {
          setValue(5)
        }
        break
      case '/login':
        if (value !== 6) {
          setValue(6)
        }
        break
      default:
        break
    }
  }, [value])

  const tabs = (
    <React.Fragment>
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
            fontSize: '1rem',
            minWidth: 5,
            marginLeft: '10px',
          }}
          label="Home"
        />
        <Tab
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup={anchorEl ? 'true' : undefined}
          component={Link}
          onMouseOver={(event) => handleClick(event)}
          to="/about-virtual-gatherings"
          sx={{
            fontFamily: 'Cardo',
            fontSize: '1rem',
            minWidth: 5,
            marginLeft: '10px',
          }}
          label="About Us"
        />
        <Tab
          component={Link}
          to="/online-meetings"
          sx={{
            fontFamily: 'Cardo',
            fontSize: '1rem',
            minWidth: 5,
            marginLeft: '10px',
          }}
          label="Our Services"
        />
        <Tab
          component={Link}
          to="/games-information-resources-for-patients-living-with-dementia-and-alzheimers"
          sx={{
            fontFamily: 'Cardo',
            fontSize: '1rem',
            minWidth: 5,
            marginLeft: '10px',
          }}
          label="Resources"
        />
        <Tab
          component={Link}
          to="/contact-virtual-gatherings"
          sx={{
            fontFamily: 'Cardo',
            fontSize: '1rem',
            minWidth: 5,
            marginLeft: '10px',
          }}
          label="Contact Us"
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
          fontVariant: 'small-caps',
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
          fontVariant: 'small-caps',
          padding: '3px',
          height: '45px',
          color: 'white',
        }}
        variant="contained"
        color="secondary"
      >
        Login
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {aboutMenuOptions.map((option, i) => (
          <MenuItem
            key={option}
            component={Link}
            to={option.link}
            onClick={(event) => {
              handleMenuItemClick(event, i)
              setValue(1)
              handleClose()
            }}
            selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
        {}
      </Menu>
    </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        sx={{
          background: 'secondary',
        }}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => {
          setOpenDrawer(true)
        }}
      >
        <List>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            divider
            ListItemButton
            component={Link}
            to="/"
          >
            <ListItemText disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            divider
            ListItemButton
            component={Link}
            to="/about-virtual-gatherings"
          >
            <ListItemText disableTypography>About Us</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            divider
            ListItemButton
            component={Link}
            to="/online-meetings"
          >
            <ListItemText disableTypography>Our Services</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            divider
            ListItemButton
            component={Link}
            to="/games-information-resources-for-patients-living-with-dementia-and-alzheimers"
          >
            <ListItemText disableTypography>Resources</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            divider
            ListItemButton
            component={Link}
            to="/contact-virtual-gatherings"
          >
            <ListItemText disableTypography>Contact Us</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            divider
            ListItemButton
            component={Link}
            to="/signup"
          >
            <ListItemText disableTypography>Sign Up</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setOpenDrawer(false)}
            divider
            ListItemButton
            component={Link}
            to="/login"
          >
            <ListItemText disableTypography>Login</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{ marginLeft: 'auto' }}
      >
        <DensityMedium></DensityMedium>
      </IconButton>
    </React.Fragment>
  )

  return (
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar sx={{ margin: 1.5 }}>
          <Button component={Link} to="/">
            <Typography variant="h6" color="secondary">
              Virtual Gatherings
            </Typography>
          </Button>
          {matches ? drawer : tabs}
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default Header
