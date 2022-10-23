import React from 'react';
import { NavLink } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import Navbar from './Navbar';

// CardDetail component
const CardDetail = (props) => {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg w-[300px] h-auto object-cover"
        src={props.avatar}
        alt={props.name}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          {props.name}
        </h5>
        <h2 className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400 text-center">
          {props.email}
        </h2>
      </div>
      <div className='flex justify-center items-center mb-3'>
      <NavLink to="/lists" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full uppercase">
        back
      </NavLink>
      </div>
    </div>
  );
}


const UserDetails = () => {
  const { details } = useSelector((state) => state);

  return (
    <>
      <Navbar title="user detail" />
      <div className="flex justify-center items-center w-full h-screen bg-gray-300">
        <CardDetail
          key={details.id}
          avatar={details.avatar}
          alt={details.avatar}
          name={`${details.first_name} ${details.last_name}`}
          email={details.email}
        />
      </div>
    </>
  );
};

export default UserDetails;
