import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getList } from 'store/reducer';
import { getDetail } from 'store/reducer';
import Loading from './Loading';
import Navbar from './Navbar';
import ButtonPagination from './ButtonPagination';
import iconView from 'assets/view-detail.png';

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
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {props.id}
      </th>
      <td className="py-4 px-6">{props.name}</td>
      <td className="py-4 px-6">{props.email}</td>
      <td className="py-4 px-6">{props.avatar}</td>
      <td className="py-4 px-6">
        <button  onClick={props.onClick}>
          <img src={iconView} alt="icon-view" className='w-[24px] h-[24px] object-contain'/>
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


// handle click detail
  const handleDetail = async (id) => {
    await dispatch(getDetail(id));
    await navigate('/details');
  }

  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div
        className="flex justify-center items-center w-full h-[550px] py-10 bg-gray-300">
        {/* Wrapper Table */}
        <div className="w-auto h-auto py-6 px-6">
          <ButtonPagination/>
          {/* Table Lists */}
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            {loader && <Loading />}
            <table className="w-auto text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-blue-700 dark:bg-gray-700 dark:text-gray-400">
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLists;
