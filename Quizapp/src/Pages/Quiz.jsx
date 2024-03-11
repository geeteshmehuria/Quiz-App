import React, { useEffect, useState, useCallback } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import axios from "axios";


const Quiz = () => {
  const user = useSelector((state) => state.user);
  const [categoryfetch, setCategoryfetch] = useState(0);
  const [questionsData, setQuestionsData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswer, setIsAnswer] = useState();

  useEffect(() => {
    if (user.category === "General Knowledge") {
      setCategoryfetch(9);
    } else if (user.category === "Sports") {
      setCategoryfetch(21);
    } else {
      setCategoryfetch(22);
    }
  }, [user.category]);

  const fetchData = useCallback(async () => {
    const res = await axios.get(
      `https://opentdb.com/api.php?amount=${user.questionNum}&category=${categoryfetch}&difficulty=${user.difficulty}&type=multiple`
    );

    setQuestionsData(res.data.results);
  }, [user.questionNum, categoryfetch, user.difficulty]);

  useEffect(() => {
    fetchData();
  }, [user]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleCorrectAns = (option) => {
    if (option === questionsData[currentQuestionIndex].correct_answer) {
      console.log("correct");
      setIsAnswer(true);
    } else {
      console.log("incorrect");
      setIsAnswer(false);
    }
  };
  // console.log(questionsData[currentQuestionIndex].correct_answer);
  console.log(isAnswer);
  return (
    <Box>
      {questionsData.length > 0 && (
        <>
          <Text>{questionsData[currentQuestionIndex].question}</Text>
          <Box display={"flex"} flexDirection={"column"} width={"20%"}>
            <Button
              onClick={() =>
                handleCorrectAns(
                  questionsData[currentQuestionIndex].correct_answer
                )
              }
             
            >
              {questionsData[currentQuestionIndex].correct_answer}
            </Button>
          </Box>
          <Box display={"flex"} flexDirection={"column"} width={"20%"}>
            {questionsData[currentQuestionIndex].incorrect_answers.map(
              (option, index) => (
                <Button
                  onClick={() => handleCorrectAns(option)}
                  key={index}
                  className={isAnswer ? "correct" : "incorrect"}
                >
                  {option}
                </Button>
              )
            )}
          </Box>
          <Button
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          <Button
            onClick={handleNextQuestion}
            disabled={currentQuestionIndex === questionsData.length - 1}
          >
            Next
          </Button>
        </>
      )}
    </Box>
  );
};

export default Quiz;
