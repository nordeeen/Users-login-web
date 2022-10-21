import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


// CardUsers component
const CardUsers = (props) => {
    return (
      <div className="bg-white w-[250px] h-[250px] rounded-lg border border-gray-200 shadow-md
       dark:bg-gray-800 dark:border-gray-700 px-3 py-3">
        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-3 w-20 h-20 rounded-full shadow-lg object-contain"
            src={props.avatar}
            alt={props.avatar}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.name}</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">{props.email}</span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <Link
              to="/lists"
              className='w-[100px] h-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2
               rounded-full uppercase text-center outline-none' >
              Back
            </Link>
          </div>
        </div>
      </div>
    );
}



const UserDetails = () => {
    const [card, setCards] = useState([]);

    // get api
    const fetchApi = () => {
        axios.get('https://reqres.in/api/users?page=2')
        .then((res) => {
            setCards(res.data.data);
            console.log(res.data.data);
        })
        .catch(err => console.error("Message Error", err));
    }

    useEffect(() => {
        fetchApi();
    }, [])

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen bg-[pink]">
        <div className="grid grid-cols-3 gap-4 px-6 py-6">
          {card.map((item) => {
            return (
              <CardUsers
                key={item.id}
                avatar={item.avatar}
                alt={item.avatar}
                name={`${item.first_name} ${item.last_name}`}
                email={item.email}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default UserDetails