import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

  // Click Button Navbar
  const handleBtn = () => {
    sessionStorage.clear();
    navigate('/');

  };
  return (
    <>
      <div className="bg-[#fe4a49] w-auto py-5 px-4 flex justify-center items-center">
        <div className="w-[800px] h-auto flex justify-between items-center">
          <p className="text-2xl text-white font-extrabold uppercase">User Lists</p>
          <button
            onClick={handleBtn}
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full uppercase"
          >
            log out
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar