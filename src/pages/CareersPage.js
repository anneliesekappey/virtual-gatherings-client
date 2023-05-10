import React, { useState } from 'react'
import { Grid } from '@mui/material'
import { Hidden } from '@mui/material'
import { IconButton } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { ContactPhone } from '@mui/icons-material'
import { TextField } from '@mui/material'
import { ImageList } from '@mui/material'
import { ImageListItem } from '@mui/material'
import { Email } from '@mui/icons-material'

import FoundersManHug from '../images/team/FoundersManHug.jpeg'
import FoundersNYBackground1 from '../images/team/FoundersNYBackground.jpeg'
import FoundersNYBackground2 from '../images/team/FoundersNYBackground2.jpeg'
import FoundersOutdoorFair from '../images/team/FoundersOutdoorFair.jpeg'
import MovementGroup from '../images/screens/MovementGroup.jpeg'
import WomanCatCute from '../images/screens/WomanCatCute.jpeg'
import WomanManBeautifulSmiles from '../images/screens/WomanManBeautifulSmiles.jpeg'
import WomanSunglassesCute from '../images/screens/WomanSunglassesCute.jpeg'
import AnnelieseLorelei from '../images/team/AnnelieseLorelei.jpeg'
import ManBackReal from '../images/screens/ManBackReal.jpg'
import ScreenGroup from '../images/screens/ScreenGroup.png'
import WomanMaskCute from '../images/screens/WomanMaskCute.jpeg'

const itemImages = [
  {
    img: `${FoundersManHug}`,
  },
  {
    img: `${WomanManBeautifulSmiles}`,
  },
  {
    img: `${FoundersOutdoorFair}`,
  },
  {
    img: `${WomanSunglassesCute}`,
  },
  {
    img: `${FoundersNYBackground1}`,
  },
  {
    img: `${WomanCatCute}`,
  },
  {
    img: `${FoundersNYBackground2}`,
  },
  {
    img: `${WomanMaskCute}`,
  },
  {
    img: `${ScreenGroup}`,
  },
  {
    img: `${AnnelieseLorelei}`,
  },
  {
    img: `${MovementGroup}`,
  },
  {
    img: `${ManBackReal}`,
  },
]

const CareersPage = () => {
  const matchesSM = useMediaQuery('(max-width:600px)')
  const matchesLG = useMediaQuery('(max-width:1200px)')

  const [name, setName] = useState('')

  const [email, setEmail] = useState('')
  const [emailHelper, setEmailHelper] = useState('')

  const [phone, setPhone] = useState('')
  const [phoneHelper, setPhoneHelper] = useState('')

  const [message, setMessage] = useState('')

  const onChange = (event) => {
    let valid

    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value)
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        )

        if (!valid) {
          setEmailHelper('Invalid email')
        } else {
          setEmailHelper('')
        }
        break
      case 'phone':
        setPhone(event.target.value)
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        )

        if (!valid) {
          setPhoneHelper('Invalid phone number')
        } else {
          setPhoneHelper('')
        }
        break
      default:
        break
    }
  }

  return (
    <Grid
      item
      container
      direction={matchesSM ? 'column' : 'row'}
      sx={{ backgroundColor: '#F8F8F8' }}
    >
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
            <IconButton
              component={Link}
              to="/friends-working-with-patients-living-with-dementia-and-alzheimers"
            >
              <ArrowBack></ArrowBack>
            </IconButton>
          </Grid>
        </Grid>
      </Hidden>
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        justifyContent={'center'}
        sx={{ backgroundColor: '#FAF9F6' }}
      >
        <Grid item container lg={8}>
          <ImageList
            sx={{ height: matchesSM ? '29em' : '70em' }}
            variant={matchesSM ? 'standard' : 'woven'}
            cols={matchesSM ? 4 : 3}
            gap={matchesSM ? 2 : 7}
          >
            {itemImages.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=161&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  alt="Childhood memories"
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent={'center'}
          sx={{
            marginBottom: matchesSM ? '2em' : matchesLG ? '4em' : 0,
            marginTop: matchesSM ? '1em' : matchesLG ? '4em' : 0,
          }}
          lg={4}
        >
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography
                  variant="h3"
                  sx={{
                    lineHeight: 1,
                    fontVariant: 'small-caps',
                    textAlign: 'center',
                  }}
                >
                  Come Gather
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ textAlign: 'center', marginBottom: '2em' }}
                >
                  We look forward to working with you!
                </Typography>
              </Grid>
              <Grid item container justifyContent={'center'}>
                <Grid item>
                  <ContactPhone
                    sx={{
                      marginRight: '0.5em',
                      color: '#4F6367',
                      verticalAlign: 'bottom',
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: '#FE5F55', fontSize: '1rem' }}
                  >
                    <a
                      href="tel:5555555"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      800-670-2563
                    </a>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container justifyContent={'center'}>
                <Grid item>
                  <Email
                    sx={{
                      marginRight: '0.5em',
                      color: '#4F6367',
                      verticalAlign: 'bottom',
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: '#FE5F55',
                      fontSize: '1rem',
                      marginBottom: '2em',
                    }}
                  >
                    <a
                      href="mailto:anneliesekappey@gmail.com"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      info@virtual-gatherings.com
                    </a>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container justifyContent={'center'}>
                <Grid item>
                  <TextField
                    variant="outlined"
                    label="Name"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    sx={{
                      marginTop: '1em',
                      marginBottom: '0.5em',
                      width: '20em',
                    }}
                  />
                </Grid>
                <Grid item container justifyContent={'center'}>
                  <Grid item>
                    <TextField
                      variant="outlined"
                      label="Email"
                      error={emailHelper.length !== 0}
                      helperText={emailHelper}
                      id="email"
                      value={email}
                      onChange={onChange}
                      sx={{
                        marginTop: '1em',
                        marginBottom: '0.5em',
                        width: '20em',
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid item container justifyContent={'center'}>
                  <Grid item>
                    <TextField
                      variant="outlined"
                      label="Phone"
                      error={phoneHelper.length !== 0}
                      helperText={phoneHelper}
                      id="phone"
                      value={phone}
                      onChange={onChange}
                      sx={{
                        marginTop: '1em',
                        marginBottom: '0.5em',
                        width: '20em',
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item container justifyContent={'center'}>
                <Grid item>
                  <TextField
                    variant="outlined"
                    label="Message"
                    value={message}
                    multiline
                    rows={10}
                    id={message}
                    onChange={(event) => setMessage(event.target.value)}
                    sx={{
                      marginTop: '1em',
                      marginBottom: '1em',
                      width: '20em',
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item container justifyContent={'center'}>
                <Grid item>
                  <Button
                    disabled={
                      name.length === 0 ||
                      message.length === 0 ||
                      phoneHelper.length !== 0 ||
                      emailHelper.length !== 0
                    }
                    component={Link}
                    to="/signup"
                    sx={{
                      borderRadius: '10px',
                      marginLeft: '3px',
                      marginRight: '2px',
                      fontFamily: 'Cardo',
                      fontSize: '1rem',
                      textTransform: 'none',
                      fontVariant: 'small-caps',
                      padding: '3px',
                      height: '45px',
                      color: 'white',
                    }}
                    variant="contained"
                    color="secondary"
                  >
                    Send Message
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

export default CareersPage
