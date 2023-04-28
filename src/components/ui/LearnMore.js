import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography } from '@mui/material'
import { IconButton } from '@mui/material'
import {
  ArrowForward,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@mui/icons-material'
import { ArrowBack } from '@mui/icons-material'
import { Hidden } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { Button } from '@mui/material'
// import ManBackReal from '../../images/screens/ManBackReal.jpg'
// import ManSideReal from '../../images/screens/ManSideReal.jpg'
import { Box } from '@mui/material'
import { Paper } from '@mui/material'
import { MobileStepper } from '@mui/material'
import { useTheme } from '@emotion/react'

const testimonials = [
  {
    label: 'Dear Mary Ellen and Susan',
    description: `I would like to take this time to
        acknowledge both of you for the incredible job you are doing with
        your Virtual Gatherings group. Arthur, who is diagnosed with
        moderate dementia , is thrilled to participate every Saturday.This
        disease has transformed him in his daily life from a very verbal ,
        interested , intelligent , social , engaged person to a very quiet
        , introverted , apathetic person with cognitive impairments. My
        heart breaks to watch him just manage in his every day activities.
        However, on Saturdays he miraculously becomes excited, happy, more
        verbal , more alert and extroverted. He loves your program and as
        I pass by I can hear him fully involved and engaged in your
        various activities. I have him enrolled in other programs through
        the Alzheimer’s Association ,NYU and the VA. All provide some form
        of stimulation but none get it as “ right” as both of you. Your
        activities are so appropriate for his limitations yet help him to
        feel good about himself and at the same time give him enormous
        pleasure. This type of stimulation is priceless. I thank you both
        from the bottom of my heart. It also helps me as a caregiver to
        feel more lighthearted about his disease. Your ways of making them
        felt better about themselves transfers to the caregivers who then
        feel better about the situation. Again I Thank you,`,
  },
  {
    label: 'SECOND TEST',
    description: `I would like to take this time to
        acknowledge both of you for the incredible job you are doing with
        your Virtual Gatherings group. Arthur, who is diagnosed with
        moderate dementia , is thrilled to participate every Saturday.This
        disease has transformed him in his daily life from a very verbal ,
        interested , intelligent , social , engaged person to a very quiet
        , introverted , apathetic person with cognitive impairments. My
        heart breaks to watch him just manage in his every day activities.
        However, on Saturdays he miraculously becomes excited, happy, more
        verbal , more alert and extroverted. He loves your program and as
        I pass by I can hear him fully involved and engaged in your
        various activities. I have him enrolled in other programs through
        the Alzheimer’s Association ,NYU and the VA. All provide some form
        of stimulation but none get it as “ right” as both of you. Your
        activities are so appropriate for his limitations yet help him to
        feel good about himself and at the same time give him enormous
        pleasure. This type of stimulation is priceless. I thank you both
        from the bottom of my heart. It also helps me as a caregiver to
        feel more lighthearted about his disease. Your ways of making them
        felt better about themselves transfers to the caregivers who then
        feel better about the situation. Again I Thank you,`,
  },
  {
    label: 'THIRD TEST',
    description: `I would like to take this time to
        acknowledge both of you for the incredible job you are doing with
        your Virtual Gatherings group. Arthur, who is diagnosed with
        moderate dementia , is thrilled to participate every Saturday.This
        disease has transformed him in his daily life from a very verbal ,
        interested , intelligent , social , engaged person to a very quiet
        , introverted , apathetic person with cognitive impairments. My
        heart breaks to watch him just manage in his every day activities.
        However, on Saturdays he miraculously becomes excited, happy, more
        verbal , more alert and extroverted. He loves your program and as
        I pass by I can hear him fully involved and engaged in your
        various activities. I have him enrolled in other programs through
        the Alzheimer’s Association ,NYU and the VA. All provide some form
        of stimulation but none get it as “ right” as both of you. Your
        activities are so appropriate for his limitations yet help him to
        feel good about himself and at the same time give him enormous
        pleasure. This type of stimulation is priceless. I thank you both
        from the bottom of my heart. It also helps me as a caregiver to
        feel more lighthearted about his disease. Your ways of making them
        felt better about themselves transfers to the caregivers who then
        feel better about the situation. Again I Thank you,`,
  },
  {
    label: 'FOURTH TEST',
    description: `I would like to take this time to
        acknowledge both of you for the incredible job you are doing with
        your Virtual Gatherings group. Arthur, who is diagnosed with
        moderate dementia , is thrilled to participate every Saturday.This
        disease has transformed him in his daily life from a very verbal ,
        interested , intelligent , social , engaged person to a very quiet
        , introverted , apathetic person with cognitive impairments. My
        heart breaks to watch him just manage in his every day activities.
        However, on Saturdays he miraculously becomes excited, happy, more
        verbal , more alert and extroverted. He loves your program and as
        I pass by I can hear him fully involved and engaged in your
        various activities. I have him enrolled in other programs through
        the Alzheimer’s Association ,NYU and the VA. All provide some form
        of stimulation but none get it as “ right” as both of you. Your
        activities are so appropriate for his limitations yet help him to
        feel good about himself and at the same time give him enormous
        pleasure. This type of stimulation is priceless. I thank you both
        from the bottom of my heart. It also helps me as a caregiver to
        feel more lighthearted about his disease. Your ways of making them
        felt better about themselves transfers to the caregivers who then
        feel better about the situation. Again I Thank you,`,
  },
]

const LearnMore = () => {
  const matchesSM = useMediaQuery('(max-width:600px)')
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = testimonials.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

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
              <IconButton component={Link} to="/about-virtual-gatherings">
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
              <IconButton
                component={Link}
                to="/friends-working-with-patients-living-with-dementia-and-alzheimers"
              >
                <ArrowForward></ArrowForward>
              </IconButton>
            </Grid>
          </Grid>
        </Hidden>
        <Grid container direction="row" justifyContent={'center'}>
          <Grid item>
            <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
              <Paper
                square
                elevation={15}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  height: 80,
                  pl: 2,
                  bgcolor: '#FAF9F6',
                  color: '#FE5F55',
                  borderRadius: 1,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Montserrat',
                    lineHeight: '1.3em',
                    fontVariant: 'small-caps',
                    fontSize: '1.3em',
                  }}
                >
                  {testimonials[activeStep].label}
                </Typography>
              </Paper>
              <Box
                sx={{
                  height: 390,
                  maxWidth: 600,
                  //   width: '100%',
                  p: 2,
                }}
              >
                <Paper
                  square
                  elevation={6}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 390,
                    pl: 2,
                    bgcolor: '#FAF9F6',
                    color: '#868686',
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Cardo',
                      lineHeight: '1.2em',
                      fontSize: '1.1em',
                    }}
                  >
                    {testimonials[activeStep].description}
                  </Typography>
                </Paper>
              </Box>
              <MobileStepper
                variant="progress"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button
                    size="medium"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    Next
                    {useTheme.direction === 'rtl' ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="medium"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    {useTheme.direction === 'rtl' ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                    Back
                  </Button>
                }
              />
            </Box>
          </Grid>
        </Grid>
        {/* <Grid
            container
            display={'flex'}
            flexDirection="row"
            spacing={2}
            justifyContent={'space-around'}
            sx={{ marginTop: '1.5em', marginLeft: '1.5em' }}
          >
            <Typography variant="h3">Testimonials</Typography>
            <img src={ManBackReal} alt="" width={320} height={240} />
            <img src={ManSideReal} alt="" width={320} height={240} />
            <Typography variant="p">
              Dear Mary Ellen and Susan, I would like to take this time to
              acknowledge both of you for the incredible job you are doing with
              your Virtual Gatherings group. Arthur, who is diagnosed with
              moderate dementia , is thrilled to participate every Saturday.This
              disease has transformed him in his daily life from a very verbal ,
              interested , intelligent , social , engaged person to a very quiet
              , introverted , apathetic person with cognitive impairments. My
              heart breaks to watch him just manage in his every day activities.
              However, on Saturdays he miraculously becomes excited, happy, more
              verbal , more alert and extroverted. He loves your program and as
              I pass by I can hear him fully involved and engaged in your
              various activities. I have him enrolled in other programs through
              the Alzheimer’s Association ,NYU and the VA. All provide some form
              of stimulation but none get it as “ right” as both of you. Your
              activities are so appropriate for his limitations yet help him to
              feel good about himself and at the same time give him enormous
              pleasure. This type of stimulation is priceless. I thank you both
              from the bottom of my heart. It also helps me as a caregiver to
              feel more lighthearted about his disease. Your ways of making them
              felt better about themselves transfers to the caregivers who then
              feel better about the situation. Again I Thank you,
            </Typography>
          </Grid>
        </Grid> */}
        <Grid
          container
          direction="column"
          justifyContent={'center'}
          sx={{
            paddingTop: '2em',
            paddingRight: '6em',
            paddingBottom: '3em',
            paddingLeft: '6em',
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
              Frequently Asked Questions
            </Typography>
            <Grid item sx={{ marginBottom: '0.7em' }}>
              <Typography
                variant="h6"
                sx={{
                  padding: '0.2em',
                  textAlign: 'left',
                  fontSize: '1.6em',
                }}
              >
                What types of physical activity do you offer?
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
                All movement is seated and taught by certified professionals.
                Each session might include chair yoga, dance, tai chi or basic
                stretching.
              </Typography>
            </Grid>
            <Grid item sx={{ marginBottom: '0.7em' }}>
              <Typography
                variant="h6"
                sx={{
                  padding: '0.2em',
                  textAlign: 'left',
                  fontSize: '1.6em',
                }}
              >
                Do you have presenters or guest speakers?
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
                YES! We regularly welcome yoga instructors, art therapists,
                music therapists, poets, story tellers and musicians.
              </Typography>
            </Grid>
            <Grid item sx={{ marginBottom: '0.7em' }}>
              <Typography
                variant="h6"
                sx={{
                  padding: '0.2em',
                  textAlign: 'left',
                  fontSize: '1.6em',
                }}
              >
                Can we join a session after it has started?
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
                Yes, one can join or leave a session whenever they want.
              </Typography>
            </Grid>
            <Grid item sx={{ marginBottom: '0.7em' }}>
              <Typography
                variant="h6"
                sx={{
                  padding: '0.2em',
                  textAlign: 'left',
                  fontSize: '1.6em',
                }}
              >
                What if the cost is out of our budget?
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
                Just let us know and we can create a sliding scale. We want our
                program to be accessible to anyone who would like to join.
              </Typography>
            </Grid>
            <Grid item sx={{ marginBottom: '0.7em' }}>
              <Typography
                variant="h6"
                sx={{
                  padding: '0.2em',
                  textAlign: 'left',
                  fontSize: '1.6em',
                }}
              >
                What happens if members have different cognitive levels?
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
                We understand everyone has different capabilities and responses.
                We format our programming to ensure that all members are
                included and engaged.
              </Typography>
            </Grid>
            <Grid item sx={{ marginBottom: '0.7em' }}>
              <Typography
                variant="h6"
                sx={{
                  padding: '0.2em',
                  textAlign: 'left',
                  fontSize: '1.6em',
                }}
              >
                Will there be music in the sessions?
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
                Yes! We have many activities that involve music. We also have
                music performances and music therapy.
              </Typography>
            </Grid>
            <Grid item sx={{ marginBottom: '0.7em' }}>
              <Typography
                variant="h6"
                sx={{
                  padding: '0.2em',
                  textAlign: 'left',
                  fontSize: '1.6em',
                }}
              >
                Must I be present with my loved one during the session?
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
                The program is designed for the participants to have
                independence and it is also a respite for the caregiver. We find
                that all participants require assistance opening the Zoom
                meeting. We do ask that someone be close by in case of technical
                difficulties.
              </Typography>
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
                marginTop: '5em',
                marginBottom: '5em',
                backgroundImage: matchesSM
                  ? 'linear-gradient(to right, #FE5F55, #FAF9F6)'
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

export default LearnMore
