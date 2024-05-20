import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// useParams: in order to determine th id of the exercise the user is currently on so I can fetch additional data about it
import { Box } from '@mui/material';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';


const ExerciseDetail = () => {
    //here i actually create this function
    const [exerciseDetail, setExerciseDetail] = useState({});
    // adding the state for the youtube videos data
    const [exerciseVideos, setExerciseVideos] = useState([]);
    // adding the state for the third API call (similar target exercises)
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    // adding the state for the fourth API call (similar equipment exercises)
    const [equipmentExercises, setEquipmentExercises] = useState([]);
    // getting the id of the exercise
    const { id } = useParams()

    //creating a useEffect in order to populate the exerciseDetail
    useEffect(() => {
       const fetchExercisesData = async() => {
        //    setting up the URLs for the APIs i'm gonna call
        // first the API for the exercises i've been using 
         const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            //    then the youtube search and download API in order to show exercise videos
         const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';


         const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
           console.log({exerciseDetailData});
           // after fetching those data, now setting the state 
           setExerciseDetail(exerciseDetailData);

           // making the second API call (for the youtube videos)
           const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
           // now setting the state for the second API call
           setExerciseVideos(exerciseVideosData.contents);

           // making the third API call and fetching data to get similar exercises
           const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
            exerciseOptions);
            // now setting the state for the third API call
            setTargetMuscleExercises(targetMuscleExercisesData);

          // making the fourth API call and fetching data to get similar equipment exercises
            const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions);
            // now setting the state for the fourth API call
            setEquipmentExercises(equipmentExercisesData);
       };
   
       fetchExercisesData();
    }, [id]);

    return (
        <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
            {/* first i send the exerciseDetail to the Detail component */}
            <Detail exerciseDetail={exerciseDetail}/>
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />

        </Box>
    )

}
export default ExerciseDetail
