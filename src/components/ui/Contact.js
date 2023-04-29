import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Grid, TextField, useMediaQuery } from '@mui/material'
import { Typography } from '@mui/material'
import { ContactPhone } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import { ImageList } from '@mui/material'
import { ImageListItem } from '@mui/material'
import ChildrenMemory from '../../images/memories/ChildrenMemory.jpeg'
import ChildrenMemoryTwo from '../../images/memories/ChildrenMemory2.jpeg'
import DancingFeetMemory from '../../images/memories/DancingFeetMemory.jpeg'
import DancingMemory from '../../images/memories/DancingMemory.jpeg'
import FamilyMemory from '../../images/memories/FamilyMemory.jpeg'
import ManHeadshotMemory from '../../images/memories/ManHeadshotMemory.jpeg'
import TravelMemory from '../../images/memories/TravelMemory.jpeg'
import WeddingMemory from '../../images/memories/WeddingMemory.jpeg'
import WeddingMemory2 from '../../images/memories/WeddingMemory2.jpeg'
import WeddingMemory3 from '../../images/memories/WeddingMemory3.jpeg'
import WomanHeadshotMemory from '../../images/memories/WomanHeadshotMemory.jpeg'
import WomanMemory from '../../images/memories/WomanMemory.jpeg'

const itemImages = [
  {
    img: `${ChildrenMemory}`,
  },
  {
    img: `${WomanHeadshotMemory}`,
  },
  {
    img: `${FamilyMemory}`,
  },
  {
    img: `${TravelMemory}`,
  },
  {
    img: `${DancingMemory}`,
  },
  {
    img: `${ManHeadshotMemory}`,
  },
  {
    img: `${WeddingMemory}`,
  },
  {
    img: `${ChildrenMemoryTwo}`,
  },
  {
    img: `${WeddingMemory2}`,
  },
  {
    img: `${DancingFeetMemory}`,
  },
  {
    img: `${WeddingMemory3}`,
  },
  {
    img: `${WomanMemory}`,
  },
]

const Contact = () => {
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
    <Grid container direction="row" backgroundColor="#FAF9F6">
      <Grid
        item
        container
        direction="column"
        justifyContent={'center'}
        sx={{
          marginBottom: matchesSM ? '2em' : matchesLG ? '4em' : 0,
          marginTop: matchesSM ? '1em' : matchesLG ? '4em' : 0,
        }}
        lg={3.5}
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
                Contact Us
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ textAlign: 'center', marginBottom: '2em' }}
              >
                We look forward to meeting you!
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
      <Grid item container lg={8.5}>
        <ImageList sx={{ height: '70em' }} variant="quilted" cols={4} gap={6}>
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
    </Grid>
  )
}

export default Contact
