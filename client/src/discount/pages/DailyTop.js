import React, { useState, useEffect } from 'react'
import { getSuperMarket } from '../api/getList'
import { DailyContent } from '../components/DailyContent'
import { CategoryList } from '../components/CategoryList'


export const DailyTop = () => {
    const initialState = {
        id: '',
        date: '',
        evaluation: '',   
    }

    const[daily, setDaily] = useState(initialState);
    const[loading, setLoading] = useState(true);

    useEffect(() => {v
        getSuperMarket()
        .then(d => {
            setDaily(d)
            setLoading(false)
        })
        .catch(e => {
            throw new Error(e)
        })
    },[])

    return(
        <div>
            {
                loading ?
                <h1>loading...</h1>
                :
                <div>
                {daily.map( d => <DailyContent {...d}  /> )}
                </div>
            }
            <CategoryList />
        </div>
    )

}