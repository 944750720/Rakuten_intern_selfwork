import React from 'react';
import { Link } from 'react-router-dom';

import img from '../../images/logo192.png';

export const DailyContent = (daily) => {
    let eva;
    if(daily.evaluation === 'perfect'){
        eva = img;
    }else if(daily.evaluation === 'good'){
        eva = img;
    }else if(daily.evaluation === 'soso'){
        eva = img;
    }else{
        eva = img;
    }

    return(
        <div>
            <Link to={`daily/${daily.id}`}> <h1>{daily.date}</h1> </Link> 
            <img src={eva} alt="test"/>
        </div>
    )
}