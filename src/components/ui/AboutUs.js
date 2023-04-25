import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import Susan from '../../images/team/Susan.jpeg'
import MaryEllen from '../../images/team/MaryEllen.jpeg'
import Jenn from '../../images/team/Jenn.jpeg'

const AboutUs = () => {
  //   const matchesSM = useMediaQuery('(max-width:600px)')

  return (
    <div>
      <Grid
        container
        display={'flex'}
        flexDirection="row"
        spacing={2}
        justifyContent={'space-evenly'}
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
                paddingBottom: '1.3em',
                height: '72rem',
                width: '27rem',
              }}
            >
              <CardContent>
                <Grid container direction="column">
                  <Grid item>
                    <Grid container justifyContent={'center'}>
                      <img src={Susan} alt="Susan" width={276} height={368} />
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
                      specialization in Multidisciplinary HS and Leadership
                      Coaching Psychology, and is a certified Mindfulness and
                      Meditation Coach. She also recently became certified as a
                      Let Your Yoga Dance teacher (R). She also has certified
                      dementia training from the Alzheimer's Association. She
                      has enjoyed a 30-year career in social services where she
                      worked in program management leadership roles with
                      underserved populations. Susan has 17 years of
                      professional, training, and personal experience with
                      Alzheimer’s and dementia. Her role as a devoted caregiver
                      to her mother and aunt motivated her to honor them by
                      implementing comprehensive coaching, supportive services,
                      and resources to clients and families impacted by the
                      condition and by participating in community awareness
                      media campaigns. Susan passionately integrates holistic
                      wellness practices with her expertise in coaching,
                      facilitating, and organizational management to provide
                      innovative reminiscent activities that stimulate, engage,
                      and celebrate clients’ lives while preserving their
                      dignity.
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
                height: '72rem',
                width: '27rem',
              }}
            >
              <CardContent>
                <Grid container direction="column">
                  <Grid item>
                    <Grid container justifyContent={'center'}>
                      <img
                        src={MaryEllen}
                        alt="Mary Ellen"
                        width={276}
                        height={368}
                      />
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
                      MARY ELLEN ROGINA. BA, CYT, CHHC, CMT ESSENTI-ALZ
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    textAlign={'justify'}
                    sx={{ marginBottom: '1.8em' }}
                  >
                    <Typography variant="p">
                      Mary Ellen incorporates her experience as a visual artist,
                      holistic health counselor, certified yoga instructor
                      teacher As well as her certification in dementia training
                      from the Alzheimer's Association. to co-create an
                      enriching, holistic curriculum for virtual Gatherings
                      participants. She also integrates her passion for art,
                      history, international travel and humanitarian causes.
                      Prior to launching virtual Gatherings she worked as care
                      manager with clients in the dementia community and their
                      families. Creating social and wellness programs to adapt
                      to their changing needs. Mary Ellen worked as a contractor
                      for several NYC non-profits. In 2011 she became one of the
                      founding managers of the 108 Lives Project a non-profit
                      which facilities change for the better in global
                      communities. She is currently on the Board of Directors of
                      the Mattapoisett Museum in Mattapoisett, MA, Mary Ellen
                      grew up outside Boston. She lived in New York City for 25
                      years and has also lived in Paris, France and Melbourne,
                      Australia. She currently lives by the sea in
                      Massachusetts.
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
      <Grid
        container
        display={'flex'}
        flexDirection="row"
        spacing={3}
        justifyContent={'space-evenly'}
      >
        <Grid item>
          <Grid
            container
            sx={{ marginTop: '5em' }}
            //   alignItems={'center'}
          >
            <Card
              sx={{
                backgroundColor: '#EEF5D8',
                boxShadow: 12,
                borderRadius: 15,
                paddingTop: '0.8em',
                paddingRight: '1.4em',
                paddingLeft: '1.4em',
                paddingBottom: '1.1em',
                height: '60rem',
                width: '22rem',
              }}
            >
              <CardContent>
                <Grid container direction="column">
                  <Grid item>
                    <Grid container justifyContent={'center'}>
                      <img
                        src={Jenn}
                        alt="Jenn Friedman"
                        width={274}
                        height={366}
                      />
                    </Grid>
                  </Grid>
                  <Grid item textAlign={'center'}>
                    <Typography
                      variant="h4"
                      sx={{
                        marginBottom: '0.7em',
                        marginTop: '0.8em',
                        fontVariant: 'small-caps',
                        fontSize: '1.6rem',
                      }}
                    >
                      Team Member
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      textAlign={'center'}
                      sx={{ marginBottom: '0.5em', fontSize: '1.1rem' }}
                    >
                      JENN FRIEDMAN, LEAD FACILITATOR, MA, MHC-LP
                    </Typography>
                  </Grid>
                  <Grid item textAlign={'justify'} sx={{ marginBottom: '1em' }}>
                    <Typography variant="p" sx={{ fontSize: '1rem' }}>
                      Jenn Friedman, MA, is a Mental Health Counselor, author,
                      and musician. She holds a Master’s Degree in Counseling
                      from Goldsmiths University of London where she trained in
                      psychodynamic therapy. She is on track to obtain her
                      Advanced Graduate Mental Health Counseling Certification
                      through the University at Buffalo in August, 2022 and
                      currently provides therapy at MTZ Counseling. Jenn has
                      received specialized training working with Dementia
                      patients and their family members and holds a Teepa Snow
                      Dementia Training certification. She also holds a
                      certification in Creative Arts and Health from the New
                      School for Social Research. Jenn has facilitated music,
                      writing, skill-building and discussion groups with a
                      variety of populations. She has also performed her
                      original music at a variety of venues and published a
                      variety of written works.
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
                        height: 35,
                        width: 133,
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
            sx={{ marginTop: '5em' }}
            //   alignItems={'center'}
          >
            <Card
              sx={{
                backgroundColor: '#EEF5D8',
                boxShadow: 12,
                borderRadius: 15,
                paddingTop: '0.8em',
                paddingRight: '1.4em',
                paddingLeft: '1.4em',
                paddingBottom: '1.1em',
                height: '60rem',
                width: '22rem',
              }}
            >
              <CardContent>
                <Grid container direction="column">
                  <Grid item>
                    <Grid container justifyContent={'center'}>
                      <img
                        src={Jenn}
                        alt="Jenn Friedman"
                        width={274}
                        height={366}
                      />
                    </Grid>
                  </Grid>
                  <Grid item textAlign={'center'}>
                    <Typography
                      variant="h4"
                      sx={{
                        marginBottom: '0.7em',
                        marginTop: '0.8em',
                        fontVariant: 'small-caps',
                        fontSize: '1.6rem',
                      }}
                    >
                      Team Member
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      textAlign={'center'}
                      sx={{ marginBottom: '0.5em', fontSize: '1.1rem' }}
                    >
                      JENN FRIEDMAN, LEAD FACILITATOR, MA, MHC-LP
                    </Typography>
                  </Grid>
                  <Grid item textAlign={'justify'} sx={{ marginBottom: '1em' }}>
                    <Typography variant="p" sx={{ fontSize: '1rem' }}>
                      Jenn Friedman, MA, is a Mental Health Counselor, author,
                      and musician. She holds a Master’s Degree in Counseling
                      from Goldsmiths University of London where she trained in
                      psychodynamic therapy. She is on track to obtain her
                      Advanced Graduate Mental Health Counseling Certification
                      through the University at Buffalo in August, 2022 and
                      currently provides therapy at MTZ Counseling. Jenn has
                      received specialized training working with Dementia
                      patients and their family members and holds a Teepa Snow
                      Dementia Training certification. She also holds a
                      certification in Creative Arts and Health from the New
                      School for Social Research. Jenn has facilitated music,
                      writing, skill-building and discussion groups with a
                      variety of populations. She has also performed her
                      original music at a variety of venues and published a
                      variety of written works.
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
                        height: 35,
                        width: 133,
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
            sx={{ marginTop: '5em' }}
            //   alignItems={'center'}
          >
            <Card
              sx={{
                backgroundColor: '#EEF5D8',
                boxShadow: 12,
                borderRadius: 15,
                paddingTop: '0.8em',
                paddingRight: '1.4em',
                paddingLeft: '1.4em',
                paddingBottom: '1.1em',
                height: '60rem',
                width: '22rem',
              }}
            >
              <CardContent>
                <Grid container direction="column">
                  <Grid item>
                    <Grid container justifyContent={'center'}>
                      <img
                        src={Jenn}
                        alt="Jenn Friedman"
                        width={274}
                        height={366}
                      />
                    </Grid>
                  </Grid>
                  <Grid item textAlign={'center'}>
                    <Typography
                      variant="h4"
                      sx={{
                        marginBottom: '0.7em',
                        marginTop: '0.8em',
                        fontVariant: 'small-caps',
                        fontSize: '1.6rem',
                      }}
                    >
                      Team Member
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      textAlign={'center'}
                      sx={{ marginBottom: '0.5em', fontSize: '1.1rem' }}
                    >
                      JENN FRIEDMAN, LEAD FACILITATOR, MA, MHC-LP
                    </Typography>
                  </Grid>
                  <Grid item textAlign={'justify'} sx={{ marginBottom: '1em' }}>
                    <Typography variant="p" sx={{ fontSize: '1rem' }}>
                      Jenn Friedman, MA, is a Mental Health Counselor, author,
                      and musician. She holds a Master’s Degree in Counseling
                      from Goldsmiths University of London where she trained in
                      psychodynamic therapy. She is on track to obtain her
                      Advanced Graduate Mental Health Counseling Certification
                      through the University at Buffalo in August, 2022 and
                      currently provides therapy at MTZ Counseling. Jenn has
                      received specialized training working with Dementia
                      patients and their family members and holds a Teepa Snow
                      Dementia Training certification. She also holds a
                      certification in Creative Arts and Health from the New
                      School for Social Research. Jenn has facilitated music,
                      writing, skill-building and discussion groups with a
                      variety of populations. She has also performed her
                      original music at a variety of venues and published a
                      variety of written works.
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
                        height: 35,
                        width: 133,
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
    </div>
  )
}

export default AboutUs
