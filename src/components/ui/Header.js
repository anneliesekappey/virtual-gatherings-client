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
import { ListItemText } from '@mui/material'
import { ListItemButton } from '@mui/material'

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

  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)

  const handleChange = (event, newValue) => {
    props.setValue(newValue)
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpen(true)
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null)
    setOpen(false)
    props.setSelectedIndex(i)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpen(false)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        if (props.value !== 0) {
          props.setValue(0)
        }
        break
      case '/about-virtual-gatherings':
        if (props.value !== 1) {
          props.setValue(1)
          props.setSelectedIndex(0)
        }
        break
      case '/learn-more':
        if (props.value !== 1) {
          props.setValue(1)
          props.setSelectedIndex(1)
        }
        break
      case '/friends-working-with-patients-living-with-dementia-and-alzheimers':
        if (props.value !== 1) {
          props.setValue(1)
          props.setSelectedIndex(2)
        }
        break
      case '/online-meetings':
        if (props.value !== 2) {
          props.setValue(2)
        }
        break
      case '/games-information-resources-for-patients-living-with-dementia-and-alzheimers':
        if (props.value !== 3) {
          props.setValue(3)
        }
        break
      case '/contact-virtual-gatherings':
        if (props.value !== 4) {
          props.setValue(4)
        }
        break
      case '/signup':
        if (props.value !== 5) {
          props.setValue(5)
        }
        break
      case '/login':
        if (props.value !== 6) {
          props.setValue(6)
        }
        break
      default:
        break
    }
  }, [props.value, aboutMenuOptions, props.selectedIndex, props])

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
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
              props.setValue(1)
              handleClose()
            }}
            selected={i === props.selectedIndex && props.value === 1}
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
          backgroundColor: 'EEF5D8',
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
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false)
              props.setValue(0)
            }}
            divider
            component={Link}
            to="/"
            selected={props.value === 0}
          >
            <ListItemText
              sx={{
                color: '#4F6367',
                fontFamily: 'Cardo',
                fontVariant: 'small-caps',
              }}
              disableTypography
            >
              Home
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false)
              props.setValue(1)
            }}
            divider
            component={Link}
            to="/about-virtual-gatherings"
            selected={props.value === 1}
          >
            <ListItemText
              sx={{
                color: '#4F6367',
                fontFamily: 'Cardo',
                fontVariant: 'small-caps',
              }}
              disableTypography
            >
              About Us
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false)
              props.setValue(2)
            }}
            divider
            ListItemButton
            component={Link}
            to="/learn-more"
            selected={props.value === 2}
          >
            <ListItemText
              sx={{
                color: '#4F6367',
                fontFamily: 'Cardo',
                fontVariant: 'small-caps',
              }}
              disableTypography
            >
              Learn More
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false)
              props.setValue(3)
            }}
            divider
            ListItemButton
            component={Link}
            to="/friends-working-with-patients-living-with-dementia-and-alzheimers"
            selected={props.value === 3}
          >
            <ListItemText
              sx={{
                color: '#4F6367',
                fontFamily: 'Cardo',
                fontVariant: 'small-caps',
              }}
              disableTypography
            >
              Our Friends
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false)
              props.setValue(4)
            }}
            divider
            ListItemButton
            component={Link}
            to="/online-meetings"
            selected={props.value === 4}
          >
            <ListItemText
              sx={{
                color: '#4F6367',
                fontFamily: 'Cardo',
                fontVariant: 'small-caps',
              }}
              disableTypography
            >
              Our Services
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false)
              props.setValue(5)
            }}
            divider
            ListItemButton
            component={Link}
            to="/games-information-resources-for-patients-living-with-dementia-and-alzheimers"
            selected={props.value === 5}
          >
            <ListItemText
              sx={{
                color: '#4F6367',
                fontFamily: 'Cardo',
                fontVariant: 'small-caps',
              }}
              disableTypography
            >
              Resources
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false)
              props.setValue(6)
            }}
            divider
            ListItemButton
            component={Link}
            to="/contact-virtual-gatherings"
            selected={props.value === 6}
          >
            <ListItemText
              sx={{
                color: '#4F6367',
                fontFamily: 'Cardo',
                fontVariant: 'small-caps',
              }}
              disableTypography
            >
              Contact Us
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false)
              props.setValue(7)
            }}
            divider
            ListItemButton
            component={Link}
            to="/signup"
            selected={props.value === 7}
          >
            <ListItemText
              sx={{
                color: '#FE5F55',
                fontFamily: 'Cardo',
                fontVariant: 'small-caps',
              }}
              disableTypography
            >
              Sign Up
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false)
              props.setValue(8)
            }}
            divider
            ListItemButton
            component={Link}
            to="/login"
            selected={props.value === 8}
          >
            <ListItemText
              sx={{
                color: '#FE5F55',
                fontFamily: 'Cardo',
                fontVariant: 'small-caps',
              }}
              disableTypography
            >
              Login
            </ListItemText>
          </ListItemButton>
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
