//import React from 'react'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Top = () => {
    let data = [
        {id: 1, df: true, name: 'Taro', pv: Math.random()},
        {id: 1, df: true, name: 'Taro', pv: Math.random()},
    ];

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async () => {
        // POSTリクエストで検索結果をサーバーに送信
        const response = await fetch('/api/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: searchTerm,  // 文字列として送信
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


    return(
        <div>
            <center>
            <h1>Nearby shops</h1>
                <table className="table" border="1" width="300">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col-2">id</th>
                            <th scope="col-2">df</th>
                            <th scope="col-4">name</th>
                            <th scope="col-6">pv</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((value) =>
                            <tr>
                                <th scope="row">{value.id}</th>
                                <td>{{value} ? "🚩" : " "}</td>
                                <td>{value.name}</td>
                                <td>{value.pv}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <h1>Nearby shops</h1>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </center>
        </div>
    )
}