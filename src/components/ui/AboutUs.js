import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Susan from '../../images/team/Susan2.jpeg'

const AboutUs = () => {
  //   const matchesSM = useMediaQuery('(max-width:600px)')

  return (
    <Grid
      container
      display={'flex'}
      flexDirection="row"
      spacing={2}
      justifyContent={'space-around'}
    >
      <Grid item>
        <Grid
          container
          sx={{ marginTop: '2em' }}
          //   alignItems={'center'}
        >
          <Card
            sx={{
              backgroundColor: '#B8D8D8',
              boxShadow: 15,
              borderRadius: 15,
              paddingTop: '1em',
              paddingRight: '2em',
              paddingLeft: '2em',
              paddingBottom: '1.5em',
              height: '68rem',
              width: '27rem',
            }}
          >
            <CardContent>
              <Grid container direction="column">
                <Grid item>
                  <Grid container justifyContent={'center'}>
                    <img src={Susan} alt="Susan" width={307} height={261} />
                  </Grid>
                </Grid>
                <Grid item textAlign={'center'}>
                  <Typography
                    variant="h3"
                    sx={{
                      marginBottom: '1em',
                      marginTop: '1em',
                      fontVariant: 'small-caps',
                    }}
                  >
                    Co-Founder
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    textAlign={'center'}
                    sx={{ marginBottom: '0.5em' }}
                  >
                    SUSAN SHIELDS GRANT, MS, CMMTC, CLYYDT, ESSENTI-ALZ
                  </Typography>
                </Grid>
                <Grid item textAlign={'justify'} sx={{ marginBottom: '1em' }}>
                  <Typography variant="p">
                    Susan has a Master's degree in Human Services, with a
                    specialization in Multidisciplinary Human Services and
                    Leadership Coaching Psychology, and is a certified
                    Mindfulness and Meditation Coach. She also recently became
                    certified as a Let Your Yoga Dance teacher (R). She also has
                    certified dementia training from the Alzheimer's
                    Association. She has enjoyed a 30-year career in social
                    services where she worked in program management leadership
                    roles with numerous underserved populations. Susan has 17
                    years of professional, training, and personal experience
                    with Alzheimer’s and dementia. Her role as a devoted
                    caregiver to her mother and aunt motivated her to honor them
                    by implementing comprehensive coaching, supportive services,
                    and resources to clients and families impacted by the
                    condition and by participating in national and community
                    awareness media campaigns. Susan passionately integrates
                    holistic wellness practices with her skills and expertise in
                    coaching, facilitating, and organizational management to
                    provide innovative and holistic reminiscent activities that
                    stimulate, engage, and celebrate clients’ lives while
                    preserving their dignity.
                  </Typography>
                </Grid>
                <Grid container justifyContent={'center'}>
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
                      '&:hover': {
                        backgroundColor: '#FE5F55',
                      },
                    }}
                    variant="contained"
                  >
                    Learn More
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
          sx={{ marginTop: '2em' }}
          //   alignItems={'center'}
          //   justifyContent={'space-between'}
        >
          <Card
            sx={{
              backgroundColor: '#B8D8D8',
              boxShadow: 15,
              borderRadius: 15,
              paddingTop: '1em',
              paddingRight: '2em',
              paddingLeft: '2em',
              paddingBottom: '1.5em',
              height: '68rem',
              width: '27rem',
            }}
          >
            <CardContent>
              <Grid container direction="column">
                <Grid item>
                  <Grid container justifyContent={'center'}>
                    <img src={Susan} alt="Susan" width={307} height={261} />
                  </Grid>
                </Grid>
                <Grid item textAlign={'center'}>
                  <Typography
                    variant="h3"
                    sx={{
                      marginBottom: '1em',
                      marginTop: '1em',
                      fontVariant: 'small-caps',
                    }}
                  >
                    Co-Founder
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="h6"
                    textAlign={'center'}
                    sx={{ marginBottom: '0.5em' }}
                  >
                    SUSAN SHIELDS GRANT, MS, CMMTC, CLYYDT, ESSENTI-ALZ
                  </Typography>
                </Grid>
                <Grid item textAlign={'justify'} sx={{ marginBottom: '1em' }}>
                  <Typography variant="p">
                    Susan has a Master's degree in Human Services, with a
                    specialization in Multidisciplinary Human Services and
                    Leadership Coaching Psychology, and is a certified
                    Mindfulness and Meditation Coach. She also recently became
                    certified as a Let Your Yoga Dance teacher (R). She also has
                    certified dementia training from the Alzheimer's
                    Association. She has enjoyed a 30-year career in social
                    services where she worked in program management leadership
                    roles with numerous underserved populations. Susan has 17
                    years of professional, training, and personal experience
                    with Alzheimer’s and dementia. Her role as a devoted
                    caregiver to her mother and aunt motivated her to honor them
                    by implementing comprehensive coaching, supportive services,
                    and resources to clients and families impacted by the
                    condition and by participating in national and community
                    awareness media campaigns. Susan passionately integrates
                    holistic wellness practices with her skills and expertise in
                    coaching, facilitating, and organizational management to
                    provide innovative and holistic reminiscent activities that
                    stimulate, engage, and celebrate clients’ lives while
                    preserving their dignity.
                  </Typography>
                </Grid>
                <Grid container justifyContent={'center'}>
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
                      '&:hover': {
                        backgroundColor: '#FE5F55',
                      },
                    }}
                    variant="contained"
                  >
                    Learn More
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AboutUs
