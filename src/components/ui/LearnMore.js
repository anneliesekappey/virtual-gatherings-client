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
import { Box } from '@mui/material'
import { Paper } from '@mui/material'
import { MobileStepper } from '@mui/material'
import { useTheme } from '@emotion/react'

const testimonials = [
  {
    label: 'Testimonial from  ~Carolyn Kokish',
    description: `"Dear Mary Ellen and Susan ~~~ I would like to take this time to
        acknowledge both of you for the incredible job you are doing with
        your Virtual Gatherings group. Arthur, who is diagnosed with
        moderate dementia, is thrilled to participate every Saturday. This
        disease has transformed him in his daily life from a very verbal,
        interested, intelligent, social, engaged person to a very quiet, introverted, apathetic person with cognitive impairments. My
        heart breaks to watch him just manage in his everyday activities.
        However, on Saturdays he miraculously becomes excited, happy, more
        verbal, more alert and extroverted. He loves your program and as
        I pass by I can hear him fully involved and engaged in your
        various activities. I have him enrolled in other programs through
        the Alzheimer’s Association, NYU and the VA. All provide some form
        of stimulation but none get it as “right” as both of you. Your
        activities are so appropriate for his limitations yet help him to
        feel good about himself and at the same time give him enormous
        pleasure. This type of stimulation is priceless. I thank you both
        from the bottom of my heart. It also helps me as a caregiver to
        feel more lighthearted about his disease. Your ways of making them
        feel better about themselves transfers to the caregivers who then
        feel better about the situation. Again, I thank you."`,
  },
  {
    label: 'Testimonial from  ~Kathryn Green',
    description: `"Thank you, Virtual Gatherings, for your amazing personalized social engagement with my husband, Carl, and others diagnosed with dementia. I truly appreciate the special care that Mary Ellen, Susan, and Jenn have taken to know each participant – their hobbies, careers, and likes – to create stimulating activities every week such as singing, reading, exercises (in the chair), memory games, even sign language. For Carl’s birthday, they exceeded all expectations and created an amazing experience by singing Happy Birthday, sharing a virtual card, and sharing a pictorial slideshow of memories from Carl’s life. Every participant individually gave best wishes to Carl. It created an impact and such joy to kick off his birthday weekend. Each week Carl looks forward to joining his friends on Zoom and I’m delighted that he has these activities. In addition to giving Carl such amazing experiences, I’ve enjoyed participating in the caregiver sessions. In the last year, Virtual Gatherings created opportunities to talk with professionals about recent research and treatments in dementia. We also had sing-a-longs with our partner; prior to this, Carl rarely sang in public! While dementia can be difficult, Virtual Gatherings provides a happy and hopeful environment for everyone. I’m so glad that we found you!" 
    `,
  },
  {
    label: 'Testimonial from  ~Eileen',
    description: `"Dear Susan and Mary Ellen ~~~ I can’t thank you enough for Paul’s birthday celebration. It was so thoughtfully and creatively put together. In general, virtual Gatherings makes all the difference for Paul — giving him a community and ability to engage. I thank you from the bottom of my heart for doing all you do to make Paul happy. With gratitude."`,
  },
  {
    label:
      'Testimonial from  ~Mariya Rivkin, MBA Head of Operations Isaac Health',
    description: `"Hi Mary Ellen & Susan ~~~ We wanted to follow up and let you know how wonderful it was to watch the session today. We were so impressed with the variety of the programming and how well your team kept the conversation going in a virtual setting and with such different personalities and levels of engagement/cognitive ability. From yoga to word games to sharing what they were grateful for, it was really heartwarming to see how they all felt like they were part of the community. It was also great to see that your team knew so much about each participant's life and that they were all comfortable enough to share personal details with the group and even sing some Frank Sinatra in front of everyone. The fact that everyone mentioned that they were grateful for the virtual gatherings community is a real testament to the work your team does. Thank you again for inviting us and we are looking forward to our future event collaboration!"
    `,
  },
  {
    label: 'Testimonial from  ~Judy',
    description: `"Dear Susan and Mary Ellen ~~~ Today’s anniversary tribute to Jackie and Milt was spectacular. It made the day very special — not an easy feat in these times. Thank you, thank you. We all had a great time."`,
  },
  {
    label: 'Testimonial from  ~Henry Baker',
    description: `"Dear Susan and Mary Ellen ~~~ I think the program has been an enormous success for Liz. I’ve noticed an improvement in her communication skills, and so have others. But more importantly, you both have enriched her life more than you probably know. I always park myself nearby in the event of “technical issues,” so I hear the laughter, and the music, and the other members of the group, telling their stories and making their comments. Liz feels so at home home with everyone now! She laughs a lot! I think one of the reasons that this has been so much fun and so successful is that you have devised a format that provides the group with consistency, and at the same time an amazing amount of variety. I admire you for thinking up all the things that go into each session: the music, the games, the conversations, the exercises, the observances of holidays and birthdays, discussions of current events……..all of it! I credit our son with discovering Gatherings, and I’m so glad he did! It’s been a wonderful thing for Liz, and she’s so lucky to be among such kind, thoughtful, and smart kindred spirits. Thank you! Thank you! Thank you!"`,
  },
  {
    label: 'Testimonial from  ~Judy',
    description: `"Mary Ellen and Susan have created a thoughtful, meaningful and personalized program for memory-impaired individuals. Mom attends these Zoom events twice weekly and is engaged and energized by the word games, movement activities, music, art and discussion. Much of the program is interactive and these two-hour sessions are stimulating and nurturing for both the participants and their caregivers."`,
  },
  {
    label: 'Testimonial from  ~Gary Lewis',
    description: `"The Gatherings sessions are the highlights of Carole’s week. She looks forward to them very much, loves the people and feel they are all friends."`,
  },
  {
    label: 'Testimonial from  ~Susan',
    description: `"Dear Mary Ellen and Susan ~~~ Thank you so much for the lovely birthday celebration for Bob. You both really put a lot of effort into organizing a very personal event and he really was quite pleased. Sorry I may have grabbed more time than you expected and you had more prepared. I hope you know that you've made life so much more livable during Covid than it might have been for us. Best wishes."`,
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
            <Box sx={{ maxWidth: matchesSM ? 500 : 700, flexGrow: 1 }}>
              <Paper
                square
                elevation={matchesSM ? 6 : 15}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  height: matchesSM ? 80 : 70,
                  padding: matchesSM ? 3 : 3,
                  bgcolor: '#FAF9F6',
                  color: '#FE5F55',
                  borderRadius: matchesSM ? 0 : 1,
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
                  height: matchesSM ? 700 : 410,
                  maxWidth: matchesSM ? 500 : 700,
                  width: '100%',
                  paddingTop: 1.5,
                  paddingBottom: 5,
                }}
              >
                <Paper
                  square
                  elevation={6}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: matchesSM ? 700 : 410,
                    paddingLeft: 3,
                    paddingRight: 3,
                    paddingTop: 0.4,
                    paddingBottom: 0.4,
                    bgcolor: '#FAF9F6',
                    color: '#868686',
                    borderRadius: matchesSM ? 0 : 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'Cardo',
                      fontWeight: 'light',
                      fontStyle: 'italic',
                      lineHeight: '1.3em',
                      fontSize: '1.1em',
                      textAlign: 'justify',
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
