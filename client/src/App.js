import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Stocktwits from './pages/Stocktwits'
import './App.css'


const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/stocktwits" component={Stocktwits} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;