import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import { Wrapper } from './Item.Styles.js'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
import TuesWedsFriSat from '../../images/sessions/TuesWedsFriSat.jpeg'
import TwoDays from '../../images/sessions/TwoDays.jpeg'
import Tuesday from '../../images/sessions/Tuesday.jpeg'
import Wednesday from '../../images/sessions/Wednesday.jpeg'
import Friday from '../../images/sessions/Friday.jpeg'
import Saturday from '../../images/sessions/Saturday.jpeg'
import FourSuperSaturdays from '../../images/sessions/FourSuperSaturdays.jpeg'
import Twelve from '../../images/sessions/Twelve.jpeg'

const images = [
  {
    src: TuesWedsFriSat,
    id: '6450d17923310d183fb701b1',
  },
  {
    src: TwoDays,
    id: '6450d19623310d183fb701b3',
  },
  {
    src: Tuesday,
    id: '6450d1c823310d183fb701b5',
  },
  {
    src: Wednesday,
    id: '645265c48f3dbfcfa859156b',
  },
  {
    src: Friday,
    id: '6454f5c3c27f89b1408c8982',
  },
  {
    src: Saturday,
    id: '6454f615c27f89b1408c8983',
  },
  {
    src: FourSuperSaturdays,
    id: '6454f6afc27f89b1408c8984',
  },
  {
    src: Twelve,
    id: '6454f75bc27f89b1408c8985',
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
