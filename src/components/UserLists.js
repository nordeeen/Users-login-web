import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from 'store/reducer';
import { getDetail } from 'store/reducer';
import Loading from './Loading';

// list menus
const menus = [
  {
    title: 'Number',
  },
  {
    title: 'Full Name',
  },
  {
    title: 'Email',
  },
  {
    title: 'Avatar',
  },
  {
    title: 'Action',
  },
];

// component DataList
const DataList = (props) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {props.id}
      </th>
      <td className="py-4 px-6">{props.name}</td>
      <td className="py-4 px-6">{props.email}</td>
      <td className="py-4 px-6">{props.avatar}</td>
      <td className="py-4 px-6">
        <button  onClick={props.onClick}
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline" >
          View Detail
        </button>
      </td>
    </tr>
  );
};

const UserLists = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { lists, loader } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getList(1));
  }, [dispatch]);

  // Click Button Navbar
  const handleBtn = () => {
     sessionStorage.clear()
    navigate('/');
  };

  const handleDetail = async (id) => {
    await dispatch(getDetail(id));
    await navigate('/details');
  }

  
  return (
    <>
      {/* Navbar */}
      <div className="bg-[red] w-auto py-5 px-4 flex justify-center items-center">
        <div className="w-[800px] h-auto flex justify-between items-center">
          <p className="text-2xl text-white font-extrabold uppercase">User Lists</p>
          <button
            onClick={handleBtn}
            type="submit"
            className=" text-white uppercase px-6 py-2 rounded-full 
            text-center font-bold bg-blue-500 hover:bg-blue-700" >
            Logout
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center w-full h-[550px] py-10 bg-gray-400 ">
        {/* Table Lists */}
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          {loader && <Loading />}
          <table className="w-auto text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-[red] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {menus.map((item, index) => (
                  <th key={index} scope="col" className="py-3 px-6 text-left text-white">
                    {item.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {lists.map((user) => {
                return (
                  <DataList
                    key={user.id}
                    id={user.id}
                    name={`${user.first_name} ${user.last_name}`}
                    email={user.email}
                    avatar={user.avatar}
                    onClick={handleDetail.bind(null, user.id)}
                  />
                );
              })}

              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td></td>
                <td></td>
                <td></td>
                <td className="py-4 px-6">
                  <button
                    className=" text-white uppercase px-6 py-2 rounded-full text-center font-bold bg-blue-500 hover:bg-blue-700"
                    onClick={() => dispatch(getList(1))} >
                    page 1
                  </button>
                </td>
                <td className="py-4 px-6">
                  <button
                    className=" text-white uppercase px-6 py-2 rounded-full text-center font-bold bg-blue-500 hover:bg-blue-700"
                    onClick={() => dispatch(getList(2))} >
                    page 2
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserLists;
