import { Badge, Drawer, Grid, LinearProgress } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'
import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import { Wrapper } from '../App.styles.js'
import Item from '../components/Item/Item.js'
import Cart from '../components/Cart/Cart.js'
import axios from 'axios'

export const CartItemType = {
  id: 0,
  title: '',
  description: '',
  days: '',
  time: '',
  frequency: '',
  price: '',
  amount: 0,
}

const ShoppingCart = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [sessions, setSessions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedSession, setSelectedSession] = useState(null)

  const fetchSessions = async () => {
    try {
      const { data } = await axios.get(
        'https://doubtful-red-fish.cyclic.app/book-a-session'
      )
      setSessions(data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setError('Something went wrong')
    }
  }

  useEffect(() => {
    fetchSessions()
  }, [])

  const getTotalItems = (items) =>
    items.reduce((acc, item) => acc + item.amount, 0)

  const handleAddToCart = (clickedItem) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item._id === clickedItem._id)

      if (isItemInCart) {
        return prev.map((item) =>
          item._id === clickedItem._id
            ? { ...item, amount: item.amount + 1 }
            : item
        )
      }

      return [...prev, { ...clickedItem, amount: 1 }]
    })
  }

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item._id === id) {
          if (item.amount === 1) return acc
          return [...acc, { ...item, amount: item.amount - 1 }]
        } else {
          return [...acc, item]
        }
      }, [])
    )
  }

  if (isLoading) return <LinearProgress />
  if (error) return <div>{error}</div>

  const handleItemClick = (session) => {
    setSelectedSession(session)
  }

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <Button onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCart />
        </Badge>
      </Button>

      <Grid container spacing={3}>
        {sessions?.map((item) => (
          <Grid item key={item._id} xs={12} sm={4}>
            <div onClick={() => handleItemClick(item)}>
              <Item
                item={item}
                handleAddToCart={handleAddToCart}
                selectedSession={selectedSession}
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default ShoppingCart
