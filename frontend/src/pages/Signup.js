import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation, useParams, Link} from 'react-router-dom'
import "../css/Signup.css"
import axios from 'axios'
import { toast } from 'react-toastify'


const initialState = {
  username: "",
  password: "",
  email: ""
}

const Signup = () => {
  const [state, setState] = useState(initialState)
  const {username, password, email} = state

  const navigate = useNavigate();

  const addUser = async (data) => {
    const response = await axios.post(`https://101306676-comp3123-assignment2-backend.vercel.app/api/user/signup`, data);
    if (response.status === 201){
      toast.success("Congrats, now you can login with your username and password.")
      setTimeout(() => navigate("/"), 500)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password || !email){
      toast.error("Please input information for all fields")
    } else {
      addUser(state)
      
    }
  }

  const handleInputChange = (e) => {
    let {name, value} = e.target
    setState({...state, [name]: value})
  }

  return (
    <div className='card' style={{marginTop: "100px"}}>
        <form style={{margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center",}}
          onSubmit={handleSubmit}
        >
          <h3>Registration</h3>
          <p>Please enter your email, username and password to complete the registration</p>
          <label htmlFor='email'>Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder='Enter your email' 
            onChange={handleInputChange} 
            value={email} />

          <label htmlFor='username'>Username</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder='Enter username' 
            onChange={handleInputChange} 
            value={username} />

          <label htmlFor='password'>Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder='Enter password' 
            onChange={handleInputChange} 
            value={password} />

            <input type="submit" value="SUBMIT" />
            <Link to="/">
                <p>Back to Log In page</p>
            </Link>
        </form>
    </div>
  )
}

export default Signup