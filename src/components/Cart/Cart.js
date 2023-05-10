import React from 'react'
import CartItem from '../CartItem/CartItem.js'
import { Typography } from '@mui/material'
import { useMediaQuery } from '@mui/material'
import { Grid } from '@mui/material'

const Cart = ({ cartItems, addToCart, removeFromCart }) => {
  const matchesSM = useMediaQuery('(max-width:600px)')
  const matchesLG = useMediaQuery('(max-width:1200px)')

  const calculateTotal = (items) =>
    items.reduce((acc, item) => acc + item.amount * item.price, 0)

  return (
    <Grid
      container
      direction="row"
      backgroundColor="#FAF9F6"
      height={'100%'}
      padding="1em"
    >
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        justifyContent={matchesSM ? 'center' : 'left'}
        alignItems="flex-start"
        sx={{
          marginBottom: matchesSM ? '13em' : matchesLG ? '2em' : 0,
          marginTop: matchesSM ? 0 : matchesLG ? '2em' : 0,
        }}
        sm={3}
        lg={9}
      >
        <Grid container>
          <Typography variant="h4" textAlign={'center'}>
            Your Cart
          </Typography>
        </Grid>
        <Grid container>
          {cartItems.length === 0 ? (
            <Typography variant="h6">No items in cart.</Typography>
          ) : null}
          {cartItems.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </Grid>
        <Typography variant="subtitle2">
          Total: ${calculateTotal(cartItems).toFixed(2)}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Cart
