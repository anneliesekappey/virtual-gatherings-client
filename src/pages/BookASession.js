// import React, { useState, useEffect } from 'react'
// // import { useNavigate } from 'react-router-dom'
// import Api from '../utils/api.utils.js'
// import Loading from '../components/Loading.js'
// import { Badge, Drawer, LinearProgress } from '@mui/material'
// import { AddShoppingCart } from '@mui/icons-material'
// // import { CardContent } from '@mui/material'
// import { Typography } from '@mui/material'
// import { Grid } from '@mui/material'
// import { Button } from '@mui/material'
// import { Wrapper } from '../App.styles.js'
// import Item from '../components/Item/Item.js'
// import Cart from '../components/Cart/Cart.js'
// import { Link } from 'react-router-dom'

// export const CartItemType = {
//   id: 0,
//   title: '',
//   description: '',
//   days: '',
//   time: '',
//   frequency: '',
//   price: '',
//   amount: 0,
// }

// const BookASession = () => {
//   const [cartOpen, setCartOpen] = useState(false)
//   const [cartItems, setCartItems] = useState([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [error, setError] = useState('')
//   const [sessions, setSessions] = useState([])

//   const getMeeting = async () => {
//     try {
//       const data = await Api.getMeetings()
//       setSessions(data)
//       setIsLoading(false)
//     } catch (error) {
//       setIsLoading(false)
//       console.log(error)
//       setError('Something went wrong')
//     }
//   }

//   useEffect(() => {
//     getMeeting()
//   }, [])

//   const getTotalMeetings = (meetings) =>
//     meetings.reduce((acc, meeting) => acc + meeting.amount, 0)

//   const handleAddToCart = (clickedMeeting) => {
//     setCartItems((prev) => {
//       const isItemInCart = prev.find(
//         (meeting) => meeting.id === clickedMeeting.id
//       )

//       if (isItemInCart) {
//         return prev.map((meeting) =>
//           meeting.id === clickedMeeting.id
//             ? { ...meeting, amount: meeting.amount + 1 }
//             : meeting
//         )
//       }

//       return [...prev, { ...clickedMeeting, amount: 1 }]
//     })
//   }

//   const handleRemoveFromCart = (id) => {
//     setCartItems((prev) =>
//       prev.reduce((acc, meeting) => {
//         if (meeting.id === id) {
//           if (meeting.amount === 1) return acc
//           return [...acc, { ...meeting, amount: meeting.amount - 1 }]
//         } else {
//           return [...acc, meeting]
//         }
//       }, [])
//     )
//   }

//   if (isLoading)
//     return (
//       <Loading>
//         <LinearProgress />
//       </Loading>
//     )
//   if (error) return <div>{error}</div>

//   return (
//     <Grid container>
//       <Typography variant="h6">Choose a Session</Typography>
//       <Wrapper>
//         <Drawer
//           anchor="right"
//           open={cartOpen}
//           onClose={() => setCartOpen(false)}
//         >
//           <Cart
//             cartItems={cartItems}
//             addToCart={handleAddToCart}
//             removeFromCart={handleRemoveFromCart}
//           />
//         </Drawer>
//         <Button onClick={() => setCartOpen(true)}>
//           <Badge badgeContent={getTotalMeetings(cartItems)} color="error">
//             <AddShoppingCart />
//           </Badge>
//         </Button>

//         <Grid container spacing={3}>
//           {sessions?.map((meeting) => (
//             <Grid item key={meeting.id} xs={12} sm={4}>
//               <Link to={`/purchase-a-session-or-a-bundle/${meeting.id}`}>
//                 <Item item={meeting} handleAddToCart={handleAddToCart} />
//               </Link>
//             </Grid>
//           ))}
//         </Grid>
//       </Wrapper>
//     </Grid>
//   )
// }

// export default BookASession

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../utils/api.utils.js'
import Loading from '../components/Loading.js'
import { Card, LinearProgress } from '@mui/material'
import { CardContent } from '@mui/material'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
import { Button } from '@mui/material'

const BookASession = (props) => {
  const [meetings, setMeetings] = useState([])

  const getMeeting = async () => {
    try {
      const data = await Api.getMeetings()
      setMeetings(data)
    } catch (error) {
      console.log(error)
    }
  }

  const sendToCart = useNavigate()
  const addMeetingToCart = async (
    name,
    description,
    days,
    time,
    frequency,
    price
  ) => {
    const meeting = {
      title: name,
      description,
      days,
      time,
      frequency,
      price,
    }
    sendToCart('/purchase-a-session-or-a-bundle', { state: { meeting } })
  }

  useEffect(() => {
    getMeeting()
  }, [])

  return meetings.length === 0 ? (
    <div>
      <LinearProgress></LinearProgress>
      <Loading />
    </div>
  ) : (
    <Grid container>
      <Typography variant="h6">Choose a Session</Typography>
      {meetings.map((meeting) => {
        return (
          <Card>
            <CardContent key={meeting._id}>
              <Typography variant="h4">{meeting.title}</Typography>
              <Typography variant="subtitle1">{meeting.description}</Typography>
              <Typography variant="subtitle2">{meeting.days}</Typography>
              <Typography variant="subtitle2">{meeting.time}</Typography>
              <Typography variant="subtitle2">{meeting.frequency}</Typography>
              <Typography variant="subtitle2">{meeting.price}</Typography>
              <Button
                onClick={() => {
                  addMeetingToCart(
                    meeting.title,
                    meeting.description,
                    meeting.days,
                    meeting.time,
                    meeting.frequency,
                    meeting.price
                  )
                }}
              >
                Add to cart
              </Button>
            </CardContent>
          </Card>
        )
      })}
    </Grid>
  )
}

export default BookASession
