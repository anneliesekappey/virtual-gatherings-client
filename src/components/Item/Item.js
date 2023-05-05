import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import { Wrapper } from './Item.Styles.js'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
import Friday from '../../images/sessions/Friday.jpeg'
import FourSuperSaturdays from '../../images/sessions/FourSuperSaturdays.jpeg'

const images = [
  {
    src: Friday,
    id: '6450d17923310d183fb701b1',
  },
  {
    src: FourSuperSaturdays,
    id: '6450d19623310d183fb701b3',
  },
]

const Item = ({ item, handleAddToCart, selectedSession }) => {
  const [imageSrc, setImageSrc] = useState('')

  useEffect(() => {
    const loadImage = async () => {
      const image = images.find((img) => img.id === item._id)?.src
      setImageSrc(image)
    }
    loadImage()
  }, [item])

  const handleClick = () => {
    handleAddToCart(item)
  }

  const isSelected = selectedSession && selectedSession._id === item._id

  return (
    <Grid container flexDirection={'row'}>
      <Wrapper>
        <img src={imageSrc} alt={item.title} />
        <Card alignItem={'center'}>
          <CardContent key={item._id}>
            <Typography variant="h4" textAlign={'center'}>
              {item.title}
            </Typography>
            <Typography variant="subtitle1" textAlign={'center'}>
              {item.description}
            </Typography>
            <Typography variant="subtitle2" textAlign={'center'}>
              {item.days}
            </Typography>
            <Typography variant="subtitle2" textAlign={'center'}>
              {item.time}
            </Typography>
            <Typography variant="subtitle2" textAlign={'center'}>
              {item.frequency}
            </Typography>
            <Typography variant="subtitle2" textAlign={'center'}>
              ${item.price}
            </Typography>
            <Grid container justifyContent={'center'}>
              <Button variant="outlined" onClick={handleClick}>
                {/* onClick={() => handleAddToCart(item)}> */}
                Add to cart
              </Button>
              {isSelected}
            </Grid>
          </CardContent>
        </Card>
      </Wrapper>
    </Grid>
  )
}

export default Item
