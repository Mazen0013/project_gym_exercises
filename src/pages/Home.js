import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';



const Home = () => {
    return (
        //wrapping everything inside the box and adding the three main components of the page//
        <Box>
             <HeroBanner />
             <SearchExercises />
             <Exercises />
        </Box>
    )
}

export default Home
