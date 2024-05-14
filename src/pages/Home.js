import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';



const Home = () => {
    // why i have these in the home because changes in these states are gonna be reflected all across my application not just in the searchExercises
    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercises] = useState([]);

    console.log(bodyPart);

    return (
        //wrapping everything inside the box and adding the three main components of the page//
        <Box>
             <HeroBanner />
             <SearchExercises setExercises={setExercises} 
              bodyPart={bodyPart} setBodyPart={setBodyPart} 
              />
             <Exercises setExercises={setExercises} 
              bodyPart={bodyPart} exercises={exercises}
              />
        </Box>
    )
}

export default Home
