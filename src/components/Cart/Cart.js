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
        sm={6}
      >
        <Typography variant="subtitle2" textAlign={'center'}>
          Your Cart
        </Typography>
        {cartItems.length === 0 ? <p>No items in cart.</p> : null}
        {cartItems.map((item) => (
          <CartItem
            key={item._id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
        <Typography variant="subtitle2">
          Total: ${calculateTotal(cartItems).toFixed(2)}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Cart
