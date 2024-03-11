import { Box, Button, Flex, Heading, Input, Select } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setCategory,
  setDifficulty,
  setName,
  setQuestionNum,
} from "../redux/userSlice";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const user = useSelector((state) => state);
  const [name, setNameLo] = useState("");
  const [questionNum, setQuestionNumLo] = useState("");
  const [category, setCategoryLo] = useState("");
  const [difficulty, setDifficultyLo] = useState("");

  const handleQuiz = () => {
    dispatch(setName(name));
    dispatch(setCategory(category));
    dispatch(setDifficulty(difficulty));
    dispatch(setQuestionNum(questionNum));

    // console.log(name, category, difficulty, questionNum);
    setNameLo("");
    setCategoryLo("");
    setDifficultyLo("");
    setQuestionNumLo("");

    // console.log(user);
    navigate("/quiz");
  };

  //   console.log(typeof questionNum);
  //   console.log(user);
  return (
    <>
      <Box>
        <Box width={"40%"} margin={"auto"}>
          <Heading textAlign={"center"}>Set Up Your Quiz</Heading>

          <Flex direction={"column"} gap={"3rem"} mt={"2rem"}>
            <Input
              type="text"
              placeholder={"Enter Your Name"}
              value={name}
              onChange={(e) => setNameLo(e.target.value)}
            />
            <Select
              placeholder="Select Category"
              value={category}
              onChange={(e) => setCategoryLo(e.target.value)}
            >
              <option value="General Knowledge">General Knowledge</option>
              <option value="Sports">Sports</option>
              <option value="Geography">Geography</option>
            </Select>
            <Select
              placeholder="Select Category"
              value={difficulty}
              onChange={(e) => setDifficultyLo(e.target.value)}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </Select>

            <Input
              type="text"
              placeholder={"Choose Number of Questions"}
              value={questionNum}
              onChange={(e) => setQuestionNumLo(parseInt(e.target.value))}
            />

            <Button colorScheme="pink" onClick={handleQuiz}>
              Start Quiz
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Home;
