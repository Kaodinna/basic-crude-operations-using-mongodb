import "./deletemovie.css"
import UserNav from "../usernavbar/usernavbar";
import Footer from "../footer/footer"
import axios from 'axios'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DeleteMovie = () => {


  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  



  const deletemovie = (e) => {
    e.preventDefault()
    axios.delete(`http://localhost:3030/movies/deletemovie/${title}`, {
        method:'DELETE' 
      })
      .then(
        (response) => {
            navigate('/products')
            toast.success(response.data.message)
          
          console.log(response)
        },
        (error) => {
          toast.error(error.response.data.Error)
          toast.error(error.response.data.message)
          console.log(error)

        }
      )
    
  }



  return (
    <>
     <UserNav/>
    
      <div className='driverReg-container'>
        <div className='driverReg-info'>
          {/* <h2 className='driver-h2'>Add Products</h2> */}
        </div>

        <form action=''>
          <div className='driver-container'>
            <div class='driver-group'>
              <label className='driver-in' for='title'>
                 Enter Name Of Movie You Want To Delete
              </label>
              <div className='driver-inpu'>
                <input
                  className='driver-input'
                  type='text'
                  id='title'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
            </div>


            <div class='driver-submit'>
              <button className='driver-btn' onClick={deletemovie}type='submit'>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
   <Footer/>
    </>
  )
}

export default DeleteMovie
