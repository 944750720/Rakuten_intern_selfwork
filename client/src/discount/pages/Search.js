import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { getSuperMarket, searchSuperMarket } from '../api/getList'

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

useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await searchSuperMarket(query);
        setSearchResults(data);  
      } catch (error) {
        console.error('Fetching or parsing failed:', error);
      }
    };
    fetchData();
}, [query]);  // queryが変更された場合に再実行

  return (
    <div>
        <h1>Search Query: {query}</h1>
      <h2>Search Results:</h2>
      <table className="table" border="1" width="300">
        <thead className="table-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Discount Flag</th>
            <th scope="col">Supermarket Name</th>
            <th scope="col">Maximum Discount Rate</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((result) => (
            <tr key={result.Supermarket_ID}>
              <th scope="row">{result.Supermarket_ID}</th>
              <td>{result.Discount_Flag ? "🚩" : " "}</td>
              <td>{result.Supermarket_Name}</td>
              <td>{result.Maximum_Discount_Rate}</td>
            </tr>
          ))}
        </tbody>

      </table>
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
            
                    </tbody>
                </table>
    </div>
  );
};

export default Search;

