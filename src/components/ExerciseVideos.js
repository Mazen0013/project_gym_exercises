import React from 'react';
import { Box, Stack, Typography } from '@mui/material';


const ExerciseVideos = ({ exerciseVideos, name }) => {
    console.log(exerciseVideos);
    if(!exerciseVideos.length) return 'Loading...';

    return (
        <Box sx={{ marginTop: { lg: '200px', xs: '20px'}}} p='20px'>
            {/* showing the title to show exercise videos */}
            <Typography variant='h3' mb='33px'>
                Watch <span style={{ color: '#ff2625', textTransform:'capitalize'}}>{name}</span> exercise videos
            </Typography>
            {/* looping over the exercise videos  */}
            <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
            sx={{
                flexDirection: { lg: 'row' },
                gap: { lg: '110px', xs: '0' }
            }}
            >
                {/* using slice in order to decide how may videos i wanna show.. here 6 videos */}
                {exerciseVideos?.slice(0,6).map((item, index) => (
                    // an anchor tag is used here because each of the videos will be a link
                    <a key={index}
                    className='exercise-video'
                    href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                    target='_blank'
                    rel='noreferrer'
                    >
                        <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                        {/* adding the name of the video and the creator */}
                        <Box>
                            <Typography variant='h5' color='#000'>
                                {item.video.title}
                            </Typography>
                            <Typography variant='h6' color='#000'>
                                {item.video.channelName}
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>
        </Box>
    )
}

export default ExerciseVideos
