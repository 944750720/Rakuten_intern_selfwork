import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './Header';
import { Top } from './Top';
import { CategoryView } from './app/pages/CategoryView';
import { DailyDetail } from './app/pages/DailyDetail';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div>
            <Route path='/' Component={Top} />
            <Route path='/app' Component={DailyTop} />
            <Route path='/app/:id' Component={DailyDetail} />
            <Route path='/app/category/:cat' Component={CategoryView}/>
            {/* <Route render={() => <h4>not found...</h4>} /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
