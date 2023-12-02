import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router';
import axios from 'axios'

function UpdateUser() {
  const {id} = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  useEffect(()=> {
    axios.get('http://localhost:5050/getUser/'+id)
    .then(result => {
      console.log(result.data);
      setName(result.data.name);
      setEmail(result.data.email);
      setAge(result.data.age);
    })
    .catch(err => console.log(err));
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios.put("http://localhost:5050/updateUser/"+id, {name, email, age})
    .then(result => {
      console.log(result);
      navigate("/users");
    })
    .catch(err => console.log(err)); 
  }
  
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
      <form onSubmit={Update}>
        <h2>Update User</h2>
        <div className='mb-2'>
          <label htmlFor=''>Name</label>
          <input type='text' placeholder='Enter Name' className='form-control'
          value={name} onChange={(e) => setName(e.target.value)}>
          </input>
        </div>

        <div className='mb-2'>
          <label htmlFor=''>Email</label>
          <input type='email' placeholder='Enter Email' className='form-control'
          value={email} onChange={(e) => setEmail(e.target.value)}>
          </input>
        </div>

        <div className='mb-2'>
          <label htmlFor=''>Age</label>
          <input type='text' placeholder='Enter Age' className='form-control'
          value={age} onChange={(e) => setAge(e.target.value)}>
          </input>
        </div>
        <button className='btn btn-success'>Update</button>
      </form>
    </div>
  </div>
  )
}

export default UpdateUser