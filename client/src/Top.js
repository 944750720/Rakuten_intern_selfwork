//import React from 'react'
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { getSuperMarket } from './discount/api/getList'

export const Top = () => {
    // let data = [
    //     {id: 1, df: true, name: 'Taro', pv: Math.random()},
    //     {id: 1, df: true, name: 'Taro', pv: Math.random()},
    // ];

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async () => {
        // POSTリクエストで検索結果をサーバーに送信
        const response = await fetch('/api/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Search: searchTerm }), 
        });
        if (response.ok) {
            // 検索が成功した場合の処理（例：ページ遷移）
            navigate(`/search/${searchTerm}`);
        } else {
            // 検索が失敗した場合の処理
            navigate(`/search/${searchTerm}`);
            //とりあえず遷移
            //console.error('Search failed');
        }
    };

    const initialState = {
        Supermarket_ID: '',
        Supermarket_Name: '',
        Discount_Flag: false,
        Maximum_Discount_Rate: '',
    }

    const[superlist, setDaily] = useState(initialState);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
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
            <center>
            <h1>Search</h1>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>

            <h1>Nearby shops</h1>
                {loading ?
                        <h1>Loading....</h1>
                        :
                    <table className="table" border="1" width="300">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col-2">Discount Flag</th>
                                <th scope="col-2">Supermarket Name</th>
                                <th scope="col-4">Discount Flag</th>
                                <th scope="col-6"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.values(superlist).map((value) =>
                                <tr>
                                    <td>{value.Discount_Flag ? <center>🚩</center> : " "}</td>
                                    <th scope="row">{value.Supermarket_Name}</th>
                                    <td><center>{value.Maximum_Discount_Rate} %</center></td>
                                    <td><Link to={`/supermarket/${value.Supermarket_ID}/foods`}>Detail</ Link></td>
                                </tr>
                            )}
                
                            {/* {data.map((value) =>
                                <tr>
                                    <th scope="row">{value.id}</th>
                                    <td>{{value} ? "🚩" : " "}</td>
                                    <td>{value.name}</td>
                                    <td>{value.pv}</td>
                                </tr>
                            )} */}
                        </tbody>
                    </table>
                }
            </center>
        </div>
    )
}