import React, { useEffect, useState } from 'react'
import { Link, useLocation} from 'react-router-dom'
import "../css/Home.css"
import axios from 'axios'
import { toast } from 'react-toastify'
import Header from '../components/Header'

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    getEmployees();
  }, [])

  const getEmployees = async () => {
    const response = await axios.get(`http://localhost:8081/api/emp/employees`);
    if (response.status === 200){
      setData(response.data);
    }
  }
  
  const onDeleteEmployee = async (eid) => {
    if (window.confirm("Are you sure you want to delete this employee?")){
      const response = await axios.delete(`http://localhost:8081/api/emp/employees?eid=${eid}`)
      if (response.status === 204){
        toast.success("Employee deleted successfully");
        getEmployees();
      }
    }
  }

  console.log("data=>", data)

  return (
    <div>
      <Header />
          <div style={{marginTop: "150px"}}>
          <Link to={`/employees/add`}>
            <button className='btn btn-add'>Add New Employee</button>
        </Link>
        
        <table className='styled-table'>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                  <td>{item.salary}</td>
                  <td>
                  <Link to={`/employees/view/${item._id}`}>
                      <button className='btn btn-view'>View</button>
                    </Link>
                    <Link to={`/employees/update/${item._id}`}>
                      <button className='btn btn-edit'>Edit</button>
                    </Link>
                    <button className='btn btn-delete' onClick={() => onDeleteEmployee(item._id)}>Delete</button>

                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
    </div>
    </div>
    

  )
}

export default Home