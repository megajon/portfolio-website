import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing';
import './App.css'


const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;