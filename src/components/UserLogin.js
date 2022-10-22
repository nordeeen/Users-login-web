import React, { useEffect } from 'react';
import userLogin from 'assets/user-login.png';
import eMail from 'assets/email.png';
import padLock from 'assets/padlock.png';
import { useDispatch, useSelector } from 'react-redux';
import { login, setReducer } from 'store/reducer';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, password, token } = useSelector((state) => state);
  useEffect(() => {
    const logged = sessionStorage.getItem('isLogged');
    const tokenSession = sessionStorage.getItem('token');
    if (logged && tokenSession === token) {
      navigate('/lists');
    }
  }, []);

  const handlerLogin = async (e) => {
    e.preventDefault();
    await dispatch(login());
    await navigate('/lists');
  };

  return (
    <>
      <section className="bg-gray-400  w-full h-screen flex justify-center items-center">
        <div className="w-auto h-auto flex justify-center">
          {/* Hero Image */}
          <img
            src={userLogin}
            alt="user-login"
            className="w-[750px] h-[500px] object-cover rounded-l-[10px]"
          />
          {/* Form */}
          <form className="w-[500px] h-auto bg-[#fe4a49] flex flex-col justify-center items-center space-y-10 rounded-r-[10px]">
            <h2 className="text-4xl font-semibold text-white text-center">User Login</h2>
            {/* Email */}
            <div className="bg-white w-auto h-[20px] px-4 py-6 rounded-full flex items-center">
              <img src={eMail} alt="icon-email" className="w-[24px] h-[24px] object-contain mr-3" />
              <input
                type="email"
                placeholder="Email"
                required
                className="outline-none opacity-4"
                onChange={(e) => {
                  dispatch(setReducer({ key: 'email', value: e.target.value }));
                }}
              />
            </div>
            {/* Password */}
            <div className="bg-white w-auto h-[20px] px-4 py-6 rounded-full flex items-center">
              <img
                src={padLock}
                alt="icon-password"
                className="w-[24px] h-[24px] object-contain mr-3"
              />
              <input
                type="password"
                placeholder="Password"
                minLength={15}
                required
                className="outline-none opacity-4"
                onChange={(e) => {
                  dispatch(setReducer({ key: 'password', value: e.target.value }));
                }}
              />
            </div>
            {/* Button */}
            <button
              onClick={handlerLogin}
              type="submit"
              className="w-[225px] h-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-full uppercase"
            >
              login
            </button>
            {/* Text Forget */}
            <a href="#/" className="text-white text-sm font-normal text-center">
              Forgot Password?
            </a>
          </form>
        </div>
      </section>
    </>
  );
};

export default UserLogin;
