import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Api from '../utils/api.utils.js'
import Loading from '../components/Loading.js'
import { Card } from '@mui/material'
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
    try {
      await Api.addMeeting(meeting)
      sendToCart('/purchase-a-session-or-a-bundle')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMeeting()
  }, [])

  return meetings.length === 0 ? (
    <Loading />
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
