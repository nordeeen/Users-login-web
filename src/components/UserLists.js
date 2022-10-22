import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getApi } from 'store/reducer';


// list menus
const menus = [
    {
    title: "Number",
    },
    {
    title: "Full Name"
    },
    {
    title: "Email"
    },
    {
    title: "Avatar"
    },
    {
    title: "Action"
    }
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
         <NavLink
           to="/details"
           className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          View Detail
         </NavLink>
       </td>
     </tr>
   );
 };


const UserLists = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { lists } = useSelector(state => state)

  useEffect(() => {
    dispatch(getApi())
  }, [dispatch])

// Click Button Navbar
  const handleBtn = () => {
    navigate('/')
  }

  return (
    <>
      {/* Navbar */}
      <div className="bg-[red] w-auto py-5 px-4 flex justify-center items-center">
        <div className="w-[800px] h-auto flex justify-between items-center">
          <p className="text-2xl text-white font-extrabold uppercase">User Lists</p>
          <button onClick={handleBtn} type="submit" className="bg-white text-white uppercase px-6 py-2 rounded-full text-center font-bold bg-blue-500 hover:bg-blue-700">
            go home
          </button>
        </div>
      </div>

      {/* Table Lists */}
      <div className="flex justify-center items-center w-full h-[550px] py-10 bg-pink-300">
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-auto text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-blue-500 dark:bg-gray-700 dark:text-gray-400">
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
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserLists