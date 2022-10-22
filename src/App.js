import React, { useEffect } from 'react';
import UserLogin from 'components/UserLogin';
import UserLists from 'components/UserLists';
import UserDetails from 'components/UserDetails';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const navigate = useNavigate();


  return (
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/lists" element={<UserLists />} />
        <Route path="/details" element={<UserDetails />} />
      </Routes>
  );
}

export default App;
