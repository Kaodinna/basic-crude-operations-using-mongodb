import "./editmovie.css"
// import Headers from "../navbar/navbar"
import UserNav from "../usernavbar/usernavbar";
import Footer from "../footer/footer"
import axios from 'axios'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const EditMovie = () => {


  const navigate = useNavigate()
  const [product_name, setProductsName] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')
  const [ description, setDescription] = useState('')
  const [price, setPrice] = useState('')


  const editmovie = (e) => {
    e.preventDefault()
    axios.put('http://localhost:3030/products/updateproducts', {
        product_name,
        image,
        price,
        description
      
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
          <h2 className='driver-h2'>Edit Movies</h2>
        </div>

        <form action=''>
          <div className='driver-container'>
            <div class='driver-group'>
              <label className='driver-in' for='product_name'>
                Name
              </label>
              <div className='driver-inpu'>
                <input
                  className='driver-input'
                  type='text'
                  id='product_name'
                  value={product_name}
                  onChange={(e) => setProductsName(e.target.value)}
                  required
                />
              </div>
            </div>


            <div class='driver-group'>
              <label className='driver-in' for='category'>
              Category
              </label>
              <div className='driver-inpu'>
                <input
                  className='driver-input'
                  type='tel'
                  id='category'
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
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
                  className='product-input'
                  type='file'
                  id='image'
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                />
              </div>
              </div>

            <div class='driver-submit'>
              <button className='driver-btn' onClick={editmovie}type='submit'>
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

export default EditMovie
