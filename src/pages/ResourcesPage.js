import React, { useState } from 'react'
import { Button, Grid, useMediaQuery } from '@mui/material'
import { Typography } from '@mui/material'
import { List } from '@mui/material'
import { ListItem } from '@mui/material'
import { Hidden } from '@mui/material'
import { IconButton } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { ArrowForward } from '@mui/icons-material'
import { Box } from '@mui/material'
import { Paper } from '@mui/material'

import CharlieBrown from '../images/quiz/CharlieBrown.jpg'
import MLK from '../images/quiz/MLK.jpg'
import NormaJean from '../images/quiz/NormaJean.jpg'
import ElvisPresley from '../images/quiz/ElvisPresley.jpg'
import MuhammadAli from '../images/quiz/MuhammadAli.jpg'
import CharlesChaplin from '../images/quiz/CharlesChaplin.jpg'
import PrincessDiana from '../images/quiz/PrincessDiana.jpg'
import BarackObama from '../images/quiz/BarackObama.jpg'
import JohnLennon from '../images/quiz/JohnLennon.jpg'
import JFK from '../images/quiz/JFK.jpg'

const questions = [
  {
    id: 1,
    imageSrc: CharlieBrown,
    questionText: "What is his dog's name?",
    answerOptions: [
      {
        isCorrect: true,
        answerText: 'Snoopy',
      },
      {
        isCorrect: false,
        answerText: 'Stoopy',
      },
      {
        isCorrect: false,
        answerText: 'Benji',
      },
      {
        isCorrect: false,
        answerText: 'Toto',
      },
    ],
  },
  {
    id: 2,
    imageSrc: MLK,
    questionText: 'What is the name of his most famous speech?',
    answerOptions: [
      {
        isCorrect: false,
        answerText: 'Equal Rights Now',
      },
      {
        isCorrect: false,
        answerText: 'I Have Rights',
      },
      {
        isCorrect: true,
        answerText: 'I Have a Dream',
      },
      {
        isCorrect: false,
        answerText: 'Equality',
      },
    ],
  },
  {
    id: 3,
    imageSrc: NormaJean,
    questionText: 'Which one is NOT one of her movies?',
    answerOptions: [
      {
        isCorrect: false,
        answerText: 'Some Like It Hot',
      },
      {
        isCorrect: false,
        answerText: 'Gentlemen Prefer Blondes',
      },
      {
        isCorrect: false,
        answerText: 'The Seven Year Itch',
      },
      {
        isCorrect: true,
        answerText: 'Funny Girl',
      },
    ],
  },
  {
    id: 4,
    imageSrc: ElvisPresley,
    questionText: 'Which of his songs is used in the movie Forrest Gump?',
    answerOptions: [
      {
        isCorrect: true,
        answerText: 'Hound Dog',
      },
      {
        isCorrect: false,
        answerText: 'Love Me Tender',
      },
      {
        isCorrect: false,
        answerText: 'Suspicious Minds',
      },
      {
        isCorrect: false,
        answerText: 'Jailhouse Rock',
      },
    ],
  },
  {
    id: 5,
    imageSrc: MuhammadAli,
    questionText: 'Which sport is he famous for?',
    answerOptions: [
      {
        isCorrect: false,
        answerText: 'Basketball',
      },
      {
        isCorrect: false,
        answerText: 'Baseball',
      },
      {
        isCorrect: false,
        answerText: 'Football',
      },
      {
        isCorrect: true,
        answerText: 'Boxing',
      },
    ],
  },
  {
    id: 6,
    imageSrc: CharlesChaplin,
    questionText: 'Which one is NOT of his movies?',
    answerOptions: [
      {
        isCorrect: false,
        answerText: 'The Great Dictator',
      },
      {
        isCorrect: true,
        answerText: 'The Wizard of Oz',
      },
      {
        isCorrect: false,
        answerText: 'Modern Times',
      },
      {
        isCorrect: false,
        answerText: 'The Kid',
      },
    ],
  },
  {
    id: 7,
    imageSrc: PrincessDiana,
    questionText: 'Diana, Princess of...',
    answerOptions: [
      {
        isCorrect: false,
        answerText: 'England',
      },
      {
        isCorrect: false,
        answerText: 'Ireland',
      },
      {
        isCorrect: false,
        answerText: 'Great Britain',
      },
      {
        isCorrect: true,
        answerText: 'Wales',
      },
    ],
  },
  {
    id: 8,
    imageSrc: BarackObama,
    questionText: 'What was his famous campaign chant in 2008?',
    answerOptions: [
      {
        isCorrect: true,
        answerText: 'Yes, We Can',
      },
      {
        isCorrect: false,
        answerText: 'Just Do It',
      },
      {
        isCorrect: false,
        answerText: 'New Hope',
      },
      {
        isCorrect: false,
        answerText: 'Lock Her Up',
      },
    ],
  },
  {
    id: 9,
    imageSrc: JohnLennon,
    questionText: 'Which band did he start in the 1960s?',
    answerOptions: [
      {
        isCorrect: false,
        answerText: 'The Who',
      },
      {
        isCorrect: false,
        answerText: 'The Rolling Stones',
      },
      {
        isCorrect: true,
        answerText: 'The Beatles',
      },
      {
        isCorrect: false,
        answerText: 'The Monkees',
      },
    ],
  },
  {
    id: 10,
    imageSrc: JFK,
    questionText: 'What is his middle name?',
    answerOptions: [
      {
        isCorrect: false,
        answerText: 'Frank',
      },
      {
        isCorrect: true,
        answerText: 'Fitzgerald',
      },
      {
        isCorrect: false,
        answerText: 'Finn',
      },
      {
        isCorrect: false,
        answerText: 'Flynn',
      },
    ],
  },
]

