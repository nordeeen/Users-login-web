import React from 'react';
import UserLogin from 'components/UserLogin';
import UserLists from 'components/UserLists';
import UserDetails from 'components/UserDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLogin/>}/>
        <Route path='/lists' element={<UserLists/>}/>
        <Route path='/details' element={<UserDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
