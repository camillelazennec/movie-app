import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LikePage from './pages/LikePage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coups-de-coeurs' element={<LikePage />}/>
        <Route path='/*' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
