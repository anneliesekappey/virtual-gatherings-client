import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import HatCute from '../../images/screens/HatCute.jpeg'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'

const Services = () => {
  const matchesSM = useMediaQuery('(max-width:600px)')
  const matchesMD = useMediaQuery('(max-width:900px)')

  return (
    <Grid container direction={'column'} backgroundColor="#FAF9F6">
      <Grid
        container
        display={'flex'}
        flexDirection="column"
        spacing={2}
        justifyContent={'space-evenly'}
      >
        <Grid item>
          <Grid container justifyContent={'center'} sx={{ marginTop: '2.5em' }}>
            <Typography
              variant="h3"
              sx={{
                boxShadow: matchesSM
                  ? 'none'
                  : '#7A9E9F 1px 1px 4px 0px inset, #B8D8D8 1px 1px 4px 0px inset',
                padding: '0.5em',
                borderRadius: '0.3em',
              }}
            >
              What We Offer
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            justifyContent={'center'}
            sx={{ marginTop: matchesSM ? '0.5em' : '1.5em' }}
          >
            <img
              src={HatCute}
              alt=""
              width={matchesSM ? '86%' : 693}
              height={matchesSM ? '86%' : 360}
            />
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            justifyContent={'center'}
            sx={{ marginTop: matchesSM ? '0.8em' : '2em' }}
            //   alignItems={'center'}
          >
            <Card
              sx={{
                backgroundColor: '#E8E8E8',
                boxShadow: matchesSM ? 2 : 5,
                borderRadius: matchesSM ? 0 : 11,
                paddingTop: '0.1em',
                paddingRight: matchesSM ? '0.5em' : '2em',
                paddingLeft: matchesSM ? '0.5em' : '2em',
                paddingBottom: matchesSM ? '0.5em' : '1.3em',
                height: matchesSM ? '26rem' : matchesMD ? '18.5rem' : '15rem',
                width: matchesSM ? 'auto' : '77%',
              }}
            >
              <CardContent>
                <Grid container direction="column">
                  <Grid item></Grid>
                  <Grid item textAlign={'center'}>
                    <Typography
                      variant="h4"
                      sx={{
                        marginBottom: '0.2em',
                        marginTop: '0.2em',
                        fontVariant: 'small-caps',
                      }}
                    >
                      <span style={{ color: '#FE5F55', fontWeight: 'bold' }}>
                        Who
                      </span>{' '}
                      Virtual Gatherings Serves
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      textAlign={'center'}
                      sx={{ marginBottom: '0.5em' }}
                    >
                      our community
                    </Typography>
                  </Grid>
                  <Grid item textAlign={'center'} sx={{ marginBottom: '1em' }}>
                    <Typography variant="subtitle1">
                      The program is designed for older adults with early to
                      mid-stage Alzheimer's and dementia related memory loss.
                      Average age of participants is 60-95 years old. There is a
                      maximum of 10 members per session.
                    </Typography>
                  </Grid>
                  <Grid container justifyContent={'center'}>
                    <Button
                      component={Link}
                      to="/signup"
                      sx={{
                        fontFamily: 'Cardo',
                        fontSize: '1rem',
                        textTransform: 'none',
                        color: 'white',
                        backgroundColor: '#7A9E9F',
                        height: 45,
                        width: 145,
                        '&:hover': {
                          border: '1.5px solid #C8C8C8',
                          transform: 'scale(1.1,1.1)',
                          backgroundColor: '#FE5F55',
                        },
                      }}
                      variant="contained"
                    >
                      Join Us
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            justifyContent={'center'}
            sx={{ marginTop: '2em' }}
            //   alignItems={'center'}
          >
            <Card
              sx={{
                backgroundColor: '#E8E8E8',
                boxShadow: matchesSM ? 2 : 5,
                borderRadius: matchesSM ? 0 : 11,
                paddingTop: '0.1em',
                paddingRight: matchesSM ? '0.5em' : '2em',
                paddingLeft: matchesSM ? '0.5em' : '2em',
                paddingBottom: matchesSM ? '0.5em' : '1.3em',
                height: matchesSM ? '17rem' : matchesMD ? '14rem' : '13rem',
                width: matchesSM ? 'auto' : '77%',
              }}
            >
              <CardContent>
                <Grid container direction="column">
                  <Grid item textAlign={'center'}>
                    <Typography
                      variant="h4"
                      sx={{
                        marginBottom: '0.2em',
                        marginTop: '0.2em',
                        fontVariant: 'small-caps',
                      }}
                    >
                      <span style={{ color: '#FE5F55', fontWeight: 'bold' }}>
                        Where
                      </span>{' '}
                      We Gather
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      textAlign={'center'}
                      sx={{ marginBottom: '0.5em' }}
                    >
                      a computer and internet connection
                    </Typography>
                  </Grid>
                  <Grid item textAlign={'center'} sx={{ marginBottom: '1em' }}>
                    <Typography variant="subtitle1">
                      Our clients can Zoom into our meetings from any location
                      in the USA!
                    </Typography>
                  </Grid>
                  <Grid container justifyContent={'center'}>
                    <Button
                      component={Link}
                      to="/signup"
                      sx={{
                        fontFamily: 'Cardo',
                        fontSize: '1rem',
                        textTransform: 'none',
                        color: 'white',
                        backgroundColor: '#7A9E9F',
                        height: 45,
                        width: 145,
                        '&:hover': {
                          border: '1.5px solid #C8C8C8',
                          transform: 'scale(1.1,1.1)',
                          backgroundColor: '#FE5F55',
                        },
                      }}
                      variant="contained"
                    >
                      Join Us
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            justifyContent={'center'}
            sx={{ marginTop: '2em' }}
            //   alignItems={'center'}
          >
            <Card
              sx={{
                backgroundColor: '#E8E8E8',
                boxShadow: matchesSM ? 2 : 5,
                borderRadius: matchesSM ? 0 : 11,
                paddingTop: '0.1em',
                paddingRight: matchesSM ? '0.5em' : '2em',
                paddingLeft: matchesSM ? '0.5em' : '2em',
                paddingBottom: matchesSM ? '0.5em' : '1.3em',
                height: matchesSM ? '24rem' : matchesMD ? '16rem' : '15rem',
                width: matchesSM ? 'auto' : '77%',
              }}
            >
              <CardContent>
                <Grid container direction="column">
                  <Grid item></Grid>
                  <Grid item textAlign={'center'}>
                    <Typography
                      variant="h4"
                      sx={{
                        marginBottom: '0.2em',
                        marginTop: '0.2em',
                        fontVariant: 'small-caps',
                      }}
                    >
                      <span style={{ color: '#FE5F55', fontWeight: 'bold' }}>
                        When
                      </span>{' '}
                      We Offer Meetings
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      textAlign={'center'}
                      sx={{ marginBottom: '0.5em' }}
                    >
                      our virtual meetings
                    </Typography>
                  </Grid>
                  <Grid item textAlign={'center'} sx={{ marginBottom: '1em' }}>
                    <Typography variant="subtitle1">
                      Virtual Gatherings meets 2 pm - 4 pm on Tuesdays,
                      Wednesdays Fridays and on Saturdays from 11 am - 12 pm.
                      (All times are EST).
                    </Typography>
                  </Grid>
                  <Grid container justifyContent={'center'}>
                    <Button
                      component={Link}
                      to="/signup"
                      sx={{
                        fontFamily: 'Cardo',
                        fontSize: '1rem',
                        textTransform: 'none',
                        color: 'white',
                        backgroundColor: '#7A9E9F',
                        height: 45,
                        width: 145,
                        '&:hover': {
                          border: '1.5px solid #C8C8C8',
                          transform: 'scale(1.1,1.1)',
                          backgroundColor: '#FE5F55',
                        },
                      }}
                      variant="contained"
                    >
                      Join Us
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            justifyContent={'center'}
            sx={{ marginTop: '2em' }}
            //   alignItems={'center'}
          >
            <Card
              sx={{
                backgroundColor: '#E8E8E8',
                boxShadow: matchesSM ? 2 : 5,
                borderRadius: matchesSM ? 0 : 11,
                paddingTop: '0.1em',
                paddingRight: matchesSM ? '0.5em' : '2em',
                paddingLeft: matchesSM ? '0.5em' : '2em',
                paddingBottom: matchesSM ? '0.5em' : '1.3em',
                height: matchesSM ? '26rem' : matchesMD ? '18rem' : '15rem',
                width: matchesSM ? 'auto' : '77%',
              }}
            >
              <CardContent>
                <Grid container direction="column">
                  <Grid item></Grid>
                  <Grid item textAlign={'center'}>
                    <Typography
                      variant="h4"
                      sx={{
                        marginBottom: '0.2em',
                        marginTop: '0.2em',
                        fontVariant: 'small-caps',
                      }}
                    >
                      <span style={{ color: '#FE5F55', fontWeight: 'bold' }}>
                        How
                      </span>{' '}
                      Virtual Gatherings Works
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      textAlign={'center'}
                      sx={{ marginBottom: '0.5em' }}
                    >
                      our simple process
                    </Typography>
                  </Grid>
                  <Grid item textAlign={'center'} sx={{ marginBottom: '1em' }}>
                    <Typography variant="subtitle1">
                      After an assessment is complete, we meet virtually with
                      the potential member and a family member to determine if
                      the program will be a suitable fit. We then invite you to
                      try out a session at no cost.
                    </Typography>
                  </Grid>
                  <Grid container justifyContent={'center'}>
                    <Button
                      component={Link}
                      to="/contact-virtual-gatherings"
                      sx={{
                        fontFamily: 'Cardo',
                        fontSize: '1rem',
                        textTransform: 'none',
                        color: 'white',
                        backgroundColor: '#7A9E9F',
                        height: 45,
                        width: 145,
                        '&:hover': {
                          border: '1.5px solid #C8C8C8',
                          transform: 'scale(1.1,1.1)',
                          backgroundColor: '#FE5F55',
                        },
                      }}
                      variant="contained"
                    >
                      Contact Us
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            justifyContent={'center'}
            sx={{ marginTop: '2em' }}
            //   alignItems={'center'}
          >
            <Card
              sx={{
                backgroundColor: '#E8E8E8',
                boxShadow: matchesSM ? 2 : 5,
                borderRadius: matchesSM ? 0 : 11,
                paddingTop: '0.1em',
                paddingRight: matchesSM ? '0.5em' : '2em',
                paddingLeft: matchesSM ? '0.5em' : '2em',
                paddingBottom: matchesSM ? '0.5em' : '1.3em',
                height: matchesSM ? '22rem' : matchesMD ? '16rem' : '15rem',
                width: matchesSM ? 'auto' : '77%',
              }}
            >
              <CardContent>
                <Grid container direction="column">
                  <Grid item textAlign={'center'}>
                    <Typography
                      variant="h4"
                      sx={{
                        marginBottom: '0.2em',
                        marginTop: '0.2em',
                        fontVariant: 'small-caps',
                      }}
                    >
                      <span style={{ color: '#FE5F55', fontWeight: 'bold' }}>
                        Registration
                      </span>{' '}
                      to the Gatherings
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      textAlign={'center'}
                      sx={{ marginBottom: '0.5em' }}
                    >
                      how to book sessions
                    </Typography>
                  </Grid>
                  <Grid item textAlign={'center'} sx={{ marginBottom: '1em' }}>
                    <Typography variant="subtitle1">
                      Members can register on our website for as many sessions
                      as they choose per week. Payment is made at the time of
                      registration.
                    </Typography>
                  </Grid>
                  <Grid container justifyContent={'center'}>
                    <Button
                      component={Link}
                      to="/book-a-session"
                      sx={{
                        fontFamily: 'Cardo',
                        fontSize: '1rem',
                        textTransform: 'none',
                        color: 'white',
                        backgroundColor: '#7A9E9F',
                        height: 45,
                        width: 145,
                        '&:hover': {
                          border: '1.5px solid #C8C8C8',
                          transform: 'scale(1.1,1.1)',
                          backgroundColor: '#FE5F55',
                        },
                      }}
                      variant="contained"
                    >
                      Join Us
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            justifyContent={'center'}
            sx={{ marginTop: '2em' }}
            //   alignItems={'center'}
          >
            <Card
              sx={{
                backgroundColor: '#E8E8E8',
                boxShadow: matchesSM ? 2 : 5,
                borderRadius: matchesSM ? 0 : 11,
                paddingTop: '0.1em',
                paddingRight: matchesSM ? '0.5em' : '2em',
                paddingLeft: matchesSM ? '0.5em' : '2em',
                paddingBottom: matchesSM ? '0.5em' : '1.3em',
                height: matchesSM ? '26.5rem' : matchesMD ? '18.5rem' : '15rem',
                width: matchesSM ? 'auto' : '77%',
              }}
            >
              <CardContent>
                <Grid container direction="column">
                  <Grid item textAlign={'center'}>
                    <Typography
                      variant="h4"
                      sx={{
                        marginBottom: '0.2em',
                        marginTop: '0.2em',
                        fontVariant: 'small-caps',
                      }}
                    >
                      Dementia Related Memory Loss{' '}
                      <span style={{ color: '#FE5F55', fontWeight: 'bold' }}>
                        Curriculum
                      </span>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      textAlign={'center'}
                      sx={{ marginBottom: '0.5em' }}
                    >
                      our personalized meetings
                    </Typography>
                  </Grid>
                  <Grid item textAlign={'center'} sx={{ marginBottom: '1em' }}>
                    <Typography variant="subtitle1">
                      Each session includes personalized holistic social,
                      physical and intellectual stimulation in an uplifting, fun
                      and invigorating environment.
                    </Typography>
                  </Grid>
                  <Grid container justifyContent={'center'}>
                    <Button
                      component={Link}
                      to="/signup"
                      sx={{
                        fontFamily: 'Cardo',
                        fontSize: '1rem',
                        textTransform: 'none',
                        color: 'white',
                        backgroundColor: '#7A9E9F',
                        height: 45,
                        width: 145,
                        '&:hover': {
                          border: '1.5px solid #C8C8C8',
                          transform: 'scale(1.1,1.1)',
                          backgroundColor: '#FE5F55',
                        },
                      }}
                      variant="contained"
                    >
                      Join Us
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
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
            width: '100%',
          }}
          direction={matchesSM ? 'column' : 'row'}
          textAlign={matchesSM ? 'left' : 'inherit'}
        >
          <Grid
            item
            sx={{ marginLeft: matchesSM ? '1em' : '3em', textAlign: 'left' }}
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
                  Say Hello
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Services