const ResourcesPage = () => {
  const matchesSM = useMediaQuery('(maxWidth=600px)')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [activeAnswer, setActiveAnswer] = useState(null)
  const [answerStatus, setAnswerStatus] = useState(null)

  const handleAnswerClick = (answerIndex) => {
    setActiveAnswer(answerIndex)
    const isCorrect =
      questions[currentQuestion].answerOptions[answerIndex]?.isCorrect
    setAnswerStatus(isCorrect)
  }

  const handlePreviousClick = () => {
    setActiveAnswer(null)
    setAnswerStatus(null)

    if (currentQuestion === 0) {
      setCurrentQuestion(questions.length - 1)
    } else {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleNextClick = () => {
    setActiveAnswer(null)
    setAnswerStatus(null)

    if (currentQuestion === questions.length - 1) {
      setCurrentQuestion(0)
    } else {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const { imageSrc, questionText, answerOptions } = questions[currentQuestion]

  return (
    <div>
      <Grid item container sx={{ backgroundColor: '#F8F8F8' }}>
        <Hidden mdDown>
          <Grid container direction="row" justifyContent={'space-between'}>
            <Grid
              item
              sx={{
                marginTop: '0.7em',
                textAlign: 'left',
                marginLeft: '1.4em',
              }}
            >
              <IconButton
                onClick={() => handlePreviousClick()}
                disabled={currentQuestion === 0}
              >
                <ArrowBack></ArrowBack>
              </IconButton>
            </Grid>
            <Grid
              item
              sx={{
                marginTop: '0.7em',
                textAlign: 'right',
                marginRight: '1.4em',
              }}
            >
              <IconButton
                onClick={() => handleNextClick()}
                disabled={currentQuestion === questions.length - 1}
              >
                <ArrowForward></ArrowForward>
              </IconButton>
            </Grid>
          </Grid>
        </Hidden>
        <Grid
          container
          direction="column"
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Grid item>
            <Typography variant="h4">Play with us!</Typography>
            {/* <Typography variant="subtitle1">
              Click on the correct answer.
            </Typography> */}
          </Grid>
          <Grid item sx={{ marginTop: 4 }}>
            <Grid container flexDirection={matchesSM ? 'column' : 'row'}>
              <Grid item container>
                {questions.length &&
                  currentQuestion <= questions.length - 1 && (
                    <Box sx={{ maxWidth: matchesSM ? 500 : 900, flexGrow: 2 }}>
                      <Paper
                        square
                        elevation={matchesSM ? 6 : 15}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          height: matchesSM ? 80 : 60,
                          padding: matchesSM ? 1.6 : 2.6,
                          bgcolor: '#FAF9F6',
                          color: '#FE5F55',
                          borderRadius: matchesSM ? 0 : 1,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontFamily: 'Montserrat',
                            lineHeight: '1.3em',
                            fontVariant: 'small-caps',
                            fontSize: '1.3em',
                          }}
                        >
                          {questionText}
                        </Typography>
                      </Paper>
                      <Box
                        sx={{
                          height: matchesSM ? 600 : 350,
                          maxWidth: matchesSM ? 500 : 900,
                          width: '100%',
                          paddingTop: 1,
                          paddingBottom: 5,
                        }}
                      >
                        <Paper
                          square
                          elevation={6}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: matchesSM ? 600 : 350,
                            paddingLeft: 0.5,
                            paddingRight: 0.5,
                            paddingTop: 0.4,
                            paddingBottom: 0.4,
                            bgcolor: '#FAF9F6',
                            color: '#868686',
                            borderRadius: matchesSM ? 0 : 2,
                          }}
                        >
                          <img
                            src={imageSrc}
                            style={{
                              width: CharlieBrown
                                ? '225px'
                                : PrincessDiana
                                ? '180.5px'
                                : JohnLennon
                                ? '188.5'
                                : undefined,
                              height: CharlieBrown
                                ? '225px'
                                : PrincessDiana
                                ? '225px'
                                : JohnLennon
                                ? '225px'
                                : undefined,
                            }}
                            alt={questionText}
                          />
                          <List justifyContent="center" alignItems="center">
                            {answerOptions.map((answerOption, index) => (
                              <ListItem key={index}>
                                <Button
                                  variant="contained"
                                  sx={{
                                    width: 147,
                                    fontFamily: 'Cardo',
                                    fontSize: '1rem',
                                    textTransform: 'none',
                                    color: '#4F6367',
                                    '&:hover': {
                                      backgroundColor: '#B8D8D8',
                                    },
                                    backgroundColor:
                                      activeAnswer !== null &&
                                      activeAnswer === index
                                        ? answerOption.isCorrect === true
                                          ? '#4CAF50 !important'
                                          : '#FE5F55 !important'
                                        : undefined,
                                  }}
                                  onClick={() => handleAnswerClick(index)}
                                  // disabled={answerStatus !== null}
                                >
                                  {answerOption.answerText}
                                </Button>
                              </ListItem>
                            ))}
                            <ListItem>
                              {answerStatus !== null && (
                                <Button
                                  sx={{
                                    width: 147,
                                    fontFamily: 'Cardo',
                                    fontSize: '1rem',
                                    textTransform: 'none',
                                    fontVariant: 'small-caps',
                                    color: 'white',
                                    backgroundColor: '#7A9E9F',
                                    '&:hover': {
                                      backgroundColor: '#7A9E9F',
                                    },
                                  }}
                                  variant="contained"
                                  onClick={handleNextClick}
                                  disabled={
                                    currentQuestion === questions.length - 1
                                  }
                                >
                                  Next Question
                                </Button>
                              )}
                            </ListItem>
                          </List>
                        </Paper>
                      </Box>
                    </Box>
                  )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default ResourcesPage
