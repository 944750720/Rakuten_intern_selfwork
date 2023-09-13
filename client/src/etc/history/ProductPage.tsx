import React from 'react';
import './Toppage.css';
import Search from "./Search";

function ProductPage() {
    const handleSearch = (term: string) => {
      console.log(`Searching for ${term}`);
    };
  
  
    return (
      <div className="App">
        <Search onSearch={handleSearch} />
        aaa
      </div>
    );
  }