import React from 'react';
import './Toppage.css';
import Search from "./Search";
//import { render } from 'react-dom';
//import { useTable } from 'react-table';
//import { columns, data } from "./shoplist";

function Toppage() {
  const handleSearch = (term: string) => {
    console.log(`Searching for ${term}`);
  };

  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   rows,
  //   prepareRow
  // } = useTable({
  //   columns,
  //   data
  // });


  return (
    <div className="App">
      <Search onSearch={handleSearch} />
      aaa
      {/* <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
  
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>
                        {cell.render("Cell")}
                    </td>
                  )
                })}
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </div>
  );
}

export default Toppage
