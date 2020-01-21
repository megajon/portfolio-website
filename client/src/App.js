import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Stocktwits from './pages/Stocktwits';
import OmegaMan from './pages/OmegaMan';
import JohnBrown from './pages/JohnBrown';
import './App.css'


const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route path="/stocktwits" component={Stocktwits} />
          <Route path="/omegaman" component={OmegaMan} />
          <Route path="/johnbrown" component={JohnBrown} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;