import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Api from '../utils/api.utils'
import { Grid } from '@mui/material'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import { Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { useMediaQuery } from '@mui/material'

const Signup = () => {
  const matchesSM = useMediaQuery('(max-width:600px)')
  const matchesLG = useMediaQuery('(max-width:1200px)')

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const sendToLogin = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newUser = {
      firstName,
      lastName,
      username,
      email,
      password,
    }

    try {
      await Api.signup(newUser)
      sendToLogin('/login')
    } catch (error) {
      setError(error)
      console.log(error)
    }
  }

  return (
    <Grid container direction="row" justifyContent={'center'}>
      <Card
        sx={{
          backgroundColor: '#ffffff',
          boxShadow:
            '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          borderRadius: matchesSM ? 0 : 12,
          paddingTop: matchesSM ? '0.6em' : '2em',
          paddingRight: matchesSM ? 0 : '2em',
          paddingLeft: matchesSM ? 0 : '2em',
          paddingBottom: '1.5em',
          marginTop: matchesSM ? 0 : '3em',
          marginBottom: '3em',
          textAlign: 'center',
          height: '45rem',
          width: '40rem',
        }}
      >
        <CardContent>
          <form
            onSubmit={(event) => {
              handleSubmit(event)
            }}
          >
            <Grid
              item
              container
              direction="column"
              justifyContent={'center'}
              sx={{
                marginBottom: matchesSM ? '2em' : matchesLG ? '4em' : 0,
                marginTop: matchesSM ? '1em' : matchesLG ? '4em' : 0,
              }}
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
                        paddingBottom: '0.8em',
                      }}
                    >
                      Sign Up
                    </Typography>
                  </Grid>
                  <Grid item container justifyContent={'center'}>
                    <Grid item>
                      <TextField
                        variant="outlined"
                        label="First Name"
                        id="firstName"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        sx={{
                          marginTop: '1em',
                          marginBottom: '0.5em',
                          width: matchesSM ? '21.5em' : '25em',
                        }}
                      />
                    </Grid>
                    <Grid item container justifyContent={'center'}>
                      <Grid item>
                        <TextField
                          variant="outlined"
                          label="Last Name"
                          id="lastName"
                          value={lastName}
                          onChange={(event) => setLastName(event.target.value)}
                          sx={{
                            marginTop: '1em',
                            marginBottom: '1.2em',
                            width: matchesSM ? '21.5em' : '25em',
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid item container justifyContent={'center'}>
                      <Grid item>
                        <TextField
                          variant="outlined"
                          label="Username"
                          id="username"
                          value={username}
                          onChange={(event) => setUsername(event.target.value)}
                          sx={{
                            marginTop: '1em',
                            marginBottom: '0.5em',
                            width: matchesSM ? '21.5em' : '25em',
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid item container justifyContent={'center'}>
                      <Grid item>
                        <TextField
                          variant="outlined"
                          label="Email"
                          id="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          sx={{
                            marginTop: '1em',
                            marginBottom: '0.5em',
                            width: matchesSM ? '21.5em' : '25em',
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid item container justifyContent={'center'}>
                      <Grid item>
                        <TextField
                          type={'password'}
                          variant="outlined"
                          label="Password"
                          id="password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          sx={{
                            marginTop: '1em',
                            marginBottom: '3em',
                            width: matchesSM ? '21.5em' : '25em',
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid item container justifyContent={'center'}>
                      <Grid item>
                        <Button
                          type="submit"
                          sx={{
                            borderRadius: '10px',
                            fontFamily: 'Cardo',
                            fontSize: '1.3rem',
                            textTransform: 'none',
                            fontVariant: 'small-caps',
                            padding: '5px',
                            height: '45px',
                            color: 'white',
                          }}
                          variant="contained"
                          color="secondary"
                        >
                          Sign Up
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
          <span
            style={{
              display: 'block',
              marginTop: '3.6em',
              color: '#888888',
              fontSize: '1em',
            }}
          >
            Already have an account?
            <Link to="/login" style={{ color: 'inherit' }}>
              {''} Log In
            </Link>
            {error && <p> {error} </p>}
          </span>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Signup
