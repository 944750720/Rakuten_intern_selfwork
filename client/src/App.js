import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Top } from './Top';
import { DailyTop } from './daily/pages/DailyTop';
import { CategoryView } from './daily/pages/CategoryView';
import { DailyDetail } from './daily/pages/DailyDetail';

import "./App.css"

export const App = () => {  
  return(
    <div>
      <Header />
      <Routes>
          <Route path="/" element={<Top />} />
          <Route path='/daily' element={<DailyTop/>} />
          <Route path='/daily/:id' element={<DailyDetail />} />
          <Route path='/daily/category/:cat' element={<CategoryView/>}/>
          <Route render={() => <h4>not found...</h4>} />
      </Routes>
    </div>
  )  
}