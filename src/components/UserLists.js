import React, {useState, useEffect} from 'react';
import axios from 'axios';


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
         <a href="#/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
           View Detail
         </a>
       </td>
     </tr>
   );
 };


const UserLists = () => {
  const [users, setUsers] = useState([]);
//   const [data, setDatas] = useState([]);

// get api 1
  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=1')
    .then(res => {
        setUsers(res.data.data);
        console.log(res.data.data);
    })
    .catch((err) => console.error('Message Error', err));
  }, [])

  // get api 2
//   useEffect(() => {
//     axios
//       .get('https://reqres.in/api/users?page=2')
//       .then((res) => {
//         setDatas(res.data.data);
//         console.log(res.data.data);
//       })
//       .catch((err) => console.error('Message Error', err));
//   }, [])


  return (
    <>
      <div className='flex justify-center items-center w-full h-screen bg-pink-300'>
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
              {users.map((user) => {
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