import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation, useParams, Link} from 'react-router-dom'
import "../css/View.css"
import axios from 'axios'
import { toast } from 'react-toastify'
import Header from '../components/Header'

const View = () => {
  const [employee, setEmployee] = useState([])

  const { eid } = useParams();

  useEffect(() => {
    if(eid) {
      getSingleEmployee(eid);
    }
  }, [eid])

  

  const getSingleEmployee = async (eid) => {
    const response = await axios.get(`https://101306676-comp3123-assignment2-backend.vercel.app/api/emp/employees/${eid}`)
    if (response.status === 200){
      setEmployee({ ...response.data })
    }
  }

  return (
    <div>
      <Header />
      <div style={{marginTop: "150px"}}>
        <div className='card'>
          <div className='card-header'>
            <h3>Employee Details</h3>
          </div>
          <div className='container'>
            <strong>Full Name: </strong>
            <strong>{employee.first_name} {employee.last_name}</strong>
            <br></br>
            <br></br>
            <strong>Email: </strong>
            <strong>{employee.email}</strong>
            <br></br>
            <br></br>
            <strong>Gender: </strong>
            <strong>{employee.gender}</strong>
            <br></br>
            <br></br>
            <strong>Salary: </strong>
            <strong>${employee.salary}</strong>
            <br></br>
            <br></br>
            <Link to="/employees">
                <p>Back to homepage</p>
            </Link>
          </div>
        </div>
    </div>

    </div>
    
  )
}

export default View