import React from 'react'
import { Grid } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { Button } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import MissionPicture from '../../images/screens/ScreenGroup.png'
import FoundersNY from '../../images/team/FoundersNYBackground2.jpeg'
import WomanCatCute from '../../images/screens/WomanCatCute.jpeg'
import MainImage from '../../images/icons/MainImage.png'

const LandingPage = () => {
  const matchesSM = useMediaQuery('(max-width:600px)')
  const matchesMD = useMediaQuery('(max-width:900px)')
  const matchesXS = useMediaQuery('(max-width:0px)')

  return (
    <Grid
      container
      direction="column"
      backgroundColor="#FAF9F6"
      width={matchesXS ? '80%' : matchesSM ? 'auto' : undefined}
      padding={matchesSM ? 0 : '2em'}
      paddingTop={matchesSM ? '1em' : '2em'}
    >
      <Grid item>
        {/*-----Top-----*/}
        <Grid
          container
          justifyContent={matchesMD ? 'left' : matchesSM ? 'left' : 'flex-end'}
          alignItems="center"
          direction={matchesXS ? 'column' : matchesSM ? 'column' : 'row'}
          sx={{ backgroundColor: 'EEF5D8' }}
        >
          <Grid
            sm
            item
            width={matchesSM ? '70%' : undefined}
            sx={{
              minWidth: matchesXS
                ? undefined
                : matchesSM
                ? undefined
                : '21.5em',
              marginLeft: matchesSM ? 0 : '1em',
            }}
          >
            <Typography
              variant={matchesSM ? 'h2' : 'h1'}
              align={matchesSM ? 'left' : 'center'}
              sx={{
                fontFamily: 'Montserrat',
                fontWeight: 'lighter',
                fontVariant: 'all-petite-caps',
                color: '#4F6367',
                lineHeight: 0.8,
                maxWidth: matchesSM ? '65%' : undefined,
              }}
            >
              Virtual Gatherings
            </Typography>
            <Typography
              variant={matchesSM ? 'h6' : 'h4'}
              align={matchesSM ? 'left' : 'center'}
              sx={{
                fontFamily: 'Cardo',
                fontVariant: 'small-caps',
                color: '#FE5F55',
                lineHeight: matchesSM ? 1.5 : 2,
                marginTop: 3.5,
              }}
            >
              Personalized Online Social Meetings
            </Typography>
            <Typography
              variant={matchesSM ? 'h7' : 'subtitle1'}
              align={matchesSM ? 'left' : 'center'}
              color="#EEF5D8"
              sx={{
                fontFamily: 'Montserrat',
                color: '#4F6367',
                lineHeight: 1.5,
              }}
            >
              for those with dementia related memory loss
              <br />
              ~music art movement brainteasers languages~
            </Typography>
            <Grid
              container
              justifyContent={matchesSM ? 'left' : 'center'}
              sx={{ marginTop: '1.8em' }}
              width={matchesSM ? 'auto' : undefined}
            >
              <Grid item>
                <Button
                  component={Link}
                  to="/learn-more"
                  sx={{
                    fontFamily: 'Cardo',
                    fontSize: '1rem',
                    textTransform: 'none',
                    color: 'white',
                    backgroundColor: '#7A9E9F',
                    height: 45,
                    width: matchesSM ? 120 : 145,
                    marginRight: matchesSM ? 2 : 6,
                    '&:hover': {
                      backgroundColor: '#FE5F55',
                    },
                  }}
                  variant="contained"
                >
                  Learn More
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to="/signup"
                  sx={{
                    borderColor: '#7A9E9F',
                    borderWidth: 2,
                    textTransform: 'none',
                    fontFamily: 'Cardo',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    height: 45,
                    width: matchesSM ? 120 : 145,
                  }}
                  variant="outlined"
                >
                  Join Us
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              maxWidth: matchesSM ? undefined : matchesMD ? undefined : '58em',
              minWidth: matchesSM ? undefined : matchesMD ? undefined : '18em',
              marginTop: '2em',
              marginLeft: matchesSM ? 0 : matchesMD ? '10%' : '4%',
              marginRight: matchesSM ? 0 : matchesMD ? '1%' : '3%',
            }}
          >
            <img
              src={MainImage}
              height={matchesSM ? '90%' : undefined}
              width={matchesSM ? '90%' : undefined}
              alt="Happy Elderly People"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction={matchesSM ? 'column' : matchesMD ? 'column' : 'row'}
      >
        <Grid item lg={6} xl={6}>
          {' '}
          {/*-----Mission Block----*/}
          <Grid
            container
            direction={matchesSM ? 'column' : 'row'}
            justifyContent={'center'}
            alignItems={'center'}
            padding={matchesSM ? 2.2 : 1.5}
            sx={{ marginTop: matchesSM ? '2em' : matchesMD ? '4em' : '6em' }}
            width={matchesSM ? '98%' : undefined}
          >
            <Grid
              item
              sx={{
                marginRight: matchesMD ? 0 : matchesSM ? 0 : '2em',
                marginTop: '2em',
              }}
            >
              <img
                src={MissionPicture}
                alt="Seniors having fun together"
                width={matchesSM ? '98%' : 506}
                height={matchesSM ? '98%' : 317}
              />
            </Grid>
            <Grid item sx={{ marginLeft: 0 }}>
              <Typography
                variant={matchesSM ? 'h5' : 'h4'}
                sx={{
                  fontFamily: 'Cardo',
                  fontVariant: 'small-caps',
                  color: '#4F6367',
                  lineHeight: 1.7,
                  textAlign: matchesSM ? 'left' : undefined,
                }}
              >
                Our Mission
              </Typography>
              <Typography
                variant={matchesSM ? 'body' : 'subtitle1'}
                sx={{
                  lineHeight: matchesSM ? 1.3 : 1.5,
                  marginBottom: '0.6em',
                  textAlign: matchesSM ? 'left' : undefined,
                }}
              >
                For each person to experience authentic joy and connection.
                <Typography variant={matchesSM ? 'body' : 'subtitle1'}>
                  {''} Connection with others whenever they join us - through{' '}
                  <Typography variant={matchesSM ? 'body' : 'subtitle1'}>
                    mind, movement and memories.
                  </Typography>
                </Typography>
              </Typography>
              <Grid
                container
                justifyContent={matchesSM ? 'left' : undefined}
                sx={{ marginTop: matchesSM ? 2 : 6 }}
              >
                <Button
                  variant="outlined"
                  component={Link}
                  to="/online-meetings"
                  sx={{
                    borderColor: '#7A9E9F',
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
                  Join Us
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6} xl={6}>
          {' '}
          {/*-----Why You Should Join Block----*/}
          <Grid
            container
            direction={matchesSM ? 'column' : 'row'}
            justifyContent={
              matchesMD ? 'center' : matchesSM ? 'left' : 'center'
            }
            alignItems={'center'}
            padding={matchesSM ? 2.2 : undefined}
            sx={{ marginTop: matchesSM ? '3em' : '6.7em' }}
            width={matchesSM ? '98%' : undefined}
          >
            <Grid
              item
              sx={{
                marginRight: matchesMD ? 0 : matchesSM ? 0 : '2em',
                marginTop: '2em',
              }}
            >
              <img
                src={WomanCatCute}
                alt="Woman looking at computer screen"
                width={matchesSM ? '98%' : 506}
                height={matchesSM ? '98%' : 317}
              />
            </Grid>
            <Grid item sx={{ marginRight: matchesSM ? 0 : '3em' }}>
              <Typography
                variant={matchesSM ? 'h5' : 'h4'}
                sx={{
                  fontFamily: 'Cardo',
                  fontVariant: 'small-caps',
                  color: '#4F6367',
                  lineHeight: 1.7,
                  marginLeft: matchesSM ? 0 : 8,
                  textAlign: 'left',
                }}
              >
                Testimonials
              </Typography>
              <Typography
                variant={matchesSM ? 'body' : 'subtitle1'}
                sx={{
                  lineHeight: matchesSM ? 1.3 : 1.5,
                  marginBottom: '0.6em',
                  textAlign: 'left',
                  marginLeft: matchesSM ? 0 : 8,
                }}
              >
                "The Gatherings sessions are the highlight of Carole’s week.
                {''} She looks forward to them very much, loves the people and
                feels <b>they are all friends."</b>
                <Typography
                  variant={matchesSM ? 'body' : 'subtitle1'}
                  sx={{ fontWeight: 'lighter' }}
                >
                  {''} ~ Gerald Lewis
                </Typography>
              </Typography>
              <Grid
                container
                justifyContent="left"
                sx={{ marginLeft: matchesSM ? 0 : 8 }}
              >
                <Button
                  variant="outlined"
                  component={Link}
                  to="/learn-more"
                  sx={{
                    borderColor: '#7A9E9F',
                    borderWidth: 2,
                    textTransform: 'none',
                    fontFamily: 'Cardo',
                    fontWeight: 'bold',
                    fontSize: '0.8rem',
                    height: 35,
                    width: matchesSM ? 'auto' : 133,
                    padding: 1,
                    marginTop: matchesSM ? 2 : 1.5,
                  }}
                >
                  Read More
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----History Block----*/}
        <Grid
          container
          direction={'column'}
          justifyContent={matchesSM ? 'left' : 'center'}
          alignItems={'center'}
          padding={matchesSM ? 2.2 : 3.5}
          sx={{ marginTop: matchesSM ? '3em' : '2em' }}
        >
          <Grid
            item
            justifyContent={'center'}
            sx={{
              marginRight: 0,
              marginTop: '1em',
            }}
          >
            <img
              src={FoundersNY}
              alt="Mary Ellen and Susan of Virtual Gatherings"
              width={matchesSM ? '87%' : 696}
              height={matchesSM ? '87%' : 544}
            />
          </Grid>
          <Grid item>
            <Box maxWidth={matchesSM ? '88%' : undefined}>
              <Typography
                variant={matchesSM ? 'h5' : 'h4'}
                sx={{
                  fontFamily: 'Cardo',
                  fontVariant: 'small-caps',
                  color: '#FE5F55',
                  lineHeight: 1.7,
                  textAlign: matchesSM ? 'left' : 'center',
                }}
              >
                Our History
              </Typography>
              <Typography
                variant={matchesSM ? 'body' : 'p'}
                sx={{
                  lineHeight: matchesSM ? 1.3 : 1.5,
                  marginBottom: '0.6em',
                  fontSize: matchesSM ? '1.1em' : '1.3em',
                  textAlign: 'justify',
                }}
              >
                Originally called Beginnings, this program has served the NYC
                memory loss community for over 10 years. In 2019 we partnered
                with CaringKind. In response to COVID-19 the program
                transitioned online. That was how <b> Virtual Gatherings</b>{' '}
                came to life, offering its exceptional service virtually. The
                virtual platform allows this unique holistic approach to be
                offered globally.
              </Typography>
            </Box>
            <Grid container justifyContent={matchesSM ? 'left' : 'center'}>
              <Button
                variant="outlined"
                component={Link}
                to="/learn-more"
                sx={{
                  borderColor: '#7A9E9F',
                  borderWidth: 2,
                  textTransform: 'none',
                  fontFamily: 'Cardo',
                  fontWeight: 'bold',
                  fontSize: '0.8rem',
                  height: 35,
                  width: matchesSM ? 'auto' : 133,
                  padding: 1,
                  marginTop: matchesSM ? 2 : 3.5,
                }}
              >
                Learn More
              </Button>
            </Grid>
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
              width: matchesSM ? 460 : '100%',
            }}
            direction={matchesSM ? 'column' : 'row'}
            textAlign={matchesSM ? 'left' : 'inherit'}
          >
            <Grid
              item
              sx={{ marginLeft: matchesSM ? 0 : '3em', textAlign: 'left' }}
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
                    Say Hello
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LandingPage
