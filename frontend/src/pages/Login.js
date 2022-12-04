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

const Login = () => {
  const [state, setState] = useState(initialState)
  const {username, password} = state
  const navigate = useNavigate()

  const authenUser = async (data) => {
    try {
      const response = await axios.post(`https://101306676-comp3123-assignment2-backend.vercel.app/api/user/login`, data);
      setTimeout(() => navigate("/employees"), 500)
    } catch (error) {
      toast.error("Invalid username or password")
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password ){
      toast.error("Please input username and password")
    } else {
      authenUser(state)
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
          <h1> Welcome to Employment Management App</h1>
          <p>Please log in with your username and password</p>
          <br>
          </br>
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

            <input type="submit" value="LOGIN" />
            <p>Don't have an account? &nbsp;   
            <Link to="/signup">
                Sign up
            </Link>
            </p>
            
      </form>
        
    </div>
  )
}

export default Login