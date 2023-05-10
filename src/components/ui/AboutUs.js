import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import { Button } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
import Susan from '../../images/team/Susan.jpeg'
import MaryEllen from '../../images/team/MaryEllen.jpeg'
import Jenn from '../../images/team/Jenn.jpeg'
import Danielle from '../../images/team/Danielle.jpeg'
import Kerianne from '../../images/team/Kerianne.jpeg'
import { ArrowForward } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Hidden } from '@mui/material'

const AboutUs = () => {
  const matchesSM = useMediaQuery('(max-width:600px)')
  const matchesMD = useMediaQuery('(max-width:900px)')

  return (
    <div>
      <Hidden mdDown>
        <Grid container direction="column">
          <Grid
            item
            sx={{
              marginTop: '0.7em',
              textAlign: 'right',
              marginRight: '1.4em',
            }}
          >
            <IconButton component={Link} to="/learn-more">
              <ArrowForward></ArrowForward>
            </IconButton>
          </Grid>
        </Grid>
      </Hidden>
      <Grid
        container
        display={'flex'}
        flexDirection="row"
        spacing={2}
        justifyContent={'space-evenly'}
      >
        <Grid item>
          <Grid container sx={{ marginTop: '1.7em' }}>
            <Card
              sx={{
                backgroundColor: '#B8D8D8',
                boxShadow: 15,
                borderRadius: matchesSM ? 0 : 15,
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
          <Grid container sx={{ marginTop: '1.7em' }}>
            <Card
              sx={{
                backgroundColor: '#B8D8D8',
                boxShadow: 15,
                borderRadius: matchesSM ? 0 : 15,
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
                borderRadius: matchesSM ? 0 : 15,
                paddingTop: '0.8em',
                paddingRight: '1.4em',
                paddingLeft: '1.4em',
                paddingBottom: '1.1em',
                height: '63rem',
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
                  <Grid
                    item
                    textAlign={'justify'}
                    sx={{ marginBottom: '2.6em' }}
                  >
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
                borderRadius: matchesSM ? 0 : 15,
                paddingTop: '0.8em',
                paddingRight: '1.4em',
                paddingLeft: '1.4em',
                paddingBottom: '1.1em',
                height: '63rem',
                width: '22rem',
              }}
            >
              <CardContent>
                <Grid container direction="column">
                  <Grid item>
                    <Grid container justifyContent={'center'}>
                      <img
                        src={Danielle}
                        alt="Danielle Karuna"
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
                      DANIELLE KARUNA, VOLUNTEER YOGA INSTRUCTOR
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    textAlign={'justify'}
                    sx={{ marginBottom: '7.8em' }}
                  >
                    <Typography variant="p" sx={{ fontSize: '1rem' }}>
                      Named one of the “Best Instructors in Los Angeles” by
                      ClassPass and one of the “Nicest Instructors” in New York
                      City by RateYourBurn, Danielle is known for her masterful
                      sequencing, intuitive spiritual teachings, warm demeanor,
                      healing touch and accessible loving energy. Through years
                      of continuous study in Tibetan Buddhism and Yoga
                      Philosophy, Danielle infuses every class with accessible
                      life lessons rooted in ancient scriptures and deep wisdom.
                      She embodies divine love and her intuitive teaching style
                      allows for the perfect messages to come through, leading
                      students to connect to their own self-understanding,
                      self-acceptance, compassion and wisdom both on and off the
                      mat.
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
        <Grid
          item
          sx={{ marginBottom: matchesMD ? 8 : matchesSM ? 10 : undefined }}
        >
          <Grid
            container
            sx={{ marginTop: '5em' }}
            //   alignItems={'center'}
          >
            <Card
              sx={{
                backgroundColor: '#EEF5D8',
                boxShadow: 12,
                borderRadius: matchesSM ? 0 : 15,
                paddingTop: '0.8em',
                paddingRight: '1.4em',
                paddingLeft: '1.4em',
                paddingBottom: '1.1em',
                height: '63rem',
                width: '22rem',
              }}
            >
              <CardContent>
                <Grid container direction="column">
                  <Grid item>
                    <Grid container justifyContent={'center'}>
                      <img
                        src={Kerianne}
                        alt="Kerianne Edwards"
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
                      KERIANNE EDWARDS, VOLUNTEER SOCIAL MEDIA & ACTIVITY
                      COORDINATOR
                    </Typography>
                  </Grid>
                  <Grid item textAlign={'justify'} sx={{ marginBottom: '1em' }}>
                    <Typography variant="p" sx={{ fontSize: '1rem' }}>
                      My name is Kerianne Edwards and I help do admin work, and
                      occasionally co-lead during our sessions. I was born and
                      raised in Queens, New York and love my city dearly. Some
                      of my hobbies include collaging, brainstorming/creative
                      thinking, and singing. I graduated from Drexel University
                      in 2021 with a Bachelor’s of Science in Public Health.
                      I’ll be attending University of North Carolina - Chapel
                      Hill for my Masters in Public Health Nutrition. I have a
                      creative and helpful spirit and aspire to transform these
                      attributes into entrepreneurial solutions for communities
                      and to collaborate with other great minds to bring about
                      needed change. I consider becoming a Registered Dietician
                      to pair my creative ventures with a deeper knowledge of
                      the human body, our food habits and environments to
                      further understand and remedy how these things support and
                      divide our communities.
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
      <Hidden mdDown>
        <Grid item>
          {/*------Information Block -----*/}
          <Grid
            container
            alignItems={'center'}
            justifyContent={matchesSM ? 'space-around' : 'space-between'}
            sx={{
              height: matchesSM ? '20em' : '14em',
              marginTop: '5em',
              marginBottom: '5em',
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
      </Hidden>
    </div>
  )
}

export default AboutUs
