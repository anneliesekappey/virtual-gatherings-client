import React from 'react'
import { HourglassBottom } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'

const Loading = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems={'center'}
      sx={{ height: '30em' }}
      justifyContent={'center'}
    >
      <Grid item>
        <HourglassBottom sx={{ color: '#7A9E9F' }} />
      </Grid>
      <Grid item>
        <Typography variant="subtitle2">Loading ...</Typography>
      </Grid>
    </Grid>
  )
}

export default Loading
