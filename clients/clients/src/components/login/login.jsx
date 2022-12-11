import "./login.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import axios from 'axios'
import { Link } from "react-router-dom"
import Header from "../navbar/navbar"
import Footer from "../footer/footer"

const UserLogin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  //  const [error, setErrorMsg] = useState("");
 
  const login = (e) => {
    e.preventDefault()
     axios.post('http://localhost:3030/users/login', { email, password }).then(
      (response) => {  
         navigate('/movies')
         toast.success(response.data.message)

      },
      (error) => {
        toast.error(error.response.data.message)
        toast.error(error.response.data.Error)
        console.log(error)

      }
      
    )
  }

  return (
    <>
    <Header/>
    <div></div>
      <div className='driverReg-container'>
        <div className='driverReg-info'>
          <h2 className='driver-h2'>Login To View Movies</h2>
        </div>

        <form action=''>
          <div className='driver-container'>
            <div class='driver-group'>
              <label className='driver-in' for='email'>
                Email
              </label>
              <div className='driver-inpu'>
                <input
                  className='driver-input'
                  type='text'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

              </div>
            </div>

            <div class='driver-group'>
              <label className='driver-in' for='password'>
                Password
              </label>
              <div className='driver-inpu'>
                <input
                  className='driver-input'
                  type='password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div class='user-submit'>
              <button className='driver-btn' onClick={login} type='submit'>
                Login
              </button>
              <Link className='log-btn' to='/users/register'>
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  )
}

export default UserLogin
