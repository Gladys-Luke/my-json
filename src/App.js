import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



const App = () => {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div className=' flex flex-col justify-center items-center gap-10 p-100'>
    <h1 className='text-5xl pt-20'>USERS</h1>
      {users.length > 0 && (
      <div className=' w-100 flex flex-wrap gap-20 justify-center text-center items-center'>
          {users.map(user => (
            <div className='bg-cyan-400  w-50 p-5 rounded-md shadow-2xl hover:bg-green-200'>
            <h2>{user.id}. </h2>
             <p className="card-text fs-5 fw-light"><strong>Name: </strong>{user.name}</p>
             <p class="card-text fs-5 fw-light"><strong>Email: </strong>{user.email}</p>
            <p class="card-text fs-5 fw-light"><strong>phone: </strong>{user.phone}</p>
             <p class="card-text fs-5 fw-light"><strong>website: </strong>{user.website}</p>
            </div>
          ))}
          </div>
      )}
    </div>
  );
}

export default App;