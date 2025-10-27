import React, { useEffect } from 'react'
import axios from 'axios';


export const Home = () => {

    const[user,setUser]=React.useState([]);

useEffect(() => {
  const fetchdata = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getuser");
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  fetchdata();
}, []);


  return (
 <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Name</th>
      <th scope="col">Roll number</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {
    user.map( (usr, index) => (
    <tr>
      <th scope="row">{index+1}</th>
      <td>{usr.name}</td>
      <td>{usr.rollNo}</td>
      <td>{usr.email}</td>
<td>
      <button className="btn bg-primary mb-2 mx-2">Edit</button>
      <button className="btn bg-danger mb-2 mx-2">Delete</button>
      <button className="btn bg-success mb-2 mx-2">View</button>
</td>
    </tr>
    ))
}
  </tbody>
</table>
  )
}
