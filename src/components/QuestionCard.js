import React from "react";
import { Card, Typography } from "@mui/material";
import { CardContent } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { Button } from "@mui/material";

const quizQuestions = [
    {
      _id: 1,
      questionText: "Test 1",
      answerOptions: {
        "1.First Option", "2.Second Option", "3.Third Option"},
        addedAnswerValue: 4,
    }
  ]

const QuestionCard = ({
    _id,
    questionText,
    answerOptions,
    addedAnswerValue,
    activeAnswer,
    setActiveAnswer,
}) => {
    const handleClickAnswer = (index) => {
        setActiveAnswer(index);
    };
    console.log(answerOptions)

    return (
        <Card key={_id}>
            <CardContent>
                <Typography variant="p">
                    Question: <strong>{questionText}</strong>
                </Typography>
                <List>
                    <ListItem>
                        {answerOptions.map((option, index) => {
                            return (
                                <Button onClick={() => {
                                    addedAnswerValue(option.value);
                                    handleClickAnswer(index);
                                }} key={index}
                                sx={{backgroundColor: activeAnswer === index ? "#FE5F55" : "", color: activeAnswer === index ? "white" : ""
                            }}
                            >
                                {option.answerText}
                            </Button>
                            );
                        })}
                    </ListItem>
                </List>
            </CardContent>
        </Card>
    )
}

export default QuestionCard