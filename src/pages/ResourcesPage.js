import React, { useState } from 'react'
import { Button, Grid } from '@mui/material'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import { Typography } from '@mui/material'
import { List } from '@mui/material'
import { ListItem } from '@mui/material'
import { Hidden } from '@mui/material'
import { IconButton } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { ArrowForward } from '@mui/icons-material'

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
        answerText: 'Equality in America',
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
        answerText: 'Mr. Smith Goes to Washington',
      },
    ],
  },
  {
    id: 4,
    imageSrc: ElvisPresley,
    questionText: 'Which of his songs is used in the movie Forrest Gump',
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
        <Grid container direction="column" alignItems={'center'}>
          <Grid item>
            <Typography variant="h4">Play with us!</Typography>
            <Typography variant="subtitle2">
              Click on the answer you think it's correct.
            </Typography>
          </Grid>
          <Grid item>
            {questions.length && currentQuestion <= questions.length - 1 && (
              <Grid container flexDirection="row">
                <Grid item container>
                  <img src={imageSrc} alt={questionText} />
                  <Card key={currentQuestion}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Question #{currentQuestion + 1}
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        {questionText}
                      </Typography>
                      <List>
                        {answerOptions.map((answerOption, index) => (
                          <ListItem key={index}>
                            <Button
                              variant="contained"
                              sx={{
                                backgroundColor:
                                  activeAnswer !== null &&
                                  activeAnswer === index
                                    ? answerOption.isCorrect === true
                                      ? '#4CAF50'
                                      : '#F44336'
                                    : undefined,
                              }}
                              onClick={() => handleAnswerClick(index)}
                              // disabled={answerStatus !== null}
                            >
                              {answerOption.answerText}
                            </Button>
                          </ListItem>
                        ))}
                      </List>
                      {answerStatus !== null && (
                        <Button
                          variant="contained"
                          onClick={handleNextClick}
                          disabled={currentQuestion === questions.length - 1}
                        >
                          Next Question
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            )}
            {currentQuestion === questions.length && (
              <Typography variant="h4">Quiz Completed! Well Done!</Typography>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default ResourcesPage
