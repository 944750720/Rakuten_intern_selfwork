import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Search = () => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     // ここでAPIから検索結果を取得するなどの処理
//     // 仮のデータをセット
//     setSearchResults([
//       { id: 1, name: 'Shop 1' },
//       { id: 2, name: 'Shop 2' },
//     ]);
//   }, [query]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/search/`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
