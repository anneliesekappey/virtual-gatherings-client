import React from 'react'
import { Grid } from '@mui/material'
import mainPicture from '../../images/MainNotMain.jpeg'
import { Button } from '@mui/material'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Grid
          container
          justifyContent={'flex-end'}
          alignItems="center"
          direction="row"
          sx={{ backgroundColor: 'EEF5D8' }}
        >
          <Grid sm item sx={{ minWidth: '21.5em', marginLeft: '1em' }}>
            <Typography
              variant="h4"
              align="center"
              sx={{
                fontFamily: 'Cardo',
                fontVariant: 'small-caps',
                color: '#FE5F55',
                lineHeight: 1.5,
              }}
            >
              Personalized Online Social Meetings
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="EEF5D8"
              sx={{
                fontFamily: 'Montserrat',
                color: '#4F6367',
                lightHeight: 1.3,
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
    </Grid>
  )
}

export default LandingPage
