import React from 'react'
import { Button } from '@mui/material'
// import { Wrapper } from './CartItem.Styles.js'
import { Grid } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { Typography } from '@mui/material'

const CartItem = ({ item, addToCart, removeFromCart }) => {
  const matchesSM = useMediaQuery('(max-width:600px)')
  const matchesLG = useMediaQuery('(max-width:1200px)')

  return (
    <Grid container direction="row" backgroundColor="#FAF9F6">
      <Grid
        item
        container
        direction={matchesSM ? 'row' : 'column'}
        justifyContent={matchesSM ? 'center' : 'left'}
        sx={{
          padding: matchesSM ? 0 : 6,
          marginBottom: matchesSM ? '2em' : matchesLG ? '2em' : 0,
          marginTop: matchesSM ? '1em' : matchesLG ? '2em' : 0,
        }}
        sm={6}
        lg={9}
      >
        <Grid item container direction={'column'}>
          <Typography variant="h6">{item.title}</Typography>
          <div className="information">
            <Typography variant="subtitle1">Unit: ${item.price}</Typography>
            <Typography variant="subtitle1">
              Total: ${item.amount * item.price}
            </Typography>
          </div>
        </Grid>
        <Grid container direction={'row'}>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item._id)}
          >
            -
          </Button>
          <Typography
            variant="subtitle2"
            sx={{ marginRight: '0.5em', marginLeft: '0.5em' }}
          >
            {item.amount}
          </Typography>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </Grid>
        {/* <img src={item.image} alt={item.title} /> */}
      </Grid>
    </Grid>
  )
}

export default CartItem
