import React from 'react'
import { Grid } from '@mui/material'
import { Hidden } from '@mui/material'
import { IconButton } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { ArrowForward } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useMediaQuery } from '@mui/material'

const FriendsOfVirtualGatherings = () => {
  const matchesSM = useMediaQuery('(max-width:600px)')

  return (
    <div>
      <Grid item container sx={{ backgroundColor: '#F8F8F8' }}>
        <Hidden mdDown>
          <Grid container direction="row" justifyContent={'space-between'}>
            <Grid
              item
              sx={{
                marginTop: '0.7em',
                textAlign: 'left',
                marginLeft: '1.4em',
              }}
            >
              <IconButton component={Link} to="/learn-more">
                <ArrowBack></ArrowBack>
              </IconButton>
            </Grid>
            <Grid
              item
              sx={{
                marginTop: '0.7em',
                textAlign: 'right',
                marginRight: '1.4em',
              }}
            >
              <IconButton component={Link} to="/work-with-virtual-gatherings">
                <ArrowForward></ArrowForward>
              </IconButton>
            </Grid>
          </Grid>
        </Hidden>
        <Grid
          container
          direction="column"
          justifyContent={'center'}
          sx={{
            paddingTop: '2em',
            paddingRight: matchesSM ? '2em' : '6em',
            paddingBottom: '3em',
            paddingLeft: matchesSM ? '2em' : '6em',
          }}
        >
          <Grid item>
            <Typography
              variant="h4"
              sx={{
                padding: '0.7em',
                textAlign: 'center',
                fontVariant: 'small-caps',
              }}
            >
              Friends Doing Good Work
            </Typography>
            <Grid item sx={{ marginBottom: '1.6em' }}>
              <Typography
                variant="h6"
                sx={{
                  padding: '0.2em',
                  textAlign: 'left',
                  fontSize: '1.6em',
                }}
              >
                Memory Cafe Directory
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  paddingTop: 0,
                  paddingRight: '0.4em',
                  paddingBottom: '0.4em',
                  paddingLeft: '0.2em',
                  textAlign: 'left',
                }}
              >
                Excellent resource for programs like Virtual Gatherings.
              </Typography>
              <Button
                variant="contained"
                component={Link}
                to="https://www.memorycafedirectory.com"
                sx={{
                  padding: 1.3,
                  textAlign: 'left',
                  color: 'inherit',
                  '&:hover': {
                    border: '1.5px solid #C8C8C8',
                    transform: 'scale(1.1,1.1)',
                    backgroundColor: '#FE5F55',
                  },
                }}
              >
                memorycafedirectory.com
              </Button>
            </Grid>
            <Grid item sx={{ marginBottom: '1.6em' }}>
              <Typography
                variant="h6"
                sx={{
                  padding: '0.2em',
                  textAlign: 'left',
                  fontSize: '1.6em',
                }}
              >
                Caring Kind
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  paddingTop: 0,
                  paddingRight: '0.4em',
                  paddingBottom: '0.4em',
                  paddingLeft: '0.2em',
                  textAlign: 'left',
                }}
              >
                This is where we started in person in 2019!
              </Typography>
              <Button
                variant="contained"
                component={Link}
                to="https://www.caringkindnyc.org"
                sx={{
                  padding: 1.3,
                  textAlign: 'left',
                  color: 'inherit',
                  '&:hover': {
                    border: '1.5px solid #C8C8C8',
                    transform: 'scale(1.1,1.1)',
                    backgroundColor: '#FE5F55',
                  },
                }}
              >
                caringkindnyc.org
              </Button>
            </Grid>
            <Grid item sx={{ marginBottom: '1.6em' }}>
              <Typography
                variant="h6"
                sx={{
                  padding: '0.2em',
                  textAlign: 'left',
                  fontSize: '1.6em',
                }}
              >
                Alzheimer's Foundation of America
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  paddingTop: 0,
                  paddingRight: '0.4em',
                  paddingBottom: '0.4em',
                  paddingLeft: '0.2em',
                  textAlign: 'left',
                }}
              >
                An excellent source of information for everyone.
              </Typography>
              <Button
                variant="contained"
                component={Link}
                to="https://alzfdn.org"
                sx={{
                  padding: 1.3,
                  textAlign: 'left',
                  color: 'inherit',
                  '&:hover': {
                    border: '1.5px solid #C8C8C8',
                    transform: 'scale(1.1,1.1)',
                    backgroundColor: '#FE5F55',
                  },
                }}
              >
                alzfdn.org
              </Button>
            </Grid>
            <Grid item sx={{ marginBottom: '1.6em' }}>
              <Typography
                variant="h6"
                sx={{
                  padding: '0.2em',
                  textAlign: 'left',
                  fontSize: '1.6em',
                }}
              >
                Alzheimer's Association
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  paddingTop: 0,
                  paddingRight: '0.4em',
                  paddingBottom: '0.4em',
                  paddingLeft: '0.2em',
                  textAlign: 'left',
                }}
              >
                Another great website for more information.
              </Typography>
              <Button
                variant="contained"
                component={Link}
                to="https://www.alz.org"
                sx={{
                  padding: 1.3,
                  textAlign: 'left',
                  color: 'inherit',
                  '&:hover': {
                    border: '1.5px solid #C8C8C8',
                    transform: 'scale(1.1,1.1)',
                    backgroundColor: '#FE5F55',
                  },
                }}
              >
                alz.org
              </Button>
            </Grid>
            <Grid item sx={{ marginBottom: '1.6em' }}>
              <Typography
                variant="h6"
                sx={{
                  padding: '0.2em',
                  textAlign: 'left',
                  fontSize: '1.6em',
                }}
              >
                Arts & Minds
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  paddingTop: 0,
                  paddingRight: '0.4em',
                  paddingBottom: '0.4em',
                  paddingLeft: '0.2em',
                  textAlign: 'left',
                }}
              >
                Finding meaning through engaging with art.
              </Typography>
              <Button
                variant="contained"
                component={Link}
                to="https://artsandminds.org"
                sx={{
                  padding: 1.3,
                  textAlign: 'left',
                  color: 'inherit',
                  '&:hover': {
                    border: '1.5px solid #C8C8C8',
                    transform: 'scale(1.1,1.1)',
                    backgroundColor: '#FE5F55',
                  },
                }}
              >
                artsandminds.org
              </Button>
            </Grid>
            <Grid item sx={{ marginBottom: '1.6em' }}>
              <Typography
                variant="h6"
                sx={{
                  padding: '0.2em',
                  textAlign: 'left',
                  fontSize: '1.6em',
                }}
              >
                Memory Tree Cafe
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  paddingTop: 0,
                  paddingRight: '0.4em',
                  paddingBottom: '0.4em',
                  paddingLeft: '0.2em',
                  textAlign: 'left',
                }}
              >
                Mental and physical health for those living with Alzheimer's.
              </Typography>
              <Button
                variant="contained"
                component={Link}
                to="https://www.thememorytree.org"
                sx={{
                  padding: 1.3,
                  textAlign: 'left',
                  color: 'inherit',
                  '&:hover': {
                    border: '1.5px solid #C8C8C8',
                    transform: 'scale(1.1,1.1)',
                    backgroundColor: '#FE5F55',
                  },
                }}
              >
                thememorytree.org
              </Button>
            </Grid>
            <Grid item sx={{ marginBottom: '1.6em' }}>
              <Typography
                variant="h6"
                sx={{
                  padding: '0.2em',
                  textAlign: 'left',
                  fontSize: '1.6em',
                }}
              >
                Creative Connections
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  paddingTop: 0,
                  paddingRight: '0.4em',
                  paddingBottom: '0.4em',
                  paddingLeft: '0.2em',
                  textAlign: 'left',
                }}
              >
                Promoting creative relationships.
              </Typography>
              <Button
                variant="contained"
                component={Link}
                to="http://www.creativeconnectionsproject.com"
                sx={{
                  padding: 1.3,
                  textAlign: 'left',
                  color: 'inherit',
                  '&:hover': {
                    border: '1.5px solid #C8C8C8',
                    transform: 'scale(1.1,1.1)',
                    backgroundColor: '#FE5F55',
                  },
                }}
              >
                creativeconnectionsproject.com
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            {/*------Information Block -----*/}
            <Grid
              container
              alignItems={'center'}
              justifyContent={matchesSM ? 'space-around' : 'space-between'}
              sx={{
                height: matchesSM ? '20em' : '14em',
                marginTop: matchesSM ? '2em' : '5em',
                marginBottom: matchesSM ? '2em' : '5em',
                backgroundImage: matchesSM
                  ? 'linear-gradient(to bottom left, #FE5F55, #FAF9F6)'
                  : 'linear-gradient(to bottom, #FE5F55, #FAF9F6)',
                boxShadow: 3,
                borderRadius: matchesSM ? 0 : 3,
                paddingTop: matchesSM ? '0.5em' : '1em',
                paddingRight: matchesSM ? 0 : '2em',
                paddingLeft: matchesSM ? 0 : '2em',
                paddingBottom: matchesSM ? '0.5em' : '1.3em',
                width: '100%',
              }}
              direction={matchesSM ? 'column' : 'row'}
              textAlign={matchesSM ? 'left' : 'inherit'}
            >
              <Grid
                item
                sx={{
                  marginLeft: matchesSM ? '1em' : '3em',
                  textAlign: 'left',
                }}
              >
                <Grid
                  container
                  direction="column"
                  textAlign={matchesSM ? 'left' : 'inherit'}
                >
                  <Typography variant="h4" sx={{ color: 'white' }}>
                    About Us
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: 'white' }}>
                    Get to know us better
                  </Typography>
                  <Grid
                    container
                    justifyContent={matchesSM ? 'left' : 'space-between'}
                  >
                    <Button
                      variant="outlined"
                      component={Link}
                      to="/about-virtual-gatherings"
                      sx={{
                        borderColor: '#EEF5D8',
                        color: 'white',
                        borderWidth: 2,
                        textTransform: 'none',
                        fontFamily: 'Cardo',
                        fontWeight: 'bold',
                        fontSize: '0.8rem',
                        height: 35,
                        width: matchesSM ? 'auto' : 133,
                        padding: 1,
                      }}
                    >
                      Read More
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                sx={{
                  marginRight: matchesSM ? '1em' : '3em',
                  textAlign: 'right',
                }}
              >
                <Grid
                  container
                  direction="column"
                  textAlign={matchesSM ? 'left' : 'inherit'}
                >
                  <Typography variant="h4" sx={{ color: 'white' }}>
                    Contact Us
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: 'white' }}>
                    Talk to us
                  </Typography>
                  <Grid container justifyContent={matchesSM ? 'left' : 'right'}>
                    <Button
                      variant="outlined"
                      component={Link}
                      to="/contact-virtual-gatherings"
                      sx={{
                        borderColor: '#EEF5D8',
                        color: 'white',
                        borderWidth: 2,
                        textTransform: 'none',
                        fontFamily: 'Cardo',
                        fontWeight: 'bold',
                        fontSize: '0.8rem',
                        height: 35,
                        width: matchesSM ? 'auto' : 133,
                        padding: 1,
                      }}
                    >
                      Read More
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default FriendsOfVirtualGatherings
