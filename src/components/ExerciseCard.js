import React from "react";
import { Link } from "react-router-dom";
// because each of the cards is going to be a link to the details page of that exercise
import { Button, Stack, Typography } from "@mui/material";

// this ExerciseCard component is added in order to show the images and details of the searched-for exercises
const ExerciseCard = ({ exercise }) => {
  return (
    //showing the gifs of the exercises
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        {/* showing unclickable button to show what body part is trained in that exercise  */}
        <Button
          sx={{
            ml: "20px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {/* showing unclickable button to show what muscle is targeted in that exercise  */}
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "20px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      {/* adding the exercise name below the exercise */}
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransfrom="capitalize"
        fontSize='22px'
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
