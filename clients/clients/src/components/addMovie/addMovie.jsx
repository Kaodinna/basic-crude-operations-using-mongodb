import "./addMovie.css"
// import Headers from "../navbar/navbar"
import UserNav from "../usernavbar/usernavbar";
import Footer from "../footer/footer"
import axios from 'axios'
import { useState} from "react"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddMovie = () => {
 
  // const inputRef = useRef()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [ description, setDescription] = useState('')
  const [price, setPrice] = useState('')
//   const [confirm_password, setConfirm_Password] = useState('')

// useCustomFetchHook(image)
  const addMovie = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3030/movies/addmovie', {
        title,
        image,
        price,
        description
      
      })
      .then(
        (response) => {
            navigate('/movies')
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
          <h2 className='driver-h2'>Add Movies</h2>
        </div>

        <form method="POST"  enctype="multipart/form-data">
          <div className='driver-container'>
            <div class='driver-group'>
              <label className='driver-in' for='title'>
                Name
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


            <div class='driver-group'>
              <label className='driver-in' for=' description'>
              Description
              </label>
              <div className='driver-inpu'>
                <input
                  className='driver-input'
                  type='text'
                  id=' description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
            </div>



            <div class='driver-group'>
              <label className='driver-in' for='price'>
                Price
              </label>
              <div className='driver-inpu'>
                <input
                  className='driver-input'
                  type='text'
                  id='price'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              </div>


            <div class='driver-group'>
              <label className='driver-in' for='image'>
                Image
              </label>
              <div className='driver-inpu'>
                <input
                  className='driver-input'
                  type='text'
                  id='input'
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              </div>

            <div class='driver-submit'>
              <button className='driver-btn' onClick={addMovie}type='submit'>
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

export default AddMovie
