import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import Success from './pages/Success';
import Failed from './pages/Failed';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Product}></Route>
        <Route path='/success' Component={Success}></Route>
        <Route path='/failed' Component={Failed}></Route>
      </Routes>
    </Router>
  )
};

export default App;