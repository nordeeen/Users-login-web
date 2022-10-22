import React, { useEffect } from 'react';
import UserLogin from 'components/UserLogin';
import UserLists from 'components/UserLists';
import UserDetails from 'components/UserDetails';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/lists" element={<UserLists />} />
        <Route path="/details" element={<UserDetails />} />
      </Routes>
  );
}

export default App;
