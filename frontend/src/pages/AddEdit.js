import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation, useParams, Link} from 'react-router-dom'
import "../css/AddEdit.css"
import axios from 'axios'
import { toast } from 'react-toastify'
import Header from '../components/Header'

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  gender: "",
  salary: ""
}

const AddEdit = () => {
  const [state, setState] = useState(initialState)
  const {first_name, last_name, email, gender, salary} = state

  const navigate = useNavigate();

  const { eid } = useParams();

  useEffect(() => {
    if(eid) {
      getSingleEmployee(eid);
    }
  }, [eid])

  const getSingleEmployee = async (eid) => {
    const response = await axios.get(`https://101306676-comp3123-assignment2-backend.vercel.app/api/emp/employees/${eid}`)
    if (response.status === 200){
      setState({ ...response.data })
    }
  }

  const addEmployee = async (data) => {
    const response = await axios.post(`https://101306676-comp3123-assignment2-backend.vercel.app/api/emp/employees`, data);
    if (response.status === 201){
      toast.success(response.data)
    }
  }

  const updateEmployee = async (data, eid) => {
    const response = await axios.put(`https://101306676-comp3123-assignment2-backend.vercel.app/api/emp/employees/${eid}`, data);
    if (response.status === 200){
      toast.success(response.data)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!first_name || !last_name || !email | !gender || !salary){
      toast.error("Please input information for all fields")
    } else if ( gender !== "Female" && gender !=="Male" && gender !== "Other"){
      toast.error("Please enter 'Female', 'Male' or 'Other' for gender")
    } else {
      if (!eid){
        addEmployee(state)
        toast.success("Employee added successfully")
      } else {
        updateEmployee(state, eid)
        toast.success("Employee updated successfully")
      }
      
      setTimeout(() => navigate("/employees"), 500)
      
    }
  }

  const handleInputChange = (e) => {
    let {name, value} = e.target
    setState({...state, [name]: value})
  }


  return (
    <div>
      <Header />
      <div style={{marginTop: "100px"}}>
        
        <form style={{margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center",}}
          onSubmit={handleSubmit}
        >
          <label htmlFor='first_name'>First Name</label>
          <input 
            type="text" 
            id="first_name" 
            name="first_name" 
            placeholder='Enter employee first name' 
            onChange={handleInputChange} 
            value={first_name} />

          <label htmlFor='last_name'>Last Name</label>
          <input 
            type="text" 
            id="last_name" 
            name="last_name" 
            placeholder='Enter employee last name' 
            onChange={handleInputChange} 
            value={last_name} />

          <label htmlFor='email'>Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder='Enter employee email' 
            onChange={handleInputChange} 
            value={email} />

          <label htmlFor='gender'>Gender</label>
          <input 
            type="text" 
            id="gender" 
            name="gender" 
            placeholder='Enter employee gender' 
            onChange={handleInputChange} 
            value={gender} />

          <label htmlFor='salary'>Salary</label>
          <input 
            type="number" 
            id="salary" 
            name="salary" 
            placeholder='Enter employee salary' 
            onChange={handleInputChange} 
            value={salary} />

            <input type="submit" value={eid ? "UPDATE" : "ADD"} />
            <Link to="/employees">
                <p>Back to homepage</p>
            </Link>
        </form>
    </div>
    </div>
    
  )
}

export default AddEdit