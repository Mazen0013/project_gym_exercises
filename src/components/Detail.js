import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
    // the exerciseDetail is gonna have additional values, and here i'm destructuring them 
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    // creating a new array to loop over in order to show the target muscle group and the equipment used
    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }
    ]

    // now i can reference those values by name instead of writing (exerciseDetail.name / .bodyPart....)


    return (
        <Stack gab='60px' sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center'}} >
          <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
          <Stack sx={{ gap: { lg: '35px', xs: '20px'}}}>
              {/* showing the name of the exercise */}
              <Typography variant='h3' textTransform='capitalize'>
                  {name}
              </Typography>
              {/* showing the exercise detail */}
              <Typography variant='h6'>
                  Exercises keep you strong. {name} {` `}
                  is one of the best exercises to target your {target}. it
                  will help you improve your mood and gain energy. 
              </Typography>
              {/* showing the target muscle groups and the equipment that you need */}
              {/* here looping over the extra detail */}
              {extraDetail.map((item) => (
                  <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
                      {/* showing the little icons */}
                      <Button sx={{ background: '#fff2db', borderRadius:'50%', width:'100px', height:'100px'}}>
                          <img src={item.icon} alt={bodyPart} style={{ width: '50px',height:'50px' }}/>
                      </Button>
                      {/* showing the name of the item */}
                      <Typography textTransform='capitalize' variant='h5'>
                          {item.name}
                      </Typography>
                  </Stack>
              ))}
          </Stack>
        </Stack>
    )
}

export default Detail
