import React from 'react'
import { Grid } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import mainPicture from '../../images/MainNotMain.jpeg'
import { Button } from '@mui/material'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import MissionPicture from '../../images/screens/ScreenGroup.png'
import FoundersNY from '../../images/team/FoundersNYBackground2.jpeg'
import WomanBack from '../../images/screens/WomanBack.jpeg'

const LandingPage = () => {
  const matchesSM = useMediaQuery('(max-width:600px)')

  return (
    <Grid
      container
      sx={{ marginBottom: '60px' }}
      direction="column"
      backgroundColor="#FAF9F6"
    >
      <Grid item>
        {' '}
        {/*-----Top-----*/}
        <Grid
          container
          justifyContent={matchesSM ? 'center' : 'flex-end'}
          alignItems="center"
          direction="row"
          sx={{ backgroundColor: 'EEF5D8' }}
        >
          <Grid
            sm
            item
            sx={{ minWidth: '21.5em', marginLeft: matchesSM ? 0 : '1em' }}
          >
            <Typography
              variant="h4"
              align="center"
              sx={{
                fontFamily: 'Cardo',
                fontVariant: 'small-caps',
                color: '#FE5F55',
                lineHeight: 1.6,
              }}
            >
              Personalized Online Social Meetings
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="#EEF5D8"
              sx={{
                fontFamily: 'Montserrat',
                color: '#4F6367',
                lineHeight: 1.5,
              }}
            >
              for those with dementia related memory loss
              <br />
              music art movement brainteasers languages
            </Typography>
            <Grid
              container
              justifyContent={'center'}
              sx={{ marginTop: '1.8em' }}
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
                    width: 145,
                    marginRight: 6,
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
                    width: 145,
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
              maxWidth: '58em',
              minWidth: '18em',
              marginTop: '2em',
              marginLeft: '4%',
              marginRight: '3%',
            }}
          >
            <img src={mainPicture} alt="Happy Elderly People" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {' '}
        {/*-----Mission Block----*/}
        <Grid
          container
          direction="row"
          justifyContent={matchesSM ? 'center' : undefined}
          padding={matchesSM ? 5 : undefined}
          sx={{ marginTop: matchesSM ? '3em' : '8em' }}
        >
          <Grid item sx={{ marginLeft: matchesSM ? 0 : '3em' }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'Cardo',
                fontVariant: 'small-caps',
                color: '#4F6367',
                lineHeight: 1.7,
                textAlign: matchesSM ? 'center' : undefined,
              }}
            >
              Our Mission
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                lineHeight: 1.5,
                marginBottom: '0.6em',
                textAlign: matchesSM ? 'center' : undefined,
              }}
            >
              For each person to experience authentic joy and connection.
              <Typography variant="subtitle1">
                Connection with others whenever they join us - through{' '}
                <Typography variant="subtitle2">
                  mind, movement and memories.
                </Typography>
              </Typography>
            </Typography>
            <Grid container justifyContent={matchesSM ? 'center' : undefined}>
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
          <Grid
            item
            sx={{ marginLeft: matchesSM ? 0 : '2em', marginTop: '2em' }}
          >
            <img
              src={MissionPicture}
              alt="Seniors having fun together"
              width={320}
              height={200}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----History Block----*/}
        <Grid
          container
          direction="row"
          justifyContent={matchesSM ? 'center' : 'flex-end'}
          padding={matchesSM ? 5 : undefined}
          sx={{ marginTop: matchesSM ? '3em' : '8em' }}
        >
          <Grid
            item
            sx={{
              marginRight: matchesSM ? 0 : '3em',
              alignContent: matchesSM ? 'center' : 'right',
            }}
          >
            <Typography
              variant="h4"
              justifyContent={matchesSM ? 'center' : 'flex-end'}
              sx={{
                fontFamily: 'Cardo',
                fontVariant: 'small-caps',
                color: '#FE5F55',
                lineHeight: 1.7,
                textAlign: matchesSM ? 'center' : 'right',
              }}
            >
              Our History
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                lineHeight: 1.5,
                marginBottom: '0.6em',
                textAlign: matchesSM ? 'center' : 'right',
              }}
            >
              Originally called Beginnings this program has served the NYC
              memory loss community for over 10 years.
              <Typography variant="subtitle1">
                In 2019 we partnered with CaringKind. In response to COVID-19
                the program transitioned online.
                <Typography variant="subtitle1">
                  That was how <b> Virtual Gatherings.</b> came to life,
                  offering their exceptional service virtually.
                </Typography>
              </Typography>
              <Typography variant="subtitle1">
                The virtual platform allows this unique holistic approach to be
                offered globally.
              </Typography>
            </Typography>
            <Grid container justifyContent={matchesSM ? 'center' : 'right'}>
              <Button
                variant="outlined"
                component={Link}
                to="/about-virtual-gatherings"
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
                Learn More
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{ marginRight: matchesSM ? 0 : '2em', marginTop: '2em' }}
          >
            <img
              src={FoundersNY}
              alt="Mary Ellen and Susan of Virtual Gatherings"
              width={403}
              height={302}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {' '}
        {/*-----Why You Should Join Block----*/}
        <Grid
          container
          direction="row"
          justifyContent={matchesSM ? 'center' : undefined}
          padding={matchesSM ? 5 : undefined}
          sx={{ marginTop: matchesSM ? '3em' : '8em' }}
        >
          <Grid item sx={{ marginLeft: matchesSM ? 0 : '3em' }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'Cardo',
                fontVariant: 'small-caps',
                color: '#4F6367',
                lineHeight: 1.7,
                textAlign: matchesSM ? 'center' : undefined,
              }}
            >
              Testimonials
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                lineHeight: 1.5,
                marginBottom: '0.6em',
                textAlign: matchesSM ? 'center' : undefined,
              }}
            >
              "The Gatherings sessions are the highlight of Carole’s week.
              <Typography variant="subtitle1">
                She looks forward to them very much, loves the people and feels
                <Typography variant="subtitle2">
                  they are all friends."
                  <Typography variant="subtitle1" sx={{ fontWeight: 'light' }}>
                    ~ Gerald Lewis
                  </Typography>
                </Typography>
              </Typography>
            </Typography>
            <Grid container justifyContent={matchesSM ? 'center' : undefined}>
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
                }}
              >
                Read More
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{ marginLeft: matchesSM ? 0 : '2em', marginTop: '2em' }}
          >
            <img
              src={WomanBack}
              alt="Woman looking at computer screen"
              width={336}
              height={251}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LandingPage
