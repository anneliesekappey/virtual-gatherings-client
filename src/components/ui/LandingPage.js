import React from 'react'
import { Grid } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { Button } from '@mui/material'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import MissionPicture from '../../images/screens/ScreenGroup.png'
import FoundersNY from '../../images/team/FoundersNYBackground2.jpeg'
import WomanBack from '../../images/screens/WomanBack.jpeg'
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
              maxWidth: matchesSM ? undefined : '58em',
              minWidth: matchesSM ? undefined : '18em',
              marginTop: '2em',
              marginLeft: matchesSM ? 0 : '4%',
              marginRight: matchesSM ? 0 : '3%',
            }}
          >
            <img
              src={MainImage}
              height={matchesSM ? '88%' : undefined}
              width={matchesSM ? '88%' : undefined}
              alt="Happy Elderly People"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {' '}
        {/*-----Mission Block----*/}
        <Grid
          container
          direction={matchesSM ? 'column' : 'row'}
          justifyContent={matchesMD ? 'center' : matchesSM ? 'left' : undefined}
          alignItems={'center'}
          padding={matchesSM ? 2.2 : undefined}
          sx={{ marginTop: matchesSM ? '3em' : '8em' }}
          width={matchesSM ? '75%' : undefined}
        >
          <Grid
            item
            sx={{ marginLeft: matchesMD ? 0 : matchesSM ? 0 : '4.2em' }}
          >
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
              sx={{ marginTop: matchesSM ? 2 : undefined }}
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
          <Grid
            item
            sx={{
              marginLeft: matchesMD ? 0 : matchesSM ? 0 : '2em',
              marginTop: '1em',
            }}
          >
            <img
              src={MissionPicture}
              alt="Seniors having fun together"
              width={matchesSM ? '98%' : 506}
              height={matchesSM ? '98%' : 317}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {' '}
        {/*-----Why You Should Join Block----*/}
        <Grid
          container
          direction={matchesSM ? 'column' : 'row'}
          justifyContent={matchesMD ? 'center' : matchesSM ? 'left' : 'right'}
          alignItems={'center'}
          padding={matchesSM ? 2.2 : undefined}
          sx={{ marginTop: matchesSM ? '3em' : '8em' }}
          width={matchesSM ? '75%' : undefined}
        >
          <Grid
            item
            sx={{
              marginRight: matchesMD ? 0 : matchesSM ? 0 : '2em',
              marginTop: '2em',
            }}
          >
            <img
              src={WomanBack}
              alt="Woman looking at computer screen"
              width={matchesSM ? '98%' : 487}
              height={matchesSM ? '98%' : 364}
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
                textAlign: matchesSM ? 'left' : 'right',
              }}
            >
              Testimonials
            </Typography>
            <Typography
              variant={matchesSM ? 'body' : 'subtitle1'}
              sx={{
                lineHeight: matchesSM ? 1.3 : 1.5,
                marginBottom: '0.6em',
                textAlign: matchesSM ? 'left' : 'right',
              }}
            >
              "The Gatherings sessions are the highlight of Carole’s week.
              <Typography variant={matchesSM ? 'body' : 'subtitle1'}>
                {''} She looks forward to them very much, loves the people and
                feels
                <Typography variant={matchesSM ? 'body' : 'subtitle2'}>
                  they are all friends."
                  <Typography
                    variant={matchesSM ? 'body' : 'subtitle1'}
                    sx={{ fontWeight: 'lighter' }}
                  >
                    {''} ~ Gerald Lewis
                  </Typography>
                </Typography>
              </Typography>
            </Typography>
            <Grid container justifyContent={matchesSM ? 'left' : 'right'}>
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
                  marginTop: matchesSM ? 2 : undefined,
                }}
              >
                Read More
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
        {/*-----History Block----*/}
        <Grid
          container
          direction={matchesSM ? 'column' : 'row'}
          justifyContent={
            matchesMD ? 'center' : matchesSM ? 'left' : 'flex-start'
          }
          alignItems={'center'}
          padding={matchesSM ? 2.2 : undefined}
          sx={{ marginTop: matchesSM ? '3em' : '8em' }}
          width={matchesSM ? '87%' : undefined}
        >
          <Grid
            item
            sx={{
              marginLeft: matchesSM ? 0 : '4.2em',
              alignContent: matchesSM ? 'left' : 'left',
            }}
          >
            <Typography
              variant={matchesSM ? 'h5' : 'h4'}
              justifyContent={matchesSM ? 'left' : 'flex-start'}
              sx={{
                fontFamily: 'Cardo',
                fontVariant: 'small-caps',
                color: '#FE5F55',
                lineHeight: matchesSM ? 1.2 : 1.7,
                textAlign: matchesSM ? 'left' : 'left',
              }}
            >
              Our History
            </Typography>
            <Typography
              variant={matchesSM ? 'body' : 'subtitle1'}
              sx={{
                lineHeight: matchesSM ? 1.3 : 1.2,
                marginBottom: '0.6em',
                textAlign: matchesSM ? 'center' : 'left',
              }}
            >
              Originally called Beginnings we have served the NYC
              <Typography variant={matchesSM ? 'body' : 'subtitle1'}>
                {''} memory loss community for over 10 years.
              </Typography>
              <Typography variant={matchesSM ? 'body' : 'subtitle1'}>
                {''} In response to COVID-19 the program transitioned online.
                <Typography variant={matchesSM ? 'body' : 'subtitle1'}>
                  {''} That was how <b> Virtual Gatherings</b> came to life,
                  offering its
                  <Typography variant={matchesSM ? 'body' : 'subtitle1'}>
                    {''} exceptional service virtually.
                  </Typography>
                </Typography>
              </Typography>
              <Typography variant={matchesSM ? 'body' : 'subtitle1'}>
                {''} The virtual platform allows this unique holistic approach
                to be offered globally.
              </Typography>
            </Typography>
            <Grid
              container
              justifyContent={matchesSM ? 'left' : 'left'}
              marginTop={matchesSM ? 2 : undefined}
            >
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
            justifyContent={'center'}
            sx={{
              marginLeft: matchesMD ? 0 : matchesSM ? 0 : '2em',
              marginTop: '2em',
            }}
          >
            <img
              src={FoundersNY}
              alt="Mary Ellen and Susan of Virtual Gatherings"
              width={matchesSM ? '94%' : matchesMD ? '90%' : 500}
              height={matchesSM ? '94%' : matchesMD ? '90%' : 374}
            />
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
            height: '23em',
            marginTop: matchesSM ? '2em' : '5em',
            marginBottom: matchesSM ? '2em' : '5em',
            backgroundImage: matchesSM
              ? 'linear-gradient(to top left, #FE5F55, #FAF9F6)'
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
            sx={{ marginRight: matchesSM ? '1em' : '3em', textAlign: 'right' }}
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
  )
}

export default LandingPage
