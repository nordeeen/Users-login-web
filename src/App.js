import React, { useEffect } from 'react';
import UserLogin from 'components/UserLogin';
import UserLists from 'components/UserLists';
import UserDetails from 'components/UserDetails';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state);
  useEffect(() => {
    const logged = sessionStorage.getItem('isLogged');
    const tokenSession = sessionStorage.getItem('token');
    if (logged && tokenSession === token) {
      navigate('/lists');
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/lists" element={<UserLists />} />
        <Route path="/details" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
