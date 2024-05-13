import React from "react";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    // creating the currentPage state
  const [currentPage, setCurrentPage] = useState(1);
//   adding the variable exercisesPerPage and setting it to 9 in order to show only 9 exercises per page
  const exercisesPerPage = 9;
//   instead of showing all the exercises in one page, i wanna calculate only the first 9 then the next 9 ....
const indexOfLastExercise = currentPage * exercisesPerPage;
// setting the variable of the first exercise on the new page 
const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
// getting the current exercises
const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise );

//   creating he paginate component
const paginate = (e, value) => {
    // here with the event and tha value, i'm setting the current page to be equal to the value
    setCurrentPage(value);
    // and to scroll to the top of the page
    window.scrollTo({ top:1800, behavior: 'smooth'})


}

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "80px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
          
        {/* instead of going through all the exercises like this {exercises.map((exercise, index) => ( */}
            {currentExercises.map((exercise, index) => (
          // instead of showing the exercise.name, the ExerciseCard tag is added
          // <p>{exercise.name}</p>
          <ExerciseCard key="index" exercise={exercise} />
        ))}
      </Stack>
      {/* implementing pagination using material ui in order to sor the results */}
      <Stack mt="100px" alignItems='center'>
        {exercises.length > 9 && (
          //  if results are greater than 9 the pagination component is gonna be shown
          <Pagination color="standard" shape="rounded" 
           defaultPage={1}
        //    setting the count of pages by using the math function to get the higher number of exercises divided by 9 (the variable we set in line 11) 
            // in order to have 9 exercises per page 
           count={Math.ceil(exercises.length / exercisesPerPage)}
           page={currentPage}
           onChange={paginate}
           size='large'
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
