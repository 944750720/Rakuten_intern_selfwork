import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { getSuperMarket } from '../api/getList'

export const Search = () => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  console.log("Query:", query);
  const initialState = {
    id: '',
    name: '',
    supermarket_id: '',   
}

const[superlist, setDaily] = useState(initialState);
// const[loading, setLoading] = useState(true);

useEffect(() => {
    getSuperMarket()
    .then(d => {
        setDaily(d)
        // setLoading(false)
    })
    .catch(e => {
        throw new Error(e)
    })
},[])

//   useEffect(() => {
//     // ここでAPIから検索結果を取得するなどの処理
//     // 仮のデータをセット
//     setSearchResults([
//       { id: 1, name: 'Shop 1' },
//       { id: 2, name: 'Shop 2' },
//     ]);
//   }, [query]);

//   useEffect(() => {
//     fetch(`http://127.0.0.1:8000/api/search/`)
//       .then((response) => response.json())
//       .then((data) => {
//         setSearchResults(data);
//         console.log("APIデータ:", data); 
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/search/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Search: query }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setSearchResults(data);  // 結果をStateに保存
        } catch (error) {
            console.error('Fetching or parsing failed:', error);
        }
    };

    fetchData();
}, [query]);  // queryが変更された場合に再実行

  return (
    <div>
      {/* <h1>Search Results for "{query}"</h1>
      <ul>
        {Object.values(searchResults).map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul> */}
       <h1>Search Query: {query}</h1> 
       <h2>Search Results:</h2>
        <ul>
            {searchResults.map((result, index) => (
                <li key={index}>{JSON.stringify(result)}</li>
            ))}
        </ul>
      <table className="table" border="1" width="300">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col-2">id</th>
                            <th scope="col-2">Discount Flag</th>
                            <th scope="col-4">Supermarket Name</th>
                            <th scope="col-6">pv</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(superlist).map((value) =>
                            <tr>
                                <th scope="row">{value.id}</th>
                                <td>{value.id === 1 ? <center>🚩</center> : " "}</td>
                                <td><center>{value.name}</center></td>
                                <td><Link to={`/supermarket/${value.supermarket_id}`}>Detail</ Link></td>
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
    </div>
  );
};

export default Search;

