import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Api from '../utils/api.utils'
import { Grid, LinearProgress } from '@mui/material'
import { TextField } from '@mui/material'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import { Box } from '@mui/material'

const Login = () => {
  const matchesSM = useMediaQuery('(max-width:600px)')
  const matchesLG = useMediaQuery('(max-width:1200px)')

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const sendToMeetings = useNavigate()
  const userNotFound = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newLogin = {
      username,
      password,
    }

    try {
      await Api.login(newLogin)
      setIsLoading(false)
      if (isLoading) return
      ;<Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
      sendToMeetings('/book-a-session')
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
          paddingTop: matchesSM ? '0.8em' : matchesLG ? '3em' : '1.5em',
          paddingRight: '2em',
          paddingLeft: '2em',
          paddingBottom: matchesLG ? '3em' : '1.5em',
          marginTop: matchesLG ? '4em' : '2em',
          marginBottom: matchesLG ? '4em' : '2em',
          textAlign: 'center',
          height: '25rem',
          width: '30rem',
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
                marginTop: matchesSM ? '0.6em' : matchesLG ? '4em' : 0,
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
                      Log In
                    </Typography>
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
                          width: '20em',
                        }}
                      />
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
                            marginBottom: matchesSM ? '2.4em' : '1.2em',
                            width: '20em',
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
                          Log In
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
              marginTop: '2em',
              color: '#888888',
              fontSize: '1em',
            }}
          >
            Don't have an account yet?
            <Link to="/signup" style={{ color: 'inherit' }}>
              {' '}
              Sign Up
            </Link>
            {error === 'User not found' ? (
              userNotFound('/signup')
            ) : (
              <p>{error}</p>
            )}
          </span>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Login
