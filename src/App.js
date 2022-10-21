import React from 'react';
import UserLogin from 'components/UserLogin';
import UserLists from 'components/UserLists';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLogin/>}/>
        <Route path='/lists' element={<UserLists/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
