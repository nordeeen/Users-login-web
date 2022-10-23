import React from 'react';
import UserLogin from 'components/UserLogin';
import UserLists from 'components/UserLists';
import UserDetails from 'components/UserDetails';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function App() {
  const {login} = useSelector(state => state)


  return (
    <Routes>
      <Route path="/" element={<UserLogin />} />
      <Route path="/lists" element={!login ? <Navigate to="/" /> : <UserLists />} />
      <Route path="/details" element={!login ? <Navigate to="/" /> : <UserDetails />} />
    </Routes>
  );
}

export default App;
