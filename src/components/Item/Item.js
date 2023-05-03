import React from 'react'
import { Button } from '@mui/material'
import { Wrapper } from './Item.Styles.js'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
import DancingIconImage from '../../images/icons/DancingIconImage.png'

const Item = ({ item, handleAddToCart, selectedSession }) => {
  const handleClick = () => {
    handleAddToCart(item)
  }

  const isSelected = selectedSession && selectedSession.id === item.id

  return (
    <Grid container flexDirection={'row'}>
      <Wrapper>
        <img src={DancingIconImage} alt={item.title} />
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
